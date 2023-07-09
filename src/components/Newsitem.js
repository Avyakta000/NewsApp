import React from 'react'

const Newsitem=(props)=>{

  
  
    let { title, description, imageUrl, newsUrl,date,author,source } = props
    
    return (
      <>
        <div className="card" style={{ width: "" }}>
       

          <img className="card-img-top" src={imageUrl ? imageUrl : "https://www.vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg"} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{title} <span className="badge badge-pill badge-secondary">{source?source:"Unknown"}</span></h5>
            <p className="card-text">{description ? description.slice(0, 88) : ""}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-warning">Read more</a>
          </div>
          <div className="card-footer">
          <p className="card-text">Author:<span className="text-danger mx-1">{author?author:"Unknown"}</span> <small className="text-muted">Last updated on {new Date(date).toGMTString()} mins ago</small>
          </p> 
          </div>

        </div>
      </>
    )
  }
  

  
  export default Newsitem
  