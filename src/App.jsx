import './App.css';
import Card from './components/Card';

function App() {
  const user = {
    name: 'Pitchayut',
    job: 'Student',
    hobby: 'Travel'
  }
  return (
    <div className="App">
      <Card user={user} />
    </div>
  );
}

export default App;
