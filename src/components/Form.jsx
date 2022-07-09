import React, { Fragment, useEffect, useState } from "react";
function Form({ guardarUsuario, actualizarUsuario, setDataEdit, dataEdit }) {
  const [form, setForm] = useState({
    id: null,
    name: "",
    username: "",
    email: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id === null) {
      guardarUsuario(form);
    } else {
      actualizarUsuario(form);
    }
    setForm({
      id: null,
      name: "",
      username: "",
      email: "",
    });
  };
  useEffect(() => {
    if (dataEdit) {
      setForm(dataEdit);
    } else {
      setForm({
        id: null,
        name: "",
        username: "",
        email: "",
      });
    }
  }, [dataEdit]);
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit">
          {form.id === null ? "Guardar" : "Actualizar"}
        </button>
      </form>
    </Fragment>
  );
}
export default Form;
