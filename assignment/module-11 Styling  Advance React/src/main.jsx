import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.jsx'
import './index.css'
import AboutApp from './AboutApp.jsx';
import ServiceApp from './ServiceApp.jsx';
import EventsApp from './EventsApp.jsx';
import Error from './Error.jsx';
import Booking from './Booking';
import Contact from './Contact.jsx';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/about-us' element={<AboutApp />}></Route>
      <Route path='/our-service' element={<ServiceApp />}></Route>
      <Route path='/ourlatest-events' element={<EventsApp />}></Route>
      <Route path='/booking' element={<Booking />}></Route>
      <Route path='/contact-us' element={<Contact />}></Route>
      <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
