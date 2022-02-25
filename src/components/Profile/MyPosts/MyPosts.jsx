import m from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={m.Posts}>
        <Post message = 'Hey, wussup here!' countOfLikes = '5'/>
        <Post message = 'What are u doing here???'countOfLikes = '2'/>
      </div>
    </div>
  );
};

export default MyPosts;
