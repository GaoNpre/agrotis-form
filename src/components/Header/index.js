import * as S from './styles';
import MainLogo from '../../assets/images/agrotis-logo.png';

const Header = () => {
    return (
      <S.Container>
        <img src={MainLogo} alt="Agrotis's main logo" />
      </S.Container>
    );
  }
  
  export default Header;