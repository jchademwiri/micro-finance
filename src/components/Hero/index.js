import { useState } from 'react';

import Video from '../../videos/video.mp4';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWraper,
	ArrowForward,
	ArrowRight,
} from './HeroElements';
import { Button } from '../ButtonElements';
// import Currency from '../Currency';

const Hero = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer id='home'>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>

			<HeroContent>
				<div>
					<HeroH1>Virtual Banking Made Easy</HeroH1>
					<HeroP>
						Open a new account today and receive R1000 credit torwads your next
						payment.
					</HeroP>
					<HeroBtnWraper>
						<Button
							to='signup'
							onMouseEnter={onHover}
							onMouseLeave={onHover}
							primary='true'
							dark='true'
							smooth={true}
							duration={500}
							spy={true}
							exact='true'
							offset={-80}>
							Get Started {hover ? <ArrowForward /> : <ArrowRight />}
						</Button>
					</HeroBtnWraper>
				</div>
				{/* <Currency /> */}
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
