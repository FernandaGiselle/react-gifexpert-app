import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    //const [count, setCount] = useState(0);
     const { data:images, loading}  = useFetchGifs( category); 
     
     //console.log(data);
   /* const [images, setImages] = useState([]);
   

    useEffect( () => {
      getGifs( category )
       .then( imgs => setImages (imgs))
    }, [category ] )*/

    
   
    return (
        <>
         <h3>{category}</h3> 
        {loading && <p>Loading</p>}
        <div className="card-grid">
            
                    {
                        
                    // eslint-disable-next-line array-callback-return
                    images.map( (img) => (
                         
                            <GifGridItem
                            key={ img.id }
                            {...img}
                            />
                        
                    
                    ))
                    }
        </div>
        </>
        
    )
}
/*<h1>{count}</h1>
            <button onClick = {()=> setCount( count + 1)}> </button>*/