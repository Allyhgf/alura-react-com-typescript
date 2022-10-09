import React from "react";
import style from "./Botao.module.scss";

export default function Botao(props: {children: string}) {
  return <button className={style.botao}>{props.children}</button>;
}
