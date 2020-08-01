import React from 'react'
import './App.css'
import axios from 'axios'
import SearchBar from './SearchBar'
import Image from './Image'
class App extends React.Component {

state ={images:[], }
onSearchbarSubmit =(term)=>{

 axios.get('https://api.unsplash.com/search/photos',{

     params:{query :term}
       ,
    headers:{Authorization: 'Client-ID EdROBmha_cIiRFlw1vfdyb44zXTybFpKGoSfWQ4wAF4'}
 }).then((response)=>{this.setState({images:response.data.results })} )


}

render (){

    return (
        <div  style ={{marginTop:"10px"}}>
            
            <SearchBar submitted={this.onSearchbarSubmit}></SearchBar>

            <div className="grid-container"> 
          {this.state.images.map((img) => {
              return     ( 
                  <div className="grid-item"> <Image key ={img.id}  url={img.urls.regular}  > </Image> </div>
                  )
          } )}
          </div>

    
        </div>
    )
}
}

export default App