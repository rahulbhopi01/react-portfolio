import "../css/Resume.css";

function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        <h2>Resume</h2>

        <p>
          You can download my resume to learn more about my education,
          technical skills, and projects.
        </p>

        <a href="/Rahul_Resume.pdf" download>
          <button className="resume-btn">
            Download Resume
          </button>
        </a>

      </div>
    </section>
  );
}

export default Resume;