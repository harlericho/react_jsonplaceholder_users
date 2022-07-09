const url = "https://jsonplaceholder.typicode.com/users/";
export const obtenerUsuarios = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export const obtenerUsuario = async (id) => {
  const response = await fetch(`${url}${id}`);
  const data = await response.json();
  return data;
};
// export const crearUsuario = async (usuario) => {
//   const response = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(usuario),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   return data;
// };
// export const actualizarUsuario = async (usuario) => {
//   const response = await fetch(`${url}${usuario.id}`, {
//     method: "PUT",
//     body: JSON.stringify(usuario),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   return data;
// };
// export const eliminarUsuario = async (id) => {
//   const response = await fetch(`${url}${id}`, {
//     method: "DELETE",
//   });
//   const data = await response.json();
//   return data;
// };
