import { useRef } from "react";

function TrendingMovies() {
  const MoviesPics = [
    "ro1.jpg",
    "ro2.jpg",
    "ro3.jpg",
    "ro4.jpg",
    "ro6.jpg",
    "ro7.jpg",
    "ro8.jpg",
    "poster13.png",
    "poster14.jpg",
    "poster17.jpg",
    "poster18.jpg",

    "poster19.jpg",
    "poster20.jpg",
    "postr21.png",
  ];
  const scrollPic = useRef<HTMLDivElement>(null);
  const picScrollRight = () => {
    scrollPic.current!.scrollLeft += 300;
  };
  const picScrollLeft = () => {
    scrollPic.current!.scrollLeft -= 300;
  };
  return (
    <div className="Trending">
      <h1>Trending Right Now</h1>
      <button
        onClick={() => picScrollLeft()}
        style={{
          position: "absolute",
          top: "14rem",
          border: "none",
          zIndex: "10",

          background: "none",
          padding: "none",
          cursor: "pointer",
        }}
      >
        <img
          className="scrollBtn"
          src="./img/rightarrow.png"
          alt="rightarrow"
          style={{
            transform: "rotate(180deg)",
          }}
        />
      </button>
      <button
        onClick={picScrollRight}
        style={{
          position: "absolute",
          top: "14rem",
          left: "75rem",
          zIndex: "10",
          border: "none",
          background: "none",
          padding: "none",
          cursor: "pointer",
        }}
      >
        <img
          src="./img/rightarrow.png"
          alt="rightarrow"
          className="scrollBtn"
        />
      </button>
      <div ref={scrollPic}>
        {MoviesPics.map((pic) => (
          <img key={`./img/${pic}`} className="trendPic" src={`./img/${pic}`} />
        ))}
      </div>

      {/* <h1>Frequently Asked Questions</h1> */}
    </div>
  );
}
export default TrendingMovies;
