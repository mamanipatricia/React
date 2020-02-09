import React, { useState, useEffect } from "react";
import axios from 'axios' // imp atajitos

// importing other components
import Login from './components/Login/Login';
// main
const App = ({ tgt }) => {
  // variables (states=estados) <- useState
  // variables del componente, no confundir con props
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("PATRICIA")
  const [lastName, setLastName] = useState("MAMANI")
  const [listArticles, setListArticles] = useState([{ id: 2, name: "two" }, { id: 3, name: "three" }, { id: 5, name: "five" }])
  // useEffect
  // useEffect(() => {

  // }, [variables a escuchar, ])
  useEffect(() => {
    console.log("algo cambio en lotso")
  }, [name, lastName])

  // methods and functions

  const updateName = (name, lastName) => {
    console.log(lastName)
    setName(name)
    setLastName(lastName)
  }

  // HTML
  return (
    <div>
      <div>
        <h1>HOLA {name} {lastName}</h1>
        <button onClick={() => updateName("OSCAR", "CHOQUE")}>Click me</button>
        <ol>
          {
            listArticles.map((article) => {
              return (
                <li key={`art-${article.id}`}>ID: {article.id} NAME : {article.name}
                </li>)
            })
          }
        </ol>
        <hr />
        Cities {`bol: ${loading}`}
        <ul>
          {
            loading && <span>ESTO DEAPARECERA LOADING => FALSE  {`boo ${loading}`} </span>
          }
        </ul>
      </div>

      {/* <Login  /> */}

    </div>
  )

}

export default App;