import { useState } from "react";
import { DataModal } from "./DataModal";

export function Button() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="button-container">
      <DataModal show={showModal} onHide={() => setShowModal(false)} />
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="btn btn-outline-light btn-lg"
      >
        Check your own data
      </button>
    </div>
  );
}
