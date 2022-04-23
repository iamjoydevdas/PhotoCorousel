
import { Container, Navbar,NavDropdown, Nav } from 'react-bootstrap'
import Link from 'next/link'
import { Fragment, useContext, useState } from 'react';
import { SessionContext } from '../../lib/SessonContext';
import { useRouter } from 'next/router';


const HomeMenu = () => {
    const router = useRouter();
    const { session } = useContext(SessionContext);
    let  [ showHide, setShowHide ] = useState<boolean>(session.isLoggedIn);

    showHide = session.isLoggedIn;

    const logout = () =>{
        session.loggedInUser = null;
        session.isLoggedIn = false;
        setShowHide(old => !old);
        router.push("/");
    }

    console.log("After login", session);

    return (

        <Fragment>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Photo Album App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                        <Link href="/registration" >
                            <Nav.Link href="#/registration" className={showHide ? "Hide" : "Show"}>Albums</Nav.Link>
                        </Link>
                        <Link href="/login">
                            <Nav.Link href="#login" className={showHide ? "Hide" : "Show"}>Login</Nav.Link>
                        </Link>
                        <Link href="/jobs/jobs" >
                            <Nav.Link href="#jobs" className={session.loggedInUser.user.userType != 'C' ? "Hide" : "Show"}>Find Jobs</Nav.Link>
                        </Link>
                        <Link href="/offers/mine" >
                            <Nav.Link href="#myOffers" className={session.loggedInUser.user.userType == 'C' ? "Hide" : "Show"}>Job Offers</Nav.Link>
                        </Link>
                    </Nav>
                    <Navbar.Collapse id="navbar-dark-example" className={`navbar-right`} >
                        <Nav className={`ml-auto ${!showHide ? "Hide" : "Show"}`}>
                            <NavDropdown 
                                id="nav-dropdown-dark-example"
                                title={`Welcome, ${session.loggedInUser? session.loggedInUser.user.username: 'employer'}`} 
                            >
                                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default HomeMenu
