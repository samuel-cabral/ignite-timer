export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CYCLE_CURRENT_AS_FINISHED = 'MARK_CYCLE_CURRENT_AS_FINISHED',
}

export function cyclesReducer(state: CyclesState, action: any): CyclesState {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }

    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === action.payload.activeCycleId) {
            return {
              ...cycle,
              interruptedDate: new Date(),
            }
          }
          return cycle
        }),
        activeCycleId: null,
      }

    case ActionTypes.MARK_CYCLE_CURRENT_AS_FINISHED:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === action.payload.activeCycleId) {
            return {
              ...cycle,
              finishedDate: new Date(),
            }
          }
          return cycle
        }),
        activeCycleId: null,
      }

    default:
      return state
  }
}
