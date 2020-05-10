import React from 'react';
import AllCards from './components/card/allCards';
import Authenticated from './components/authentication/authenticated';

function App() {
  return (
    <Authenticated>
      <AllCards/>
    </Authenticated>
  )
}

export default App;
