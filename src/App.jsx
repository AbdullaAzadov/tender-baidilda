import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Advantages from "./components/Advantages/Advantages";
import Portfolio from "./components/Portfolio/Portfolio";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <main>
                <Home />
                <About />
                <Portfolio />
                <Advantages />
                <Pricing />
            </main>
            <Footer />
        </>
    );
}

export default App;
