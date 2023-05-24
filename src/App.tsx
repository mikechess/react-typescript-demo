import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

function App() {

  return (
    <div className="App">
     <Status status="error" />
     <Heading>Placeholder text</Heading>
     <Oscar>
      <Heading>Oscar goes to Leonardo Dicapario!</Heading>
     </Oscar>
     <Greet name="Michael" isLoggedIn={false} />
    </div>
  );
}

export default App;
