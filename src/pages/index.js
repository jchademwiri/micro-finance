import { useState } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Services from '../components/Services';
import Footer from '../components/Footer';
import {
	homeObjFour,
	homeObjOne,
	homeObjThree,
	homeObjTwo,
} from '../components/Info/Data';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			{/* <Helmet>
				<meta charSet='utf-8' />
				<title>Micro Finance - Home</title>
				<link rel='canonical' href='https://playhousemedia.net' />
				<meta
					name='description'
					content='Geting the financial advise you will ever need.'
				/>
			</Helmet> */}
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<Hero />
			<Info {...homeObjOne} />
			<Info {...homeObjTwo} />
			<Services />
			<Info {...homeObjFour} />
			<Info {...homeObjThree} />
			<Footer />
		</>
	);
};

export default Home;
