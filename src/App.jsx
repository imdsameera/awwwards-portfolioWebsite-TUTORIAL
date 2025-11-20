import React from 'react';
import {Navbar, Hero, ServiceSummary, Services, About} from './sections';


const App = () => {
	return (
		<div className="relative w-screen min-h-screen">
			<Navbar/>
			<Hero/>
			<ServiceSummary/>
			<Services/>
			<About/>
			<section className="min-h-screen"></section>
			<section className="min-h-screen"></section>
		</div>
	);
};
export default App;
