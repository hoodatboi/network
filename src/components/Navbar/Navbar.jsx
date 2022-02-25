import n from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={n.Nav}>
      <div className={n.item}>
        <a href="/profile"> Profile </a>
      </div>
      <div className={n.item}>
        <a href = "/dialogs"> Messages</a>
      </div>
      <div className={`${n.item} ${n.active}`}>
        <a>News</a>
      </div>
      <div className={n.item}>
        <a>Music</a>
      </div>
      <div className={n.item}>
        <a>Settings </a>
      </div>
    </nav>
  );
};

export default Navbar;
