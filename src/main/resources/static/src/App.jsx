import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KertValaszto from "./KertValaszto";
import KertOldal from "./pages/KertOldal";
import Login from "./Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<KertValaszto />} />
                <Route path="/kert/:slug" element={<KertOldal />} />
            </Routes>
        </Router>
    );
}

export default App;
