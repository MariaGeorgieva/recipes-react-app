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
    likes: 0,
    isUserLike: false,
  };

  export const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RECIPE_FETCH':
        return { ...action.payload };
      case 'LIKE_RECIPE':
        return {
          ...state,
          likes: state.likes + 1,
          isUserLike: true
        };
      case 'UNLIKE_RECIPE':
        return {
          ...state,
          likes: state.likes - 1,
          isUserLike: false
        };
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
  