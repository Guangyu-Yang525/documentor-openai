/**
 * use grid and show 4 differen functionality
 * it needs to be responsive which can be done
 * with tailwind
 * functionalities preview and functionalities page for 4 funcs
 * try to use 1 component for 4 pages
 * @returns
 *
 */

import { Route, Routes} from "react-router-dom";
import FuncConsole from "../components/func-console.component";
import FuncPreview from "../components/func-preview.component";

const Func = () => {
  return (
    <Routes>
      <Route index element={<FuncPreview/>}/>
      <Route path=":id" element={<FuncConsole/>}/>
    </Routes>
  );
};

export default Func;
