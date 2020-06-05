import React from 'react';

const ImageList = props =>{
    console.log(props.images);
    const image = props.images.map((img)=>{
        return <img alt={img.description} key={img.id} src={img.urls.regular}></img>
    })
    return <div>{image}</div>

}
export default ImageList;