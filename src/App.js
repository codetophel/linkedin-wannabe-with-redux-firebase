import { useEffect } from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Feed from './components/layout/Feed';
import { selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './db/firebase';
import { login, logout } from './features/userSlice';
import Login from './components/pages/auth/Login';
import Widget from './components/layout/Widget';
import './App.css';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            profilePic: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    //eslint-disable-next-line
  }, []);
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
            <Widget />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
