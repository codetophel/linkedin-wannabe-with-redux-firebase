import { useState, useEffect } from 'react';
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from '@mui/icons-material';
import InputOptions from './InputOptions';
import Post from './Post';
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../../db/firebase';
import './Feed.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Feed = () => {
  const user = useSelector(selectUser);

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    await getDocs(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc'))
    ).then((snapshot) => {
      let allposts = [];
      snapshot.docs.map((doc) => {
        allposts.push({
          id: doc.id,
          data: doc.data(),
        });
        setPosts(allposts);
        return allposts;
      });
    });
  };

  useEffect(() => {
    setLoading(true);
    getPosts();
  }, [input]);

  const sendPost = (e) => {
    e.preventDefault();
    addDoc(collection(db, 'posts'), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || '',
      timestamp: new Date(),
    });

    setInput('');
  };

  return (
    <div className='feed'>
      <div className='feed-input-container'>
        <div className='feed-input'>
          <Create />
          <form onSubmit={sendPost}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              placeholder='Start a post'
            />
            <button type='submit'>Send</button>
          </form>
        </div>

        <div className='feed-input-options'>
          <InputOptions title='Photo' icon={<Image />} color='#70b5f9' />
          <InputOptions
            title='Video'
            icon={<Subscriptions />}
            color='#e7a33e'
          />
          <InputOptions title='Event' icon={<EventNote />} color='#c0cbcd' />
          <InputOptions
            title='Write article'
            icon={<CalendarViewDay />}
            color='#7fc15e'
          />
        </div>
      </div>

      {!loading && posts.length === 0 ? (
        <p>No posts to show</p>
      ) : (
        posts.map(({ id, data: { name, description, message, timestamp } }) => {
          return (
            <Post
              key={id}
              name={name}
              message={message}
              description={description}
              time={new Date(timestamp?.seconds * 1000).toUTCString()}
            />
          );
        })
      )}
    </div>
  );
};

export default Feed;
