import { useRef, useState } from "react";

function UnlimitedMovies() {
  const [email, setEmail] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const inputFocus = () => {
    inputRef.current!.focus();
  };
  return (
    <>
      <div className="Movies">
        <div className="frontImg">
          <img className="" src="/img/netfliximg.jpg" alt="frontimage" />
          <div className="overlay"></div>
        </div>
        <div className="firstSection">
          <h1 className="frontText">Unlimited movies, TV shows, and more</h1>
          <h2 className="price">Starts at Rs 250. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="Start">
            <input
              className="emailAddress"
              type="email"
              placeholder="Email Address"
              ref={inputRef}
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={inputFocus} className="getStarted_Btn">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnlimitedMovies;
