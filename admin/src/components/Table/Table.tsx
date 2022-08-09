import { useRef, useState, useMemo } from "react";

import "./Table.scss";

type tableProps = {
  columns: any[];
  rows: any[];
  items: any[];
  check?: boolean;
  pageSize: number;
  pagination?: boolean;
};

const Table = ({
  columns,
  items,
  rows,
  check,
  pageSize,
  pagination,
}: tableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const allRef = useRef<HTMLInputElement | null>(null);
  const refs = useRef<HTMLInputElement[]>([]);

  let lastPage = Math.ceil(items.length / pageSize);
  let firstPageIndex = (currentPage - 1) * pageSize;
  let lastPageIndex = firstPageIndex + pageSize;

  const currentData = useMemo(() => {
    return items.slice(firstPageIndex, lastPageIndex);
  }, [firstPageIndex, lastPageIndex, items]);

  const handlePagination = (params: string) => {
    if (params === "back" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      if (allRef.current) allRef.current.checked = false;
    }
    if (params === "forward" && currentPage !== lastPage) {
      setCurrentPage(currentPage + 1);
      if (allRef.current) allRef.current.checked = false;
    }
  };

  return (
    <>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              {check && (
                <th className="table-column-check">
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
            {currentData.map((item, i) => (
              <tr key={item.id} className="table-row">
                {check && (
                  <td className="table-row-check">
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
                  <td key={row.id} className="table-row-item">
                    {row.name(item)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div className="pagination-footer">
          <button
            className="pagination-button"
            onClick={() => {
              handlePagination("back");
            }}
          >
            Go Backward
          </button>
          <p>
            {firstPageIndex + 1} -{" "}
            {currentPage !== lastPage && `${lastPageIndex} of `}
            {items.length}
          </p>
          <button
            className="pagination-button"
            onClick={() => {
              handlePagination("forward");
            }}
          >
            Go Forward
          </button>
        </div>
      )}
    </>
  );
};

export default Table;
