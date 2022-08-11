import numberStore from './../store/NumberStore.js';
import arrayStore  from './../store/ObjectArrayStore.js';
import asyncStore  from './../store/AsyncStore.js';

const Forth = () => {
  return (
    <div className="container">
      <h1 className="centered">Review elements in global store</h1>
      { numberStore.num ? <h2>Saved number in a store: {numberStore.num}</h2> : <h2>Single number in a store not saved !</h2> }
      <hr />
      <h2>Information about array elements in store:</h2>
      { arrayStore.todos.length > 0
        ? arrayStore.todos.map(t => <p key={t.id}>{t.title}</p>)
        : <p>No elements in array found !</p>
      }
      <hr />
      <h2>Information about downloaded elements (using async function) in store:</h2>
      { asyncStore.todos.length > 0
        ? asyncStore.todos.map(t => <p key={t.id}>{t.title}</p>)
        : <p>No elements found !</p>
      }
    </div>
  );
}
export default Forth;
