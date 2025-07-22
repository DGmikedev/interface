import "../css/cardstyle.css"

export function Card({textop}){
   
    const presText = { color:"red" }
    return <div style={{ background:"#202020", color:"#fff", padding:"20px"}}>
        <h1 style={presText} >Tarjeta de presentación</h1>  {/* css pasado por parametro */}
        <p className='card' >{ textop }</p> {/* css pasado por importacion de clase */}
    </div>
}