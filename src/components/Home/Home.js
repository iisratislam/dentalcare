import React from 'react';
import './Home.css';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import img from '../../Logo/cover 1.jpg';
import img2 from '../../Logo/2.jpg';
import img3 from '../../Logo/cover2.jpg';
import abc from '../../Logo/dental implants.jpg';
import filling from '../../Logo/dental-filling.jpg';
import dentures from '../../Logo/dentures.jpg';
import teeth from '../../Logo/laser-teeth-whitening.jpg';
import ulcher from '../../Logo/mouth-ulcher.jpg';
import sm from '../../Logo/perfect-smile.jpg';
import cr from '../../Logo/Certificate 1.jpg';
import dr from '../../Logo/Certificate 2 .jpg';
import fr from '../../Logo/Certificate 3.jpg';
import Services from '../Services/Services';




//carousel....................

const Home = () => {
	return (
		<div>
			<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Dental Instruments</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
    

    <Carousel.Caption>
      <h3>Best Dentiest</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

			{/* <img height='600px' width='62%' src={img} alt="" /> */}
			<div>
				<h1 className="text-primary">Our Spaciality</h1>
				<Container>
					<Row className="m-5 g-5">
						<Col>
							<Card style={{ width: '22rem' }}>
								<Card.Img variant="top" src={abc} />
								<Card.Body>
									<Card.Title>Dental implants</Card.Title>
									<Card.Text>
										<p>
										</p>
										
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>



						<Col>
							<Card style={{ width: '22rem' }}>
								<Card.Img variant="top" src={filling} />
								<Card.Body>
									<Card.Title>Dental-filling </Card.Title>
									<Card.Text>
										<p>
											</p>
											
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '22rem' }}>
								<Card.Img variant="top" src={dentures} />
								<Card.Body>
									<Card.Title>Cosmetic dentistry</Card.Title>
									<Card.Text>
										<p>
										</p>
										
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				
					<Row className="m-5 ">
						<Col>
							<Card style={{ width: '22rem' }}>
								<Card.Img variant="top" src={teeth} />
								<Card.Body>
									<Card.Title>wishdom tooth removal</Card.Title>
									<Card.Text>
										<p>
										</p>
										
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>



						<Col>
							<Card style={{ width: '22rem' }}>
								<Card.Img variant="top" src={ulcher} />
								<Card.Body>
									<Card.Title>orthodontics </Card.Title>
									<Card.Text>
										<p>
										</p>
										
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '22rem' }}>
								<Card.Img variant="top" src={sm} />
								<Card.Body>
									<Card.Title>Endodontics</Card.Title>
									<Card.Text>
										<p>
										</p>
										
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>


					</Container>
					<Container>

						</Container>


				 {/* carousel */}


					<Container >
					<div className= "row p-5 panda-bg-info bg-gradient d-flex align-items-center" >

						<div className="col-lg-7">

						<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cr}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={dr}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fr}
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

                        </div>

                         <div className="col-lg-5">

    <section className="container p-5" id="BEST REVIEW">
      <div className="text">
        <h1>Brush regularly but not aggressively. ...
Use fluoride</h1>
      </div>

      <div className="row d-flex p-5">
        <div className="col-lg-6 ">
		

        </div>
        <div className="col-lg-6">
		 </div>
      </div>
    </section>
        </div>
					</div>
					</Container>
					<Container>
						<Services/>
					</Container>


			</div>
		</div>
	
	);
};

export default Home;

