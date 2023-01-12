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
                <img src={html_logo} alt="html logo"></img>
                <img src={css_logo} alt="css logo"></img>
                <img src={js_logo} alt="js logo"></img>
                <img src={react_logo} alt="react logo"></img>
                <img src={nodejs_logo} alt="nodejs logo"></img>
                <img src={php_logo} alt="php logo"></img>
                <img src={laravel_logo} alt="laravel logo"></img>
                <img src={git_logo} alt="git logo"></img>
                <img src={mysql_logo} alt="mysql logo"></img>
                <img src={express_logo} alt="express logo"></img>



            </div>

            
        </div>
    );
}

export default ScrollButton;
