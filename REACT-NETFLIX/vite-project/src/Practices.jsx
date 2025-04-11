 export const Practices=()=>{
  const students=[1];
  return(
    <>
    <p>{students.length && "no student find"}</p> 
    
    <p>number of student :{students.length}</p>
    {/* op- 0 for both cases */}


{/* ......................way 1.......... */}
{/* if you want left side to be true */}
{/* op- no student find   number of student :1 */}
    <p>{students.length===0 && "no student find"}</p> 
    
    <p>number of student :{students.length}</p>
    

{/* .........2 way............. */}
<p>{!students.length && "no student find"}</p> 
    
    <p>number of student :{students.length}</p>
    

    {/* .........3 way............. */}
    {/* op -  true 2 */}
<p>{Boolean(students.length) && "no student found"}</p> 
    
    <p>number of student :{students.length}</p>
    </>
  )
}