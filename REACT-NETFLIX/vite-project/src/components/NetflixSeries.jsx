import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
const NetflixSeries = () => {
  return (
    <ul>
      {
        seriesData.map((currElem)=>{
          // props
       return <SeriesCard key={currElem.id} data={currElem}/>
        })
      } 
    </ul>
  );
};

// default export
export default NetflixSeries;
