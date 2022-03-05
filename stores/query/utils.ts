import {ActionInstance, ActionPayload, SagaActionType} from "./actions";

export const getQuerySagaKey = (
  action: ActionInstance<SagaActionType>
) => {
  return `${action.type}-${JSON.stringify(action.payload)}`
}

