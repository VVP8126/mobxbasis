import MenuItem from './item/MenuItem';
import paths from './../../paths/paths.js';

const Menu = () => {
  return (
    <div className='row'>
        {paths.map(p => <MenuItem key={p.id} path={p.path} lbl={p.lbl} /> )}
    </div>
  );
}
export default Menu;
