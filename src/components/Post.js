import React from 'react';


const Post = () => {
  return (
    <div className="post">
    <div className="img">
    <img
      src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="This is a image"
    ></img>
    </div>
    
    <div className="texts">
    <h2 className="title">Full-House battery backup coming later</h2>
    <p className="info">
      <a className="author" >Santosh Jadhav</a>
      <time>15/01/2023 19:10</time>
    </p>
    <p className="summary">
      Product description. Introducing LOFT Google Home Battery Base by
      Ninety7. Set your Google Home free with up to 8 hours of portability.
      
    </p>
    </div>
    
  </div>
 
  )
}

export default Post;
