import { useRef } from "react";

import "./Table.scss";

type tableProps = {
  columns: any[];
  rows: any[];
  items: any[];
  check?: boolean;
};

const Table = ({ columns, items, rows, check }: tableProps) => {
  const allRef = useRef<HTMLInputElement | null>(null);
  const refs = useRef<HTMLInputElement[]>([]);

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            {check && (
              <th>
                <input
                  className="table-check"
                  type="checkbox"
                  ref={allRef}
                  onChange={(e) => {
                    if (e.target.checked === false) {
                      refs.current.forEach((ref) => {
                        if (ref === null) return;
                        return (ref.checked = false);
                      });
                    } else {
                      refs.current.forEach((ref) => {
                        if (ref === null) return;
                        return (ref.checked = true);
                      });
                    }
                  }}
                />
              </th>
            )}
            {columns.map((column) => (
              <th className="table-column-item" key={column.id}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id} className="table-row">
              {check && (
                <td>
                  <input
                    className="table-check"
                    ref={(element) => {
                      if (element) refs.current[i] = element;
                    }}
                    type="checkbox"
                    onChange={(e) => {
                      if (allRef.current) allRef.current.checked = false;
                    }}
                  />
                </td>
              )}
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
