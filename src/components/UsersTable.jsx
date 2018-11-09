import React, { Component } from "react";
import PropTypes from "prop-types";
import Table from "./common/table/Table";

class UsersTable extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({ path: PropTypes.string, label: PropTypes.string })
    ).isRequired,
    onSort: PropTypes.func.isRequired,
    sortColumn: PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string
    }).isRequired
  };

  columns = [
    { path: "name", label: "Name" },
    { path: "username", label: "Username" },
    { path: "email", label: "Email" },
    { path: "phone", label: "Phone" }
  ];

  render() {
    const { users, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={users}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default UsersTable;
