import Header from './components/layout/Header';
import './App.css';
import Sidebar from './components/layout/Sidebar';
import Feed from './components/layout/Feed';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='app-body'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default App;
