import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

export default class Komponent extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center p-3 mb-2 bg-primary-subtle text-primary-emphasis">
          <h1>Materi React.js</h1>
        </div>
        <div className="container">
          <Row>
            <Col>
              <ClassComponent nama="ramadhany" />
            </Col>
            <Col>
              <FunctionalComponent nama="ramadhany" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
