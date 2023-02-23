import React from "react";
import Form from "./Components/Form.jsx";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Form/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App
