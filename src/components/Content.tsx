'use strict';
import React,{ useState } from 'react';
import Styled from 'styled-components';
// import { createStore } from "redux";

// const Form = styled.div<{primary: boolean}>`
  // margin: 20px;
// `

interface ContentProps {
  checkName: (id: string, name: string) => boolean,
  onSaveItem: (id: string, name: string) => void
  }

export default function Content({ checkName, onSaveItem }: ContentProps) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const onClickSave = () => {
    console.log(`onClickSave: id = ${id}, name = ${name}`);
    if (checkName(id, name)) {
      onSaveItem(id, name);
      setId('');
      setName('');
    }
  };

  //NAME３文字以上ででsaveボタン押せるようにdisabledを入れる
  //console.log(props)
  return (
    <>
      <p>content</p>
      <Form
        id={id}
        name={name}
        setId={setId}
        setName={setName}
      />
      <button type="button"
        className="btn btn-outline-success"
        onClick={onClickSave}
        disabled={!checkName(id, name)}
        >
        SAVE
      </button>
    </>
  );
}

interface FormProps {
  id: string,
  name: string,
  setId: (id: string) => void,
  setName: (name: string) => void,
  }

function Form({ id, name, setId, setName }: FormProps) {
  return (
    <form>
      <div className="form-group">
        <label className="pt-2">ID</label>
        <input id="id"
          type="text"
          className="form-control"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <label className="pt-2">Name</label>
        <input id="name"
          type="text"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
    </form>
  )
}