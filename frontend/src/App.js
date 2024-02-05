import './App.css';
import LeftNav from './components/LeftNav/leftNavBar';
import Header from './components/TopNav/Header';
import Auth from './pages/auth';



function App() {
  return (
    <div>
    <Header />
    <LeftNav />
    </div>
    // <div className="App">
      
    //   {/* <Auth /> */}
    // </div>
  );
}

export default App;
