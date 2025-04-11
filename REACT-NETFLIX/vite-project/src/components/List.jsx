export const SeriesCard =(props)=>{
  return (
    <>
  
     <li>
      <div>
        <img src={props.currElem.img_url} alt={props.currElem.name} width="40%" height="40%" />
        <h2> Name: {props.currElem.name}</h2>
        <h3>Rating:{props.currElem.rating}</h3>
        <p>Summary{props.currElem.summary}</p>
        <p>Genre:{props.currElem.genre}</p>
        <p>cast:{props.currElem.cast}</p>
        <a href={props.currElem.watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </li>
    
  
  </>
  )
}