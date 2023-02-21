import Progress from './components/ProgressBar'

function App() {
  return (
    <div className="App">
        <h2 className="m-3">Progress bar</h2>
      <Progress percentage={40} />
    </div>
  );
}

export default App;
