function Form({setState}) {
  function getData(e) {
    e.preventDefault()
    let type = e.target.typeFilm.value
    let names = e.target.nameFilm.value
    fetchData(`http://www.omdbapi.com/?s=${names}&type=${type}&apikey=765c8b08`)
    .then((data) => {                                               //data = response.json
      setState(data.Search) })
  }
  function fetchData(url) {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error("Что то пошло не так")
      }
      return response.json()        
    })
      .catch((error) => console.error("ошибка запроса"))
  }
  return (
    <>
      <h1>Search:</h1>
      <form id="searchForm" onSubmit={getData}>
        <p>Title:</p>
        <input type="text" name="nameFilm" />
        <p>Type:</p>
        <select name="typeFilm">
          <option value="movie">Фильм</option>
          <option value="series">Сериал</option>
          <option value="episode">Эпизод</option>
        </select>
        <button className="search" id="search">Search</button>
      </form>
    </>
  )
}

export default Form;