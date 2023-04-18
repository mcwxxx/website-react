/*
 * @Author: “mxmxmx” “2454023350@qq.com”
 * @Date: 2023-04-18 09:33:51
 * @LastEditors: “mxmxmx” “2454023350@qq.com”
 * @LastEditTime: 2023-04-18 17:59:05
 * @FilePath: /website-react/src/routes/root.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Fragment } from "react";
import {
  Outlet,
  Link,
  useLoaderData,
  Form,
  redirect,
  NavLink,
  useNavigation,
} from "react-router-dom";
import { getContacts, createContact } from "../utils/contacts";
export default function Root(params) {
  const { contacts } = useLoaderData();
  const navigation = useNavigation();
  console.log(contacts);
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              type="search"
              id="q"
              name="q"
              placeholder="search"
              aria-label="Search contacts"
            />
            <div hidden={true} id="search=spinner" aria-hidden></div>
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form action="" method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length > 0 ? (
            contacts.map((contact) => {
              return (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>{contact.first + contact.last}</>
                    ) : (
                      <>
                        <i>No Name</i>
                      </>
                    )}
                    {contact.favourite && <span>★</span>}
                  </NavLink>
                </li>
              );
            })
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        {navigation.state}
        <Outlet></Outlet>
      </div>
    </>
  );
}
export async function loader({ request, params }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts };
}
export async function action(params) {
  const contact = await createContact();

  return redirect(`contacts/${contact.id}/edit`);
}
