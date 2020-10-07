import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import RobotHead from './components/RobotHead';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from './styles/styles';

// Slowly change background color of site
const bgColors = ['#C0D8E0', '#C7CCE5', '#FFF4D9', '#FFEDD9'];
let colorIdx = bgColors.length;

setInterval(() => {
  document.body.style.backgroundColor = bgColors[colorIdx % bgColors.length];
  colorIdx++;
}, 8000);

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Router>
        <div className="background-robot">
          <RobotHead />
        </div>
        <Header />
        <App />
      </Router>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
