import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BasInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;

  border-bottom: 1px solid ${({ theme }) => theme['gray-500']};
  color: ${({ theme }) => theme['gray-100']};

  font-size: 1.125rem;
  font-weight: bold;

  padding: 0 0.5rem;

  text-align: center;
  transition: border-color 0.2s;

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const TaskInput = styled(BasInput)`
  flex: 1;
`

export const MinutesAmountInput = styled(BasInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
export const StartCountdownButton = styled.button`
  width: 100%;
  height: 5rem;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};

  transition: background 0.2s;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-300']};
  }

  &:disabled {
    background: ${({ theme }) => theme['green-700']};
    color: ${({ theme }) => theme['gray-500']};
    cursor: not-allowed;
  }
`
