import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react";
import logo from "./../assets/report.me.ico";

import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={logo} alt="Logo" />

      <nav className="main-navigation">
        <NavLink to="/">
          <House />
          <span>Home</span>
        </NavLink>
        <a href="">
          <Hash></Hash>
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <User />
          <span>Profiles</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <button className="new-tweet">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}

export default SideBar;
