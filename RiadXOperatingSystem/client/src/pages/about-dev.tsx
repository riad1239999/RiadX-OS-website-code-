export default function AboutDev() {
  return (
    <div className="retro-body">
      <div className="retro-container">
        {/* Header */}
        <div className="retro-header">
          <h1><span className="blink">About the Developer</span></h1>
          <h2 className="flame-text">Meet the Creator of RiadX-OS</h2>
        </div>

        {/* Navigation */}
        <table className="nav-table">
          <tbody>
            <tr>
              <td onClick={() => window.location.href = '/'}>HOME</td>
              <td onClick={() => window.location.href = '/'}>ABOUT</td>
              <td onClick={() => window.location.href = '/'}>DOWNLOAD</td>
              <td onClick={() => window.location.href = '/'}>CONTACT</td>
              <td style={{background: '#E0E0E0', color: '#333333'}}>ABOUT DEV</td>
            </tr>
          </tbody>
        </table>

        {/* Main Content */}
        <div className="content-section">
          <center>
            <h2>Riad Achour</h2>
            <div className="content-section">
              <p>Hello, I am a guy that likes tech and computers, I learn about computers and code, I've decided to make my own OS, I like it, I hope you can have fun with it!</p>
            </div>
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