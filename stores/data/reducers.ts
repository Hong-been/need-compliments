import {Action, handleActions} from "redux-actions";
import {ActionPayload, ActionType} from "./actions";
import {DataSagaState, UserData} from "./types";

export type State = {
  [ActionType.GET_LOGGED_IN_USER_DATA]: Record<string, 
    DataSagaState & {
      data: UserData | undefined
    }
  >,
}

const initialState: State = {
  [ActionType.GET_LOGGED_IN_USER_DATA]: {},
};

export const dataReducer = handleActions<State, any>(
  {
    [ActionType.SET_DATA_STATUS]: (previousState, action: Action<ActionPayload[ActionType.SET_DATA_STATUS]>) => {
      const key =  action.payload.key
      const dataActionType = action.payload.type

      return ({
        ...previousState,
        [dataActionType]: {
          ...previousState[dataActionType],
          [key]: {
            ...previousState[dataActionType][key],
            status: action.payload.status
          }
        }
      })
    },
    [ActionType.SET_DATA_DATA]: (previousState, action: Action<ActionPayload[ActionType.SET_DATA_DATA]>) => {
      const key =  action.payload.key
      const dataActionType = action.payload.type

      return ({
        ...previousState,
        [dataActionType]: {
          ...previousState[dataActionType],
          [key]: {
            ...previousState[dataActionType][key],
            data: action.payload.data
          }
        }
      })
    },
  },
  initialState,
);