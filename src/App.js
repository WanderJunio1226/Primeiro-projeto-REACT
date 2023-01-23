import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="limite topo">
        <p className="azuldestaque ptopo">React JS</p>
      </header>
      <main className="limite">
        <section className="banner cinzadestaque">
          <div className=" ">
            <h1 className="azuldestaque">React JS</h1>
            <p className="brancodestaque">Biblioteca JavaScript para criar SPAs</p>
            <nav className="linkbanner" >
              <a className="linkdestaque" href="https://reactjs.org/">Site Oficial</a>
            </nav>
          </div>
        </section>
        <section className="">
            <h2>Requisitos</h2>
            <p>Veja abaixo os requisitos mínimos para aprender React JS</p>
          <div className="limitasecao">
            <div className="boxlinguagens cinzadestaque">
              <h3 className="golddestaque">React JS</h3> <p className="brancodestaque">HTML Aprender a estruturar os elementos da
              página com HTML</p> 
            </div>
            <div className="boxlinguagens cinzadestaque">
              <h3 className="golddestaque">CSS</h3> <p className="brancodestaque"> Aprender a estilizar os elementos da página com CSS{" "}</p>
            </div>
            <div className="boxlinguagens cinzadestaque">
              <h3  className="golddestaque">JavaScript</h3> <p className="brancodestaque"> Aprender a linguagem utilizada pelo React JS,
              o JavaScript</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="limite foooter">
        <p>Curso de introdução de React JS</p>
      </footer>
    </div>
  );
}

export default App;
