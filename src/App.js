import Comments from "./Components/Comments";
import data from "./data.json";

function App() {
  const currentUser = data.currentUser;

  return (
    <div className="App">
      <Comments currentUser={currentUser} />
    </div>
  );
}

export default App;
