import Button from "react-bootstrap/Button";
import { Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CsvReader from "../CsvReader/CsvReader";
import styles from "./DataModal.module.css";

export function DataModal(props) {
  const [formData, setFormData] = useState("");
  const [isCsvLoaded, setIsCsvLoaded] = useState(false);
  let callback = (valueFromCsvReader) => {
    setIsCsvLoaded(valueFromCsvReader);
  };
  let pathname;

  function handleChange(e) {
    setFormData(e.target.value);
    localStorage.setItem("data", e.target.value);
  }

  function handleErrorJson() {
    if (document.querySelector(`.${styles.error}`)) {
      document.querySelector(`.${styles.error}`).style.visibility = "visible";
      document.querySelector(".form-control").style.boxShadow =
        "0px 0px 0px 0.3rem red";
    }
  }

  function handleCorrectJson() {
    document.querySelector(".form-control").style.boxShadow =
      "0px 0px 0px 0.3rem green";
    document.querySelector(`.${styles.error}`).style.visibility = "hidden";
    document.querySelector(".btn-dark").disabled = false;
  }

  useEffect(() => {
    try {
      JSON.parse(formData);
      handleCorrectJson();
    } catch (error) {
      handleErrorJson();
    }
  }, [formData]);

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
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                handleChange(e);
              }}
              style={{ height: "33vw" }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <p className={`${styles.error}`}>
        Incorrect format. Make sure to insert data in JSON
      </p>
      <Modal.Footer>
        <CsvReader callbackFunc={callback}>
          {(pathname = isCsvLoaded ? "/csv/charts" : "/custom/charts")}
        </CsvReader>
        <Link
          to={{
            pathname: pathname,
          }}
        >
          <Button variant="dark" onClick={props.onHide} disabled>
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
