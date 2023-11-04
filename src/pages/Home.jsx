import Navigation from "../components/Navigation";
import Logo from "../components/logo";
import Countries from "../components/Countries";

const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <h1>ACCUEIL</h1>
            <Countries/>
        </div>
    );
};

export default Home;