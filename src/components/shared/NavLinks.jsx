import { NavLink } from "react-router-dom";

const NavLinks = () => (
    <>
        <NavLink end to="/"><span>Home</span></NavLink>
        <NavLink end to="/login"><span>Login</span></NavLink>
        <NavLink end to="/register"><span>Register</span></NavLink>
        <NavLink end to="/my-prescriptions"><span>My Prescriptions</span></NavLink>
        <NavLink to="/consumers"><span>Consumers</span></NavLink>
    </>
)

export default NavLinks;