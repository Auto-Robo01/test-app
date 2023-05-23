import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

interface Props {
    initialRating: number
    setStarRating : (rate: number) => void
}

function StarRating({setStarRating, initialRating}: Props) {

  // Catch Rating value
  const handleRating = (rate: number) => {
    setStarRating(rate)

    // other logic
  }

  return (
    <div className='App'>
      <Rating
        onClick={handleRating} initialValue={initialRating}
    ></Rating>
    </div>
  )
}

export default StarRating