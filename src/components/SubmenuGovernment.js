import NavigationLink from "./NavigationLink";

const SubmenuGovernment = ({ display }) => {
  return (
    <ol className={display ? "submenu active" : "submenu"}>
      <NavigationLink refTo={"/profile"} />
      <NavigationLink refTo={"/profile"} />
      <NavigationLink refTo={"/profile"} />
      <NavigationLink refTo={"/profile"} />
      <NavigationLink refTo={"/profile"} />
    </ol>
  );
};

export default SubmenuGovernment;
