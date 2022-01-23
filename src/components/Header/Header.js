import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={`${styles.wrapper}`}>
      <p className={`${styles.title}`}>Benford's law</p>
      <div className={`${styles.description}`}>
        <div>
          <p>The law of anomalous numbers, or the first-digit law</p>
        </div>
        <div>
          <p>
            Observation about the frequency distribution of leading digits in
            many real-life sets of numerical data
          </p>
        </div>
      </div>
    </header>
  );
}
