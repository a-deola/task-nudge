import Logo from "./Logo";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

interface SignInProps {
  google: () => void;
  github: () => void;
}

const SignIn: React.FC<SignInProps> = ({ google, github }) => {
  return (
    <div className="flex items-center flex-col gap-5 justify-center min-h-screen">
      <Logo />
      <button className="py-1 px-4 border" onClick={google}>
        <FcGoogle className="inline-block mx-2" />
        Sign in with Google
      </button>
      <button className="py-1 px-4 border" onClick={github}>
        <FaGithub className="inline-block mx-2" />
        Sign in with Github
      </button>
    </div>
  );
};

export default SignIn;
