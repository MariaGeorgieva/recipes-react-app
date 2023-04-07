const handleLikeClick = async () => {
    try {
      if (isLiked) {
        console.log('UnLike:', likes);
        await likeService.unlikeRecipe(recipeId, userId);
        dispatch({ type: 'UNLIKE_RECIPE', payload: likes._id });
        dispatch({ type: 'UPDATE_LIKES', payload: likes.length - 1 });
      } else {
        const newLike = await likeService.likeRecipe(recipeId, userId);
        console.log('newLike', newLike);
        dispatch({ type: 'LIKE_RECIPE', payload: newLike._id });
        dispatch({ type: 'UPDATE_LIKES', payload: likes.length + 1 });
      }
  
      setIsLiked(!isLiked);
    } catch (error) {
      console.log('Error liking recipe:', error);
    }
  };
  