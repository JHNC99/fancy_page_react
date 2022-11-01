
import './App.css';
import Header from './components/Header';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {

  return (
    <>
      <Header />
      <div id="container">
        <Page1 />
        <Page2 />
      </div>
    </>

  );
}

export default App;
