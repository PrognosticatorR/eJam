import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  deploymentCreateReducer,
  deploymentListReducer,
  deploymentRemoveReducer,
  setDeploymentTimeReducer,
} from "./reducers/deploymentReducer";
const reducer = combineReducers({
  deploymentCreate: deploymentCreateReducer,
  deploymentRemove: deploymentRemoveReducer,
  deploymentList: deploymentListReducer,
  deploymentTime: setDeploymentTimeReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
