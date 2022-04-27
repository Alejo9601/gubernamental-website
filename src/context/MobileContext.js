import { createContext } from "react";
import useMobileObserver from "../hooks/useMobileObserver";

const MobileContext = createContext();

const MobileProvider = () => {
  const isMobile = useMobileObserver();
  return <MobileContext.Provider value={isMobile}></MobileContext.Provider>;
};

export { MobileProvider as IsMobileProvider };

export default MobileContext;
