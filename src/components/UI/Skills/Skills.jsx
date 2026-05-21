import './skills.css';

function Skills() {
  const skillCategories = {
    'Frontend Development': [
      { src: 'src/assets/images/skills/react.svg', title: 'React' },
      { src: 'src/assets/images/skills/javascript.svg', title: 'JavaScript' },
      { src: 'src/assets/images/skills/jquery.svg', title: 'jQuery' },
      { src: 'src/assets/images/skills/html.svg', title: 'HTML5' },
    ],
    'Styling & Design': [
      { src: 'src/assets/images/skills/css.svg', title: 'CSS3' },
      { src: 'src/assets/images/skills/tailwind-css.svg', title: 'Tailwind CSS' },
      { src: 'src/assets/images/skills/bootstrap.svg', title: 'Bootstrap' },
      { src: 'src/assets/images/skills/bricks.svg', title: 'Bricks Builder' },
    ],
    'Backend Development': [
      { src: 'src/assets/images/skills/php.svg', title: 'PHP' },
      { src: 'src/assets/images/skills/laravel.svg', title: 'Laravel' },
      { src: 'src/assets/images/skills/wordpress.svg', title: 'WordPress' },
      { src: 'src/assets/images/skills/woocommerce.svg', title: 'WooCommerce' },
    ],
    'Databases & APIs': [
      { src: 'src/assets/images/skills/mysql.svg', title: 'MySQL' },
      { src: 'src/assets/images/skills/rest-api.svg', title: 'REST APIs' },
      { src: 'src/assets/images/skills/headless-cms.svg', title: 'Headless CMS' },
      { src: 'src/assets/images/skills/ajax.svg', title: 'AJAX' },
    ],
    'Tools & Optimization': [
      { src: 'src/assets/images/skills/git.svg', title: 'Git' },
      { src: 'src/assets/images/skills/webflow.svg', title: 'Webflow' },
      { src: 'src/assets/images/skills/performance.svg', title: 'Performance' },
      { src: 'src/assets/images/skills/seo.svg', title: 'SEO' },
    ],
  };

  // Flatten all skills for grid display
  const allSkills = Object.values(skillCategories).flat();

  return (
    <div className="skills-container" id="skills">
      <div className="skills-header">
        <h2 className="skills-heading">Technical Skills</h2>
        <p className="skills-subtitle">6+ years of hands-on experience with modern web technologies</p>
      </div>

      <div className="skills-content">
        {allSkills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-icon-wrapper">
              <img src={skill.src} className="skill-icon" alt={skill.title} />
            </div>
            <span className="skill-title">{skill.title}</span>
          </div>
        ))}
      </div>

      <div className="skills-footer">
        <p className="skills-summary">
          Specializing in <span className="highlight">WordPress, WooCommerce, Laravel, and React</span> with deep expertise in 
          <span className="highlight"> custom development, performance optimization, and API integrations</span>
        </p>
      </div>
    </div>
  );
}

export default Skills;
