import { useState } from "react"
import PropTyes from 'prop-types'

export const AddCategory = ({ setCategorias }) => {
  
  const [inputValue, setinputValue] = useState('')

  const handleInputChange = ( e )=>{
  console.log(e.target.value)
  setinputValue(e.target.value)
  }

  const handleSubmit = ( e )=>{
      e.preventDefault();

      if( inputValue.trim().length > 2 ){
        setCategorias( cats => [inputValue, ...cats ]);
        setinputValue('');
      }
  }
  
  return (
    <form onSubmit={ handleSubmit } >
      <input type="text" value={ inputValue  } onChange={ handleInputChange } />
    </form>
  )
}

AddCategory.propTypes ={
  setCategorias: PropTyes.func.isRequired
}