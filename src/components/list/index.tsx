
type Props = {
  names: Array<string>;
  firstNote: Array<string>;
  secondNote: Array<string>;
}
const List: React.FC<Props> = ({ names, firstNote, secondNote }) => {
  const headList = ["Posição", "Produto", "Nota-1", "Nota-2", "Prioridade"]
  return (
    <>
    <table
    id="brasileirao"
    border={1}
    >
      <thead >
        <tr>
      { headList.map((item, index) => (
      <td key={index}> {item}</td>
        ))
      }
      </tr>
      </thead>
    { names.map((e, index) => (
      <thead key={index}>
        <tr>
      <td> {index + 1}</td>
      <td >{e}</td>
      <td> {firstNote[index]}</td>
      <td> {secondNote[index]}</td>
      <td> {(Number(secondNote[index]) + Number(firstNote[index]))/2}</td>

        </tr>
      </thead>
        ))
      }
    </table>
    </>
  );
}

export default List;