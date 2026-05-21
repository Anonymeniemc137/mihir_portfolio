import './banner.css';

function Banner() {
  return (
    <div className="banner-container" id="home">
      <div className="banner-intro-text">
        <p>Hello, I'm</p>
        <span className="banner-intro-name">Mihir Dave.</span>
        <p className="banner-intro-subtext">
          Senior WordPress Developer. <span className="highlight">6 years</span> building custom WooCommerce and Laravel solutions for agencies worldwide. 
          I turn <span className="highlight">stalled projects into shipped wins</span>.
        </p>
      </div>
      <div className="banner-dev-image"></div>
    </div>
  );
}

export default Banner;
