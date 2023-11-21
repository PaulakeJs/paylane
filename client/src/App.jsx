import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
    <nav>nav Bar</nav>
    <Outlet/>
    <footer>footer</footer>
    </>
  );
}

export default App;
