import { NavBar } from "../NavBar";
import { CartIcon } from "../CartIcon";
const Header = () => {
  return (
    <header className={"w-full flex bg-zinc-800 justify-between p-3"}>
      <NavBar />
      <CartIcon />
    </header>
  );
};

export { Header };
