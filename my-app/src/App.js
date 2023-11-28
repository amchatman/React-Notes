import "./App.css";
import Info from "./Info.js";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem  text="Thane" number={7}/>
      <AddItem  text="Garrus"/>
      <AddItem  text="Kaiden"/>
    </div>
  );
}
function AddItem(props) {
  return (
    <form>
      <label for="text-form">Type Something:</label>
      <input type="text" value={props.text} id="text-form" />
      <p>{props.number}</p>
    </form>
  );
}
AddItem.defaultProps = {
  number: 4,
}
export default App;
