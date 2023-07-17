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
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          {/* Repeat the above Accordion.Toggle and Accordion.Collapse for other details */}
        </Accordion>
      </div>
    </div>
  );
};

export default About;
