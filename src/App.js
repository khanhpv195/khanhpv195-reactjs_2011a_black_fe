import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/Button/Button';
function App() {
  function onClickHandle() {
    alert("OK")
  }
  return (
    <Button type="button"
      onClick={onClickHandle}
      className="A">
      Send
    </Button>
  );
}

export default App;
