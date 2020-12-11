import React, { useEffect, useState } from "react";
import { List, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  listDeployments,
  deleteDeployment,
} from "../redux/action/deploymentActions";
import { DeleteTwoTone } from "@ant-design/icons";
import Timer from "./Timer";

const DeploymentList = () => {
  const [isDeploying, setisDeploying] = useState(true);
  const dispatch = useDispatch();
  const deploymentsList = useSelector((state) => state.deploymentList);
  const deleteDeploymentRequest = useSelector(
    (state) => state.deploymentRemove
  );
  const removeDeploymentTimeRequest = useSelector(
    (state) => state.deploymentTime
  );

  const { success: deleteDeploymentSuccess } = deleteDeploymentRequest;
  const {
    success: removeDeploymentTimeSuccess,
    inProgress: deploymentinProgress,
    countdoun: deploymentCountdown,
  } = removeDeploymentTimeRequest;

  useEffect(() => {
    dispatch(listDeployments());
  }, [dispatch]);

  useEffect(() => {
    if (deleteDeploymentSuccess && !deploymentinProgress) {
      dispatch(listDeployments());
    }
    setisDeploying(deploymentinProgress);
  }, [
    dispatch,
    deleteDeploymentSuccess,
    removeDeploymentTimeSuccess,
    deploymentinProgress,
  ]);

  return (
    <List
      style={{ display: "flex", flexDirection: "column" }}
      className="demo-loadmore-list"
      loading={deploymentsList.loading}
      itemLayout="horizontal"
      dataSource={deploymentsList.deployments}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Skeleton
            avatar
            title={false}
            loading={item.loading}
            key={"s-" + item.id}
            active
          >
            <List.Item.Meta
              key={"lim-" + item.id}
              title={<a href={item.url}>{item.templateName.toUpperCase()}</a>}
              description={item.url}
            />
            <div style={{ alignItems: "flex-end" }} key={"div" + item.id}>
              <DeleteTwoTone
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={() => dispatch(deleteDeployment(item.id))}
              />
            </div>
          </Skeleton>
        </List.Item>
      )}
    >
      {isDeploying && <Timer key={"timer"} initial={deploymentCountdown} />}
    </List>
  );
};

export default DeploymentList;
