import useUser from "../data/user-user";
import { login } from "../libs/auth";

export default function Nav({ title }) {
  const { user, loading, loggedOut, mutate } = useUser();

  let profile = null;

  if (loading) {
    profile = "loading...";
  }

  if (user) {
    profile = <img src={user.avatar} alt={user.name} width={32} height={32} />;
  }

  if (loggedOut) {
    profile = (
      <button
        onClick={() => {
          login();
          mutate();
        }}
      >
        Login
      </button>
    );
  }

  return (
    <nav>
      <h3>{title}</h3>
      {profile}
    </nav>
  );
}
