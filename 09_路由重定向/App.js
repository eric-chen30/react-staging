import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import MyNavLink from "./components/MyNavLink";
import About from "./pages/About";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header name="React Staging" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              {/* 随着React Router v6的发布，Redirect 组件被移除，取而代之的是Navigate 组件，它的操作与Redirect 组件一样，通过接收to 道具来使你重定向到你指定的页面。 */}
              <div className="panel-body">
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="*" element={<Navigate to="/about" />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
