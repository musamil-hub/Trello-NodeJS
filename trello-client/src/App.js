import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './actions/store';
import Header from './components/Header/Header';
import PostCards from './components/Main';
import Welcome from './components/Welcome/Welcome';
import './App.css';

function App() {
  const [welcome, setWelcome] = useState(false);
  const wel = () => {
    console.log('welcome clicked');
    setWelcome(true);
  };
  return (
    <Provider store={store}>
      {!welcome && <Welcome entry={wel} />}
      <div className='App'>
        {welcome && <Header />}
        {welcome && <PostCards />}
      </div>
    </Provider>
  );
}

export default App;
