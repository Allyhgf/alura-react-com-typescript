import React from "react";
import style from "./Botao.module.scss";

export default function Botao(props: {
  type?: "button" | "submit" | "reset" | undefined;
  children: string;
}) {
  return (
    <button type={props.type} className={style.botao}>
      {props.children}
    </button>
  );
}
