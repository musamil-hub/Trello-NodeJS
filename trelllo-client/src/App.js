import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./actions/store";
import PostCardForm from "./components/Form/PostCardForm";
import Header from "./components/Header/Header";
import PostCards from "./components/PostCards";
import Lists from "./components/UI/Lists/Lists";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [welcome, setWelcome] = useState(false);
  const wel = () => {
    console.log("welcome clicked");
    setWelcome(true);
  };
  return (
    <Provider store={store}>
      {!welcome && <Welcome entry={wel} />}
      {welcome && <Header />}
      {welcome && <PostCards />}
    </Provider>
  );
}

export default App;
