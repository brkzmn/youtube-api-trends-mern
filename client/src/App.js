import "./App.css";
import TrendVideos from "./components/TrendVideos";
// import dotenv from "dotenv";

// dotenv.config();

function App() {
  console.log("app loaded");
  return (
    <div className="App">
      <TrendVideos />
    </div>
  );
}

export default App;
