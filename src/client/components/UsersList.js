import React, { Component } from "react";
import {connect} from 'react-redux';

import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount() {
  }

  renderUsers() {
    return this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))
  }

  render() {
    <div>
      Here's a big list of users:
      <ul>{this.renderUsers()}</ul>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);
