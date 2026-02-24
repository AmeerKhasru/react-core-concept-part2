import Score from './Score';
import Counter from './Counter'
import './App.css'

function App() {
  function handleClick() {
    alert('Button clicked!');
  }

  function handleClick2(parameter) {
    alert(`dhussala! ${parameter}`);
  }
  


  return (
    <>
      
      <h1>Vite + React</h1>

      <div className='card'>
        <Score />
      </div>
      
      <div className='card'>
        <h4>count with Counter component with usestate</h4>
        <Counter />

      </div>



     <div className='card'>
      <p>This is onclick event handler.</p>
      <button onClick={handleClick}>Click me</button>
     </div>
      
      <div className='card'>
        <p>passing a parameter with arrow function </p>
      <button onClick={() => handleClick2('amk tip dili ken')}>Click me with parameter</button>
      </div>
    
    </>
  )
}

export default App
