import Header from "./Header";
interface User {
  name: string;
  image: string;
  signOut: () => void;
}

const Home: React.FC<User> = ({ name, image, signOut }) => {
  const firstName = name.split(" ")[0];
  return (
    <div>
      <Header name={name} image={image} />
      <h1>Hello, {firstName}, Start planning today </h1>
      <button
        className="bg-red-600 rounded-md px-4 text-white"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
};

export default Home;
