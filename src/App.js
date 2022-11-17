import Header from './components/layout/Header';
import './App.css';
import Sidebar from './components/layout/Sidebar';
import Feed from './components/layout/Feed';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Login from './components/pages/auth/Login';

const App = () => {
  const user = useSelector(selectUser);
  return (
    <div className='App'>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className='app-body'>
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
