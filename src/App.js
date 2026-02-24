import './App.css';
import Header from './components/header/header';
import NavBar from './components/nav/nav';
import Profile from './components/profile/profile'

import Messages from './components/messages/messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { users, content } from './data';
import Direct_messages from './components/messages/direct_messages';


function App({ data, add_post }) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <NavBar />
        <div className='route-container'>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile posts={data.profile_page} add_post={add_post} />} />
            <Route path="/messages" element={<Messages messages={data.messages_page} />} />

            <Route path={`/messages/direct/:id`} element={<Direct_messages messages={data.messages_page} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}



export default App;
