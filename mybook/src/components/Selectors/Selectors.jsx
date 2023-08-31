import List from "../img/List.png"
import Grade from "../img/Grade.png"
import "./Selector.css"

function Selectors () {
    return (
        <section className="homeSelectors">
           <h1>Sua Biblioteca </h1> 
           <section className="selectorSection">
           <div className="selectorName">
           <a href="#">Home</a>
           <a href="#">Whish list</a>
           <a href="#">Reading</a>
           <a href="#">Read</a>
           <a href="#">Rating</a>
           </div>
           <div className="viewSelect">
           <img src={List} alt="list" width={15}/>
           <img src={Grade} alt="list" width={15}/>
           </div>
           </section>
        </section>
    )
}

export default Selectors