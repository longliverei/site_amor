import Header from "../../components/Header/Header";
import Caroussel from "../../components/Caroussel/Caroussel";
import "./Home.css";

function Home() {
  return (
   <main>
        <Header/>
        <div className="container">
          <div className="home-info">
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
          <div className="caroussel-wrapper">
            <Caroussel/>
          </div>
        </div>
   </main>
  );
}

export default Home;