import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getUsers, deleteUser } from "../../redux/apiCalls/usersApiCalls";
// import { savedData } from "../../data";
import Table from "../../components/Table/Table";

import "./Users.scss";

type userColumn = {
  id: number;
  name: string;
}[];

type userRow = {
  id: number;
  name: Function;
}[];

const Users: React.FC = () => {
  const [idArray, setIdArray] = useState<string[]>([]);

  const dispatch = useDispatch();

  const users = useSelector((state: any) => state.users.users);
  const isFetching = useSelector((state: any) => state.users.isFetching);

  useEffect(() => {
    const fetchUsers = async () => {
      getUsers(dispatch);
    };
    fetchUsers();
  }, [dispatch]);

  const handleDelete = (id: string, idArray: string[]) => {
    if (idArray.length !== 0) {
      for (let i = 0; i < idArray.length; i++) {
        deleteUser(dispatch, idArray[i]);
      }
      setIdArray([]);
    } else {
      deleteUser(dispatch, id);
    }
  };

  const userColumns: userColumn = [
    {
      id: 1,
      name: "user",
    },
    {
      id: 2,
      name: "Stock",
    },
    {
      id: 3,
      name: "Price",
    },
    {
      id: 4,
      name: "Action",
    },
  ];

  const userRows: userRow = [
    {
      id: 1,
      name: (item: any) => {
        return <span className="users-item user-name">{item.username}</span>;
      },
    },
    {
      id: 2,
      name: (item: any) => {
        return (
          <span className="users-item">
            {!item.isEmailVerified ? "In Stock" : "Out of Stock"}
          </span>
        );
      },
    },
    {
      id: 3,
      name: (item: any) => {
        return <span className="users-item">{item.email}</span>;
      },
    },
    {
      id: 4,
      name: (item: any) => {
        return (
          <div className="users-options">
            <Link to={"/user/" + item._id} className="users-view link">
              View
            </Link>
            <button
              type="button"
              onClick={() => handleDelete(item._id, idArray)}
              className="users-delete link"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <main className="users">
      <div className="users-new-user">
        <h2 className="add-new-user">Add New User</h2>
        <Link to="/user/new" className="link add-new-button">
          {" "}
          Add New
        </Link>
      </div>
      {isFetching && (
        <div className="users-loader-backdrop">
          <div className="users-loader"></div>
        </div>
      )}
      <Table
        columns={userColumns}
        rows={userRows}
        items={users}
        check={true}
        pageSize={6}
        pagination={true}
        getIdArray={(id) => setIdArray(id)}
      />
    </main>
  );
};

export default Users;
