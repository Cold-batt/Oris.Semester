import {BrowserRouter, Route, Routes} from "react-router-dom";
import {registration, signIn} from "./constants/PagePaths.js";
import SignIn from "./views/SignIn.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={signIn} element={SignIn}></Route>
                {/*<Route path={registration} element={}></Route>*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
