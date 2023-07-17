import React from 'react';
import { Carousel, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/about">About</a>
        </nav>
      </header>

      <div className="container">
        <h1>Welcome to our Food Website</h1>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="slide1.jpg"
              alt="Slide 1"
            />
            <Carousel.Caption>
              <h3>Slide 1</h3>
              <p>Description for Slide 1</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="slide2.jpg"
              alt="Slide 2"
            />
            <Carousel.Caption>
              <h3>Slide 2</h3>
              <p>Description for Slide 2</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="slide3.jpg"
              alt="Slide 3"
            />
            <Carousel.Caption>
              <h3>Slide 3</h3>
              <p>Description for Slide 3</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="food1.jpg" />
              <Card.Body>
                <Card.Title>Food Item 1</Card.Title>
                <Card.Text>Price: $10</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="food2.jpg" />
              <Card.Body>
                <Card.Title>Food Item 2</Card.Title>
                <Card.Text>Price: $12</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="food3.jpg" />
              <Card.Body>
                <Card.Title>Food Item 3</Card.Title>
                <Card.Text>Price: $15</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 Food Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
