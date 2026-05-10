import { NextRequest, NextResponse } from "next/server"

import { getGoogleReviews } from "@/app/api/actions/review.action"

function extractPlaceId(value: string): string | null {
  const patterns = [
    /place_id:(ChI[a-zA-Z0-9_-]+)/,
    /query_place_id=(ChI[a-zA-Z0-9_-]+)/,
    /!1s(ChI[a-zA-Z0-9_-]+)/,
    /(ChI[a-zA-Z0-9_-]{10,})/,
  ]

  for (const pattern of patterns) {
    const match = value.match(pattern)
    if (match?.[1]) {
      return match[1]
    }
  }

  return null
}

async function resolvePlaceIdFromUrl(rawUrl: string): Promise<string | null> {
  try {
    const direct = extractPlaceId(rawUrl)
    if (direct) {
      return direct
    }

    const response = await fetch(rawUrl, {
      method: "GET",
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      cache: "no-store",
    })

    const finalUrl = response.url
    const fromFinal = extractPlaceId(finalUrl)
    if (fromFinal) {
      return fromFinal
    }

    const body = await response.text()
    return extractPlaceId(body)
  } catch {
    return null
  }
}

async function resolvePlaceIdFromText(query: string): Promise<string | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY
  if (!apiKey) {
    return null
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
      query
    )}&key=${apiKey}&language=nl&region=nl`

    const response = await fetch(url, { cache: "no-store" })
    const data = await response.json()

    if (data.status !== "OK" || !data.results?.length) {
      return null
    }

    return data.results[0]?.place_id || null
  } catch {
    return null
  }
}

export async function GET(request: NextRequest) {
  const placeIdParam = request.nextUrl.searchParams.get("placeId")
  const mapUrlParam = request.nextUrl.searchParams.get("mapUrl")
  const queryParam = request.nextUrl.searchParams.get("query")
  let placeId = placeIdParam?.trim() || ""

  if (!placeId && mapUrlParam) {
    placeId = (await resolvePlaceIdFromUrl(mapUrlParam.trim())) || ""
  }

  if (!placeId && queryParam) {
    placeId = (await resolvePlaceIdFromText(queryParam.trim())) || ""
  }

  if (!placeId) {
    return NextResponse.json(
      {
        success: false,
        error: "Kon geen placeId vinden. Gebruik placeId, Maps-link of bedrijfsnaam/adres.",
      },
      { status: 400 }
    )
  }

  const result = await getGoogleReviews(placeId)
  const status = result.success ? 200 : 400

  return NextResponse.json(result, { status })
}
