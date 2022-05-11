import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

  // const [images, SetImages] = useState([])
  const { data:images ,loading} = useFetchGifs( categoria );

 


  return (
    <>
    { categoria }
    { loading && <p>Loading...</p>}
    <div className='card-grid animate__animated animate__fadeIn' >
        {
          images.map( img => <GifGridItem key={img.id} {...img} /> )
        }

    </div>
    </>
  )
}
