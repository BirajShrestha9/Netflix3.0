import "./App.css";
import { useState } from "react";
import FAQ from "./FAQ";
import Navigation from "./Navigation";
import ReasonsToJoin from "./ReasonsToJoin";
import TermsOfUse from "./TermsOfUse";
import TrendingMovies from "./TrendingMovies";
import UnlimitedMovies from "./UnlimitedMovies";

function App() {
  const [isSigned, setIsSigned] = useState<boolean>(false);

  return (
    <>
      <div className="App">
        <img
          className="netflixBG"
          src="../public/img/netflixBG.png"
          alt="netflixBG"
        />
        <Navigation setIsSigned={setIsSigned} isSigned={isSigned} />

        <UnlimitedMovies isSigned={isSigned} />
        <TrendingMovies />
        <ReasonsToJoin />
        <FAQ />
        <TermsOfUse />
      </div>
    </>
  );
}

export default App;
