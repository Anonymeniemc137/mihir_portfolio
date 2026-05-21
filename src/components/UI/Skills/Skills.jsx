import './skills.css';
import reactSvg from '../../../assets/images/skills/react.svg';
import javascriptSvg from '../../../assets/images/skills/javascript.svg';
import jquerySvg from '../../../assets/images/skills/jquery.svg';
import htmlSvg from '../../../assets/images/skills/html.svg';
import cssSvg from '../../../assets/images/skills/css.svg';
import tailwindCssSvg from '../../../assets/images/skills/tailwind-css.svg';
import bootstrapSvg from '../../../assets/images/skills/bootstrap.svg';
import bricksSvg from '../../../assets/images/skills/bricks.svg';
import phpSvg from '../../../assets/images/skills/php.svg';
import laravelSvg from '../../../assets/images/skills/laravel.svg';
import wordpressSvg from '../../../assets/images/skills/wordpress.svg';
import woocommerceSvg from '../../../assets/images/skills/woocommerce.svg';
import mysqlSvg from '../../../assets/images/skills/mysql.svg';
import restApiSvg from '../../../assets/images/skills/rest-api.svg';
import headlessCmsSvg from '../../../assets/images/skills/headless-cms.svg';
import ajaxSvg from '../../../assets/images/skills/ajax.svg';
import gitSvg from '../../../assets/images/skills/git.svg';
import webflowSvg from '../../../assets/images/skills/webflow.svg';
import performanceSvg from '../../../assets/images/skills/performance.svg';
import seoSvg from '../../../assets/images/skills/seo.svg';

function Skills() {
  const skillCategories = {
    'Frontend Development': [
      { src: reactSvg, title: 'React' },
      { src: javascriptSvg, title: 'JavaScript' },
      { src: jquerySvg, title: 'jQuery' },
      { src: htmlSvg, title: 'HTML5' },
    ],
    'Styling & Design': [
      { src: cssSvg, title: 'CSS3' },
      { src: tailwindCssSvg, title: 'Tailwind CSS' },
      { src: bootstrapSvg, title: 'Bootstrap' },
      { src: bricksSvg, title: 'Bricks Builder' },
    ],
    'Backend Development': [
      { src: phpSvg, title: 'PHP' },
      { src: laravelSvg, title: 'Laravel' },
      { src: wordpressSvg, title: 'WordPress' },
      { src: woocommerceSvg, title: 'WooCommerce' },
    ],
    'Databases & APIs': [
      { src: mysqlSvg, title: 'MySQL' },
      { src: restApiSvg, title: 'REST APIs' },
      { src: headlessCmsSvg, title: 'Headless CMS' },
      { src: ajaxSvg, title: 'AJAX' },
    ],
    'Tools & Optimization': [
      { src: gitSvg, title: 'Git' },
      { src: webflowSvg, title: 'Webflow' },
      { src: performanceSvg, title: 'Performance' },
      { src: seoSvg, title: 'SEO' },
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
