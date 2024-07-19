import React, { useState } from 'react';
import Counter from './Counter';
import Greeting from './Props.js';
import Form from './Form.js';
import GreetUser from './Greeting.js';
import ComplexForm from './ComplexForm.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="App">
      <Counter />
      <Greeting name="Collins"/>
      <Greeting name="Alice"/>
      <Form />
      <GreetUser isLoggedIn={isLoggedIn} />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}</button>
      <ComplexForm />
    </div>
  );
}

export default App;
