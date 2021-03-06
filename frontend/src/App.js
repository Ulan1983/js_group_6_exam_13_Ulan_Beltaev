import React from 'react';
import Routes from "./Routes";
import {ToastContainer} from "react-toastify";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppToolbar from "./components/UI/Toolbar/AppToolbar";

const App = () => {
	return (
		<>
			<CssBaseline/>
			<ToastContainer autoClose={2000}/>
			<Container>
				<AppToolbar/>
				<Routes/>
			</Container>

		</>
	);
};

export default App;