import React from 'react'

const MenuCard = ({menuData}) => {
  return (
   <>
<section className="main-card--cointainer">
   {menuData.map((curElem)=>{
        return(
          <>
          <div className="card-container">
          <div className="card">
            <div className="card-body">
              <span className="card-number card-circle subtle">1
      
              </span>
              <h2 className="card-title">Maggi</h2>
              <span className="card-description subtle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit accusamus iusto quasi praesentium, autem commodi quas repudiandae est voluptates, nostrum voluptate libero illum beatae. Optio illum qui veniam labore quibusdam!
              </span>
              <div className="card-read">Read</div>
            </div>
            {/* <img src={image} alt="images" className="card-media"/> */}
            <span className="card-tag subtle">Order Now</span>
          </div>
         </div>
         </>
        )
      })
   }
      </section>
   </>

  )
}

export default MenuCard