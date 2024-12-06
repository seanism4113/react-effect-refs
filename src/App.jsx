import { useState } from "react";
import CardGame from "./CardGame";

import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<CardGame />
		</>
	);
}

export default App;
