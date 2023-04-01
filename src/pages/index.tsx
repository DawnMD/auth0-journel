import { type NextPage } from "next";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded && isSignedIn) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {isSignedIn && <SignOutButton />}
      {!isSignedIn && <SignInButton />}
      {isSignedIn && <p>{user.fullName}</p>}
    </div>
  );
};

export default Home;
