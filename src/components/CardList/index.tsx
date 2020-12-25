import { Monster } from "../../types/monster"
import Card from "../Card"
import "./styles.css"

interface Props {
  monsters: Monster[]
}

export default function CardList({ monsters }: Props) {
  console.log(monsters)
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} />
      ))}
    </div>
  )
}
