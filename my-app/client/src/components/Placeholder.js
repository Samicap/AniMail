import React from "react";
import Layout from "./Layout.js";
import Child from "./Child.js";
import LoginForm from "./LoginForm";
import Inbox from "./Inbox";

export default function Placeholder({ childId, getUser }) {
  console.log(childId);

  return (
    <Layout>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Child></Child>
          </div>
          <div class="col-sm">
            <Inbox></Inbox>
          </div>
          <div class="col-sm">
            <Inbox></Inbox>
          </div>
        </div>
      </div>
    </Layout>
  );
}
