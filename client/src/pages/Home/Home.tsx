import Header from "../../components/Header/Header";
import Caroussel from "../../components/Caroussel/Caroussel";
import "./Home.css";

function Home() {
  return (
   <main>
        <Header/>
        <div className="container">
          <div className="caroussel-wrapper">
            <Caroussel/>
          </div>
          <div className="home-info">
            <h1>Chez vous, partout et ailleurs</h1>
            <p>
              Découvrez des expériences uniques grâce aux
              hébergements locaux dans 190 pays.
            </p>
          </div>
        </div>
   </main>
  );
}

export default Home;