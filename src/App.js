import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  // State to track the scroll position
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // If we've scrolled past 100px, add the "sticky" class
      if (scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  // HTML Section
  return (
    <div className="App">
      
      {/* Header/Nav Bar */}
      <header className={`header ${isSticky ? 'sticky' : ''}`}>
        <div className="logo">
          <img className='nav-logo' src='/image/logo-nb.png' alt='logo'/>
          <h2>Robert Murray</h2>
        </div>
        <nav>
          <a href="/">Home</a>
          <a id='resume' href="/resume">Resume</a>
          <a id='about' href="/about">About</a>
          <a id='contact' href="/contact">Contact</a>
          {/* Add more links here in the future */}
        </nav>
      </header>

      {/* Background Photo Section */}
      <div className="background-section">
        <h1>Welcome To My Website</h1>
      </div>
     

      {/* Main Content Section */}
      <main>
        <div className="content">
          <h3>Thank you for taking the time to visit. </h3>
          <h3>
            Please take a look around and contact me for questions or business inquires.
            </h3>
          <p>{/*Empty Space*/}</p>
          <hr className="section-divider" />
          <p>{/*Empty Space*/}</p>
          <h1>About Me</h1>
          <div className='part-content'>
            <img className='pp' src='/image/freakbob1.jpg' alt='pp'></img>
            <div className='aboutme'>
              <p>
              Hi there! I'm a current student at the University at Buffalo studying Computer Science. I was born and raised on Long Island, NY, 
              where I also currently live when I'm not in Buffalo. Since I was young, I've always loved solving problems and building things, 
              which I believe sparked my passion for Computer Science and programming.
              </p>
              <p>
              While learning from incredible professors has been a pleasure, my most valued experiences at UB have been working in groups on software projects. 
              These projects have taught me valuable technical skills, but I believe the organizational and interpersonal skills I have gained from these group projects have contributed the most to my growth.
              </p>
              <p>
                When I'm not busy with my studies, I enjoy spending time with my family and friends, weightlifting, watching movies, and snowboarding. These activities bring me joy and relaxation 
                while instilling values such as discipline, patience, and curiosity.
              </p>
              <p>
              As I approach my penultimate semester at UB, I am excited to continue challenging myself in my professional career and to implement my expertise in a meaningful and impactful way!
              </p>
            </div>
            
            
          </div>
          <p>{/*Empty Space*/}</p>
          <p>{/*Empty Space*/}</p>
          <hr className="section-divider" />
          <p>{/*Empty Space*/}</p>
          <h1>Education</h1>
          <div className='education'>
            <h2>University at Buffalo</h2>
            <p>
            I currently study at the University at Buffalo, where I am pursuing a comprehensive education that 
            balances rigorous academics with practical, hands-on experience. During my time at UB, I have developed 
            a strong foundation in the theoretical principles of computer science, full-stack web development, and multiple programming languages, most notably Python and Java.
            Throughout many semesters, my professional and technical development continued with collaborative, multi-faceted projects.
            In exploring several concentrations like Web Development, Computer Hardware, and Artificial Intelligence, I feel that the
            University at Buffalo has thoroughly prepared me for my future endeavors, both professionally and personally. Thank you to all of the professors,
            administrative staff, and especially my fellow peers for making my time at UB truly irreplaceable!
            </p>
            <div className='education-images'>
              <img className='pp' src='/image/SEAS_logo.jpg' alt='pp'></img>
              <img className='pp' src='/image/davis.jpeg' alt='pp'></img>
              </div>
          </div>
          <p>{/*Empty Space*/}</p>
          <p>{/*Empty Space*/}</p>
          <hr className="section-divider" />
          <p>{/*Empty Space*/}</p>
          <h1>Work Experience</h1>
          <div className='work'>
            <h2>Discovery Lab Global</h2>
            <h2 style={{ fontStyle: 'italic'}}>Artificial Intelligence Development Intern</h2>
            <p>bruh</p>
          </div>

          <p>{/*Empty Space*/}</p>
          <p>{/*Empty Space*/}</p>
          <hr className="section-divider" />
          <p>{/*Empty Space*/}</p>
          <h1>Projects</h1>
          <div className='projects'>

          </div>
        </div>
        
      </main>



      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Robert Murray. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
