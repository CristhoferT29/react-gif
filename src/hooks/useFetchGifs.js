import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( categoria )=>{
  const [state, SetState] = useState({
    data: [],
    loading: true
  });

  useEffect( ()=>{
      getGifs( categoria )
        .then( img => {
            SetState({
              data: img,
              loading: false
            })
        } )
  }, [ categoria ])

  return state;
}