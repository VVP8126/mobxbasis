import Number from './../pages/Number';
import Array  from './../pages/ArrayPage';
import Async  from './../pages/AsyncPage';
import Review from './../pages/Review';

const paths = [
  { id:1, lbl:"NUMBER", path:"number", element: <Number /> },
  { id:2, lbl:"ARRAY",  path:"array",  element: <Array  /> },
  { id:3, lbl:"ASYNC",  path:"async",  element: <Async />  },
  { id:4, lbl:"REVIEW", path:"review", element: <Review /> },
];
export default paths;
