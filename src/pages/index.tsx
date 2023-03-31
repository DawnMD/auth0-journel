import { type NextPage } from "next";
import { api } from "~/utils/api";

// import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <div>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">logout</a>
    </div>
  );
};

export default Home;
