import React from 'react'

const Card = ({ data }) => {
  console.log(data)
  
  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        return (
          <div key={index} className='card'>
            <img src={curItem.urlToImage}/>
            <div  className='content'>
              <a onClick={() => window.open(curItem.url, "_blank")}
 className='title'>{curItem.title}</a>
              <p>{curItem.description}</p>
              {/* <button onClick={() => window.open(curItem.url, "_blank")}
 >Read More</button> */}

            

            </div>


          </div>
        )
      })}

    </div>
  )
}

export default Card