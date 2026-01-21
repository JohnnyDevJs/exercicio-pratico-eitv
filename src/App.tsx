import { useEffect, useState, useCallback } from 'react'

import { MovieRow } from './components/movie-row'
import  { CAROUSELS } from './constants'



type FocusState = {
  row: number
  col: number
}


function App() {

  const [focus, setFocus] = useState<FocusState>({
    row: 0,
    col: 0,
  })

const handleKeyDown = useCallback((e: KeyboardEvent) => {
    setFocus((prev) => {
      const maxRow = CAROUSELS.length - 1

      switch (e.key) {
        case 'ArrowUp': {
          const nextRow = Math.max(prev.row - 1, 0)
          return {
            row: nextRow,
            col: 0,
          }
        }

        case 'ArrowDown': {
          const nextRow = Math.min(prev.row + 1, maxRow)
          return {
            row: nextRow,
            col: 0,
          }
        }

        case 'ArrowLeft': {
          return {
            ...prev,
            col: Math.max(prev.col - 1, 0),
          }
        }

        case 'ArrowRight': {
          const maxCol =
            CAROUSELS[prev.row].items.length - 1

          return {
            ...prev,
            col: Math.min(prev.col + 1, maxCol),
          }
        }

        case 'Enter': {
          const selected =
            CAROUSELS[prev.row].items[prev.col]

          console.log('Item selecionado:', selected)
          return prev
        }

        default:
          return prev
      }
    })
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () =>
      window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])


  return (
    <div className="space-y-8 p-8 bg-[#200042] min-h-screen">
      {CAROUSELS.map((carousel, index) => (
        <MovieRow
          key={carousel.id}
          title={carousel.title}
          items={carousel.items}
          isActive={focus.row === index}
          focusedIndex={focus.row === index ? focus.col : -1}
        />
      ))}
    </div>
  )
  
}

export default App
