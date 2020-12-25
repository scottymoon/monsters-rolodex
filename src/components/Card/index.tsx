import { Monster } from "../../types/monster"
import "./styles.css"

interface Props {
  monster: Monster
}
export default function Card({ monster }: Props) {
  const { id, email, name } = monster
  return (
    <div key={`monster-${id}`} className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}
