import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/nav';
import Header from './components/header/header';
import Profile from './components/profile/profile'

function App() {
  return (
    <div className='wrapper'>
      <NavBar />
      <Header />
      <Profile />
    </div>
  );
}





export default App;
