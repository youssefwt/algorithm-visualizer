import "./App.sttyled.js";
import { Bars } from "./components/Bars-contianer/Bars";
import { Aside } from "./components/aside/aside";
import { Container } from "./App.sttyled.js";
import { Header } from "./components/header/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Bars />
        <Aside />
      </Container>
    </>
  );
}

export default App;
