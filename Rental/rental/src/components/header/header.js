import React,{useState} from 'react'
import './header.css'

function Header(props) {
    const [subCat, setSubCat] = useState(null);
    let changeSubCat = (dealers_id)=>{
        setSubCat(dealers_id)
    }
    let location = props.status.data.locations.map((val)=>(
        <div  key={val.dealers_id}>

        <p
        onMouseEnter={()=>changeSubCat(val.dealers_id)}
        >{val.name}</p>
        {subCat===val.dealers_id?(
            
            <div className="dropdown-subContent">
                {
                    val.branches.map((valSub)=>(
                        <p key={valSub.branch_id} 
                        onClick={()=>(props.onchangeCategories(valSub.categories,valSub.name))}>{valSub.name}</p>
                    ))
                }
            </div>
        ):null}
        </div>
    ))
    return (
        <header className="App-header">
            <span>Rental Management System</span>
            <div className="selectLocation">
                <span>Select Location</span>
                <div className="dropdown-content">
                
                    {location}
                </div>
            </div>
        </header>
    )
}

export default React.memo(Header)
