import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import { cn } from '../lib/utils'
import { MovieItem } from './movie-item'

export type MovieProps = {
  id: string
  title: string
  poster: string
  focusedIndex: string
}

export type MovieRowProps = {
  id: string
  title: string
  movies: MovieProps[]
}

export type Carousel = {
  id: string
  title: string
  items: MovieProps[]
}

type Props = {
  title: string
  items: MovieProps[]
  isActive: boolean
  focusedIndex: number
}

export function MovieRow({
  title,
  items,
  isActive,
  focusedIndex,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    loop: false,
    dragFree: false,
    skipSnaps: false,
  })

  useEffect(() => {
    if (emblaApi && focusedIndex >= 0) {
      emblaApi.scrollTo(focusedIndex)
    }
  }, [focusedIndex, emblaApi])

  return (
    <section>
      <h2
        className={cn( 'mb-2 text-xl px-6 font-semibold uppercase text-start', isActive ? 'text-white' : 'text-gray-500')}
      >
        {title}
      </h2>


      <div className={cn( isActive && 'ring-4 ring-transparent rounded-xl flex' )}>
        <div
          ref={emblaRef}
          className='embla__viewport'
        >
          <div className='embla__container'>
            {items.map((movie, index) => (
              <div key={movie.id} className='embla__slide'>
                <MovieItem
                  poster={movie.poster}
                  title={movie.title}
                  selected={isActive && focusedIndex === index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
