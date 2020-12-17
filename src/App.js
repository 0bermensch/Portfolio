import Navigation from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <About />
      <Tech />
      <Projects />
      <Info />
    </div>
  );
}

export default App;
