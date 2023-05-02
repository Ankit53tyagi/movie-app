import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { fetchAllProducts, fetchAllSeries } from '../ProductSlice/ProductSlice';
import { Link } from 'react-router-dom';

const Header = () => {

  const dispatch = useDispatch();

  const [search,setSearch] = useState('Harry')
  console.log(search)

  useEffect(()=>{
    dispatch(fetchAllProducts(search));
    dispatch(fetchAllSeries(search));
  },[search])

  return (
      <Navbar bg="dark" variant="dark" className='sticky-top'>
        <Container fluid className='px-5'>
          <Link className='navbar-brand' to='/'><b>Movie App</b></Link>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
          <input type='text' className='form-control w-25' placeholder='Search movies & shows' onChange={(e)=>setSearch(e.target.value)} />
        </Container>
      </Navbar>
  );
}

export default Header;