import { observer } from 'mobx-react-lite';
import store from './../store/AsyncStore.js';

const AsyncPage = observer(() => {

  return (
    <div className='container'>
      <h1 className="centered">Downloaded element array storing</h1><br />
      <hr /><br/>
      <div className='margined'>
        <button className='btn blockWidth33' onClick={() => store.load() }>
          DOWNLOAD
        </button>
      </div>
      { store.todos.length > 0
        ? store.todos.map(
            t => 
            <div key={t.id} className='row margined'>
              <div className='col50'>
                <h3>{t.id}. {t.title}</h3>
                <p>{t.body}</p>
              </div>
              <div className='col50'>
                <button className='btn blockWidth33' onClick={() => store.del(t.id) }>
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
export default AsyncPage;
