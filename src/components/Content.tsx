'use strict';
import React from 'react';
import Styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormId, updateFormName } from '../actions';
import { getIdState, getNameState } from '../createStores';

// const Form = styled.div<{primary: boolean}>`
  // margin: 20px;
// `

interface ContentProps {
  checkName: boolean,
  onSaveItem: () => void
}

export default function Content({ checkName, onSaveItem }: ContentProps) {
  //NAME３文字以上ででsaveボタン押せるようにdisabledを入れる
  // console.log(props)
  return (
    <>
      <p>content</p>
      <Form />
      <button type="button"
        className="btn btn-outline-success"
        onClick={onSaveItem}
        disabled={!checkName}
      >
        SAVE
      </button>
    </>
  );
}

function Form() {
  const dispatch = useDispatch();
  const id = useSelector(getIdState);
  const name = useSelector(getNameState);

  return (
    <form>
      <div className="form-group">
        <label className="pt-2">ID</label>
        <input id="id"
          type="text"
          className="form-control"
          value={id}
          onChange={e => dispatch(updateFormId(e.target.value))}
        />
        <label className="pt-2">Name</label>
        <input id="name"
          type="text"
          className="form-control"
          value={name}
          onChange={e => dispatch(updateFormName(e.target.value))}
        />
      </div>
    </form>
  )
}