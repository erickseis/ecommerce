import { createSlice } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
      setIsLoading: (state, action)=>{ // aca se reciben solo dos parametros para ejecutar una accion, para q se ejecute cuando se setee el estado pase de false a true o viceverza
        const isLoading = action.payload
        return isLoading
      }

  }
});

export const {setIsLoading} = isLoadingSlice.actions; 

export default isLoadingSlice.reducer;
