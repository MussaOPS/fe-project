// Imports
import TopSection from "./top-section";
import BottomSection from "./bottom-section";

const Header = () => {
    return (
        <section className="bg-cyan-400">
            <header className="container p-2">
                <TopSection/>

                <BottomSection/>
            </header>
        </section>
    );
}

export default Header;
