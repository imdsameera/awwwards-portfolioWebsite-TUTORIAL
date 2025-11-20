import {AnimatedHeaderSection} from '../components';
import {servicesData} from '../constants/index.js';
import {useRef} from 'react';
import {useMediaQuery} from 'react-responsive';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const Services = () => {
	const serviceRefs = useRef([]);
	const isDesktop = useMediaQuery({minWidth: 768});
	const text = `I build secure, high-performance full-stack app
	with smooth UX to drive growth
	not headaches.`;

	useGSAP(() => {
		serviceRefs.current.forEach((el) => {
				if (!el) return;

				gsap.from(el, {
					y: 200,
					scrollTrigger: {
						trigger: el,
						start: 'top 80%',
					},
					duration: 1,
					ease: 'circ.out',
				});
			},
		);
	});

	return (
		<section
			id="services"
			className="min-h-screen bg-black rounded-t-4xl relative"
		>
			<AnimatedHeaderSection
				text={text}
				subTitle={'Behind the scenes, Beyond the screen'}
				title={'Services'}
				textColor={'text-white'}
				withScrollTrigger={true}
			/>
			{servicesData.map((service, i) => (
				<div
					ref={(el) => {
						if (el) serviceRefs.current[i] = el;
					}}
					key={i}
					className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/60 z-300"
					style={isDesktop ? {
						top: `calc(10vh + ${i * 5}rem)`,
						marginBottom: `${(servicesData.length - i - 1) * 5}rem`,
					} : {top: 0}}
				>
					<div className="flex items-center justify-between gap-4 font-light">
						<div className="flex flex-col gap-6">
							<h2 className="text-4xl lg:text-5xl">{service.title}</h2>
							<p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
								{service.description}
							</p>
							<div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
								{service.items.map((item, itemIndex) => (
									<div key={`item-${i}-${itemIndex}`}>
										<h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
											{service.title}
										</h3>
										{itemIndex < service.items.length - 1 && (
											<div className="w-full h-px my-2 bg-white/30"/>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			))}

		</section>
	);
};
export default Services;
