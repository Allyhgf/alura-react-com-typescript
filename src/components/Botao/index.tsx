import React from "react";
import style from "./Botao.module.scss";

export function Botao(props: any) {
  return <button className={style.botao}>{props.children}</button>;
}
