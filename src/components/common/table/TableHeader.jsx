/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Dummy from "../svg/Dummy";
import ChevronUp from "../svg/ChevronUp";
import ChevronDown from "../svg/ChevronDown";

class TableHeader extends Component {
  static propTypes = {
    sortColumn: PropTypes.shape({
      path: PropTypes.string,
      order: PropTypes.string
    }).isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
        order: PropTypes.string
      })
    ).isRequired,
    onSort: PropTypes.func.isRequired
  };

  flipSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order =
        sortColumn.order === "ascending" ? "descending" : "ascending";
    else {
      sortColumn.path = path;
      sortColumn.order = "ascending";
    }
    this.props.onSort(sortColumn);
  };

  getSortIcon = column => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return <Dummy />;
    if (sortColumn.order === "descending") return <ChevronUp />;
    return <ChevronDown />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              className="select-none cursor-pointer"
              key={column.path}
              onClick={() => this.flipSort(column.path)}
            >
              <div className="flex justify-left items-center">
                {column.label} {this.getSortIcon(column)}
              </div>
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
