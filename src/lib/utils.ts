import type { ClassValue } from 'clsx'
import clsx from 'clsx'

// Sem tailwind-merge: não há mais classes utilitárias para resolver conflito.
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
