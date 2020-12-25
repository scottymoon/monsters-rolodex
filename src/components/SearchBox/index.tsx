import "./styles.css"

interface Props {
  onChange: (value: string) => void
  placeHolder: string
}

export default function SearchBox({ onChange, placeHolder }: Props) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
