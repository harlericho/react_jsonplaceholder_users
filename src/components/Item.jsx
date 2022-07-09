import React, { Fragment } from "react";

function Item({ index, data, eliminar, setDataEdit }) {
  return (
    <Fragment>
      <tr>
        <td>{index + 1}</td>
        <td>{data.name}</td>
        <td>{data.username}</td>
        <td>{data.email}</td>
        <td>
          {" "}
          <button
            onClick={() => {
              setDataEdit(data);
            }}
          >
            Edit
          </button>{" "}
          <button
            onClick={() => {
              eliminar(data.id);
            }}
          >
            Delete
          </button>{" "}
        </td>
      </tr>
    </Fragment>
  );
}

export default Item;
