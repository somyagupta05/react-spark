import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./List";
const NetflixSeries = () => {
  return (
    <ul>
      {
        seriesData.map((currElem)=>{
          // props
       return <SeriesCard key={currElem.id} currElem={currElem}/>
        })
      } 
    </ul>
  );
};

// default export
export default NetflixSeries;
