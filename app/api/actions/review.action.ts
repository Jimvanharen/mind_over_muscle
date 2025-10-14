"use server"

type Review = {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
  profile_photo_url: string
}

type ReviewsResponse = {
  success: boolean
  reviews?: Review[]
  error?: string
}

export async function getGoogleReviews(reviewPlaceId: string): Promise<ReviewsResponse> {
  if (!reviewPlaceId) {
    return {
      success: false,
      error: "reviewPlaceId is required",
    }
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  if (!apiKey) {
    return {
      success: false,
      error: "Google Maps API key is not configured",
    }
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${reviewPlaceId}&key=${apiKey}&fields=reviews`

    const response = await fetch(url)
    const data = await response.json()

    if (data.status !== "OK" || !data.result?.reviews) {
      return {
        success: false,
        error: `Google API error: ${data.status} - ${data.error_message || "Unknown error"}`,
      }
    }

    return {
      success: true,
      reviews: data.result.reviews,
    }
  } catch (error) {
    console.error("Error fetching Google Reviews:", error)
    return {
      success: false,
      error: "Failed to fetch reviews",
    }
  }
}
