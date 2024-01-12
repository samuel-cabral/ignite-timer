import { differenceInSeconds } from 'date-fns'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Cycle } from '../..'
import { CountdownContainer, Separator } from './styles'

interface CountdownProps {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  setCycles: Dispatch<SetStateAction<Cycle[]>>
}

export function Countdown({
  activeCycle,
  activeCycleId,
  setCycles,
}: CountdownProps) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            }),
          )

          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  return (
    <CountdownContainer>
      <span>{minutesLeft}</span>
      <span>{minutesRight}</span>
      <Separator>:</Separator>
      <span>{secondsLeft}</span>
      <span>{secondsRight}</span>
    </CountdownContainer>
  )
}
