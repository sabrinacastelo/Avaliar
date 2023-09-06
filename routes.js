import { BrowserRouter, Routes, Route } from "react-router-dom";
import Padrao from "./Pages/Padrao";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Padrao/>}>

                    </Route>
              
                 
               
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;