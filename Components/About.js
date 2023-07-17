import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>

      <div className="container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Organization Name
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {/* Add organization details here */}
                <p>Address: 123 Main Street</p>
                <p>Location: City, Country</p>
                <p>Contact: info@organization.com</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Another Detail
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {/* Add other detail content here */}
                <p>Address: 456 Elm Street</p>
                <p>Location: City, Country</p>
                <p>Contact: contact@organization.com</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Yet Another Detail
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                {/* Add other detail content here */}
                <p>Address: 789 Oak Street</p>
                <p>Location: City, Country</p>
                <p>Contact: info@organization.com</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default About;
