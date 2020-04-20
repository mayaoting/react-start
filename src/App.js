import React from 'react';
import './App.css';
import Header from '../src/todoList/containers/Header'
import MainSection from '../src/todoList/containers/MainSection'
import Footer from '../src/todoList/containers/FilterLink'
// import Clock from './tick';
// import LoginControl from './login';
// // import Blog from './blog';
// import NameForm from './nameForm';
// import TemperatureCalculator from './temperatureCalculator';
// import SignUpDialog from './composition'
// import FilterableProductTable from './copyFilterableProductTable';
// import OuterClickExample from './outClick';
// import CustomTextInput from './customInput';
// import Service from './service';
// import FileInput from './fileInput';
// import TodeList from './todolist'
// const posts = [
//     {id:1,title:'Hello World',content: 'Welcome to learning React!'},
//     {id:2,title:'Installation',content: 'you can install me from you'},
//     {id:'',title:'id is null',content: 'different content'}
//   ]
// const PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];
function App() { 
  return (
    <div>
      {/* <Clock />, */}
      {/* <LoginControl/>, */}
      {/* <Blog posts={posts}/>, */}
      <p>there is noting</p>
      {/* <NameForm /> */}
      {/* <TemperatureCalculator /> */}
      {/* <SignUpDialog /> */}
      {/* <FilterableProductTable products={PRODUCTS}/> */}
      {/* <OuterClickExample/> */}
      {/* <CustomTextInput /> */}
      {/* <Service/> */}
      {/* <FileInput/> */}
      {/* <TodeList/> */}
      <div className="todoapp">
        <Header/>
        <MainSection/>
      </div>
      
    </div>
    
  )
}

/**
 * jsx  camelCase  
 * class -> className tabindex -> tabIndex
 * jsx 防止注入攻击
 * ReactDom
 */
export default App;
