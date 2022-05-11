import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = ()=>{

  //N9NmPtqRh1QC88kByCIidJRiDdUp2cSI
  // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categorias, setCategorias] = useState(['One Punch'])

    // const handleAdd = () =>{
    // setCategorias( [...categorias, "One Piece"] )
    // }

  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategorias={ setCategorias } />
    <hr />
    <ol>
      { categorias.map( (categoria)=>
        <GifGrid key={categoria} categoria={ categoria } />
      ) 
      }
    </ol>

    </>
  )
}

export default GifExpertApp;