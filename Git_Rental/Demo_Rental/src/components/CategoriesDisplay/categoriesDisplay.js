import React from 'react'
import './categoriesDisplay.css'

export const CategoriesDisplay = (props) => {
    
    return (
        <div className="categoriesDisplay">
        {props.category.map((c)=>{
            if(c.name==='NA'){
                return null
            }
            return(<div key={c.name} className="categoriesBlock">
            <img src={!props.subCategoriesDisplay?
            require('../../assets/category/'+c.image):
            require('../../assets/category/subcategory/' + c.image)} alt="cat"/>
            <p className="categoriesBlockText"
            onClick={()=>(props.subCategories(c.name))}>{c.name}  &rarr;</p>
            </div>
        )
        }
            
            )}
            
        </div>
    )
}


export default React.memo(CategoriesDisplay)
