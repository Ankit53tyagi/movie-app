import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { clear, fetchSingleInfo, getSingle } from '../ProductSlice/ProductSlice';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const dispatch = useDispatch();

  const single = useSelector(getSingle)
  console.log(single)

  useEffect(() => {
    dispatch(fetchSingleInfo(id))
    return (() => {
      dispatch(clear())
    })
  }, [id, dispatch])

  return (
    <Container className='py-5 bg-dark px-5' style={{ height: '93vh' }} fluid>
      {
        Object.keys(single).length === 0 ? <div className='d-flex justify-content-center align-items-center text-white' style={{ height: '100%', width: '100%' }}>loading...</div> :
          <Row className='justify-content-center align-items-center'>
            <Col xl={12} className='mb-3 text-end'><Link className='btn btn-light rounded-5 text-danger fw-bold col-2' onClick={()=>navigate(-1)}><small>Go Back</small></Link></Col>

            <Col xl={9} className='h-100'>
              <div className='text-white'>
                <h2>{single.Title}</h2>
                <div className='d-flex justify-content-between align-items-center col-8'>
                  <span><b className='text-danger'>Year</b> : {single.Year}</span>
                  <span><b className='text-danger'>Rated</b> : {single.Rated}</span>
                  <span><b className='text-danger'>Released</b> : {single.Released}</span>
                  <span><b className='text-danger'>Runtime</b> : {single.Runtime}</span>
                </div>
                <small className='my-3 d-block'><strong className='text-danger'>Genre</strong> : {single.Genre}</small>
                <hr/>
                <ListGroup as="ol" numbered className='bg-dark col-7 rounded-0'>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Director</div>
                      {single.Director}
                    </div>
                    <Badge bg="primary" pill>
                      {single?.Director?.split(',').length}
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Writer</div>
                      {single.Writer}
                    </div>
                    <Badge bg="primary" pill>
                      {single?.Writer?.split(',').length}
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Actors</div>
                      {single.Actors}
                    </div>
                    <Badge bg="primary" pill>
                      {single?.Actors?.split(',').length}
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Language</div>
                      {single.Language}
                    </div>
                    <Badge bg="primary" pill>
                      {single?.Language?.split(',').length}
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Country</div>
                      {single.Country}
                    </div>
                    <Badge bg="primary" pill>
                      {single?.Country?.split(',').length}
                    </Badge>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col xl={3} className='h-100'>
              <img src={single.Poster} className='img-fluid border rounded-1' />
            </Col>
          </Row>
      }
    </Container>
  )
}

export default Details