import NavigationLink from "./NavigationLink";
const SubmenuGovernment = ({ display }) => {
  return (
    <ol className={display ? "displayed" : "non-displayed"}>
      <NavigationLink refTo={"/profile"} />
      <NavigationLink refTo={"/profile"} />
      <NavigationLink refTo={"/profile"} />
      <NavigationLink refTo={"/profile"} />
      <NavigationLink refTo={"/profile"} />
    </ol>
  );
};

export default SubmenuGovernment;
