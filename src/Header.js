import "./Header.css";

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <a href="/list">List</a>
        </li>
        <li>
          <a href="/comment">Comment</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
