import { React } from "react";
// default
import NetflixSeries from "./components/NetflixSeries";
// named export need to close in curly braces
// import { Footer,Header} from "./components/NetflixSeries";
export const App = () => {
  // Array with keys
  // return([<NetflixSeries key="1"/> ,<NetflixSeries key="1"/> ,<NetflixSeries key="1"/> ]
  return (
    <>

      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
 
    </>
  );
};
