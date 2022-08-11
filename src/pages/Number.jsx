import numInstance from './../store/NumberStore.js';
import { observer } from 'mobx-react-lite'
import { useState } from 'react';

const NumberExample = observer(() => { // function observer() makes React update components after MobX state change
  
  const [value, setValue] = useState(0);
  const onChange = (e) => setValue(Number(e.target.value));
  
  return (
    <div className='container'>
      <h1 className="centered">Number storing</h1><br />
      <hr /><br/>
      <p className='centered fontSize24 margined'>Current stored value: {numInstance.num}</p>
      <div className='row margined'>
        <div className='col25'>
          <button className='btn blockWidth50' 
                  onClick={ () => numInstance.add(value) }>
            ADD(+)
          </button>
        </div>
        <div className='col25'>
          <button className='btn blockWidth50'
                  onClick={ () => numInstance.sub(value) }>
            SUB(-)
          </button>
        </div>
        <div className='col25'>
          <button className='btn blockWidth50'
                  onClick={ () => numInstance.increment() }>
            INCREMENT
          </button>
        </div>
        <div className='col25'>
          <button className='btn blockWidth50'
                  onClick={ () => numInstance.decrement() }>
            DECREMENT
          </button>
        </div>
      </div>
      <br /><hr /><br />
      <h2 className='centered margined'>Change number below and click buttons ADD or SUB</h2>
      <input className='inputWidth50' type='number' onChange={ onChange } />
    </div>
  );
});
export default NumberExample;
