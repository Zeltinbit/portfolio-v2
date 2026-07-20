function Projects() {

    const projects = [

        {
            title: "Personal Portfolio",
            description: "My personal portfolio website built with HTML, CSS, JavaScript, and now React.",
            github: "https://github.com/Zeltinbit",
        },

        {
            title: "MiniGit Version Control System",
            description: "A simplified Git version control system developed in C++ supporting commits, branches, checkout, and merge.",
            github: "https://github.com/Zeltinbit/MINIGIT",
        },

        {
            title: "Abyssinia Adventures",
            description: "A travel agency website developed as a university project using HTML, CSS, and JavaScript.",
            github: "https://github.com/Zeltinbit",
        }

    ];

    return (

        <section id="projects" className="card">

            <h2>Projects</h2>

            <div className="projects-container">

                {projects.map((project) => (

                    <div className="project-card" key={project.title}>

                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            View Code
                        </a>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Projects;