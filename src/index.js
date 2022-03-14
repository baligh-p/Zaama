import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';

const data={
  url:"http://localhost/zaama/yenjahBackend/"
}

export const contextApi=React.createContext()

ReactDOM.render(
  <React.StrictMode>
    <contextApi.Provider value={data}>
      <App />
    </contextApi.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
