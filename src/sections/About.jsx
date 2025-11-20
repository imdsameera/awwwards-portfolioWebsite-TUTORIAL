import {AnimatedHeaderSection} from '../components';

const About = () => {
	const text = `Passionate about clean architecture
	I Build scalable, high-performance solutions
	from prototype to production.`;

	return (
		<section id="about" className="min-h-screen bg-black rounded-b-4xl ">
			<AnimatedHeaderSection subTitle={'Code with purpose, Built to scale'} title={'About'} text={text}
			                       textColor={'text-white'} withScrollTrigger={true}/>
		</section>
	);
};
export default About;
