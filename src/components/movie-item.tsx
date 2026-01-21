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
    <div className="min-w-50">
     
      <div
        className={cn(
          'h-72 rounded-2xl overflow-hidden transition-all duration-200',
          selected
            ? 'scale-110 ring-4 ring-white'
            : 'scale-100 bg-gray-700'
        )}
      >
        <img
          src={poster}
          alt={title}
          loading="lazy"
          decoding="async"
          className={cn("size-full transition-all duration-500  object-cover", selected ? 'p-2 rounded-2xl' : '')}
        />
      </div>

      <p
        className={cn(
          'mt-6 text-sm font-semibold text-white transition-opacity truncate whitespace-nowrap overflow-hidden',
          selected ? 'opacity-100' : 'opacity-70'
        )}
      >
        {title}
      </p>
    </div>
  )
})
