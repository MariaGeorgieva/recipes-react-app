// const initialState = {
//   recipe: {}, loading: true, error: null, likes: [] 
// };


export const recipeReducer = (state, action) => {
  // console.log('state',state);
  // console.log('state.likes',state.likes);
  // console.log('action',action);

  switch (action.type) {
    case 'FETCH_RECIPE':
      const { recipe, likes, isUserLike } = action.payload;
      return {
        ...state,
        recipe,
        likes: Array.isArray(likes) ? likes : [],
        isUserLike,
        loading: false,
      };
    case 'FETCH_RECIPE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_RECIPE_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    // case 'FETCH_RECIPE':
    //   return { ...action.payload };
    case 'LIKE_RECIPE':
      return {
        ...state,
        likes: [...state.likes, action.payload],
        isUserLike: true
      };

    case 'UNLIKE_RECIPE':
      return {
        ...state,
        likes: state.likes.filter(like => like !== action.payload),
        isUserLike: false
      }

    default:
      return state;
  }
}