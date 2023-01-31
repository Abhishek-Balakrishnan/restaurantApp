import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <><Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://i.postimg.cc/C5kdQ386/236119190-115438560833539-5682336773768300535-n.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Chef Pillai
      </Navbar.Brand>
    </Container>
  </Navbar>
  </>
  )
}

export default Header