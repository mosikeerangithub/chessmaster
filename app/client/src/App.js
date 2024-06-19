import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Start from "./components/Start";
import Home from "./components/Home";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/main" exact element={<Main />} />
			<Route path="/main2" exact element={<Main2 />} />
			<Route path="/start" exact element={<Start />} />
			<Route path="/home" exact element={<Home />} />
			<Route path="/" element={<Navigate replace to="/start" />} />
		</Routes>
	);
}

export default App;
