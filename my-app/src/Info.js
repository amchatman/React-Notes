export default function Info (){
    const title= "This is my title";
    const showTitle = true;
    if(showTitle){
  return(
    <div>
      <h1>{title}</h1>
      <p>Mangage your stuff</p>
    </div>
  );
    }else{
      return <p>empty</p>
    }
}