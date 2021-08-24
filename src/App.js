import { Component } from "react";
import { Button } from "react-bootstrap";
import Profile from "./Components/Profile/Profile";
class App extends Component {
  state = {
    show: false,
    date: 0,
  };
  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ date: this.state.date + 1 });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <Button variant="secondary" onClick={this.toggleShow}>
          {this.state.show ? "Hide profile" : "Show profile"}
        </Button>
        {this.state.show && <Profile />}
        <br />
        <span>{this.state.date}</span>
      </div>
    );
  }
}

export default App;
