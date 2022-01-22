import { useState } from "react";
import { DataModal } from "../DataModal/DataModal";

export function Button({ content }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="button-container">
      <DataModal show={showModal} onHide={() => setShowModal(false)} />
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="btn btn-outline-light btn-lg"
      >
        {content}
      </button>
    </div>
  );
}
