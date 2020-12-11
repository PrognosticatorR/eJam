import React, { useState, useEffect } from "react";
import { Form, Input, Button, Cascader } from "antd";
import { templateData } from "./constant";
import { UpCircleOutlined } from "@ant-design/icons";

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
  const [componentSize, setComponentSize] = useState("medium");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getJson());
  }, []);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
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
      >
        <Form.Item requiredMark required label="Url">
          <Input required />
        </Form.Item>
        <Form.Item requiredMark required label="Deployment">
          <Cascader options={data} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            shape="round"
            icon={<UpCircleOutlined />}
            size={"middle"}
          >
            Deploy Template
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
