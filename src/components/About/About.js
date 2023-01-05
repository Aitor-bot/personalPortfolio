import '../About/About.scss'

function About() {

  return (
    <div className='about_container'>
      <h1 className='about_greetings'>Hi, my name is Aitor</h1>
      <h2 className='about_skills'>Front End, Web and App developer.</h2>
      <div className='about_button_container'>
        <button className="about_button">GITHUB</button>
        <button className="about_button">DOWNLOAD CV</button>
      </div>
    </div>
  );
}

export default About;
