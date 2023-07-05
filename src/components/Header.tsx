import { Sparkle } from "phosphor-react";
import "./Header.css";

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  return (
    <div className="timeline-header">
      {props.title}
      <Sparkle />
    </div>
  );
}

export default Header;
