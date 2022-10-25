import { useRef, useState, useMemo, useEffect } from "react";
import { useIsMount } from "../../utils/hooks/useIsMount";

import "./Table.scss";

type tableProps = {
  columns: any[];
  rows: any[];
  items: any[];
  check?: boolean;
  pageSize: number;
  pagination?: boolean;
  getIdArray?: React.Dispatch<React.SetStateAction<string[]>>;
};

const Table = ({
  columns,
  items,
  rows,
  check,
  pageSize,
  pagination,
  getIdArray,
}: tableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allRefState, setAllRefState] = useState<any>(null);

  const allRef = useRef<HTMLInputElement | null>(null);
  const refs = useRef<HTMLInputElement[]>([]);

  const isMount = useIsMount();

  let lastPage = Math.ceil(items.length / pageSize);
  let firstPageIndex = (currentPage - 1) * pageSize;
  let lastPageIndex = firstPageIndex + pageSize;

  const currentData = useMemo(() => {
    return items.slice(firstPageIndex, lastPageIndex);
  }, [firstPageIndex, lastPageIndex, items]);

  const handlePagination = (params: string) => {
    if (currentData.length === 0) return;

    if (params === "back" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      if (allRef.current) {
        allRef.current.checked = false;
        setAllRefState(allRef.current.checked);
      }
      getIdArray && getIdArray([]);
    }
    if (params === "forward" && currentPage !== lastPage) {
      setCurrentPage(currentPage + 1);
      if (allRef.current) {
        allRef.current.checked = false;
        setAllRefState(allRef.current.checked);
      }
      getIdArray && getIdArray([]);
    }
  };

  const checkedHandler = (itemId: string, i: number) => {
    if (!getIdArray) return;

    if (refs.current[i].checked === true) {
      if (getIdArray) getIdArray((prev) => [...prev, itemId]);
    } else if (refs.current[i].checked === false) {
      if (getIdArray) getIdArray((prev) => prev.filter((id) => id !== itemId));
    }
  };

  useEffect(() => {
    if (!isMount) {
      if (allRef.current?.checked === true) {
        if (getIdArray)
          currentData.forEach((data) => {
            getIdArray((prev: string[]) =>
              !prev.find((element) =>
                element === data._id ? data._id : data.id
              )
                ? [...prev, data._id]
                : [...prev]
            );
          });
      } else if (
        allRef.current?.checked === false &&
        refs.current.findIndex((ref) => ref.checked === true) === -1
      ) {
        if (getIdArray) getIdArray([]);
      }
    }
  }, [allRefState, currentData]); //eslint-disable-line react-hooks/exhaustive-deps

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
                      setAllRefState(allRef.current?.checked);
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
              <tr key={item.id || item._id} className="table-row">
                {check && (
                  <td className="table-row-check">
                    <input
                      className="table-check"
                      ref={(element) => {
                        if (element) refs.current[i] = element;
                      }}
                      type="checkbox"
                      onChange={(e) => {
                        if (allRef.current) {
                          allRef.current.checked = false;
                          setAllRefState(allRef.current.checked);
                        }
                        checkedHandler(item._id, i);
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
