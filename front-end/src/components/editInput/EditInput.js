import { useContext, useEffect, useState } from "react";
import useForm  from "../../hooks/useForm";
import { ParticipationContext } from "../../global/Context";
import { ButtonDelete, ButtonUpdate, Container, Form, Inputs } from "./style";

export const EditInputs = () => {
  const globalState = useContext(ParticipationContext);
  const [person, setPerson] = useState(globalState.selectedPersonData)
  const {form, onChange, clearFields} = useForm({
    first_name:  person.first_name,
    last_name: person.last_name,
    participation: person.participation
  });
  
  useEffect(()=>{
    setPerson(globalState.selectedPersonData)
  },[globalState.selectedPersonData])

  const preventDefaultFunction = (event) => {
    event.preventDefault();
    form.id = globalState.selectedPersonData.id    
    globalState.editParticipation(form);
    globalState.showEditFn();
    clearFields();
  };

  const callTwoFunctions = () => {
    globalState.del();
    globalState.showEditFn();
  };

  return (
    <Container>
      {globalState.edit && (
        <>
          <Form onSubmit={preventDefaultFunction}>
            <Inputs
              name="first_name"
              value={form.first_name}
              onChange={onChange}
              placeholder="Nome"
              required
            />
            <Inputs
              name="last_name"
              value={form.last_name}
              onChange={onChange}
              placeholder="Sobrenome"
              required
            />
            <Inputs
              name="participation"
              value={form.participation}
              onChange={onChange}
              placeholder="Participation"
              required
              type={"number"}
            />
            <ButtonUpdate>ATUALIZAR</ButtonUpdate>
          </Form>
          <ButtonDelete onClick={() => callTwoFunctions()}>
            DELETAR
          </ButtonDelete>
        </>
      )}
    </Container>
  );
};
