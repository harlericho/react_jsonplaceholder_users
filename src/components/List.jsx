import React, { Fragment } from "react";
import Item from "./Item";
function List({ users, eliminarUsuario, setDataEdit }) {
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          ) : (
            users.map((user, index) => (
              <Item
                key={index}
                index={index}
                data={user}
                eliminar={eliminarUsuario}
                setDataEdit={setDataEdit}
              />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
}

export default List;
