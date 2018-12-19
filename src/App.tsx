import * as React from 'react';
import './App.css';

import InputForm from "./components/form/InputForm";
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Formik samples</h1>
        </header>
        <section>
          <h2>inputのシンプルなサンプル</h2>
          <InputForm />
        </section>
      </div>
    );
  }
}

export default App;
