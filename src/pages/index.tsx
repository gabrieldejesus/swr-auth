import { useEffect } from "react";
import Router from "next/router";

import Nav from "../components/Nav";
import useUser from "../data/user-user";
import { login } from "../libs/auth";

export default function App() {
  const { user, mutate } = useUser();

  // if logged in, redirect to the dashboard
  useEffect(() => {
    if (user) {
      Router.replace("/dashboard");
    }
  }, [user]);

  return (
    <div>
      <Nav title="Hello World" />

      <main>
        <h1>Hello world</h1>

        <button
          type="button"
          onClick={() => {
            login();
            mutate(); // after logging in, we revalidate the SWR
          }}
        >
          Login To Continue
        </button>
      </main>
    </div>
  );
}
