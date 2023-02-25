import './Content.css';
import { useState } from 'react';

const Content = () => {
  const [nameTest, handleName]
  const handleNameChanges = () => {
    const names = ['bob', 'juan', 'peter'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <main>
      <p className='mysample'>
        Hello {handleNameChanges()} !
      </p>
    </main>
  )


}

export default Content;