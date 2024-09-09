"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import SignIn from "./SignIn";
import Home from "./Home";

function Dashboard() {
  const { data: session } = useSession();

  const googleSignIn = () => signIn("google");
  const githubSignIn = () => signIn("github");
  return (
    <>
      {session ? (
        <Home
          name={session.user?.name!}
          image={session.user?.image!}
          signOut={() => signOut()}
        />
      ) : (
        <SignIn google={googleSignIn} github={githubSignIn} />
      )}
    </>
  );
}

export default Dashboard;
