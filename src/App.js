import React, { useState } from "react";

// importing other components

// main
const App = ({ tgt }) => {
  // variables (states=estados) <- useState 
  // variables del componente, no confundir con props
  const [name, setName] = useState("PATRICIA")
  const [lastName, setLastName] = useState("MAMANI")
  const [listArticles, setListArticles] = useState([{ id: 2, name: "two" }, { id: 3, name: "three" }, { id: 5, name: "five" }])

  // methods and functions
  const updateName = (name, lastName) => {
    console.log(lastName)
    setName(name)
    setLastName(lastName)
  }
  return (
    <div>
      <h1>HOLA {name} {lastName}</h1>
      <button onClick={() => updateName("OSCAR", "CHOQUE")}>Click me</button>
      <ol>
        {
          listArticles.map((article) => {
            return (
              <li>ID: {article.id} NAME : {article.name}
              </li>)
          })
        }
      </ol>
    </div>
  )
}

export default App;