import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
	const [name, setname] = useState("");
	const [number, setnumber] = useState(0);
	const [age, setage] = useState(0);
	const [country, setcountry] = useState("");
	const [position, setposition] = useState("");
	const display = (e) => {
		e.preventDefault("");
		console.log(name + number + age + country + position);
	};

	const addEmp = (e) => {
		e.preventDefault();
		Axios.post("http://localhost:3001/create", {
			name: name,
			number: number,
			age: age,
			country: country,
			position: position,
		}).then(() => console.log("success"));
	};
	return (
		<div className="App">
			<div className="form_cotainer">
				<div className="header">
					<button>All Users</button>
				</div>
				<div className="form">
					{/* <form> */}
					<h2>New User</h2>

					<div className="input-container">
						<label htmlFor="name">
							Name
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Name"
								onChange={(e) => setname(e.target.value)}
							></input>
						</label>
					</div>

					<div className="input-container">
						<label htmlFor="number">
							Phone Number
							<input
								type="number"
								id="number"
								name="number"
								placeholder="Phone Number"
								onChange={(e) => setnumber(e.target.value)}
							></input>
						</label>
					</div>
					<div className="input-container">
						<label htmlFor="age">
							Age
							<input
								type="number"
								id="age"
								name="age"
								placeholder="Age"
								onChange={(e) => setage(e.target.value)}
							></input>
						</label>
					</div>
					<div className="input-container">
						<label htmlFor="country">
							Country
							<input
								type="text"
								id="country"
								name="country"
								placeholder="country"
								onChange={(e) => setcountry(e.target.value)}
							></input>
						</label>
					</div>
					<div className="input-container">
						<label htmlFor="position">
							Position
							<input
								type="text"
								id="position"
								name="position"
								placeholder="position"
								onChange={(e) => setposition(e.target.value)}
							></input>
						</label>
					</div>
					<div className="button-container">
						<input type="submit" value="Save" onClick={addEmp}></input>
					</div>
					{/* </form> */}
				</div>
			</div>
		</div>
	);
}

export default App;
