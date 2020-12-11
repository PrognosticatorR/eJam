import React, { useState, useEffect } from "react";
import { Form, Input, Button, Cascader } from "antd";
import { templateData } from "./constant";
import { UpCircleOutlined } from "@ant-design/icons";

import {
  addDeployment,
  listDeployments,
  setDeploymentTime,
} from "../redux/action/deploymentActions";
import { useDispatch, useSelector } from "react-redux";
import { DEPLOYMENT_CREATE_RESET } from "../redux/constants/deploymentContants";

const jsonData = [];
const getJson = () => {
  templateData.forEach((curr) => {
    const result = {
      value: curr.name,
      label: curr.name,
      children: curr.versions.map((ele) => {
        return { value: ele, label: ele };
      }),
    };
    jsonData.push(result);
  });
  return jsonData;
};

const FormComponent = () => {
  const removeDeploymentTimeRequest = useSelector(
    (state) => state.deploymentTime
  );
  const { inProgress: deploymentinProgress } = removeDeploymentTimeRequest;

  const deploymentCreate = useSelector((state) => state.deploymentCreate);
  const { success: successDeploymentCreate } = deploymentCreate;
  const dispatch = useDispatch();
  const [componentSize, setComponentSize] = useState("medium");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (successDeploymentCreate) {
      dispatch({ type: DEPLOYMENT_CREATE_RESET });
    }
    setData(getJson());
    if (!deploymentinProgress) dispatch(listDeployments());
  }, [dispatch, successDeploymentCreate, deploymentinProgress]);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = (values) => {
    const data = {
      url: values.url,
      templateName: values.versions[0],
      version: values.versions[1],
    };
    dispatch(addDeployment(data));
    dispatch(setDeploymentTime(20));
    values.url = "";
    values.versions = [];
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 17,
        }}
        layout="verticel"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Url"
          name="url"
          rules={[
            {
              required: true,
              message: "Please input your url!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Versions"
          name="versions"
          rules={[
            {
              required: true,
              message: "Please input your versions!",
            },
          ]}
        >
          <Cascader options={data} />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            shape="round"
            icon={<UpCircleOutlined />}
            size={"middle"}
            disabled={deploymentinProgress ? true : false}
          >
            Deploy Template
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormComponent;
