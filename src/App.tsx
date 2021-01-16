import React, { useState } from 'react';
import logo from './logo.svg';

import './App.css';
import Content from './components/Content';

function App() {
  const [id, updateFormId] = useState('');
  const [name, updateFormName] = useState('');

  const onChangeId = (e: any) => {
    console.log(e.target.value)
    updateFormId(e.target.value);
  }
// forName
  const onChangeName = (e: any) => {
    console.log(e.target.value)
    updateFormName(e.target.value);
  }
// clickSaveButton
  const onSaveItem = () => {
    //console.log(props)
    console.log("SAVE_ID: ",id);
    console.log("SAVE_NAME: ",name);
  }

  //const formItem = this.props
    // formEvent
    //const contentHandler = ({onChangeId, onChangeName, onSaveItem}) => ({ onChangeIdonChangeName, onSaveItem })
    //console.log('App.render:', props);

  return (
    <>
      <Content
        id={id}
        name={name}
        onChangeId={onChangeId}
        onChangeName={onChangeName}
        onSaveItem={onSaveItem}
      />
    </>
  );
}

export default App;
