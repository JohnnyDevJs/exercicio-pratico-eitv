import { useEffect, useState, useCallback } from 'react'

import { MovieRow } from './components/movie-row'
import  { CAROUSELS } from './constants'



type FocusState = {
  row: number
  col: number
}

// O Chromium 38 da webOS 3.0 não implementa KeyboardEvent.key (Chrome 51+),
// então a navegação precisa ser feita por keyCode.
const KEY_LEFT = 37
const KEY_UP = 38
const KEY_RIGHT = 39
const KEY_DOWN = 40
const KEY_ENTER = 13


function App() {

  const [focus, setFocus] = useState<FocusState>({
    row: 0,
    col: 0,
  })

const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.keyCode) {
      case KEY_UP:
      case KEY_DOWN:
      case KEY_LEFT:
      case KEY_RIGHT:
        e.preventDefault()
        break
    }

    setFocus((prev) => {
      const maxRow = CAROUSELS.length - 1

      switch (e.keyCode) {
        case KEY_UP: {
          const nextRow = Math.max(prev.row - 1, 0)
          return {
            row: nextRow,
            col: 0,
          }
        }

        case KEY_DOWN: {
          const nextRow = Math.min(prev.row + 1, maxRow)
          return {
            row: nextRow,
            col: 0,
          }
        }

        case KEY_LEFT: {
          return {
            ...prev,
            col: Math.max(prev.col - 1, 0),
          }
        }

        case KEY_RIGHT: {
          const maxCol =
            CAROUSELS[prev.row].items.length - 1

          return {
            ...prev,
            col: Math.min(prev.col + 1, maxCol),
          }
        }

        case KEY_ENTER: {
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
    <div className="app">
      V6
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
