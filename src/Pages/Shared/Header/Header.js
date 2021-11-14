
import React from 'react';
import { Button, Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()

    return (
        <div>
            <Navbar fixed="sticky" bg="dark" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">GoTravel</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Link to="/allproducts" style={{textDecoration:'none', color:'grey', marginTop:'8px'}}>All Products</Link>
                        <Nav.Link href="#teams">Team</Nav.Link>
                        {user?.email ?
                            <Link to="/"><Button onClick={logOut}>Logout</Button></Link> :
                            <Nav.Link to="/" as={Link} to="/login">Login</Nav.Link>}

                        {/* {user?.email ?
                            <Button style={{ margin: '20px' }} className="btn btn-warning">All orders</Button> :
                            <Nav.Link as={Link} to="/login"></Nav.Link>}

                        {user?.email ?
                            <Button style={{ margin: '20px' }} className="btn btn-warning">Manage your orders</Button> :
                            <Nav.Link as={Link} to="/login"></Nav.Link>}

                        {user?.email ?
                            <Button style={{ margin: '20px' }} as={Link} to="/addservice" className="btn btn-warning">Add a service</Button> :
                            <Nav.Link as={Link} to="/login"></Nav.Link>} */}

                        {user?.email ?
                            <Button style={{ margin: '20px' }} as={Link} to="/dashboard" className="btn btn-warning">Dashboard</Button>:
                            <Nav.Link as={Link} to="/login"></Nav.Link>}


                        <Navbar.Text>
                            <h5 style={{ marginLeft: '30%' }}>Actived Email Id: <a href="#login">{user?.email}</a></h5>
                        </Navbar.Text>
                    </Nav>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header

