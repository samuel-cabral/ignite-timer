import { ReactNode } from 'react'
import { CountdownContainer, Separator } from './styles'

interface CountdownProps {
  children: ReactNode
}

export function Countdown({ children }: CountdownProps) {
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
