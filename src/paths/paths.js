import First  from './../pages/First';
import Second from './../pages/Second';
import Third  from './../pages/Third';
import Forth  from './../pages/Forth';

const paths = [
  { id:1, lbl:"FIRST",  path:"first",  element: <First />,  index:false },
  { id:2, lbl:"SECOND", path:"second", element: <Second />, index:false },
  { id:3, lbl:"THIRD",  path:"third",  element: <Third />,  index:false },
  { id:4, lbl:"FORTH",  path:"forth",  element: <Forth />,  index:false },
];
export default paths;
