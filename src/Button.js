function Button({handleColor}){
    return(
        <>
         <button style={{backgroundColor: "red", margin: 5 }} onClick={()=>handleColor('red')}>Red</button><br/>
      <button style={{backgroundColor: "green",margin: 5}} onClick={()=>handleColor('green')}>Green</button><br/>
      <button style={{backgroundColor: "yellow",margin: 5}} onClick={()=>handleColor('yellow')}>Yellow</button><br/>
      <button style={{backgroundColor: "pink",margin: 5}} onClick={()=>handleColor('pink')}>Pink</button>
        </>
    );

}
export default Button;