import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)

/* To make the data  from store.js available globally for any component in the application, you need to import the data here, like you do above. In
the above code store.js file is imported within <React.StrictMode>. <Provider> from react-redux supplies the Redux store to all components within 
its hierarchy by passing store as props. This allows components, including <App />, to access and interact with the Redux store for state management*/