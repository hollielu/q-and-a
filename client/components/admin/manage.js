import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, deleteUser } from '../../store';
import { Header } from '../../components';

class Manage extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  handleDelete = (event, user) => {
    event.preventDefault();
    const { myId, deleteUser } = this.props;

    if (user.id === myId) {
      if (confirm('You are about to delete yourself! Are you sure?')) {
        deleteUser(user);
      }
    } else {
      deleteUser(user);
    }
  };

  render() {
    const { users, isLoading, isAdmin } = this.props;
    if (isLoading) return null;
    return (
      <div>
        <Header title="Manage" />
        <h2 className="subtitle is-3">Users</h2>
        <table className="table is-fullwidth is-striped">
          <colgroup>
            <col style={{ width: '8%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '15%' }} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Joined</th>
              <th scope="col">Role</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>{user.isAdmin ? 'Admin' : 'Customer'}</td>
                <td>
                  <a
                    href="#"
                    onClick={event => this.handleDelete(event, user)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapState = state => ({
  isLoading: !!state.users.isLoading,
  isAdmin: !!state.me.isAdmin,
  myId: state.me.id,
  users: state.users.all
});

const mapDispatch = dispatch => ({
  getUsers: () => dispatch(fetchUsers()),
  deleteUser: user => dispatch(deleteUser(user))
});

export default connect(mapState, mapDispatch)(Manage);
