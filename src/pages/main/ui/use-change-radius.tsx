import { Dispatch, SetStateAction } from 'react'

interface IProps {
  setCurrentRadius: Dispatch<SetStateAction<number>>
  setIsCircleStroke: Dispatch<SetStateAction<boolean>>
  radius: number
}

export function useChangeRadius({
  setCurrentRadius,
  setIsCircleStroke,
  radius,
}: IProps) {
  const changeRadiusPromise = async (radius: number) =>
    new Promise<void>((resolve) =>
      setTimeout(() => {
        setCurrentRadius(radius)

        resolve()
      }, 0)
    )

  const changeRadius = {
    reduce: async (delay = 60) => {
      const step = radius / delay

      for (let i = radius; i > 0; i -= step) {
        await changeRadiusPromise(i)
      }

      setIsCircleStroke(false)
    },

    increase: async (delay = 60) => {
      const step = radius / delay

      setIsCircleStroke(true)

      for (let i = 0; i <= radius; i += step) {
        await changeRadiusPromise(i)
      }

      setIsCircleStroke(true)
    },
  }

  return changeRadius
}
