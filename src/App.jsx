import viteLogo from '/fav.png'
import './App.css'
import { Navbar } from './components/Navbar'
import Textarea from './components/textarea/Textarea'
import Alert from './components/alert/Alert'
import { useState } from 'react'

function App() {
	const [alerts, setAlerts] = useState(null);

	const showAlert = (message, color ,show) => {
		setAlerts({
			success: message,
			show: show,
			color: color,
			position: "top"
		});

		setTimeout(() => {
			setAlerts(null);
		}, 1500);
	};

	const data = {
		logo: viteLogo,
		Links: {},
		title: {
			home: 'About App',
		},
	};

	return (
		<>
			<Navbar data={data} />
			<Alert data={alerts} />
			<Textarea heading="Text Analyzer" showAlert={showAlert} />
		</>
	);
}

export default App;
