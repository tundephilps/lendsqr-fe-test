import React from "react";

interface AppContextInterface {
    isSidebarVisible: boolean;
    setIsSidebarVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppContextProviderProps {
    children: React.ReactNode;
}

const defaultContext: AppContextInterface = {
    isSidebarVisible: false,
    setIsSidebarVisible: () => {},
};

export const AppContext = React.createContext<AppContextInterface>(defaultContext);


const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = React.useState(false);

    return (
        <AppContext.Provider value={{ isSidebarVisible, setIsSidebarVisible }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
