import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
   toggleFavorite: (state, action) => {
        const recipe = action.payload; 
        const existingIndex = state.favoriterecipes.findIndex(
            (item) => item.recipeId === recipe.recipeId
        );
        if (existingIndex >= 0) {
            state.favoriterecipes.splice(existingIndex, 1); // Retirer des favoris
        } else {
            state.favoriterecipes.push(recipe); // Ajouter aux favoris
        }
    }
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
