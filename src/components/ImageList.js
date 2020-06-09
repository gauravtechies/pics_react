import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard';
const ImageList = props =>{
    console.log(props.images);
    const image = props.images.map((img)=>{
        return <ImageCard key={img.id} image={img}/>
    })
    return <div className="image-list">{image}</div>

}
export default ImageList;