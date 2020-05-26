import axios from 'axios'

const useFetchRecipe = async (searchData) => {
  const APP_ID = "a3ad555a"
  const API_KEY = "b9c79644c2f78df9d76f77fc33c0fa24"
  return await axios.get(`https://api.edamam.com/search?q=${searchData}&app_id=${APP_ID}&app_key=${API_KEY}`)
  .then( res => res.data.hits)
}

export default useFetchRecipe