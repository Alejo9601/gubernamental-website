import { createContext } from "react";
import useMobileObserver from "../hooks/useMobileObserver";

const ScreenWidthContext = createContext();

const ScreenWidthProvider = ({ children }) => {
  const isMobileWidth = useMobileObserver();
  return (
    <ScreenWidthContext.Provider value={isMobileWidth}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

export { ScreenWidthProvider };

export default ScreenWidthContext;
