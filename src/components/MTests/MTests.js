import styles from "./MTests.module.css";

export function MTests({ M1_Test, M2_Test, M3_Test }) {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        M1 test: <span className={`${styles.push}`}>{M1_Test.toFixed(2)}</span>
      </div>
      <div className={`${styles.wrapper}`}>
        M2 test: <span className={`${styles.push}`}>{M2_Test.toFixed(2)}</span>
      </div>
      <div className={`${styles.wrapper}`}>
        M3 test: <span className={`${styles.push}`}>{M3_Test.toFixed(2)}</span>
      </div>
    </>
  );
}
