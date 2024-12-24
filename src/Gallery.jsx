import React from 'react'

const Gallery = ({data}) => {
    return (
        <div className="flex gap-2 flex-wrap  bg-slate-200 p-5">
        {data.map((image) =><div key={image.id} className=''>
        <div className="p-1">
        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
       height="200px" width="250px" alt={image.title}/>
        </div>
        </div>)}
        </div>
    )
}

export default Gallery