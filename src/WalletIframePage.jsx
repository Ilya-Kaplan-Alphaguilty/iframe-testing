import logo from "./logo.svg";

const WalletIframePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <iframe
          title="Iframe"
          src={"https://react-auth-dapp.walletconnect.com/"}
          width={500}
          height={800}
          id="alphaguilty-iframe"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <iframe
          title="Iframe"
          src={"https://react-app.walletconnect.com/"}
          width={500}
          height={800}
          id="alphaguilty-iframe"
        />
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

export default WalletIframePage;
