import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
            {stream.title}
            </Link>
            
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };
  renderAdmin = stream => {
    if (stream.userId === this.props.userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/delete/${stream.id}`} className="ui animated button red">
            <div className="visible content">Delete</div>
            <div className="hidden content">
              <i aria-hidden="true" className="trash alternate  icon" />
            </div>
          </Link>
          <Link to={`/streams/edit/${stream.id}`} className="ui fade animated button blue">
          <div className="visible content">Edit</div>
            <div className="hidden content">
              <i aria-hidden="true" className="edit icon" />
            </div>
          </Link>         
        </div>
      );
    }
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui vertical animated button primary">
            <div className="visible content">Create your stream</div>
            <div className="hidden content">
              <i aria-hidden="true" className="add alternate icon" />
            </div>
          </Link>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}
// Object.values prend en parametre un objet et  met toute ses values en array
const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    streams: Object.values(state.streams),
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
