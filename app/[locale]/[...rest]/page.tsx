import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {}

const CatchAll = () => {
  // `not-found` currently only renders when triggered by the `notFound` function
  // https://beta.nextjs.org/docs/api-reference/file-conventions/not-found
  notFound()

  return null
}
export default CatchAll
