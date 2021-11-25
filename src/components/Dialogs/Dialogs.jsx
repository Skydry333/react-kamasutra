import React from "react";
import { Link } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <Link to={path}> {props.name}</Link>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
let dialogsData = [
  {id: 1, name: 'Ihor'},
  {id: 2, name: 'Taras'},
  {id: 3, name: 'Ira'},
  {id: 4, name: 'Mariya'},
  {id: 5, name: 'Mihailo'},
]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Ihor" id="1" />
        <DialogItem name="Taras" id="2" />
        <DialogItem name="Ira" id="3" />
        <DialogItem name="Mariya" id="4" />
        <DialogItem name="Mihailo" id="5" />
      </div>
      <div className={s.messages}>
        <Message message='Hi' />
        <Message message='How are you' />
        <Message message='Hello' />
        <Message message='Bye' />
      </div>
    </div>
  );
};

export default Dialogs;
