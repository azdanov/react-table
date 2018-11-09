import React, { Component } from "react";
import { orderBy } from "lodash";
import api from "../services/apiService";
import NavBar from "../components/NavBar";
import UsersTable from "../components/UsersTable";
import Pagination from "../components/common/Pagination";
import pagination from "../services/paginationService";

class App extends Component {
  state = {
    users: null,
    sortColumn: { path: "name", order: "ascending" },
    currentPage: 1,
    pageSize: 3
  };

  async componentDidMount() {
    const users = await api.get("users");
    this.setState({ users: await users.json() });
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handlePageSizeChange = pageSize => {
    this.setState({ pageSize });
  };

  render() {
    const { users, sortColumn, currentPage, pageSize } = this.state;
    const sorted = orderBy(users, [sortColumn.path], [sortColumn.order]);
    const paginated = pagination(sorted, currentPage, pageSize);
    const itemsCount = sorted.length;

    return (
      <>
        <NavBar />
        <div className="container mx-auto font-sans subpixel-antialiased">
          <h1 className="my-4 ml-2">Users</h1>
          {users && (
            <>
              <UsersTable
                users={paginated}
                onSort={this.handleSort}
                sortColumn={sortColumn}
              />
              <Pagination
                itemsCount={itemsCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
                onPageSizeChange={this.handlePageSizeChange}
              />
            </>
          )}
        </div>
      </>
    );
  }
}

export default App;
