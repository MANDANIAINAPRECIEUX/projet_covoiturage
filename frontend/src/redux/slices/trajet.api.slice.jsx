import apiSlice from "../apiSlice";

const trajetApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    /** GET : query, !GET : mutation
     * endpoints : fonction pour communiquer avec le server
     *
     */
    getTrajets: builder.query({
      query: () => ({
        url: "/api/trajet", // routes
      }),
    }),
    createTrajet: builder.mutation({
      query: (data) => ({
        url: "/api/trajet",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// use[nom_fonction][type_fonction]

export const { useGetTrajetsQuery, useCreateTrajetMutation } = trajetApiSlice;
