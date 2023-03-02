import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';

import './App.css';
import Main from './components/Main/main';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div />} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}

export default App;
