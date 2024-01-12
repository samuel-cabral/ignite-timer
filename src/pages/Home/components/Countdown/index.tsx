import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import { CyclesContext } from '../..'
import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const { activeCycle, activeCycleId, markCycleCurrentAsFinished } =
    useContext(CyclesContext)
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
          markCycleCurrentAsFinished()
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
  }, [activeCycle, totalSeconds, activeCycleId, markCycleCurrentAsFinished])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const [minutesLeft, minutesRight] = String(minutesAmount)
    .padStart(2, '0')
    .split('')

  const [secondsLeft, secondsRight] = String(secondsAmount)
    .padStart(2, '0')
    .split('')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutesLeft}${minutesRight}:${secondsLeft}${secondsRight}`
    }
  }, [minutesLeft, minutesRight, secondsLeft, secondsRight, activeCycle])

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
