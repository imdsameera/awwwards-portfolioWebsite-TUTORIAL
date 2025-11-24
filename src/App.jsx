import React from 'react';
import {Navbar, Hero, ServiceSummary, Services, About, Work, ContactSummary} from './sections';


const App = () => {
	return (
		<div className="relative w-screen min-h-screen">
			<Navbar/>
			<Hero/>
			<ServiceSummary/>
			<Services/>
			<About/>
			{/*<Work2/>*/}
			<Work/>
			<ContactSummary/>
			<section className="min-h-screen"></section>
			<section className="min-h-screen"></section>
		</div>
	);
};
export default App;
