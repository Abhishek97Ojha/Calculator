import "./App.css";
import Button from "./component/Button";
import Display from "./component/Display";
function App() {
  return (
    <>
      <div className="App">
        <div className="top">
          <div className="up">
            <Display />
          </div>
          <div className="down">
            <Button width="10rem" height="4.5rem" name="AC" bgcolor="#ac3939" />
            <Button width="5rem" height="4.5rem" name="/" bgcolor="#666666" />
            <Button width="5rem" height="4.5rem" name="X" bgcolor="#666666" />
          </div>
        </div>
        <div className="middle">
          <div className="up">
            <Button width="5rem" height="4.5rem" name="7" bgcolor="#4d4d4d" />
            <Button width="5rem" height="4.5rem" name="8" bgcolor="#4d4d4d" />
            <Button width="5rem" height="4.5rem" name="9" bgcolor="#4d4d4d" />
            <Button width="5rem" height="4.5rem" name="-" bgcolor="#666666" />
          </div>
          <div className="down">
            <Button width="5rem" height="4.5rem" name="4" bgcolor="#4d4d4d" />
            <Button width="5rem" height="4.5rem" name="5" bgcolor="#4d4d4d" />
            <Button width="5rem" height="4.5rem" name="6" bgcolor="#4d4d4d" />
            <Button width="5rem" height="4.5rem" name="+" bgcolor="#666666" />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="up">
              <Button width="5rem" height="4.5rem" name="1" bgcolor="#4d4d4d" />
              <Button width="5rem" height="4.5rem" name="2" bgcolor="#4d4d4d" />
              <Button width="5rem" height="4.5rem" name="3" bgcolor="#4d4d4d" />
            </div>
            <div className="down">
              <Button
                width="10rem"
                height="4.5rem"
                name="0"
                bgcolor="#4d4d4d"
              />
              <Button width="5rem" height="4.5rem" name="." bgcolor="#4d4d4d" />
            </div>
          </div>
          <div className="right">
            <Button width="5rem" height="9rem" name="=" bgcolor="#004466" />
          </div>
        </div>
      </div>
      
      <h4 style={{marginTop:"1rem",textAlign:"center"}}>Designed and Coded By</h4>
      <h4 style={{color:"#004466",textAlign:"center"}}>Abhishek Ojha</h4>
    </>
  );
}

export default App;
