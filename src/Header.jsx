import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>&nbsp;
            <NavLink to='/rules'>Rules</NavLink> &nbsp;
            <NavLink to="/play/normal">Play Normal</NavLink> &nbsp;
            <NavLink to="/play/hard">Play Hard</NavLink>
        </div>
    )
}