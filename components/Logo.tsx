import { Pacifico } from "@next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
interface LogoProps {
  size?: string;
}

const Logo: React.FC<LogoProps> = ({ size = "text-4xl" }) => {
  return (
    <h1 className={`${pacifico.className} ${size} text-blue-700`}>
      Task Nudge
    </h1>
  );
};

export default Logo;
