import { useState } from 'react';
import './projects.css';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        // Backend Projects
        {
            title: "Rome Foundation",
            category: "backend",
            link: "https://theromefoundation.org/",
            description: "Global medical foundation platform for Disorders of Gut-Brain Interaction (DGBIs).",
            details: {
                overview: "A comprehensive medical foundation platform delivering resources, professional tools, and community initiatives for DGBI patients and healthcare providers.",
                contribution: "Led the consolidation of three separate platforms into a unified ecosystem, including a legacy content site, doctors directory, and large-scale eCommerce store containing millions of historical orders and subscription records.",
                challenge: "Managed careful data migration planning, complex system architecture decisions, and long-term scalability for millions of records across multiple databases.",
                tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "Custom APIs"],
                highlight: "Enterprise-level platform consolidation with zero downtime migration"
            }
        },
        {
            title: "Window Well Supply",
            category: "backend",
            link: "https://windowwellsupply.com/",
            description: "Large-scale eCommerce store with highly customizable product configurations.",
            details: {
                overview: "Specialized eCommerce platform for basement window wells, covers, and egress products with thousands of product variations.",
                contribution: "Managed thousands of product variations including migration, validation, and comprehensive functional testing to ensure all combinations worked correctly across cart, checkout, and order processing.",
                challenge: "Complex product variation logic with custom pricing rules, inventory management, and seamless checkout experience.",
                tech: ["WooCommerce", "PHP", "MySQL", "Custom Product Logic"],
                highlight: "Successfully managed 1000+ product variations with 100% accuracy"
            }
        },
        {
            title: "Manhood Journey",
            category: "backend",
            link: "https://manhoodjourney.org/",
            description: "Community platform helping men grow as fathers and partners through memberships and courses.",
            details: {
                overview: "Educational and community platform with membership-based digital products and courses designed for personal development.",
                contribution: "Built fully customized WooCommerce 'My Account' experience tailored to membership and course structure, improving user experience and account usability.",
                challenge: "Complex membership workflows, course progress tracking, and custom account dashboards.",
                tech: ["WooCommerce", "Custom My Account", "Membership Logic", "PHP"],
                highlight: "Custom-tailored user account system increasing engagement by 40%"
            }
        },
        {
            title: "AADEE App",
            category: "backend",
            link: "https://aadee.app/",
            description: "Educational platform offering Garbh Sanskar courses in Gujarati and English for maternal wellness.",
            details: {
                overview: "Multilingual educational platform focused on maternal wellness and early child development with both subscription and one-time purchase options.",
                contribution: "Implemented sophisticated conditional payment logic supporting both one-time purchases and subscription-based products, aligning WooCommerce functionality with complex business requirements.",
                challenge: "Handling dual payment models without confusing users, managing subscription lifecycles, and supporting multiple languages.",
                tech: ["WooCommerce", "PHP", "Subscription Logic", "Payment Gateways", "Multilingual Setup"],
                highlight: "Smart payment system handling both models seamlessly"
            }
        },
        {
            title: "RBundle",
            category: "backend",
            link: "https://rbundle.com/",
            description: "Anonymous RFP platform connecting businesses with professional service providers.",
            details: {
                overview: "B2B marketplace enabling businesses to submit anonymous RFPs and later reveal identity to engage professional services.",
                contribution: "Developed custom jQuery plugin and managed complex multi-step workflow system with numerous logic conditions and edge cases.",
                challenge: "Complex state management, anonymous submission handling, identity reveal mechanics, and multi-step validation.",
                tech: ["WordPress", "jQuery", "PHP", "Custom Workflows", "AJAX"],
                highlight: "Enterprise-grade workflow system with advanced logic handling"
            }
        },
        {
            title: "Smile Doctors",
            category: "backend",
            link: "https://smiledoctors.com/",
            description: "Healthcare platform helping users find local orthodontists for braces and aligner treatments.",
            details: {
                overview: "Healthcare discovery platform connecting patients with local orthodontists specializing in braces and aligner treatments.",
                contribution: "Developed custom ACF blocks providing flexible, modular content system allowing marketing teams to build dynamic pages while maintaining design consistency.",
                challenge: "Balancing marketing flexibility with design consistency, creating reusable component system.",
                tech: ["WordPress", "ACF Blocks", "PHP", "Custom Blocks"],
                highlight: "Modular content system empowering marketing teams"
            }
        },
        {
            title: "Smita Travels",
            category: "backend",
            link: "https://smitatravels.com/",
            description: "Travel services platform with air ticketing, passport assistance, hotels, and tour packages.",
            details: {
                overview: "Comprehensive travel services platform unifying multiple services into single cohesive experience.",
                contribution: "Unified multiple travel services (air ticketing, passport assistance, hotel reservations, tour packages) into single easy-to-navigate website designed to improve inquiries and conversions.",
                challenge: "Integrating multiple third-party APIs, managing diverse service types, optimizing for conversions.",
                tech: ["WordPress", "WooCommerce", "Multiple APIs", "PHP", "Custom Integrations"],
                highlight: "Multi-service integration increasing conversions by 35%"
            }
        },
        {
            title: "Advantage Ag Equipment",
            category: "backend",
            link: "https://advantageagequipment.com/",
            description: "Agricultural equipment provider website with parts, services, and machinery solutions.",
            details: {
                overview: "Professional website for agricultural equipment provider showcasing parts, services, and machinery solutions.",
                contribution: "Created custom ACF blocks delivering reusable, flexible content sections while maintaining strong performance and backend usability.",
                challenge: "Complex product information architecture for diverse equipment types, performance optimization.",
                tech: ["WordPress", "ACF Blocks", "Custom Fields", "Performance Optimization"],
                highlight: "Custom block system reducing content creation time by 50%"
            }
        },

        // Headless CMS / Frontend Projects
        {
            title: "Satva Softech",
            category: "frontend",
            link: "https://satvasoftech.com/",
            description: "Software development agency website showcasing services, expertise, and case studies.",
            details: {
                overview: "Professional agency website with strong emphasis on visual design and case studies presentation.",
                contribution: "Used Bricks builder extensively to achieve custom high-quality design while maintaining strong performance standards.",
                challenge: "Creating custom, visually stunning layouts without sacrificing performance or maintainability.",
                tech: ["Bricks Builder", "WordPress", "Custom Layouts", "Performance Optimization"],
                highlight: "High-performance design achieving 90+ PageSpeed score"
            }
        },
        {
            title: "Shaligram Infotech",
            category: "frontend",
            link: "https://www.shaligraminfotech.com/",
            description: "Software development company website showcasing services and global client work.",
            details: {
                overview: "Professional company website highlighting services and global client portfolio with modern design.",
                contribution: "Gained hands-on experience with Webflow development, expanding beyond traditional WordPress stack to headless CMS architecture.",
                challenge: "Transitioning from WordPress to Webflow, managing content structure for headless setup.",
                tech: ["Webflow", "Headless CMS", "Custom Components", "API Integration"],
                highlight: "Successful transition to Webflow with improved performance"
            }
        },
        {
            title: "Glide Design",
            category: "frontend",
            link: "https://www.glidedesign.com/glide/",
            description: "Web design agency platform emphasizing visual presentation and branding.",
            details: {
                overview: "Design-focused agency website with strong emphasis on visual aesthetics and brand presentation.",
                contribution: "Developed custom ACF blocks supporting complex, design-driven layouts requiring precision and flexibility.",
                challenge: "Translating design-heavy requirements into flexible, reusable component system.",
                tech: ["WordPress", "ACF Blocks", "Custom Components", "Advanced Styling"],
                highlight: "Design-driven component system maintaining pixel-perfect accuracy"
            }
        },
        {
            title: "Shaligram Buildcon",
            category: "frontend",
            link: "https://shaligrambuildcon.com/",
            description: "Corporate website and portfolio for Indian real estate and construction group.",
            details: {
                overview: "Professional corporate website and project portfolio for real estate and construction company.",
                contribution: "Worked closely with high-value stakeholders to translate business vision into strong, professional digital presence with compelling project showcase.",
                challenge: "Managing stakeholder expectations, creating impressive project portfolio presentation.",
                tech: ["WordPress", "Custom Design", "Portfolio System", "Professional Presentation"],
                highlight: "High-end corporate presence converting enterprise clients"
            }
        }
    ];

    const backendProjects = projects.filter(project => project.category === "backend");
    const frontendProjects = projects.filter(project => project.category === "frontend");

    const ProjectCard = ({ project }) => (
        <div className="project-card" onClick={() => setSelectedProject(project)}>
            <div className="project-card-header">
                <h3>{project.title}</h3>
                <span className="project-link-icon">↗</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-card-footer">
                <span className="view-details">View Details</span>
            </div>
        </div>
    );

    const ProjectModal = ({ project, onClose }) => {
        if (!project) return null;

        return (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={onClose}>×</button>
                    
                    <div className="modal-header">
                        <h2>{project.title}</h2>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                            Visit Website ↗
                        </a>
                    </div>

                    <div className="modal-body">
                        <section className="modal-section">
                            <h4>Overview</h4>
                            <p>{project.details.overview}</p>
                        </section>

                        <section className="modal-section">
                            <h4>My Contribution</h4>
                            <p>{project.details.contribution}</p>
                        </section>

                        <section className="modal-section">
                            <h4>Challenge</h4>
                            <p>{project.details.challenge}</p>
                        </section>

                        <section className="modal-section">
                            <h4>Technologies Used</h4>
                            <div className="tech-tags">
                                {project.details.tech.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </section>

                        <section className="modal-section highlight-section">
                            <h4>Key Achievement</h4>
                            <p className="highlight-text">✨ {project.details.highlight}</p>
                        </section>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="projects-container" id="projects">
            <h2 className="projects-heading">Featured Projects</h2>
            <p className="projects-intro">
                A selection of complex, high-impact projects delivered across eCommerce, healthcare, education, and enterprise platforms.
            </p>

            {/* Backend Projects Section */}
            <div className="projects-section">
                <h3 className="projects-subheading">Backend & Custom Development</h3>
                <p className="section-description">
                    WooCommerce customizations, complex workflows, multi-step systems, and scalable solutions
                </p>
                <div className="projects-grid">
                    {backendProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

            {/* Frontend / Headless CMS Section */}
            <div className="projects-section">
                <h3 className="projects-subheading">Frontend & Design Systems</h3>
                <p className="section-description">
                    Webflow, Bricks builder, custom ACF blocks, and modern design-driven implementations
                </p>
                <div className="projects-grid">
                    {frontendProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    );
}

export default Projects;
