import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../Logo/about_us.jpg';

const AboutUS = () => {
	return (
		<div>
			<div>
				<img className="w-50  m-5" src={img} alt="" />
			</div>
			<Container>
				<Row className="m-3">
					<Col>
						
					</Col>
					<Col>
						<h1>
							<span className="text-info">1.</span> Expertise
						</h1>
						<p>
							We try our best to serv our patients
						</p>
					</Col>
				</Row>
				<Row className="m-3">
					<Col>
						
					</Col>
					<Col>
						<h1>
							<span className="text-info">2.</span> Quality
						</h1>
						<p>We won't compromise with our qulaity you can get your best treatment form here</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AboutUS;
