import logo from "./imgs/logo.svg";
import youtube from "./imgs/icon-youtube.svg";
import twitter from "./imgs/icon-twitter.svg";
import laptop from "./imgs/icon-laptop.svg";

export default function Content() {
  return (
    <>
      <menu>
        <li>
          <img src={logo} alt="logo" />
        </li>
        <li>
          <img href="/" alt="logo" />
          Home
        </li>
        <li>
          <img href="/" alt="logo" />
          Download
        </li>
        <li>
          <img href="/" alt="logo" />
          App
        </li>
        <li>
          <img href="/" alt="logo" />
          Login
        </li>
        <li>
          <button>Get Started</button>
        </li>
      </menu>
      <section>
        <h1>Collaborate with people</h1>
        <p>
          Integer semper et libero vel iaculis. Duis enim elit, semper a
          sollicitudin vel, volutpat ac lacus. Mauris et ex vitae diam
          pellentesque semper et non ligula. Suspendisse accumsan odio eu
          consequat pellentesque. Nunc eu fringilla ex. Morbi rhoncus fermentum
          justo vitae facilisis. Proin ex quam, porta ut fermentum laoreet,
          consequat non magna.{" "}
        </p>
        <button>
          <img src={laptop} alt="download"></img>Dowload for linux
        </button>
      </section>
      <div className="social">
        <div className="line" />
        <img src={youtube} alt="Youtube"></img>
        <img src={twitter} alt="Twitter"></img>
      </div>
    </>
  );
}
