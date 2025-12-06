import Header from "../../components/Header/Header";
import Caroussel from "../../components/Caroussel/Caroussel";

function Home() {
  return (
   <main>
        <Header/>
        <div className="caroussel">
            <Caroussel/>
        </div>
   </main>
  );
}

export default Home;