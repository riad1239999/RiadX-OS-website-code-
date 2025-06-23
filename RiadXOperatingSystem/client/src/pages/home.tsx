import { useEffect, useState } from "react";

export default function Home() {
  const [titleIndex, setTitleIndex] = useState(0);

  const titleTexts = [
    'RiadX-OS Official Website',
    'RiadX-OS - Advanced Operating System',
    'Download RiadX-OS Today',
    'The Future of Computing'
  ];

  useEffect(() => {
    // Title rotation
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titleTexts.length);
    }, 3000);



    // Random background change
    const backgrounds = ['#C0C0C0', '#E0E0E0', '#F0F0F0'];
    let bgIndex = 0;
    const bgInterval = setInterval(() => {
      document.body.style.backgroundColor = backgrounds[bgIndex];
      bgIndex = (bgIndex + 1) % backgrounds.length;
    }, 30000);



    return () => {
      clearInterval(titleInterval);
      clearInterval(bgInterval);
    };
  }, []);

  useEffect(() => {
    document.title = titleTexts[titleIndex];
  }, [titleIndex, titleTexts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };





  return (
    <div className="retro-body">
      <div className="retro-container">
        {/* Header */}
        <div className="retro-header">
          <h1><span className="blink">RiadX-OS</span></h1>
          <h2 className="flame-text">Advanced Operating System</h2>
          <p>Now Available for Download</p>
        </div>

        {/* Scrolling Announcement */}
        <div className="marquee">
          <div className="marquee-text">
            Latest News: RiadX-OS v1.0 Released - Full Driver Support, Advanced GUI, Modern Kernel Technology
          </div>
        </div>

        {/* Navigation */}
        <table className="nav-table">
          <tbody>
            <tr>
              <td onClick={() => scrollToSection('home')}>HOME</td>
              <td onClick={() => scrollToSection('features')}>ABOUT</td>
              <td onClick={() => scrollToSection('download')}>DOWNLOAD</td>
              <td onClick={() => scrollToSection('contact')}>CONTACT</td>
              <td onClick={() => window.location.href = '/about-dev'}>ABOUT DEV</td>
            </tr>
          </tbody>
        </table>



        {/* Main Content */}
        <div id="home" className="content-section">
          <center>
            <h2>Welcome to RiadX-OS</h2>
            <p><strong>RiadX-OS</strong> is a modern operating system built from the ground up with cutting-edge technology and user-friendly design.</p>
          </center>
        </div>

        {/* OS Information Section */}
        <div id="features" className="content-section">
          <center><h2>About RiadX-OS</h2></center>
          
          <div className="content-section">
            <p>This OS is a one man operation and it's made from scratch, it has GUI, a text editor, a kernel and more.</p>
          </div>
        </div>

        {/* Download Section */}
        <div id="download" className="content-section">
          <center>
            <h2>Download RiadX-OS</h2>
            <p><span className="blink">Free Download Available</span></p>
            
            <button className="download-button" onClick={() => window.open('https://github.com/riad1239999/RiadX-OS', '_blank')}>
              Download Full Version
            </button>
            
            <button className="download-button" onClick={() => window.open('https://github.com/riad1239999/RiadX-OS/blob/main/list.txt', '_blank')}>
              All Versions
            </button>
            

          </center>
        </div>



        {/* Contact Section */}
        <div id="contact" className="content-section">
          <center>
            <h2>Get in Touch</h2>
            <p>Have questions about RiadX-OS?</p>
            
            <table className="contact-table">
              <tbody>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>yacinebaya9@gmail.com</td>
                </tr>
                <tr>
                  <td><strong>Website:</strong></td>
                  <td>RiadX-OS.wasmer.app</td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>

        {/* Footer */}
        <div className="retro-footer">
          <p>This site is best viewed in IE11 and Chrome</p>
          <p>
            <span className="blink">●</span> Powered by HTML & CSS <span className="blink">●</span> 
            Loads via modern modem, WiFi or Ethernet <span className="blink">●</span>
          </p>

        </div>
      </div>
    </div>
  );
}
