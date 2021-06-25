import {
	FooterContainer,
	FooterWrapper,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
} from './FooterElements';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/login'>Login</FooterLink>
							<FooterLink to='/signup'>Create Account</FooterLink>
							<FooterLink to='about'>About</FooterLink>
							<FooterLink to='services'>Services</FooterLink>
							<FooterLink to='discover'>Discover</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/login'>Login</FooterLink>
							<FooterLink to='/signup'>Create Account</FooterLink>
							<FooterLink to='about'>About</FooterLink>
							<FooterLink to='services'>Services</FooterLink>
							<FooterLink to='discover'>Discover</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/login'>Login</FooterLink>
							<FooterLink to='/signup'>Create Account</FooterLink>
							<FooterLink to='about'>About</FooterLink>
							<FooterLink to='services'>Services</FooterLink>
							<FooterLink to='discover'>Discover</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/login'>Login</FooterLink>
							<FooterLink to='/signup'>Create Account</FooterLink>
							<FooterLink to='about'>About</FooterLink>
							<FooterLink to='services'>Services</FooterLink>
							<FooterLink to='discover'>Discover</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
