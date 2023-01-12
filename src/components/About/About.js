import '../About/About.scss'
import MouseScroll from '../MouseScrollAnimation/MouseScrollAnimation';

function About() {

  return (
    <div className='about_container'>
      <h1 className='about_greetings'>Hi, my name is Aitor</h1>
      <h2 className='about_skills'>Front End, Web and App developer.</h2>
      <div className='about_button_container'>
        <a href="https://github.com/Aitor-bot" target="_blank" rel="noreferrer" className="about_button">GITHUB</a> { /* eslint-disable-next-line */}
        <a className="about_button">DOWNLOAD CV</a>
        <MouseScroll></MouseScroll>
      </div>
    </div>
  );
}

export default About;



