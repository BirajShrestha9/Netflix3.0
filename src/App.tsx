import "./App.css";
import FAQ from "./FAQ";
import Navigation from "./Navigation";
import ReasonsToJoin from "./ReasonsToJoin";
import TrendingMovies from "./TrendingMovies";
import UnlimitedMovies from "./UnlimitedMovies";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <img
          className="netflixBG"
          src="../public/img/netflixBG.png"
          alt="netflixBG"
        />
        <Navigation />
        <UnlimitedMovies />
        <TrendingMovies />
        <ReasonsToJoin />
        <FAQ />
      </div>
    </>
  );
}

export default App;
