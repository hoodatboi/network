import m from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={m.item}>
      <img src="https://s8.favim.com/orig/72/angry-art-big-bird-Favim.com-717238.jpg" />
      {props.message}
      <div>
        {props.countOfLikes}
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
