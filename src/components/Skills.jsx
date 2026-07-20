function Skills() {

    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "C++",
        "Java",
        "Python",
        "Git",
        "GitHub",
        "Node.js",
        "Express.js",
        "MongoDB"
    ];

    return (
        <section id="skills" className="skills card">

            <h2>Skills</h2>

            <div className="skills-container">

                {skills.map((skill) => (
                    <div className="skill-card" key={skill}>
                        {skill}
                    </div>
                ))}

            </div>

        </section>
    );
}

export default Skills;