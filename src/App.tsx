import React from 'react';
import logo from './logo.svg';

import './App.css';
import Content from './components/Content';

function App(props: any) {
  const onChangeId = (e: any) => {
    console.log(e.target.value)
    props.updateFormId(e.target.value);
  }
// forName
  const onChangeName = (e: any) => {
    console.log(e.target.value)
    props.updateFormName(e.target.value);
  }
// clickSaveButton
  const onSaveItem = () => {
    console.log(props)
    console.log("SAVE_ID: ",props.id);
    console.log("SAVE_NAME: ",props.name);
  }

  //const formItem = this.props
    // formEvent
    //const contentHandler = ({onChangeId, onChangeName, onSaveItem}) => ({ onChangeIdonChangeName, onSaveItem })
    console.log('App.render:', props);

  return (
    <>
      <Content
        id=''
        name=''
        onChangeId={onChangeId}
        onChangeName={onChangeName}
        onSaveItem={onSaveItem}
      />
    </>
  );
}

export default App;
