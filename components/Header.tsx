import Logo from "./Logo";
import Image from "next/image";

interface ImageProps {
  name: string;
  image: string;
}

const Header: React.FC<ImageProps> = ({ image, name }) => {
  return (
    <header className="flex justify-between items-center p-4 shadow">
      <Logo size="3xl" />
      <Image
        className="rounded-full"
        src={image}
        alt={name}
        width={40}
        height={40}
      />
    </header>
  );
};

export default Header;
