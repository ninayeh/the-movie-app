import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Logo } from './logo.svg';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      
        <Navbar.Brand href="#home">Popular Movie Libriary</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Data sourece  <a href="#login"><Logo /></a>
                 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;