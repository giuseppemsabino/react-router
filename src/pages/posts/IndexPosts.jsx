export default function IndexPosts() {

    const apiUrl = import.meta.env.VITE_API_URL
    // console.log(apiUrl);
    

  return (
    <div className="container">
      <h1 className="mt-5">Lista dei post</h1>

      <table className="table table-dark table-hover">
      <thead>
    <tr>
    <th scope="col">#</th>
            <th scope="col">Titolo</th>
            <th scope="col">Immagine</th>
            <th scope="col">Categoria</th>
            <th scope="col">Pubblicato</th>
            <th scope="col">Azioni</th>
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
