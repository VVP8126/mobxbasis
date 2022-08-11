import Number from './../pages/Number';
import Array  from './../pages/ArrayPage';
import Async  from './../pages/AsyncPage';
import Forth  from './../pages/Forth';

const paths = [
  { id:1, lbl:"NUMBER", path:"number", element: <Number /> },
  { id:2, lbl:"ARRAY",  path:"array",  element: <Array  /> },
  { id:3, lbl:"ASYNC",  path:"async",  element: <Async />  },
  { id:4, lbl:"FORTH",  path:"forth",  element: <Forth />  },
];
export default paths;
