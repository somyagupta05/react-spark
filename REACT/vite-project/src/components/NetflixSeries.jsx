// named export need to import in {} braces
// export const NetflixSeries = () => {
const NetflixSeries = ()=>{
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

// default export
export default NetflixSeries;

// named export

export const Header=()=>{
  return <p>copyright @somyagupta</p>
}
export const Footer=()=>{
  return <p>copyright @somyagupta</p>
}