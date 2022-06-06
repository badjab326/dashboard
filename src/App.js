import logo from './logo.svg';
import './App.css';
import "./styles.css";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Rating from "./components/Rating";
import Analysis from "./components/Analysis"
import Visitors from "./components/Visitors"

function App() {
  return (
    <div className="dashboard">
      <Navbar />
      <Reviews />
      <Rating />
      <Analysis />
      <Visitors />
    </div>
  )
};

export default App;
