import React from "react";
import Navigation from "./routes/Navigation.tsx";
import AppContextProvider from "./context/AppContext.tsx";
// import { ShowResponse } from "./utils/Response";

const App : React.FC = () => {
	return (
		<AppContextProvider>
			{/* <ShowResponse/> */}
			<Navigation/>
   	 	</AppContextProvider>
	)
} 

export default App;
