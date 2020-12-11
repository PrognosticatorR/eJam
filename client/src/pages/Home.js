import React from "react";
import { Row, Col } from "antd";

import Layout from "../components/Layout";
import FormComponent from "../components/FormComponenet";
import ListComponenet from "../components/ListComponent";

const Home = () => {
  return (
    <Layout>
      <Row>
        <Col span={12}>
          <FormComponent />
        </Col>
        <Col span={12}>
          <ListComponenet />
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;
