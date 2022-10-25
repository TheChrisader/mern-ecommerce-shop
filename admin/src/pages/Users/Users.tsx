import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUsers, deleteUser } from "../../redux/apiCalls/usersApiCalls";
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
      name: "Username",
    },
    {
      id: 2,
      name: "Role",
    },
    {
      id: 3,
      name: "Email",
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
            {!item.isAdmin ? "Admin" : "Customer"}
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
            <button
              type="button"
              onClick={() => handleDelete(item._id, idArray)}
              className="users-delete link"
              disabled={!item.isAdmin}
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
        <h2 className="add-new-user">Users</h2>
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
