import { Suspense } from 'react';
import Score from './Score';
import Friends from './Friends';
import Counter from './Counter';
import User from './User';
import Posts from './Posts';
import './App.css';

// ১. Single User Fetch (Promise)
const fetchUser = fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json());

// ২. Friends List Fetch (Async Function)
const fetchfriendsData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
  
  //৩. Posts List Fetch (Async Function)
 
}
 const fetchPostsData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  }



function App() {

const postsPromise = fetchPostsData();

const friendPromise = fetchfriendsData();

  // ইভেন্ট হ্যান্ডলার
  function handleClick() {
    alert('Button clicked!');
  }

  function handleClick2(parameter) {
    alert(`Dhussala! ${parameter}`);
  }

  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<div className="loader">Loading Posts...</div>}>
        <Posts postsPromise={postsPromise} />

      </Suspense>

      {/* Friends Section */}
      <Suspense fallback={<div className="loader">Friends are coming...</div>}>
        <Friends friendsPromise={friendPromise}/>
      </Suspense>

      {/* Single User Section */}
      <Suspense fallback={<div className="loader">Loading User...</div>}>
        <User fetchUser={fetchUser} />
      </Suspense>

      <hr />

      {/* Counter & Score Components */}
      <div className='card'>
        <Score />
      </div>
      
      <div className='card'>
        <h4>Count with Counter component (useState)</h4>
        <Counter />
      </div>

      {/* Event Handler Examples */}
      <div className='card'>
        <p>This is a simple onclick event handler.</p>
        <button onClick={handleClick}>Click me</button>
      </div>
      
      <div className='card'>
        <p>Passing a parameter with arrow function</p>
        <button onClick={() => handleClick2('Amk tip dili ken?')}>
          Click me with parameter
        </button>
      </div>
    </>
  )
}

export default App;