import "./styles.css";
import Navbar from "./component/navbar/Navbar";
import Container from "./component/container/Container";

export default function App() {
  return (
    <div className="containerfluid">
      <Navbar />
      <Container />
    </div>
  );
}
