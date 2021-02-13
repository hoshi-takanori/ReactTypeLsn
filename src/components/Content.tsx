'use strict';
import React from 'react';
import Styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from '../createStores';
import { updateFormId, updateFormName } from '../reducers';

// const Form = styled.div<{primary: boolean}>`
  // margin: 20px;
// `

interface ContentProps {
  onSaveItem: () => void
  }

export default function Content({ onSaveItem }: ContentProps) {
  const checkName = useSelector(state => state.item.checkName);

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
  const id = useSelector(state => state.item.id);
  const name = useSelector(state => state.item.name);

  // ApplicationState を更新するには const dispatch = useDispatch(); を使って、action creator を呼び出して作った action を dispatch に渡してあげる
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