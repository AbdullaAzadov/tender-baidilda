import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
    return (
        <>
            <Header />
            <main>
                <Home />
                <About />
            </main>
            <footer></footer>
        </>
    );
}

export default App;
