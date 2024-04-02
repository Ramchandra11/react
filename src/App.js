
import './App.css';
let name="Ramchandra";

function App() {
  return (
   <>
   <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Login</li>
   </nav>
   <div className="container">
    <h1>Hello {name}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, consectetur.</p>
   </div>
   </>
  );
}

export default App;
