import { useState } from 'react';
import { auth } from '../../../db/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const dispatch = useDispatch();

  const register = async () => {
    if (!name) {
      return alert('Please enter a name');
    }

    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(`User ${user.uid} created`);
    await updateProfile(user, {
      photoURL: profilePic,
      displayName: name,
    });
    dispatch(
      login({
        email: user.email,
        uid: user.uid,
        displayName: name,
        photoURL: profilePic,
      })
    );
  };

  const loginToApp = (e) => {
    e.preventDefault();
    console.log('Login');
  };

  return (
    <div className='login'>
      <img
        src='https://cdn.cdnlogo.com/logos/l/74/linkedin.svg'
        alt='linkedIn-login-logo'
      />

      <form>
        <input
          type='text'
          placeholder='Full name (required if registering)'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Profile pic(optional)'
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className='login-register' onClick={register}>
          {'   '}
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
