  

 

function header({data}) {
  //fe
  //gf
  return (
    <div>
 {data.map(data=> <h2 key={data}>{data}</h2>)}
    </div>
  )
}

export default header