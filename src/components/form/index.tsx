import { useState } from "react"

type Props = {
  listName: (a: string[]) => void;
  listNotaJoel: (a: string[]) => void;
  listNotaLuana: (a: string[]) => void;
  arrayName: Array<string>;
  arrayNotaJoel: Array<string>;
  arrayNotaLuana: Array<string>;
}
const Form: React.FC<Props> = ({ listName, listNotaJoel, listNotaLuana, arrayNotaJoel, arrayNotaLuana, arrayName }) => {
const [nameList, setNameList] = useState('')
const [notaJoel, setNotaJoel] = useState('')
const [notaLuana, setNotaLuana] = useState('')

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  listName([...arrayName, nameList])
  listNotaJoel([...arrayNotaJoel, notaJoel])
  listNotaLuana([...arrayNotaLuana, notaLuana])
  setNameList('')
  setNotaJoel('')
  setNotaLuana('')
};
  return (
    <>
    <div>
      <form>
        <label htmlFor="campo">
          Produto
        <input
          type="text"
          id="campo"
          name="campo"
          value={nameList}
          placeholder="Insira o elemento aqui"
          onChange={ (e) => setNameList(e.target.value)}
        />
        </label>
        <label htmlFor="nota-j">
          Joel
        <input
          type="number"
          id="nota-j"
          name="nota"
          value={notaJoel}
          placeholder="Insira sua nota aqui"
          onChange={ (e) => setNotaJoel(e.target.value)}
        />
        </label>
        <label htmlFor="nota-l">
        Luana
        <input
          type="number"
          id="nota-l"
          name="nota"
          value={notaLuana}
          placeholder="Insira sua nota aqui"
          onChange={ (e) => setNotaLuana(e.target.value)}
        />
        </label>
        <button
        type="submit"
        onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
    </>
  )
}

export default Form
