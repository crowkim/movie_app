import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="Detail__container">
          <h2>{location.state.title}</h2>;
          <span>{location.state.summary}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
