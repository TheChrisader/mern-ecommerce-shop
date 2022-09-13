import "./Table.scss";

type tableProps = {
  columns: any[];
  rows: any[];
  items: any[];
  tableSize?: number;
};

const Table = ({ columns, items, rows, tableSize }: tableProps) => {
  let mapItems;
  if (tableSize) {
    mapItems = items.slice(0, tableSize);
  } else {
    mapItems = items.slice();
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th className="table-column-item" key={column.id}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mapItems.map((item) => (
            <tr key={item.id || item._id} className="table-row">
              {rows.map((row) => (
                <td className="table-row-item" key={row.id}>
                  {row.name(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
