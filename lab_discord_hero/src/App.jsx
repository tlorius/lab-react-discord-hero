import "./App.css";
import menuIcon from "./assets/menu-icon.png";
import discordBackground from "./assets/discord-background.png";
import discordLogoWhite from "./assets/discord-logo-white.png";

function App() {
  return (
    <div className="App">
      <nav>
        <img
          className="discord-logo-white"
          src={discordLogoWhite}
          alt="Discord Logo White"
        />
        <img src={menuIcon} alt="Menu Icon" />
      </nav>
      <body>
        <div className="body-left">
          <h2>IMAGINE A PLACE... </h2>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <button className="btn-light">Download for Mac</button>
          <button className="btn-dark">Open Discord in your browser</button>
        </div>
        <img
          className="img-disc-background"
          src={discordBackground}
          alt="Discord Background"
        />
      </body>
    </div>
  );
}

export default App;
