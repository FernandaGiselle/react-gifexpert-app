import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {
   
   //const categories = ['One Punch', 'Samurai X', 'Dragon Ball' ];
   
const [categories, setCategories] = useState( ['jujutsu no kaisen'] )
  // const handleAdd = () => {
    //setcategories( [...categories, 'Boku No Hero']);
   //setcategories( cats => [...cats, 'Boku No Hero']);

   

   //console.log(categories);
return (

<>

    <h2>GifExpertApp</h2>
    <AddCategory setCategories={ setCategories }/>
    <hr/>
    
    <ol>
        { 
        categories.map( category  =>  (

       //return <li key={category}> {category}</li>
       <GifGrid 
              key={ category }
              category={ category }
              />
        ))
    }
    </ol>

</>

)
  }