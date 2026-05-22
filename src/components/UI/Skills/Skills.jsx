import './skills.css';

const skillIcon = (fileName) => `/assets/images/skills/${fileName}`;

function Skills() {
  const skillCategories = {
    'Frontend Development': [
      { src: skillIcon('react.svg'), title: 'React' },
      { src: skillIcon('javascript.svg'), title: 'JavaScript' },
      { src: skillIcon('jquery.svg'), title: 'jQuery' },
      { src: skillIcon('html.svg'), title: 'HTML5' },
    ],
    'Styling & Design': [
      { src: skillIcon('css.svg'), title: 'CSS3' },
      { src: skillIcon('tailwind-css.svg'), title: 'Tailwind CSS' },
      { src: skillIcon('bootstrap.svg'), title: 'Bootstrap' },
      { src: skillIcon('bricks.svg'), title: 'Bricks Builder' },
    ],
    'Backend Development': [
      { src: skillIcon('php.svg'), title: 'PHP' },
      { src: skillIcon('laravel.svg'), title: 'Laravel' },
      { src: skillIcon('wordpress.svg'), title: 'WordPress' },
      { src: skillIcon('woocommerce.svg'), title: 'WooCommerce' },
    ],
    'Databases & APIs': [
      { src: skillIcon('mysql.svg'), title: 'MySQL' },
      { src: skillIcon('rest-api.svg'), title: 'REST APIs' },
      { src: skillIcon('headless-cms.svg'), title: 'Headless CMS' },
      { src: skillIcon('ajax.svg'), title: 'AJAX' },
    ],
    'Tools & Optimization': [
      { src: skillIcon('git.svg'), title: 'Git' },
      { src: skillIcon('webflow.svg'), title: 'Webflow' },
      { src: skillIcon('performance.svg'), title: 'Performance' },
      { src: skillIcon('seo.svg'), title: 'SEO' },
    ],
  };

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
