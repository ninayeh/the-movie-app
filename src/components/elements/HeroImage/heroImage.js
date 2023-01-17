function HeroImage(props) {
  return ( 
    <div>
      <h2>heroimage</h2>
      <img src={props.image} alt={props.title}/>
      
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
   );
}

export default HeroImage;