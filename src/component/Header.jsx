import React from 'react';
import {CarouselItem, Container, Dropdown, FormControl, Navbar, Badge, Nav} from "react-bootstrap"
import {FaShoppingCart} from "react-icons/fa";
import {link} from "react-router-dom";



const Header = () => {
  return (
    <Navbar bg='white' variant='white' style={{height:60}} className="shadow p-3 mb-5 bg-white rounded">
     <Container>
        <Navbar.Brand>
            <link to='/'>Demak Ventures</link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl style={{width:300}} 
            placeholder="search for product "
            className='m-auto'
            />

        </Navbar.Text>
        <Nav>
            <Dropdown alignRight>
                <Dropdown.Toggle variant='success'>
                    <FaShoppingCart color='white' fontSize="25px" />
                    <Badge>{10}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minWidth: 370}}>
                    <span style={{ padding:10}}>Cart is empty!</span>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
     </Container>
    </Navbar>
  );
}

export default Header;
