import styles from "./BackButton.module.css";

export function BackButton({ content }) {
  return (
    <button
      type="button"
      className={`btn btn-outline-light btn-lg ${styles["btn-lg"]}`}
    >
      {content}
    </button>
  );
}
