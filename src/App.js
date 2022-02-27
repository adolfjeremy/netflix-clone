import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Home />
            </main>
        </div>
    );
}

export default App;
