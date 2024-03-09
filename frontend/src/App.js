import './App.css';
import LeftNav from './components/LeftNav/leftNavBar';
import Header from './components/TopNav/Header';
import SupportHeader from './components/TopNav/supportHeader';
import Auth from './pages/auth';
import Main from './pages/main';



function App() {
  return (
    <div className='appmain'>
      <Header />
      <SupportHeader  />
      <div className='maindiv'>     
        <LeftNav />
        <Main />
      </div>

    </div>
    // <div className="App">
      
    //   <Auth />
    // </div>
  );
}

export default App;
