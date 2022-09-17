import './styles/styles.css';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { getTheme } from './styles/themes/getTheme';
import Form from './components/Form';
import Page from './components/Page';

const App = () => {
  return (
    <ThemeProvider theme={getTheme('light')} >
      <GlobalStyle />
      <Page>
        <Form />
      </Page>
    </ThemeProvider>
  );
}

export default App;
