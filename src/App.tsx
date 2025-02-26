import React from 'react';
import logo from './logo.png';
import './App.css';
import {HavenoDaemon} from './HavenoDaemon';

const HAVENO_DAEMON_URL = "http://localhost:8080";
const HAVENO_DAEMON_PASSWORD = "apitest";

class App extends React.Component<{}, {daemonVersion: string}> {
  
  daemon: HavenoDaemon;
    
  constructor(props: any) {
    super(props);
    this.state = {daemonVersion: ""};
    this.daemon = new HavenoDaemon(HAVENO_DAEMON_URL, HAVENO_DAEMON_PASSWORD);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Version {this.state.daemonVersion}
          </p>
          <p>
            Coming soon...
          </p>
          <a
            className="App-link"
            href="https://haveno.exchange"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </header>
      </div>
    );
  }
  
  async componentDidMount() {
    try {
      this.setState({daemonVersion: await this.daemon.getVersion()});
    } catch (err) {
      console.error(err);
      this.setState({daemonVersion: " not available"});
    }
  }
}

export default App;
