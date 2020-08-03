import React from 'react';
import './App.css';
import Header from './components/header/header';
import status from './assets/catalog .json'
import { CategoriesDisplay } from './components/CategoriesDisplay/categoriesDisplay';

class App extends React.Component {

  state={
    categories:[],
    name:'',
    subName:'',
    mainCategories:[],
    subCategoriesDisplay:false
  }

  onchangeCategories = (categories,name)=>{
    this.setState({categories:categories,name:name,subCategoriesDisplay:false,subName:'',mainCategories:categories})
    this.setState({name:name})
    //console.log(categories,this.state)
  }
  onchangeSubCategories = (name) => {
    if(this.state.subCategoriesDisplay){
      return
    }
    this.setState({subName:"/"+name,subCategoriesDisplay:true})
  
    for(let i=0;i<this.state.categories.length;i++){
      if(name===this.state.categories[i].name){
        this.setState({categories:this.state.categories[i].subcategories})
        break
      }
    }
  }
  render() {
    let mainDisplay=<div>
      <h2>Welcome TO Rental</h2>
    </div>
    if(this.state.mainCategories.length!==0){
      mainDisplay = <CategoriesDisplay category={this.state.categories}
      subCategories={this.onchangeSubCategories}
      subCategoriesDisplay={this.state.subCategoriesDisplay}
    />
    }
    return (
      <div className="App">
        <Header status={status} onchangeCategories={this.onchangeCategories}/>
        <div>
        <h4><span 
        className="categoryName"
        onClick={()=>(this.onchangeCategories(this.state.mainCategories,this.state.name))}
        >{this.state.name}</span><span>{this.state.subName}</span></h4>
    {mainDisplay}
      
          
        </div>
      </div>
    );
  }
}

export default App;
