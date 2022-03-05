import {useCallback, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionCreators, ActionPayload, SagaActionType} from "./actions";
import {getQuerySagaKey} from "./utils";
import {RootState} from "stores/reducers";

export const useQuery = <SagaActionTypeT extends SagaActionType>(
  actionType: SagaActionType
) => { 
  const dispatch = useDispatch() 

  const [key, setKey] = useState<string>();

  const state = useSelector((state: RootState) => key ? state.query[actionType][key] as RootState["query"][SagaActionTypeT][string] : undefined)
  
  const fetch = useCallback((payload: ActionPayload[SagaActionTypeT])=>{
    dispatch(actionCreators[actionType](payload as any))
    setKey(getQuerySagaKey({
      type: actionType,
      payload: payload as any,
    }));
  },[actionType, dispatch])  

  return ({
    key,
    fetch,
    state
  }) 
}