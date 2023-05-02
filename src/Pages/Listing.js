import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts,fetchAllSeries, getAllProducts,getAllSeries } from '../ProductSlice/ProductSlice'
import Slider from "react-slick";
const Listing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const dispatch = useDispatch();
  const listing = useSelector(getAllProducts);
  const series = useSelector(getAllSeries);


  useEffect(()=>{
    dispatch(fetchAllProducts());
    dispatch(fetchAllSeries())
  },[dispatch])

  return (
    <Container className='py-5 bg-dark' fluid>
      <Row>
        <Col xl={12} className='px-5'>
          <h5 className='text-white'>Movies</h5>
        </Col>
       </Row> 
      <Row className='pb-5'>
        <Col xl={12} className='px-5'>
          <Slider {...settings}>
          {
            Object.keys(listing).Search === 0 ? <div>Loading...</div> :
            listing?.Search?.map((item,index)=>(
                <ProductCard item={item} />
            )) 
          }
          </Slider>
        </Col>
      </Row>

      <Row className='pt-5'>
        <Col xl={12} className='px-5'>
          <h5 className='text-white'>Series</h5>
        </Col>
       </Row> 
      <Row>
        <Col xl={12} className='px-5'>
          <Slider {...settings}>
          {
            series?.Search === 0 ? <div>Loading...</div> :
            series?.Search?.map((item,index)=>(
                <ProductCard item={item} />
            )) 
          }
          </Slider>
        </Col>
      </Row>
    </Container>
  )
}

export default Listing