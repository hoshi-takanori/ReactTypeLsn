'use strict';
import React,{ useState } from 'react';
// import { createStore } from "redux";

interface ContentProps {
  id: string,
  name: string,
  onChangeId: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onSaveItem(): void
  }

export default function Content(props:ContentProps) {
  //NAME３文字以上ででsaveボタン押せるようにdisabledを入れる
  const [checkName, setCheckName] = useState(true);
  console.log(props)
  return (
    <>
      <p>content</p>
      <Form
        onChangeId={props.onChangeId}
        onChangeName={props.onChangeName}
        setCheckName={setCheckName}
        id = {props.id}
        name = {props.name}
      />
      <button type="button"
        className="btn btn-outline-success"
        onClick={(e) => {props.onSaveItem();console.log(e)}}
        disabled = {checkName}
        >
        SAVE
      </button>
    </>
  );
}

interface FormProps {
  id: string,
  onChangeId: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void,
  name: string,
  setCheckName: (value: boolean) => void
  }

function Form(props:FormProps) {
  return (
    <form>
      <div className="form-group">
        <label className="pt-2">ID</label>
        <input id="id"
          type="text"
          className="form-control"
          value={props.id}
          onChange={(e) => props.onChangeId(e)}
        />
        <label className="pt-2">Name</label>
        <input id="name"
          type="text"
          className="form-control"
          defaultValue={props.name}
          onChange={
            (e) =>
            {
              if (e.target.value.length >= 3){
                props.setCheckName(false)
                {props.onChangeName(e)}
              }
            }
          }
        />
      </div>
    </form>
  )
}