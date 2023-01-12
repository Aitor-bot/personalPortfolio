import '../Skills/Skills.scss'
import html_logo from '../../assets/html.webp'
import css_logo from '../../assets/css.webp'
import js_logo from '../../assets/js.webp'
import react_logo from '../../assets/react.webp'
import nodejs_logo from '../../assets/nodejs.webp'

import php_logo from '../../assets/php.webp'
import laravel_logo from '../../assets/laravel.webp'
import git_logo from '../../assets/git.webp'
import mysql_logo from '../../assets/mysql.webp'
import express_logo from '../../assets/express.webp'

function ScrollButton() {

    return (
        <div className='skills_container'>
            <h2 className='skills_title'>My Skills</h2>
            <div className='skills_subcontainer'>
                <div className='skills_logocontainer'>
                    <img src={html_logo} alt="html logo"></img>
                    <p>HTML</p>
                </div>

                <div className='skills_logocontainer'>
                    <img src={css_logo} alt="css logo"></img>
                    <p>CSS</p>
                </div>

                <div className='skills_logocontainer'>
                    <img src={js_logo} alt="js logo"></img>
                    <p>JavaScript</p>
                </div>

                <div className='skills_logocontainer'>
                    <img src={react_logo} alt="react logo"></img>
                    <p>React JS</p>
                </div>

                <div className='skills_logocontainer'>
                    <img src={nodejs_logo} alt="nodejs logo"></img>
                    <p>Node JS</p>
                </div>

                <div className='skills_logocontainer'>
                    <img src={php_logo} alt="php logo"></img>
                    <p>PHP</p>
                </div>

                <div className='skills_logocontainer'>
                    <img src={laravel_logo} alt="laravel logo"></img>
                    <p>Laravel</p>
                </div>

                <div className='skills_logocontainer'>
                    <img src={git_logo} alt="git logo"></img>
                    <p>GIT</p>
                </div>

                <div className='skills_logocontainer'>
                    <img src={mysql_logo} alt="mysql logo"></img>
                    <p>MySQL</p>
                </div>

                <div className='skills_logocontainer'>
                    <img src={express_logo} alt="express logo"></img>
                    <p>Express JS</p>
                </div>
            </div>



        </div>


    );
}

export default ScrollButton;
