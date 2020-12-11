import React, { useEffect, useState } from "react";
import { List, Avatar, Skeleton, Button } from "antd";
import {
  DeploymentUnitOutlined,
  DeleteColumnOutlined,
  DeleteTwoTone,
} from "@ant-design/icons";

import Axios from "axios";

const DeploymentList = () => {
  const [initLoading, setinitLoading] = useState(true);
  const [data, setdata] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      getData((res) => {
        setinitLoading(false);
        setdata(res.data);
        setList(res.data);
      }, 2000);
    });
  }, []);

  console.log(data, list);
  const getData = (callback) => {
    Axios.get("/api/deployments").then((res) => callback(res));
  };

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar icon={<DeploymentUnitOutlined />} />}
              title={<a href={item.url}>{item.templateName.toUpperCase()}</a>}
              description={item.url}
            />
            <div style={{ paddingLeft: 10 }}>
              <DeleteTwoTone style={{ fontSize: "20px", cursor: "pointer" }} />
            </div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};

export default DeploymentList;
