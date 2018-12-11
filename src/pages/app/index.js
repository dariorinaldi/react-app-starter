import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppErrorBoundary from '../../components/app/AppErrorBoundary';
import MainTemplate from '../../components/app/MainTemplate';
import GlobalStyle from '../../components/app/GlobalStyle';

const theme = {
  referenceFontSize: '16px',
  fonts: [
    {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
      fontStyle: 'normal',
      path: 'Roboto/Roboto.ttf',
      format: 'true-type',
    },
  ],
  colors: {
    primary: '#FACC21',
    secondary: '#004c4c',
  },
};

class App extends React.PureComponent {
  componentDidMount() {
    bootstrapApp();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppErrorBoundary>
          <Router>{this.props.authSession ? <MainTemplate /> : <Home />}</Router>
        </AppErrorBoundary>
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default App;
