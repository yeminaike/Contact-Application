import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 

const persons =[

  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 1
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 2
  },
  {
    "name": "Andy Murray",
    "number": "09838372772711772",
    "id": 3
  },
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App persons = {persons} />
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
