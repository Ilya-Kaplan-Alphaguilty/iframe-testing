import { useParams, useSearchParams } from "react-router-dom";
import logo from "./logo.svg";
import { useEffect } from "react";

const IframePage = () => {
  const { quest } = useParams();
  const [searchParams] = useSearchParams({ width: 300, height: 700 });

  useEffect(() => {
    const iframe = window.document.getElementById("alphaguilty-iframe");

    window.addEventListener("message", (event) => {
      if (event.origin === "https://stage.alphaguilty.io") {
        iframe.contentWindow.postMessage(
          event.data,
          "https://stage.alphaguilty.io"
        );
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <iframe
          title="Iframe"
          src={`https://stage.alphaguilty.io/iframe/${quest}`}
          width={searchParams.get("width")}
          height={searchParams.get("height")}
          id="alphaguilty-iframe"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default IframePage;
