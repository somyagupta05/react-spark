import { React } from "react";
// named export need to close in curly braces
import { NetflixSeries } from "./components/NetflixSeries";
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
