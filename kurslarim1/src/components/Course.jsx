import React from 'react'

function Course({ course }) {
  const {title,description,price,link,image}=course;
  return (
    <div className="course">
      <div>
        <img src={image} alt={title} width={250} height={200} className='image-style'/>
        <h4  className="h4-title">{title}</h4>
        <h5 className="text">{description}</h5>
        <h3 className="price">{price}</h3>
        <h6 className="link-align"><a href={link} className="link" target='blank'>SATİN İÇİN TİKLAYİN</a></h6>
      </div>
    </div>
  )
}

export default Course
