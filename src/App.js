import './App.css';
import Header from './components/Header';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <LeftColumn />
      <RightColumn />
      <Footer />
    </div>
  );
}

export default App;
