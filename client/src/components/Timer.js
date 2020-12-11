import React, { useEffect, useState } from "react";
import { Spin, Alert } from "antd";
import {
  listDeployments,
  removeDeploymentTime,
} from "../redux/action/deploymentActions";
import { useDispatch } from "react-redux";

const Timer = ({ initial }) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(initial);
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      dispatch(removeDeploymentTime());
      dispatch(listDeployments());
    }
  }, [counter, dispatch]);
  return (
    counter > 0 && (
      <div className="App">
        <Spin tip={counter + " second"} size="large">
          <Alert
            message="Deploying Your Template"
            description="Deployment will take some time please wait!"
            type="success"
          />
        </Spin>
      </div>
    )
  );
};

export default Timer;
