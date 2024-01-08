/* eslint-disable no-else-return */
import {useEffect, useRef} from 'react'

const useDidUpdateEffect = (fn: () => any, inputs: any[]) => {
  const isMountingRef = useRef(false)

  useEffect(() => {
    isMountingRef.current = true
  }, [])

  useEffect(() => {
    if (!isMountingRef.current) {
      return fn()
    } else {
      isMountingRef.current = false
    }
  }, inputs)
}
export default useDidUpdateEffect
