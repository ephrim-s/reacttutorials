import React from 'react'
import Greet from './components/Greet';
import ProductInfo from './components/ProductInfo';
import List from './components/topical_components/List';
import User from './components/User';
import Person from './components/topical_components/Person';
import { personDetail, productsInfo} from './data/custInfo';
import Product from './components/topical_components/Product';

const App = () => {

  const {name, age} = personDetail;
  return (
    <div>
      < Test 
      img="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
      name="GitHub"
      age={25}
      isMarried={false}
      hobbies={["Coding", "Reading", "Gaming"]} />
      < User 
      img="public/images/WIN_20250906_06_50_31_Pro.jpg"
      name="GitHub"
      age={25}
      isMarried={false}
      hobbies={["Coding", "Reading", "Gaming"]}
      />

      <Greet />
      <ProductInfo />
      <List />
      <Person name={name} age={age}/>
      <Product props={productsInfo}/>        
    </div>
  )
};
const Test = (props) => {
  console.log("new section", props.name, props.age, props.isMarried, props.hobbies.join(', '));
  return <section></section>;
}

export default App;
