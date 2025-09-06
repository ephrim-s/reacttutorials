import Card from "./components/Card";
import Cart from "./components/Cart";

const ValidPassword = () => <h1>Vaild Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1> 

const Password = ({isValid}) => {
  if (isValid) {
    return <ValidPassword />
  }
  return <InvalidPassword />
};

const App = () => {    

  return (
    <div> 
      <Password isValid={false}/>
         <Card>
          <h1>My Card 1</h1>
          <p>This is some content for card 1</p>
         </Card>
         <Card>
          <h1>My Card 2</h1>
          <p>This is some content for card 1</p>
         </Card>
         <Card>
          <h1>My Card 3</h1>
          <p>This is some content for card 1</p>
         </Card>
         <Cart />
    </div>
  )
};

export default App;
