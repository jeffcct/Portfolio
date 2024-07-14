import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header">
        <h1>Jeff Smith</h1>
        <h3>Computer Science Graduate</h3>
        <p>I'm about to graduate a Bsc in Computer Science. I really like building cool visual projects and interpreting complex mathematical structures.</p>
        
        <h5>View My Profiles:</h5>
        <a href="https://github.com/jeffcct">
          <img class="icon" src="images/githubIcon.png" alt="GitHub" />
        </a>
        <a href="https://editor.p5js.org/jffrysith/sketches">
          <img class="icon" src="images/p5jsIcon.png" alt="p5.js" />
        </a>
        <a href="www.linkedin.com/in/jffrysith">
          <img class="icon" src="images/LIIcon.png" alt="LinkedIn" />
        </a>
      </div>
      <iframe src="https://editor.p5js.org/jffrysith/full/fnySISSqk" width="600px" height="400px" title="Flow Field program"></iframe>
      <iframe src="https://editor.p5js.org/jffrysith/full/H5tJW2_JQ" width="600px" height="400px" title="DBScan clustering algorithm"></iframe>
      <iframe src="https://editor.p5js.org/jffrysith/full/nWpAy8HGu" width="600px" height="400px" title="Wave Program"></iframe>
    </div>
  );
}

export default App;
