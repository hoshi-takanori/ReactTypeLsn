import React, { useState } from 'react';
import logo from './logo.svg';
import { useSelector } from 'react-redux';
import { getIdState, getNameState } from './createStores';


import './App.css';
import Content from './components/Content';

function App() {
  // createStores.ts の getIdState および getNameState は ApplicationState から部分状態を取り出す関数
  const id = useSelector(getIdState);
  const name = useSelector(getNameState);
  // getIdState や getNameState を定義せずに以下のように記述でも可
  // const id = useSelector((state: ApplicationState) -> state.id);
  // const name = useSelector((state: ApplicationState) -> state.name);

// clickSaveButton
  const onSaveItem = () => {
    // console.log(props)
    console.log("SAVE_ID: ",id);
    console.log("SAVE_NAME: ",name);
  }

  // バリデーションはここで定義
  const checkName = name.length >=3;

  // id と name の両方が 3 文字以上、の場合
  //const checkName = id.length >= 3 && name.length >= 3;


  // const formItem = this.props
  //   // formEvent
  //   const contentHandler = ({onChangeId, onChangeName, onSaveItem}) => ({ onChangeIdonChangeName, onSaveItem })
    // console.log('App.render:', props);

  return (
    <>
      <Content
        checkName={checkName}
        onSaveItem={onSaveItem}
      />
    </>
  );
}

export default App;
