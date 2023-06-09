// rfce
import {useEffect , useState} from 'react'

function Ajax() {
    const [resultat, setResultat] = useState([])
    // exécuter le TRAITEMENT 1 SEULE FOIS lors du chargement du composant 
    // mounted 
    // si tu as un tableau vide en 2ème paramètre []
    // le useEffect n'a pas de dépendance DONC 
    useEffect( function(){
        console.log("mounted")
        fetch("https://restcountries.com/v3.1/all")
            .then(function(reponse){ return reponse.json() })
            .then(function(data){  setTimeout(function(){
                console.log("data reçue")
                const resultat = data.map(function({name, flag}){
                    return {
                        name : name.common, 
                        flag}
                })
                setResultat(resultat)
            } , 2000) })
    }, []); 

    console.log("render")
  /*   useEffect( function(){
        
    }, [text]); // updated  */


  return (
    <div>Ajax
        {/* <pre>{JSON.stringify(resultat , null , "  ")}</pre> */}
        <div style={{ display : "grid" , gridTemplateColumns : "repeat(5,1fr)" }}>
        { resultat.length === 0 
            ? 
            <p>en attente du données</p> 
            : 
            <>{resultat.map(function({name, flag} , key){
               return <p key={key}>{name} {flag}</p>
            })}</>
        }
        </div>
    </div>

  )
}

export default Ajax