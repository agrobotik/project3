import './App.css';
import Header from './components/header/header';
import NavBar from './components/nav/nav';
import Profile from './components/profile/profile'

import Messages from './components/messages/messages';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <NavBar />
        <div className='route-container'>
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Messages} />
        </div>
      </BrowserRouter>
    </div>
  );
}


// прочитать про пропсы https://ru.legacy.reactjs.org/docs/components-and-props.html


export default App;
