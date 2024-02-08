import './App.css';
import LeftNav from './components/LeftNav/leftNavBar';
import Header from './components/TopNav/Header';
import SupportHeader from './components/TopNav/supportHeader';
import Auth from './pages/auth';
import Main from './pages/main';



function App() {
  return (
    <div>
      <Header />
      <SupportHeader />
      
      <LeftNav />
      <Main />
    </div>
    // <div className="App">
      
    //   {/* <Auth /> */}
    // </div>
  );
}

export default App;
