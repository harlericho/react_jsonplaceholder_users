import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";

function App() {
  // const url = "https://jsonplaceholder.typicode.com/users/";
  // const [posts, setPosts] = useState([]);

  // const [form, setForm] = useState({
  //   id: null,
  //   name: "",
  //   username: "",
  //   email: "",
  // });
  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (form.id === null) {
  //     fetch(url, {
  //       method: "POST",
  //       body: JSON.stringify(form),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPosts((posts) => [...posts, data]);
  //         listado.push(data);
  //       });
  //   } else {
  //     fetch(`${url}${form.id}`, {
  //       method: "PUT",
  //       body: JSON.stringify(form),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPosts((posts) => {
  //           const newPosts = posts.map((post) => {
  //             if (post.id === data.id) {
  //               return data;
  //             }
  //             return post;
  //           });
  //           return newPosts;
  //         });
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  // const listado = () => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setPosts(data);
  //     })
  //     .catch((error) => console.log(error));
  // };
  // const handleEdit = (id) => {
  //   const post = posts.find((post) => post.id === id);
  //   setForm(post);
  // };
  // const handleDelete = (id) => {
  //   fetch(url + id, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       alert("Usuario eliminado");
  //       setPosts(posts.filter((post) => post.id !== id));
  //     })
  //     .catch((error) => console.log(error));
  // };

  // useEffect(() => {
  //   listado();
  //}, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="row justify-content-center p-3">
          <div className="col-md-10">
            <User />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
