import React from 'react';
import logo from './logo.svg';
import { useDispatch } from 'react-redux';
import { saveItem } from './reducers';


import './App.css';
import Content from './components/Content';

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Content
        onSaveItem={() => dispatch(saveItem())}
      />
    </>
  );
}

export default App;
