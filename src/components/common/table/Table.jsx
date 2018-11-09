import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

// eslint-disable-next-line react/prop-types
const Table = ({ columns, sortColumn, onSort, data }) => (
  <table className="table table-fixed">
    <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
    <TableBody columns={columns} data={data} />
  </table>
);

export default Table;
