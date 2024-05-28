import './App.css';
import {Chatbot} from 'react-chatbot-kit'
import config from './config';
import MessageParser from './messageParser';
import ActionProvider from './actionProvider';
import 'react-chatbot-kit/build/main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       hello
       <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
      </header>
    </div>
  );
}

export default App;
