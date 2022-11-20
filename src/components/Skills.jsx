import React from 'react'
import languages from '../assets/icons/terminal-regular-48.png';
import frameworks from '../assets/icons/code-alt-regular-48.png';
import tools from '../assets/icons/badge-check-solid-48.png';

// skilss
import js from '../assets/skills/javascript-logo-48.png';
import html from '../assets/skills/html5-logo-48.png';
import css from '../assets/skills/css3-logo-48.png';
import php from '../assets/skills/php-logo-48.png';
import sqlLang from '../assets/skills/data-solid-48.png';
import reactLang from '../assets/skills/react-logo-48.png';
import jQueryLang from '../assets/skills/jquery-logo-48.png';
import githubSkill from '../assets/skills/github-logo-48.png';
import mongodb from '../assets/skills/mongodb-logo-48.png';0
import wordpress from '../assets/skills/wordpress.png';

export const Skills = () => {
  return (
    <section className='skillsContainer'>
        <h1 className='titlesSections'>Skills</h1>
        <div className='containerCardsSkills'>
            <div className='cardSkill'>
                <img src={languages}/>
                <h3>Languages</h3>
                <ul className='boxSkills'>
                    <li>
                        <img src={html} />
                        <p>HTML</p>
                    </li>
                    <li>
                        <img src={css} />
                        <p>CSS</p>
                    </li>
                    <li>
                        <img src={js} />
                        <p>JavaScript</p>
                    </li>
                    <li>
                        <img src={php} />
                        <p>PHP</p>
                    </li>
                    <li>
                        <img src={sqlLang} />
                        <p>MySQL</p>
                    </li>
                </ul>
            </div>
            <div className='cardSkill'>
                <img src={frameworks}/>
                <h3>Frameworks</h3>
                <ul className='boxSkills'>
                    <li>
                        <img src={reactLang} />
                        <p>React</p>
                    </li>
                    <li>
                        <img src={jQueryLang} />
                        <p>JQuery</p>
                    </li>
                </ul>
            </div>
            <div className='cardSkill'>
                <img src={tools}/>
                <h3>More Resources</h3>
                <ul className='boxSkills'>
                    <li>
                        <img src={githubSkill} />
                        <p>GitHub</p>
                    </li>
                    <li>
                        <img src={mongodb} />
                        <p>MongoDB</p>
                    </li>
                    <li>
                        <img className='skillFail' src={wordpress} />
                        <p>WordPress</p>
                    </li>
                </ul>
            </div>
        </div>

    </section>
  )
}
