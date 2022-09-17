import Header from '../Header';
import * as S from './styles';

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <S.Body>
        {children}
      </S.Body>
    </>
  );
}

export default Page;