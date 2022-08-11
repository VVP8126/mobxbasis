import storeInstance from '../store/ObjectArrayStore.js';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

const ArrayPage = observer(() => { // function observer() makes React update components after MobX state change
  
  const [postTitle, setPostTitle] = useState("");
  const [postText,  setPostText]  = useState("");

  const addPost = () => {
    if(postTitle.length > 0 && postText.length > 0) {
      storeInstance.add({id:-1, title:postTitle, body:postText});
    } else {
      alert("Fill in data about post title and post text");
    }
  }
  
  return (
    <div className='container'>
      <h1 className="centered">Array storing</h1><br />
      <hr /><br/>
      <div className='row margined'>
      <div className='col33'>
        <input  className='inputWidth100' placeholder='Post title' 
                onChange={e => setPostTitle(e.target.value)} />
      </div>
      <div className='col33'>
        <input  className='inputWidth100' placeholder='Post text' 
                onChange={e => setPostText(e.target.value)}/>
      </div>
        <div className='col33'>
          <button className='btn blockWidth50' onClick={addPost}>
            ADD POST
          </button>
        </div>
      </div>
      { storeInstance.todos.length > 0
        ? storeInstance.todos.map(
            t => 
            <div key={t.id} className='row margined'>
              <div className='col50'>
                <h3>{t.id}. {t.title}</h3>
                <p>{t.body}</p>
              </div>
              <div className='col50'>
                <button className='btn blockWidth33' onClick={() => storeInstance.del(t.id) }>
                  DELETE
                </button>
              </div>
            </div>
          )
        : <h2 className='centered margined'>Array elements absent</h2>
      }
    </div>
  );
});
export default ArrayPage;
