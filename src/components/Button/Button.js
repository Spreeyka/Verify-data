import { useState } from "react";
import { DataModal } from "../DataModal/DataModal";
import styles from "./Button.module.css";

export function Button({ content }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`${styles.wrapper}`}>
      <DataModal show={showModal} onHide={() => setShowModal(false)} />
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className={`btn btn-outline-light btn-lg ${styles["btn-lg"]}`}
      >
        {content}
      </button>
    </div>
  );
}
