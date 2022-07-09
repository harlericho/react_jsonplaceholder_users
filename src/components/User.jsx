import React, { Fragment, useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import { obtenerUsuarios } from "./Server";
function User() {
  const [users, setUsers] = useState([]);
  const [dataEdit, setDataEdit] = useState(null);
  const listadoUsuarios = async () => {
    const users = await obtenerUsuarios();
    setUsers(users);
  };
  const guardarUsuario = async (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const actualizarUsuario = async (user) => {
    const newUsers = users.map((u) => {
      if (u.id === user.id) {
        return user;
      }
      return u;
    });
    setUsers(newUsers);
  };
  const eliminarUsuario = async (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  useEffect(() => {
    listadoUsuarios();
  }, []);

  return (
    <Fragment>
      <div>
        <Form
          guardarUsuario={guardarUsuario}
          actualizarUsuario={actualizarUsuario}
          setDataEdit={setDataEdit}
          dataEdit={dataEdit}
        />
      </div>
      <div>
        <List
          users={users}
          eliminarUsuario={eliminarUsuario}
          setDataEdit={setDataEdit}
        />
      </div>
    </Fragment>
  );
}

export default User;
