import Navigation from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Space from "./components/space";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <Space />
      <About />
      <Space />
      <Tech />
      <Space />
      <Projects />
      <Space />
      <Contacts />
    </div>
  );
}

export default App;
