import React from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-portal-advanced';

const portalDiv = document.getElementById('portal-div');

const Child = (props) =>{
  console.log(props);
  const {close} = props;
  return(
    <button onClick={close}>test button</button>
  )
}

function App() {

  const testOpen = () =>{
    console.log('opened!');
  }
  const testClose = () =>{
    console.log('closed!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Modal 
        node={portalDiv} 
        trigger={<button type="button">start</button>}
        closeable
        size={'tiny'}
        closeOnEsc
        onOpen={testOpen}
        onClose={testClose}
        // defaultOpen
        // closeAfter={5000} //in ms
        >
          <Child></Child>
        </Modal>
      </header>
    </div>
  );
}

export default App;
