import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

import {
	FooterContainer,
	FooterWrapper,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterElements';

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='about'>About</FooterLink>
							<FooterLink to='services'>Services</FooterLink>
							<FooterLink to='discover'>Discover</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Our Services</FooterLinkTitle>
							<FooterLink to='/login'>Login</FooterLink>
							<FooterLink to='/signup'>Create Account</FooterLink>
							<FooterLink to='discover'>Discover</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Contact Us</FooterLinkTitle>
							<FooterLink to='about'>
								<span>Email: </span>email@mail.com
							</FooterLink>
							<FooterLink to='about'>
								<span>Office: </span>+27 (00) 555 - 555
							</FooterLink>
							<FooterLink to='about'>
								<span>Fax: </span> +27 (00) 555 - 555
							</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>

							<FooterLink to='#'>Facebook</FooterLink>
							<FooterLink to='#'>Instagram</FooterLink>
							<FooterLink to='#'>Twitter</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>

				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>
							Micro Finance
						</SocialLogo>
						<WebsiteRights>
							Micro Finance &copy; {new Date().getFullYear()} All rights
							reserved.{' '}
							<a
								href='https://playhousemedia.net'
								target='blank'
								aria-label='Twitter'>
								Desgned by Jacob Chademwiri
							</a>
						</WebsiteRights>
						<IconContext.Provider value={{ color: '#fff' }}>
							<SocialIcons>
								<SocialIconLink href='/' target='blank' aria-label='Youtube'>
									<FaYoutube />
								</SocialIconLink>
								<SocialIconLink href='/' target='blank' aria-label='Facebook'>
									<FaFacebook />
								</SocialIconLink>
								<SocialIconLink href='/' target='blank' aria-label='Instagram'>
									<FaInstagram />
								</SocialIconLink>
								<SocialIconLink href='/' target='blank' aria-label='Twitter'>
									<FaTwitter />
								</SocialIconLink>
							</SocialIcons>
						</IconContext.Provider>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
