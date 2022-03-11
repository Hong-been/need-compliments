import {call, getContext, put} from "redux-saga/effects";
import {dataActionCreators, DataActionInstance, DataActionType} from "../actions";
import {DataSagaStatus, TaskDocument} from "../types"; 
import {Repository, CreateDocumentData} from "utils/firebase";

export function* createTask(action: DataActionInstance<DataActionType.CREATE_TASK>) {
  const payload = action.payload  
  const sagaKey = payload.key
  const sagaDataActionType = DataActionType.CREATE_TASK

  const repository: Repository = yield getContext("repository");

  yield put(
    dataActionCreators[DataActionType.SET_DATA_STATUS]({
      type: sagaDataActionType,
      key: sagaKey,
      status: DataSagaStatus.LOADING
    })
  );

  try {
<<<<<<< HEAD
=======
    const document = {
      ...payload.data,
      author: payload.author,
      compliments: [],
      updatedAt: new Date().getTime(),
      createdAt: new Date().getTime(),
    }

>>>>>>> 40ec20ade9e671721c3007aa2de63479ff0003d8
    const response: CreateDocumentData<TaskDocument> = yield call(
      [repository, repository.createDocument],
      {
        path: "tasks",
<<<<<<< HEAD
        data: {
          ...payload.data,
          author: payload.author,
          compliments: [],
          updatedAt: new Date().getTime(),
          createdAt: new Date().getTime(),
        }
=======
        data: document
>>>>>>> 40ec20ade9e671721c3007aa2de63479ff0003d8
      }
    );

    yield put(
      dataActionCreators[DataActionType.SET_DATA_DATA]({
        type: sagaDataActionType,
        key: sagaKey,
        data: {
          id: response.id,
<<<<<<< HEAD
=======
          ...document
>>>>>>> 40ec20ade9e671721c3007aa2de63479ff0003d8
        }
      })
    ); 

    yield put(
      dataActionCreators[DataActionType.SET_DATA_STATUS]({
        type: sagaDataActionType,
        key: sagaKey,
        status: DataSagaStatus.SUCCEEDED
      })
    );
  } catch (error) {
    console.error(error);

    yield put(
      dataActionCreators[DataActionType.SET_DATA_STATUS]({
        type: sagaDataActionType,
        key: sagaKey,
        status: DataSagaStatus.FAILED
      })
    );
  }
}
