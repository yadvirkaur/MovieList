import React from "react"
import { Link } from "react-router-dom";

function Header(props) {
  // const [sidebarOpen, setSidebarOpen] = React.useState(false);

  // const handleClick = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  
  return (
     <header className="header">
      <button className="menu-icon-btn" onClick={props.toggleSidebar}>
        <svg
          fill="none"
          // width="1.8rem"
          // height="1.8rem"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            fill="#eaeaea"
          />
        </svg>
      </button>
      <Link className="logo" to="/">Movielist</Link>
     </header>

  );
}

export default Header;