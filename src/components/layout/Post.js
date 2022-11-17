import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import InputOptions from './InputOptions';
import './Post.css';

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className='post'>
      <div className='post-header'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className='post-info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className='post-body'>
        <p>{message}</p>
      </div>

      <div className='post-buttons'>
        <InputOptions icon={<ThumbUpAltOutlined />} title='Like' />
        <InputOptions icon={<ChatOutlined />} title='Comment' />
        <InputOptions icon={<ShareOutlined />} title='Share' />
        <InputOptions icon={<SendOutlined />} title='Send' />
      </div>
    </div>
  );
};

export default Post;
