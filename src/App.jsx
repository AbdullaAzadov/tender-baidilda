import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";

function App() {
    return (
        <>
            <Header />
            <main>
                <Home />
                <About />
                <Advantages />
            </main>
            <footer></footer>
        </>
    );
}

export default App;
