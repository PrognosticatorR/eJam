import {
  DEPLOYMENT_CREATE_REQUEST,
  DEPLOYMENT_CREATE_SUCCESS,
  DEPLOYMENT_CREATE_FAIL,
  DEPLOYMENT_CREATE_RESET,
  DEPLOYMENT_LIST_REQUEST,
  DEPLOYMENT_LIST_SUCCESS,
  DEPLOYMENT_LIST_FAIL,
  DEPLOYMENT_DELETE_REQUEST,
  DEPLOYMENT_DELETE_SUCCESS,
  DEPLOYMENT_DELETE_FAIL,
  DEPLOYMENT_SET_COUNTDOWN,
  DEPLOYMENT_REMOVE_COUNTDOWN,
} from "../constants/deploymentContants";

export const deploymentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case DEPLOYMENT_CREATE_REQUEST:
      return {
        loading: true,
      };
    case DEPLOYMENT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        deployment: action.payload,
      };
    case DEPLOYMENT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case DEPLOYMENT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const deploymentListReducer = (state = { deployments: [] }, action) => {
  switch (action.type) {
    case DEPLOYMENT_LIST_REQUEST:
      return {
        loading: true,
      };
    case DEPLOYMENT_LIST_SUCCESS:
      return {
        loading: false,
        deployments: action.payload,
      };
    case DEPLOYMENT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deploymentRemoveReducer = (
  state = { deployments: [] },
  action
) => {
  switch (action.type) {
    case DEPLOYMENT_DELETE_REQUEST:
      return {
        loading: true,
      };
    case DEPLOYMENT_DELETE_SUCCESS:
      return {
        loading: false,
        deployments: action.payload,
        success: true,
      };
    case DEPLOYMENT_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export const setDeploymentTimeReducer = (state = { countdown: 0 }, action) => {
  switch (action.type) {
    case DEPLOYMENT_SET_COUNTDOWN:
      return {
        success: true,
        inProgress: true,
        countdoun: action.payload,
      };
    case DEPLOYMENT_REMOVE_COUNTDOWN:
      return {
        success: true,
        inProgress: false,
        countdoun: 0,
      };
    default:
      return state;
  }
};
