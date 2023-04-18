/*
 * @Author: “mxmxmx” “2454023350@qq.com”
 * @Date: 2023-04-18 09:47:21
 * @LastEditors: “mxmxmx” “2454023350@qq.com”
 * @LastEditTime: 2023-04-18 09:53:57
 * @FilePath: /website-react/src/components/Error.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useRouteError } from "react-router-dom";
export default function ErrorPage(params) {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div id="error-page">
        <h1>Oops</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
