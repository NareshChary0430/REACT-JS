// import About from "./About";
import Student from "./Student";
const App = ()  => {
  return (
    <div>
      <h1>Hello React</h1>

      {/* {About("John Doe")} // if i didnot send argument then it will print undefined in console */}
      {/* <About name="John Doe" /> // if i didnot send argument then it will print {} in console */}
      <Student name="John Doe" age={25} city="New York" />
      <Student name="Jane Smith" age={30} city="Los Angeles" />

    </div>
  );
}

export default App;