import React, {Fragment} from "react";
import './gallery.css';

const Gallery=()=>{
  return (
      <Fragment>
          <div className="gallery">
                  <img className='photo' src="https://images.unsplash.com/photo-1585194329142-2d0fcb38813e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt=""/>
                  <img  className='photo' src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt=""/>
                  <img  className='photo' src="https://images.unsplash.com/photo-1526649065208-1cba8fd8d8bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" alt=""/>
          </div>
      </Fragment>
  )
};

export default Gallery;