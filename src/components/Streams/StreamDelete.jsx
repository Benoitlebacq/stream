import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import {Link} from 'react-router-dom'

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    return (
      <React.Fragment>
        <Link className="ui button"  to="/">Cancel</Link>
        <button className="ui animated button red" onClick={this.props.deleteStream(this.props.match.params.id)}>
          <div className="visible content">Delete</div>
          <div className="hidden content">
            <i aria-hidden="true" className="warning sign  icon" />
          </div>
        </button>
      </React.Fragment>
    );
  };
  renderContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete the stream ?";
    }
    return `Are you sure you want to delete the stream : ${this.props.stream.title} ?`;
  };
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}
//on veut les ownProps car on  s'interresse au params.id
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
