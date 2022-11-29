import { createContext } from "react";

// create a context who responsible to keep data
const AppContextData = createContext();

// now create a function to get children in it and wrap main file
export function AppContext({ children }) {
  return <AppContextData.Provider value={{name:'kamran created boiler plate'}}>{children}</AppContextData.Provider>;
}

// now u have to default import AppContextData beacuse its create a context refrence using create context
export default AppContextData;
