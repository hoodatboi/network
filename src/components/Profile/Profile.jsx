import MyPosts from './MyPosts/MyPosts';
import m from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div className = {m.img}>
        <img src="https://picfiles.alphacoders.com/297/297577.jpg" />
      </div>
      <div>ava + description</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
