import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
/* import { getGifs } from './helpers/getGifs'; */

const GifGrid = ( {category} ) => {

    //const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3> {category} </h3>
            {loading && <p className="card-grid animate__animated animate__flash">Loading</p> }
            <div className="card-grid animate__animated animate__fadeInLeft">
                    {images.map((img)=>(
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))}
            </div>
        </>
       
    );
};

export default GifGrid;