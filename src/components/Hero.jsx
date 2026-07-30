import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h3>Hi, I'm</h3>
        <h1>Rahul Vishal Bhopi</h1>
        <p>
          Frontend developer passionate about creating clean and responsive
          websites using HTML, CSS and React.
        </p>

        <div className="hero-buttons">
          <button>View Projects</button>
          <button>Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;