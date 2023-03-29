import React, { Component } from 'react';

export class Profile_ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status)
      this.setState({ status: this.props.status });
  }

  activateEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (event) => {
    this.setState({ status: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <a onDoubleClick={this.activateEditMode}>
            {this.props.status || '-----'}
          </a>
        ) : (
          <input
            onChange={this.onStatusChange}
            autoFocus={true}
            onBlur={this.activateEditMode}
            value={this.state.status}
          ></input>
        )}
      </div>
    );
  }
}

export default Profile_ProfileStatus;
