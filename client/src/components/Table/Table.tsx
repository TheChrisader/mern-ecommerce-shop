import "./Table.scss";

type tableProps = {
  columns: any[];
  rows: any[];
  items: any[];
};

const Table = ({ columns, items, rows }: tableProps) => {
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
          {items.map((item) => (
            <tr key={item.id} className="table-row">
              {rows.map((row) => (
                <td className="table-row-item">{row.name(item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
