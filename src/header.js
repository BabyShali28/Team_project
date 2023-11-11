import { Outlet, Link } from "react-router-dom";

function Header(){
    return (
        <>
        <nav>
          <ul>
            <li>
              <Link to={`/todo`}>todo</Link>
            </li>
            <li>
              <Link to={`/user`}>users</Link>
            </li>
          </ul>
        </nav>
        </>
    )
}

export default Header;