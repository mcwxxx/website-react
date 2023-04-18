/*
 * @Author: “mxmxmx” “2454023350@qq.com”
 * @Date: 2023-03-13 16:17:38
 * @LastEditors: “mxmxmx” “2454023350@qq.com”
 * @LastEditTime: 2023-04-17 17:50:38
 * @FilePath: /website-react/src/components/Layout/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from "react";
import PageHeader from "../PageHeader/index";
import "./index.css";
const svgs = require("../../assets/react.svg");
export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        <img src={svgs} alt="" />
        <PageHeader></PageHeader>
      </div>
    );
  }
}
