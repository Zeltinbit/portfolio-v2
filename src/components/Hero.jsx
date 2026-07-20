import { useState, useEffect } from "react";
import profile from "../assets/PROFILE_tinbit.jpg";

function Hero() {

    const subtitle =
            "Building my future one project, one commit, and one challenge at a time.";

    const [displayText, setDisplayText] = useState("");

    useEffect(() => {

        let index = 0;

        const interval = setInterval(() => {

            setDisplayText(subtitle.slice(0, index));

            index++;

            if (index > subtitle.length) {
                clearInterval(interval);
            }

        }, 40);

        return () => clearInterval(interval);

    }, []);

    return (
        <header className="hero">

            <div className="hero-text">

                <h1>Hello, I'm Tinbite Daniel</h1>

                <p className="hero-subtitle">
                    {displayText}
                </p>

                <p>
                    Software Engineering Student from Ethiopia passionate about
                    Full-Stack Web Development, Artificial Intelligence,
                    and building software that creates real-world impact.
                </p>

                <a href="#projects" className="btn">
                    View My Projects
                </a>

            </div>

            <div className="hero-image">

                <img
                    src={profile}
                    alt="Tinbite Daniel"
                />

            </div>

        </header>
    );
}

export default Hero;