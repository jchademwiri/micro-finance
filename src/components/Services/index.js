import PrivateBankingIcon from '../../images/svg-4.svg';
import BondIcon from '../../images/svg-2.svg';
import PortfolioIcon from '../../images/svg-7.svg';

import {
	ServicesContainer,
	ServicesWrapper,
	ServicesH1,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from './ServiceElements';

const Services = () => {
	return (
		<ServicesContainer id='services'>
			<ServicesH1>Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={PrivateBankingIcon}></ServicesIcon>
					<ServicesH2>Private Banking</ServicesH2>
					<ServicesP>
						We give you the best Services, with highest intrest on a posetive
						balance.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={BondIcon}></ServicesIcon>
					<ServicesH2>Get a Bond</ServicesH2>
					<ServicesP>
						We give you the best Services, with highest intrest on a posetive
						balance.
					</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={PortfolioIcon}></ServicesIcon>
					<ServicesH2>Portfolio Management</ServicesH2>
					<ServicesP>
						We give you the best Services, with highest intrest on a posetive
						balance.
					</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
