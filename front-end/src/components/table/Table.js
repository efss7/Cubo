import { useContext } from "react";
import { ParticipationContext } from "../../global/Context";
import {
  Aligned,
  Celula,
  CelulaTd,
  Container,
  Id,
  Participation,
  Table1,
} from "./style";
import { Message } from "../../components/message/Message";

const Table = () => {
  const globalState = useContext(ParticipationContext);

  const twoFunctionsCall = ( id, first_name, last_name, participation) => {
    globalState.editTableDataFn(id, first_name, last_name, participation);
    globalState.showEditFn();
  };

  return (
    <Container>
      <Message />
      <Table1>
        <thead>
          <tr>
            <Id>&nbsp;</Id>
            <Aligned>Nome</Aligned>
            <Aligned>Sobrenome</Aligned>
            <Participation>Participação</Participation>
          </tr>
        </thead>
        <tbody>
          {globalState.list &&
            globalState.list.map((people) => {
              return (
                <tr
                  key={people.id}
                  onDoubleClick={() =>
                    twoFunctionsCall( people.id, people.first_name, people.last_name, people.participation)
                  }
                >
                  <Celula>{people.index}</Celula>
                  <CelulaTd>{people.first_name}</CelulaTd>
                  <CelulaTd>{people.last_name}</CelulaTd>
                  <Celula>{people.participation}%</Celula>
                </tr>
              );
            })}
        </tbody>
      </Table1>
      <p>
        Para editar ou deletar uma cota de participação, dê 2 clicks no nome da
        pessoa
      </p>
    </Container>
  );
};

export default Table;
