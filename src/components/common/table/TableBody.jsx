import React, { Component } from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

class TableBody extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }))
      .isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({ path: PropTypes.string, label: PropTypes.string })
    ).isRequired
  };

  renderCell = (item, column) => get(item, column.path);

  createKey = (item, column) => item.id + column.path;

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
