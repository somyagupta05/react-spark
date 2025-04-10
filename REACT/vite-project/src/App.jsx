import { React } from "react";
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

// 1. variables
// you can embed any js variable within jsx by enclosing it in curly braces. the value of the variable will be inserted into the dom at the respective location.

// 2. expressions
// jsx allows you to write js expression inside curly braces. This includes operations, function calls, and other js expression that produce a value.

// 3. function calls
//  functions, especially those that return jsx, can be invokes directly within your jsx.

const NetflixSeries = () => {
  const name = "Queen Of Tears";
  const rating = "8.2";
  const summary =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, totam numquam, itaque asperiores, quis sed est expedita blanditiis qui id repellat tempore omnis! Nemo delectus nobis cum adipisci facilis deserunt vitae. Ex, optio officia.";
   let age=29;
// ............way 3.......
  //  let canwatch="NOt available";
  //  if(age>=18) canwatch="watch now";
  // .....way 4.....
  const canwatch=()=>{
    if(age>=18) return"watch now";
    return "Not Available"
  };
    const returnGenre=()=>{
      const genre="RomCom";
      return genre;
    }
    // .........way 1..........
    // if(age <18)
    // {return(
    //   <div>
    //   <img src="stayy.webp" alt="qot" width="40%" height="40%" />
    //   <h2> Name: {name}</h2>
    //   <h3>Rating:{rating}</h3>
    //   <p>{summary}</p>
    //   <p>Genre:{returnGenre()}</p>
    //   <button>Watch Nowwwss</button>

    // </div>
    // )
    // }
     
  return (
    <div>
      <img src="stayy.webp" alt="qot" width="40%" height="40%" />
      <h2> Name: {name}</h2>
      <h3>Rating:{rating}</h3>
      <p>{summary}</p>
      <p>Genre:{returnGenre()}</p>
      {/* ....way 3.......... */}
      {/* <button>{canwatch}</button> */}
      {/* ...........way 2......... */}
      {/* <button>{age>=18 ?"Watch Now":"Not Available"}</button> */}

      {/* ....way 4.... */}
<button>{canwatch()}</button>
    </div>
  );
};
