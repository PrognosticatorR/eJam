import axios from "axios";
import {
  DEPLOYMENT_CREATE_REQUEST,
  DEPLOYMENT_CREATE_SUCCESS,
  DEPLOYMENT_CREATE_FAIL,
  DEPLOYMENT_LIST_REQUEST,
  DEPLOYMENT_LIST_SUCCESS,
  DEPLOYMENT_LIST_FAIL,
  DEPLOYMENT_DELETE_REQUEST,
  DEPLOYMENT_DELETE_SUCCESS,
  DEPLOYMENT_DELETE_FAIL,
  DEPLOYMENT_SET_COUNTDOWN,
  DEPLOYMENT_REMOVE_COUNTDOWN,
} from "../constants/deploymentContants";

export const addDeployment = (deployment) => async (dispatch) => {
  try {
    dispatch({
      type: DEPLOYMENT_CREATE_REQUEST,
    });
    const { data } = await axios.post(`/api/deployments/`, deployment);
    dispatch({
      type: DEPLOYMENT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DEPLOYMENT_CREATE_FAIL,
      payload: message,
    });
  }
};

export const listDeployments = () => async (dispatch) => {
  try {
    dispatch({ type: DEPLOYMENT_LIST_REQUEST });
    const { data } = await axios.get(`/api/deployments`);
    dispatch({
      type: DEPLOYMENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEPLOYMENT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteDeployment = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DEPLOYMENT_DELETE_REQUEST,
    });
    await axios.delete(`/api/deployments/${id}`);
    dispatch({
      type: DEPLOYMENT_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DEPLOYMENT_DELETE_FAIL,
      payload: message,
    });
  }
};

export const setDeploymentTime = (time) => (dispatch) => {
  dispatch({
    type: DEPLOYMENT_SET_COUNTDOWN,
    payload: time,
  });
};

export const removeDeploymentTime = () => (dispatch) => {
  dispatch({
    type: DEPLOYMENT_REMOVE_COUNTDOWN,
  });
};
