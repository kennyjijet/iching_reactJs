import React from 'react';
import { Form, FormControl, Navbar, Nav, Button } from 'react-bootstrap'

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { //method is required, and is the method that actual outputs HTML to the DOM.
        return (

            <div className="Navigation">
                <>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                </>


            </div>
        );
    }
}
export default Navigation;