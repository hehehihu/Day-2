import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Title>Welcome to the Home Page</Title>
      <p>Click on "Tip Calculator" in the header to get started.</p>
    </div>
  );
};

export default Home;