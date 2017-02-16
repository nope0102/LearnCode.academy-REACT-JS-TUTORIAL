import React from "react";
import { Link } from "react-router";
import createHistory from "history/createBrowserHistory";

const Home = 

export default class Layout extends React.Component {

  navigate() {
    //console.log(this.props);
    //const history = createHistory();
    //console.log(history);
    //history.push("/#/featured", null);
  }

  render() {
    const history = createHistory();
    console.log(history);
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="archives" activeClassName="active" className="btn btn-danger">archives</Link>
        <Link to="settings"><button class="btn btn-success">settings</button></Link>
        <button onClick={this.navigate.bind(this)}>featured</button>
        <Link to="/" className="btn btn-default">featured</Link>
      </div>
    );
  }
}
