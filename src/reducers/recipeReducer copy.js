// export const recipeReducer = (state, action) => {
//     console.log('state reducer', state);
//     switch (action.type) {
//                case 'RECIPE_FETCH':
//                 console.log();
//             return { ...action.payload };
//         case 'LIKE_RECIPE':
//             return {
//                 ...state,
//                 likes: state.likes + 1,
//                 isUserLike: true
//             };
//         case 'UNLIKE_RECIPE':
//             return {
//                 ...state,
//                 likes: state.likes - 1,
//                 isUserLike: false
//             };
//         default:
//             return state;
//     }
// };

const initialState = {
  likes: [],
  isUserLike: false,
};

export const recipeReducer = (state=initialState, action) => {
  console.log("state , action", state, action);
  switch (action.type) {

    case 'RECIPE_FETCH':
      return { ...action.payload };
    case 'LIKE_RECIPE':
      console.log('LIKE_RECIPE state', state);

      return {
        ...state,
        likes: [...state.likes, action.payload],
        isUserLike: true
      };
      
    case 'UNLIKE_RECIPE':
      console.log('UNLIKE_RECIPE', state);
      let filteredState = {
        ...state,
        likes: [...state.likes].filter((x) => x.id !== action.payload),
        isUserLike: false
      };
      return filteredState
    // return {
    //   ...state,
    //   // likes: state.likes - 1,
    //   likes: state.likes.filter(like => like.userId !== action.payload),


    // };
    default:
      return state;
  }
};


//   export const recipeReducer = (state = initialState, action) => {
//     console.log('state reducer', state);
//     switch (action.type) {
//       case 'RECIPE_FETCH':
//         console.log();
//         return { ...action.payload };
//       case 'LIKE_RECIPE':
//         return {
//           ...state,
//           likes: [...state.likes, action.payload],
//           isUserLike: true
//         };
//       case 'UNLIKE_RECIPE':
//         return {
//           ...state,
//           likes: state.likes.filter(like => like.userId !== action.payload),
//           isUserLike: false
//         };
//       default:
//         return state;
//     }
//   };
