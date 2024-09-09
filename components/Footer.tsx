import Logo from "./Logo";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container mx-auto p-4 shadow-inner">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <Logo size="3xl" />
        <div>Socials</div>
        <p className=" col-span-2 lg:col-span-1  text-center">
          &copy;{year} Adeola Samuel. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
