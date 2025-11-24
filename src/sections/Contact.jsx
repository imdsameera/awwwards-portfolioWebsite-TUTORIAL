import {AnimatedHeaderSection, Marquee} from '../components';
import {socials} from '../constants';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const Contact = () => {
	const text = `Got a question, how or project Idea?
    WE’D love to hear from you and discus further!`;
	const items = ['just imagine, I code', 'just imagine, I code', 'just imagine, I code', 'just imagine, I code'];

	useGSAP(() => {
		gsap.from('.social-link', {
			y: 100,
			opacity: 0,
			filter: 'blur(10px)',
			delay: 0.5,
			duration: 1,
			stagger: 0.3,
			ease: 'back.out',
			scrollTrigger: {
				trigger: '.social-link',
			},
		});
	}, []);

	return (
		<section
			id="contact"
			className="flex flex-col justify-between min-h-screen bg-black"
		>
			<div>
				<AnimatedHeaderSection
					subTitle={'You Dream It, I Code It'}
					title={'Contact'}
					text={text}
					textColor={'text-white'}
					withScrollTrigger={true}
				/>
				<div
					className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
					<div className="flex flex-col w-full gap-10">
						<div className="social-link">
							<h2>E-mail</h2>
							<div className="w-full h-px my-2 bg-white/30"/>
							<p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
								hello@imsameera.com
							</p>
						</div>
						<div className="social-link">
							<h2>Phone</h2>
							<div className="w-full h-px my-2 bg-white/30"/>
							<p className="text-xl lowercase md:text-2xl lg:text-3xl">
								(+94)71 66 88 365
							</p>
						</div>
						<div className="social-link">
							<h2>Social Media</h2>
							<div className="w-full h-px my-2 bg-white/30"/>
							<div className="flex flex-wrap gap-2">
								{socials.map((social, i) => (
									<a
										key={i}
										href={social.href}
										className="text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-300"
									>
										{'{'}
										{social.name}
										{'}'}
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
				<Marquee items={items} className="text-white bg-transparent"/>
			</div>
		</section>
	);
};
export default Contact;
