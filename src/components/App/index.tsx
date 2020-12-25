import "./styles.css"
import { useEffect, useState } from "react"
import CardList from "../CardList"
import { Monster } from "../../types/monster"
import SearchBox from "../SearchBox"

export default function App() {
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filter, setFilter] = useState("")

  const filteredMonsters = monsters.filter(
    (m) => m.name.search(new RegExp(filter, "i")) >= 0,
  )

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => setMonsters(monsters))
  }, [])

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox onChange={setFilter} placeHolder="Search Monsters" />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}
