import { useEffect, useState } from "react";

export default function IndexPosts() {
  const apiUrl = import.meta.env.VITE_API_URL;
  //   console.log(apiUrl);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch(apiUrl + "/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        console.log(
          data.map((post) => ({
            id: post.id,
            image: post.image,
            title: post.title,
            category: post.category,
            published: post.published,
          }))
        );
      });
  };

  return (
    <div className="container">
      <h1 className="mt-5">Lista dei post</h1>

      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Immagine</th>
            <th scope="col">Titolo</th>
            <th scope="col">Categoria</th>
            <th scope="col">Pubblicato</th>
            <th scope="col">Preview</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">immagine</th>
            <td>post article</td>
            <td>food</td>
            <td>false</td>
            <td>
              <a href="#">Show</a>-<a href="#">Edit</a>
            </td>
          </tr>
          <tr>
            <th scope="row">immagine</th>
            <td>post article</td>
            <td>food</td>
            <td>false</td>
            <td>
              <a href="#">Show</a>-<a href="#">Edit</a>
            </td>
          </tr>
          <tr>
            <th scope="row">immagine</th>
            <td>post article</td>
            <td>food</td>
            <td>false</td>
            <td>
              <a href="#">Show</a>-<a href="#">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}