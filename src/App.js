import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Message } from './components/message';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <Link to="/message" className="link">Click to be greeted</Link>
        <Routes>
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  </Provider>
);

export default App;
