import Navbar from "../components/Navbar";

export default function PostsPage(){
    return  (
        <div>
          <header>
            <Navbar></Navbar>
          </header>
    
          <div className="container">
            <h1 className="mt-5">Post</h1>

            <ul>
            <li><a href="#">post1</a></li>
            <li><a href="#">post2</a></li>
            <li><a href="#">post3</a></li>
            </ul>
          </div>
        </div>
      );
}