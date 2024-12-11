import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function IndexPosts() {
    const [posts, setPosts] = useEffect([])

    useEffect(() => {
        fetch("http://localhost:3000/posts")
          .then(response => response.json())
          .then(data => setPosts(data))
          .catch(err => console.error(err));
      }, []);
  return (
    <div className="container">
      <h1 className="mt-5">Lista dei post</h1>

      <table className="table table-dark table-hover">
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
      </table>
    </div>
  );
}
