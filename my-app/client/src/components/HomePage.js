import React from "react";
import Layout from "./Layout.js";
import Child from "./Child.js";
import LoginForm from "./LoginForm";

export default function HomePage({ getUser }) {
  return (
    <Layout>
      <Child></Child>
      <LoginForm getUser={getUser} />
    </Layout>
  );
}
