import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <Header></Header>
      <Content>{props.children}</Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
