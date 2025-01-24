import "react";
import Portfolio from "./components/Portfolio.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
    return (
        <div className="bg-indigo-950 min-h-screen">
            <Navbar />
            <Portfolio />
        </div>
    );
};

export default App;
