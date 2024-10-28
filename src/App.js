import "./style.css";

function App() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Facts Logo" />
        <h1>Post a Trip</h1>
      </div>

      <button className="btn btn-large btn-open">Set a trip</button>
    </header>
  );
}

export default App;
