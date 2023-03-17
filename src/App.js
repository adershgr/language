import { useState } from 'react';
import './App.css';

function App() {

    const [programming, setProgramming] = useState([
      { name: 'javascript', likes: 4 },
      { name: 'python', likes: 3 },
      { name: 'ruby', likes: 2 },
      { name: 'java', likes: 0 }
    ]);

  function Like(index) {
    const update = [...programming];
    update[index].likes++
    setProgramming(update);
  }

  function Unlike(index) {
    const update = [...programming];
    update[index].likes--
    setProgramming(update);
  }

  function Delete(index) {
    const update = [...programming];
    update.splice(index, 1);
    setProgramming(update);
  }

  return (
    <div>
      {programming.map((lng, index) => (
        <div key={index} className="js" >
          <h2>{lng.name} ({lng.likes})</h2>
          <div >
          <button onClick={() => Like(index)} className="customDiv">Like</button>
          <button onClick={() => Unlike(index)} className="customDiv">Unlike</button>
          <button onClick={() => Delete(index)} className="customDiv">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
