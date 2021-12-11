export function MTests({ M1_Test, M2_Test, M3_Test }) {
  return (
    <>
      <div className="Mtest-space-container">
        M1 test: <span className="push">{M1_Test.toFixed(2)}</span>
      </div>
      <div className="Mtest-space-container">
        M2 test: <span className="push">{M2_Test.toFixed(2)}</span>
      </div>
      <div className="Mtest-space-container">
        M3 test: <span className="push">{M3_Test.toFixed(2)}</span>
      </div>
    </>
  );
}
