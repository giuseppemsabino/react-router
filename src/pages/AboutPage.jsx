import Navbar from "../components/Navbar";

export default function AboutPage(){
    return  (
        <div>
          <header>
            <Navbar></Navbar>
          </header>
    
          <div className="container">
            <h1 className="mt-5">About</h1>
          </div>
        </div>
      );
}