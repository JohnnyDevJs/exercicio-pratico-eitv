import React from 'react'
import { cn } from '../lib/utils'

type MovieItemProps = {
  poster: string
  title: string
  selected: boolean
}

export const MovieItem = React.memo(function MovieItem({
  poster,
  title,
  selected,
}: MovieItemProps) {
  return (
    <div className="movie-item">
      <div
        className={cn(
          'movie-item__poster',
          selected && 'movie-item__poster--selected'
        )}
      >
        <img
          src={poster}
          alt={title}
          loading="lazy"
          decoding="async"
          className="movie-item__img"
        />
      </div>

      <p
        className={cn(
          'movie-item__title',
          selected && 'movie-item__title--selected'
        )}
      >
        {title}
      </p>
    </div>
  )
})
