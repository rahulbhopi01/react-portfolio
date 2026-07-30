import "../css/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2>About Me</h2>

        <p className="about-text">
          Hello! I'm <span>Rahul Vishal Bhopi</span>, a second-year Bachelor of
          Engineering student in Information Technology. I enjoy creating
          responsive websites and learning modern web technologies.
        </p>

        <p className="about-text">
          I am currently learning React.js, JavaScript, SQL and Full Stack
          Development. I like solving programming problems and continuously
          improving my technical skills by building projects.
        </p>

        <div className="about-cards">

          <div className="card">
            <h3>🎓 Education</h3>
            <p>BE - Information Technology</p>
            <p>Second Year Student</p>
          </div>

          <div className="card">
            <h3>💻 Skills</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
          </div>

          <div className="card">
            <h3>🎯 Career Goal</h3>
            <p>
              To become a skilled Full Stack Developer and build modern,
              user-friendly web applications.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;