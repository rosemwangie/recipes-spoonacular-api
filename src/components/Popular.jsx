import { useEffect } from "react"

const Popular = () => {
  useEffect(() => {
    getPopular()
  },[])


const getPopular = async () => {  
  const recipeUrl = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&number=9`
  const response = await fetch(recipeUrl)
  const data = await response.json()
  console.log(data)
}


  return (
    <div className="popular">
      <h1 className="chakula">Chapo</h1>    
    </div>
  )
}

export default Popular