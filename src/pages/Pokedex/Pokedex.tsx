import Layout from "./layout";

function Pokedex() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Layout />
      </div>
    </>
  );
}

export default Pokedex;
