import { FaBars } from 'react-icons/fa';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtnLink,
	NavBtn,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>Micro Finance</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to='about'>About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='discover'>Discover</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to='services'>Services</NavLinks>
						</NavItem>
						<NavItem>
							{/* <NavLinks to='contact'>Contact Us</NavLinks> */}
						</NavItem>
						<NavItem>
							<NavLinks to='signup'>Sign Up</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to='login'>Sign In</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
