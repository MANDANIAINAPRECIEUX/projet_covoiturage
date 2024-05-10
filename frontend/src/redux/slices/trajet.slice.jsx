import { createSlice } from "@reduxjs/toolkit";

const trajetSlice = createSlice({
  name: "trajet",
  initialState: {
    type_vehicule: "",
    nombre_de_place_libre: 0,
    pt_A: "",
    pt_B: "",
    pt_C: "",
    pt_D: "",
    date_depart: "",
  },
  reducers: {
    setTrajet: (state, action) => {
      const key = action.payload.key;
      state[key] = action.payload.data;
    },
    resetTrajet: (state) => {
      state.date_depart = "";
      state.type_vehicule = "";
      state.nombre_de_place_libre = 0;
      state.pt_A = "";
      state.pt_B = "";
      state.pt_C = "";
      state.pt_D = "";
    },
  },
});

/**
    dispatch(setTrajet({key:"type_vehicule",data:"4x4"}))
    setTrajet({key:"pt_A",data:"Tsimenatse"})
*/

export const { setTrajet, resetTrajet } = trajetSlice.actions;
export default trajetSlice.reducer;
