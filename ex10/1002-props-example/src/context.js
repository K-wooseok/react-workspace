import Box from "./Box";

function Content({ theme }) {
  return (
    <>
      <p>현재 테마: {theme}</p>
      <Box theme={theme} />
    </>
  );
}

export default Content;
