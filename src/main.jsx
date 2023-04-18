/*
 * @Author: “mxmxmx” “2454023350@qq.com”
 * @Date: 2023-03-13 15:09:52
 * @LastEditors: “mxmxmx” “2454023350@qq.com”
 * @LastEditTime: 2023-04-18 17:51:00
 * @FilePath: /website-react/src/main.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import indexCss from "./assets/css/index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes/index";
import Error from "./components/Error";
import Contact, { loader as contactLoader } from "./routes/contact";
import Edit, { action as editAction } from "./routes/edit";
import { action as destoryAction } from "./routes/destory";
const handles = () => {
  return 1;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index></Index> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <Edit></Edit>,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destoryAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
