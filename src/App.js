import React, { useState } from "react";
import ReactDOM from 'react-dom';
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditMe from "./components/EditMe";
import { v4 as uuidv4 } from "uuid";

function App() {

  // Agregar Usuarios por defecto
  const usersData = [
    { id: uuidv4(), name: "Pepe", username: "xxxPePexxx" },
    { id: uuidv4(), name: "Coscu", username: "Anashe" },
    { id: uuidv4(), name: "Ben", username: "Tenes el Omnitrix" },
  ];

  const [users, setUsers] = useState(usersData);

  /*Agregar Usuarios con ID Random*/
  const addUser = (user) => {
    user.id = uuidv4();
    console.log(user);
    setUsers([...users, user]);
  };

  // Eliminar Usuario con filter
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Editar usuario
  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks - By Dariel</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditMe
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
