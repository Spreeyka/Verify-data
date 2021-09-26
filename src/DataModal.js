import Button from "react-bootstrap/Button";
import { Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Charts from "./Charts";
import { useState } from "react";

export function DataModal(props) {
  const [formData, setFormData] = useState("");

  function handleChange(e) {
    setFormData(e.target.value);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add your data in JSON format
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Jak przekazać dane z text area do Charts component? */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => handleChange(e)}
              style={{ height: "30vw" }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link
          to={{
            pathname: "/custom/charts",
            type: "custom",
            formData,
          }}
        >
          <Button variant="dark" onClick={props.onHide}>
            Check data
          </Button>
        </Link>
        <Button variant="dark" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
