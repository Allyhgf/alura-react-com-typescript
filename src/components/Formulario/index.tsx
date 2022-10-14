import React from "react";
import ITarefa from "../../types/tarefa";
import Botao from "../Botao";
import style from "./Formulario.module.scss";

export default class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  addTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { ...this.state },
    ]);
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Acidione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(event) => {
              this.setState({ ...this.state, tarefa: event.target.value });
            }}
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={(event) => {
              this.setState({ ...this.state, tempo: event.target.value });
            }}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    );
  }
}
