"use client"

import { useEffect } from "react"
import { useState } from "react"
import { Star } from "lucide-react"

type Review = {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
}

export function GoogleReviewsSection() {
  const placeId = "ChIJd-fvUgJvxkcRAnTI-QQWHdE"
  const [reviews, setReviews] = useState<Review[]>([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const fetchReviews = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch(
        `/api/google-reviews?placeId=${encodeURIComponent(placeId)}`
      )
      const data = await response.json()

      if (!response.ok || !data.success) {
        setReviews([])
        setError(data.error || "Reviews ophalen is mislukt.")
        return
      }

      setReviews(data.reviews || [])
    } catch {
      setReviews([])
      setError("Er is iets misgegaan bij het ophalen van reviews.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  return (
    <div>
      {error ? <p className="text-red-400 text-sm mt-3 text-center">{error}</p> : null}
      {loading ? (
        <p className="text-center text-white/60 mb-8">Reviews laden...</p>
      ) : null}

      {reviews.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={`${review.author_name}-${index}`}
              className="bg-zinc-950 p-8 rounded-lg border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold">{review.author_name}</h4>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm text-white">{review.rating}</span>
                </div>
              </div>
              <p className="text-xs text-white/60 mb-4">
                {review.relative_time_description}
              </p>
              <p className="text-white/90 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      ) : !loading ? (
        <p className="text-center text-white/60">
          Geen reviews gevonden.
        </p>
      ) : null}
    </div>
  )
}
