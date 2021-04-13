const initialState = {
  plants: [],
  loading: true
}

const plantsReducer = (state=initialState, action) => {
  switch(action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      }
      case "SET_PLANTS":
        return {
          ...state,
          loading: false,
          plants: action.plants
        }
      case "ADD_PLANT":
        return {
          ...state,
          plants: [...state.plants, action.plant]
        }
        default: 
        return state

        case "DELETE_PLANT":
          return {
            ...state,
            plants: state.plants.filter(plant => action.plant.id !== plant.id)
          }
  }
}

export default plantsReducer