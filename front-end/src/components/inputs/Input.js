import { useContext } from "react";
import useForm from "../../hooks/useForm";
import { ParticipationContext } from "../../global/State";
import * as s from "./style";

const Inputs = () => {
  const globalState = useContext(ParticipationContext);
  const { form, onChange, clearFields } = useForm({
    first_name: "",
    last_name: "",
    participation: "",
  });

  const preventDefaultFunction = (event) => {
    event.preventDefault();
    globalState.add(form);
    clearFields();
  };

  return (
    <s.Form onSubmit={preventDefaultFunction}>
      <s.Inputs
        name="fist_name"
        value={form.first_name}
        onChange={onChange}
        placeholder="Nome"
        required
      />

      <s.Inputs
        name="last_name"
        value={form.last_name}
        onChange={onChange}
        placeholder="Sobrenome"
        required
      />

      <s.Inputs
        name="participation"
        value={form.participation}
        onChange={onChange}
        placeholder="Participação"
        type={"number"}
        required
      />
      <s.ButtonSend>ENVIAR</s.ButtonSend>
    </s.Form>
  );
};

export default Inputs;
