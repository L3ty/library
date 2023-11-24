import Books from "../img/Books.png"
import Add from "../img/Add.png"
import "./Body.css"

function Body () {
    return (
        <section className="body">
            <div className="first">
           <img src={Books} alt="books" width={90}/>
           <h1>Parece que a sua biblioteca está vazia</h1>
            </div>
            <div className="second">
           <h1>Adicione seu primeiro livro!</h1>
           <img src={Add} alt="add" width={30} className="add"/>
            </div>
        </section>
    )
}

export default Body