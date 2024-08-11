import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './reset.css';
import './index.css';
import App from './App.jsx';
import store from './store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

fetch('https://randomuser.me/api')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => {});

async function getData () {
  try {
    const response = await fetch('http4s://randomuser.me/api');
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  } finally {
  }
}

const res = await getData();
console.log(res);

// Promise {status: (pending |fulfilled | rejected), result:}
