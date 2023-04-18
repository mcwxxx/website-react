/*
 * @Author: “mxmxmx” “2454023350@qq.com”
 * @Date: 2023-04-18 17:37:20
 * @LastEditors: “mxmxmx” “2454023350@qq.com”
 * @LastEditTime: 2023-04-18 17:38:49
 * @FilePath: /website-react/src/routes/destory.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { redirect } from "react-router-dom";
import { deleteContact } from "../utils/contacts";
export async function action({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}
