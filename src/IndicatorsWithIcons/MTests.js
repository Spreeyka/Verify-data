export function MTests({ M1_Test, M2_Test, M3_Test }) {
  return (
    <>
      <p>M1 test: {M1_Test.toFixed(2)}</p>
      <p>M2 test: {M2_Test.toFixed(2)}</p>
      <p>M3 test: {M3_Test.toFixed(2)}</p>
    </>
  );
}
