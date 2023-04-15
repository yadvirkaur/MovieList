import React from "react"
import user from "../pic.jpeg"
import { Link, useNavigate } from "react-router-dom"

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=8d689d587d0f1c9bf7c89cc8968a7d18";
const language = "&language=en-US";  
const genre= "/genre/movie/list?"
//Results by movie name search: "https://api.themoviedb.org/3/search/movie?api_key=8d689d587d0f1c9bf7c89cc8968a7d18&query=jatt";
//Results by Genre:              https://api.themoviedb.org/3/discover/movie?api_key=8d689d587d0f1c9bf7c89cc8968a7d18&sort_by=popularity.desc&with_genres=16&page=1
//list of genres:                https://api.themoviedb.org/3/genre/movie/list?api_key=8d689d587d0f1c9bf7c89cc8968a7d18&language=en-US

function Navbar(props) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [genres, setGenres] = React.useState([]);
  const [genreDetails, setGenreDetails] = React.useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.length > 0) {
      navigate(`/Search/${searchQuery}`);
    }
  };

  React.useEffect(() => {
    const getAllGenre = async () => {
      try {
        const res = await fetch(`${baseUrl}${genre}${apiKey}${language}`);
        const data = await res.json();
        setGenres(data.genres);
      } catch (error) {
        console.log(error);
      }
    };

    getAllGenre();
  },[]);

  //console.log(genres.map((genre) => (genre.name)))
  //console.log(genres.length)                  
   
  const genreElement= (genres.map((genre) => (
    <Link className=" navbar_genre navbar_tab" to={`/Genre/${genre.id}`} onClick={window.innerWidth <= 600 ? props.toggleSidebar : null}>
    <li className="navbar_text" key={genre.id}>{genre.name}</li>
    </Link>
  )))


  return (
    <div className={`navbar hidden-navbar  ${props.sidebarOpen ? "open" : "close"}`}>

          <div className="top_sidebar">
            <div className="navbar_item searchbox">
              <div className="icon">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.939453 6.27637C0.939453 9.41113 3.48828 11.96 6.62305 11.96C7.91211 11.96 9.08398 11.5278 10.0361 10.8101L13.8521 14.6333C13.9839 14.7651 14.167 14.8384 14.3501 14.8384C14.7749 14.8384 15.0532 14.5161 15.0532 14.1279C15.0532 13.9375 14.98 13.7617 14.8555 13.6299L11.0542 9.82129C11.8379 8.84717 12.3066 7.6167 12.3066 6.27637C12.3066 3.1416 9.75781 0.592773 6.62305 0.592773C3.48828 0.592773 0.939453 3.1416 0.939453 6.27637ZM1.8916 6.27637C1.8916 3.66895 4.01562 1.54492 6.62305 1.54492C9.23047 1.54492 11.3545 3.66895 11.3545 6.27637C11.3545 8.88379 9.23047 11.0078 6.62305 11.0078C4.01562 11.0078 1.8916 8.88379 1.8916 6.27637Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </div>
              <div className="navbar_text">
                <input
                type="text"
                className="input"
                placeholder="Search"
                value={searchQuery}
                onKeyDown={handleKeyDown}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              </div>
            </div>
          </div>

          <div class="middle_sidebar">
            <Link className="navbar_item navbar_tab" to="/" onClick={window.innerWidth <= 600 ? props.toggleSidebar : null}>
                <div className="icon">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.04883 15.7358H13.9146C14.8887 15.7358 15.438 15.2012 15.438 14.2417V6.91748L16.5732 7.86963C16.6904 7.96484 16.8076 8.04541 16.9614 8.04541C17.2324 8.04541 17.4448 7.88428 17.4448 7.62061C17.4448 7.44482 17.3862 7.33496 17.2544 7.2251L15.438 5.69434V2.64746C15.438 2.38379 15.2622 2.21533 14.9985 2.21533H14.3101C14.0537 2.21533 13.8706 2.38379 13.8706 2.64746V4.37598L9.79834 0.948242C9.30762 0.530762 8.71436 0.530762 8.21631 0.948242L0.738281 7.2251C0.606445 7.33496 0.547852 7.4668 0.547852 7.60596C0.547852 7.83301 0.730957 8.04541 1.03125 8.04541C1.18506 8.04541 1.30957 7.96484 1.41943 7.86963L2.53271 6.93945V14.2417C2.53271 15.2012 3.08203 15.7358 4.04883 15.7358ZM11.0654 9.75195C11.0654 9.44434 10.8677 9.24658 10.5601 9.24658H7.43262C7.125 9.24658 6.91992 9.44434 6.91992 9.75195V14.835H4.23926C3.70459 14.835 3.44092 14.564 3.44092 14.022V6.17773L8.71436 1.75391C8.89746 1.59277 9.09521 1.57812 9.29297 1.75391L14.5298 6.15576V14.022C14.5298 14.564 14.2661 14.835 13.7241 14.835H11.0654V9.75195Z"
                      fill="#EAEAEA"
                    />
                  </svg>
                </div>
                <div className="navbar_text">Home</div>
            </Link>

            <Link className="navbar_item navbar_tab" to="/Friends" onClick={window.innerWidth <= 600 ? props.toggleSidebar : null}>
                <div className="icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00732 6.81445C8.71387 6.81445 10.0835 5.31299 10.0835 3.44531C10.0835 1.62158 8.70654 0.156738 7.00732 0.156738C5.31543 0.156738 3.92383 1.63623 3.93115 3.45264C3.93848 5.32031 5.30078 6.81445 7.00732 6.81445ZM7.00732 5.95752C5.81348 5.95752 4.83936 4.86621 4.83936 3.45264C4.82471 2.09766 5.81348 1.021 7.00732 1.021C8.20117 1.021 9.17529 2.08301 9.17529 3.44531C9.17529 4.85156 8.2085 5.95752 7.00732 5.95752ZM2.26855 13.5308H11.7241C12.8008 13.5308 13.3062 13.1865 13.3062 12.4468C13.3062 10.5352 10.9038 7.81787 7 7.81787C3.08887 7.81787 0.686523 10.5352 0.686523 12.4468C0.686523 13.1865 1.19922 13.5308 2.26855 13.5308ZM2.0415 12.6665C1.70459 12.6665 1.59473 12.5859 1.59473 12.3516C1.59473 10.9673 3.55029 8.6748 7 8.6748C10.4424 8.6748 12.4053 10.9673 12.4053 12.3516C12.4053 12.5859 12.2881 12.6665 11.9585 12.6665H2.0415Z"
                      fill="#EAEAEA"
                    />
                  </svg>
                </div>
                <div className="navbar_text">Friends</div>
            </Link>

            <Link className="navbar_item navbar_tab" to="/Watchlist" onClick={window.innerWidth <= 600 ? props.toggleSidebar : null}>
                <div className="icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.09473 1.89111H12.9204C13.187 1.89111 13.4092 1.68164 13.4092 1.40869C13.4092 1.14209 13.187 0.932617 12.9204 0.932617H1.09473C0.828125 0.932617 0.618652 1.14209 0.618652 1.40869C0.618652 1.68164 0.828125 1.89111 1.09473 1.89111ZM1.09473 5.21729H5.06201C5.33496 5.21729 5.55078 5.00781 5.55078 4.73486C5.55078 4.46826 5.33496 4.25879 5.06201 4.25879H1.09473C0.828125 4.25879 0.618652 4.46826 0.618652 4.73486C0.618652 5.00781 0.828125 5.21729 1.09473 5.21729ZM7.60742 11.7998H15.123C15.6499 11.7998 15.9863 11.4697 15.9863 10.9492V5.17285C15.9863 4.66504 15.6499 4.32861 15.123 4.32861H7.60742C7.08057 4.32861 6.74414 4.66504 6.74414 5.17285V10.9492C6.74414 11.4697 7.08057 11.7998 7.60742 11.7998ZM7.6582 6.14404C7.53125 6.14404 7.44873 6.05518 7.44873 5.93457V5.23633C7.44873 5.10938 7.53125 5.02051 7.6582 5.02051H8.25488C8.38818 5.02051 8.4707 5.10938 8.4707 5.23633V5.93457C8.4707 6.05518 8.38818 6.14404 8.25488 6.14404H7.6582ZM14.4756 6.14404C14.3423 6.14404 14.2598 6.05518 14.2598 5.93457V5.23633C14.2598 5.10938 14.3423 5.02051 14.4756 5.02051H15.0723C15.1992 5.02051 15.2817 5.10938 15.2817 5.23633V5.93457C15.2817 6.05518 15.1992 6.14404 15.0723 6.14404H14.4756ZM9.35303 7.59131C9.23242 7.59131 9.15625 7.51514 9.15625 7.38818V5.47754C9.15625 5.35059 9.23242 5.27441 9.35303 5.27441H13.3774C13.498 5.27441 13.5742 5.35059 13.5742 5.47754V7.38818C13.5742 7.51514 13.498 7.59131 13.3774 7.59131H9.35303ZM7.6582 7.79443C7.53125 7.79443 7.44873 7.70557 7.44873 7.59766V6.89307C7.44873 6.76611 7.53125 6.67725 7.6582 6.67725H8.25488C8.38818 6.67725 8.4707 6.76611 8.4707 6.89307V7.59766C8.4707 7.70557 8.38818 7.79443 8.25488 7.79443H7.6582ZM14.4756 7.79443C14.3423 7.79443 14.2598 7.70557 14.2598 7.59766V6.89307C14.2598 6.76611 14.3423 6.67725 14.4756 6.67725H15.0723C15.1992 6.67725 15.2817 6.76611 15.2817 6.89307V7.59766C15.2817 7.70557 15.1992 7.79443 15.0723 7.79443H14.4756ZM1.09473 8.54346H5.06201C5.33496 8.54346 5.55078 8.32764 5.55078 8.06104C5.55078 7.79443 5.33496 7.58496 5.06201 7.58496H1.09473C0.828125 7.58496 0.618652 7.79443 0.618652 8.06104C0.618652 8.32764 0.828125 8.54346 1.09473 8.54346ZM7.6582 9.44482C7.53125 9.44482 7.44873 9.3623 7.44873 9.24805V8.54346C7.44873 8.4165 7.53125 8.32764 7.6582 8.32764H8.25488C8.38818 8.32764 8.4707 8.4165 8.4707 8.54346V9.24805C8.4707 9.3623 8.38818 9.44482 8.25488 9.44482H7.6582ZM14.4756 9.44482C14.3423 9.44482 14.2598 9.3623 14.2598 9.24805V8.54346C14.2598 8.4165 14.3423 8.32764 14.4756 8.32764H15.0723C15.1992 8.32764 15.2817 8.4165 15.2817 8.54346V9.24805C15.2817 9.3623 15.1992 9.44482 15.0723 9.44482H14.4756ZM9.35303 10.8477C9.23242 10.8477 9.15625 10.7715 9.15625 10.6445V8.75293C9.15625 8.61963 9.23242 8.54346 9.35303 8.54346H13.3774C13.498 8.54346 13.5742 8.61963 13.5742 8.75293V10.6445C13.5742 10.7715 13.498 10.8477 13.3774 10.8477H9.35303ZM7.6582 11.1016C7.53125 11.1016 7.44873 11.019 7.44873 10.8984V10.1938C7.44873 10.0669 7.53125 9.97803 7.6582 9.97803H8.25488C8.38818 9.97803 8.4707 10.0669 8.4707 10.1938V10.8984C8.4707 11.019 8.38818 11.1016 8.25488 11.1016H7.6582ZM14.4756 11.1016C14.3423 11.1016 14.2598 11.019 14.2598 10.8984V10.1938C14.2598 10.0669 14.3423 9.97803 14.4756 9.97803H15.0723C15.1992 9.97803 15.2817 10.0669 15.2817 10.1938V10.8984C15.2817 11.019 15.1992 11.1016 15.0723 11.1016H14.4756ZM1.09473 11.8633H5.06201C5.33496 11.8633 5.55078 11.6538 5.55078 11.3872C5.55078 11.1206 5.33496 10.9048 5.06201 10.9048H1.09473C0.828125 10.9048 0.618652 11.1206 0.618652 11.3872C0.618652 11.6538 0.828125 11.8633 1.09473 11.8633Z"
                      fill="#EAEAEA"
                    />
                  </svg>
                </div>
                <div className="navbar_text">Watchlist</div>
            </Link>
          
            <div className="line"></div>

            <div className="navbar_item overline">
              MOVIE GENRE LISTS
            </div>
         
            <ul className="list">
              {genreElement}
              </ul>
          </div>

          <div className="bottom_sidebar">
          <div className="user user_profile">
            <div className="user_img">
              <img src={user} alt="" />
            </div>
            <div className="user_details">
              <div className="user_name">Yadvir Kaur</div>
              <div className="user_handle">@yadvir</div>
            </div>
          </div>
          </div>
      </div>
  );
}

export default Navbar;



