import './about.css';

function About() {
  return (
    <div className="about-container" id="about">
      <h2 className="about-heading">About Me</h2>
      <div className="about-content">
        <p>
          From writing simple programs to now <span className="highlighted-text">leading complex eCommerce solutions for agencies worldwide</span>,
          my journey has been driven by curiosity and solving real problems. With <span className="highlighted-text">6 years</span> of experience in 
          <span className="highlighted-text"> WordPress, WooCommerce, Laravel, and React</span>, I specialize in building the technical systems 
          that keep projects moving—especially when internal bandwidth runs out.
        </p>
        <p>
          I've delivered <span className="highlighted-text">40+ projects</span>, many as mid-project rescues where teams needed someone to 
          <span className="highlighted-text"> own the backend complexity</span> and ship reliably. I work white-label inside agency workflows—your Git, 
          your standards, your client. No hand-holding needed.
        </p>
        <p>
          I love <span className="highlighted-text">mentoring junior developers</span>, keeping client communication smooth, and 
          <span className="highlighted-text"> turning stalled builds into wins</span>. My focus is always on what survives real-world 
          pressure: performance that affects users, security that holds up, and code that teams can maintain long-term.
        </p>
        <p>
          Away from the keyboard, you'll find me reading, gaming, exploring meditation and philosophy, or diving into 
          <span className="highlighted-text"> the fascinating intersections of consciousness and technology</span>. Always learning, 
          in code and in life.
        </p>
        <p className="favorite-quote-title"><span className="highlighted-text">Philosophy I Work By:</span></p>
        <p className="favorite-quote">
          <strong>"Greatness comes from humble beginnings; it comes from grunt work. It means you're the least important person 
          in the room—until you change that with results."</strong>
        </p>
      </div>
    </div>
  );
}

export default About;
