import React from "react"
import { AuthWrapper } from './Auth/AuthWrapper.jsx';
import { BrowserRouter} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <AuthWrapper />                        
        </BrowserRouter>               
    );
}

export default App;
