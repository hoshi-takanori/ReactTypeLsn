import React, { useState } from 'react';
import logo from './logo.svg';

import './App.css';
import Content from './components/Content';

function App() {
  const [id, updateFormId] = useState('');
  const [name, updateFormName] = useState('');

  const onChangeId = (e: any) => {
    console.log(e.target.value);
    updateFormId(e.target.value);
  }
// forName
  const onChangeName = (e: any) => {
    console.log(e.target.value)
    updateFormName(e.target.value);
  }
// clickSaveButton
  const onSaveItem = () => {
    // console.log(props)
    console.log("SAVE_ID: ",id);
    console.log("SAVE_NAME: ",name);
  }

  // バリデーションはここで
  const checkName = name.length >= 3;

  // id と name の両方が 3 文字以上、の場合
  //const checkName = id.length >= 3 && name.length >= 3;

  // const formItem = this.props
  //   // formEvent
  //   const contentHandler = ({onChangeId, onChangeName, onSaveItem}) => ({ onChangeIdonChangeName, onSaveItem })
    // console.log('App.render:', props);

  return (
    <>
      <Content
        id = {id}
        name = {name}
        onChangeId={onChangeId}
        onChangeName={onChangeName}
        checkName={checkName}
        onSaveItem={onSaveItem}
      />
    </>
  );
}

export default App;
