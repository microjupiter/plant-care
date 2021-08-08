export const getPlants = () => {
  return dispatch => {
    dispatch({ type: "LOADING"})
    fetch("http://localhost:3001/plants")
    .then(resp => resp.json())
    .then(plants => dispatch({ type: "SET_PLANTS", plants}))
  }
}

export const addPlant = (plant, history) => {
  return dispatch => {

    fetch('http://localhost:3001/plants', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ plant })
    })
    .then(resp => resp.json())
    .then(plant => {
      dispatch({ type: "ADD_PLANT", plant})
      history.push("/plants")
    })
  }
}

export const deletePlant = ( id, history ) => {
  return dispatch => {
    fetch(`http://localhost:3001/plants/${id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },

    })
    .then(resp => resp.json())
    .then(plant => {
      dispatch({ type: "DELETE_PLANT", plant })
      history.push("/plants")
    })
  }
}