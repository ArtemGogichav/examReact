function ListFilms({state}) {
    return state.map(el => {
        return(
            <div>
                    <img src={el.Poster}/>
                    <p>{el.Title}</p>
                    <p>{el.Type}</p>
                    <p>{el.Year}</p>
                    <button type="button" id="deteilsButton" onclick="onclickDeteils('${el.imdbID}')">Deteils</button>
                </div>
        )
        
    })
  }
  
  export default ListFilms;