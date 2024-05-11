import apiSlice from "../apiSlice";

const reservationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReservation: builder.query({
      query: () => ({
        url: "/rechercher",
        method: "GET",
      }),
    }),
    createReservation: builder.mutation({
      query: (data) => ({
        url: "/rechercher",
        method: "POST",
        body: data,
      }),
    }),
    getReservationById: builder.query({
      query: (id) => ({
        url: `/rechercher/${id}`,
        method: "GET",
        body: id,
      }),
    }),
    deleteReservation: builder.mutation({
      query: (id) => ({
        url: `/rechercher`,
        method: "DELETE",
        body: id,
      }),
    }),
    updateReservation: builder.mutation({
      query: (id) => ({
        url: `/rechercher`,
        method: "PUT",
        body: id,
      }),
    }),
  }),
});

export const {
  useCreateReservationMutation,
  useDeleteReservationMutation,
  useGetReservationByIdQuery,
  useGetReservationQuery,
  useUpdateReservationMutation,
} = reservationApiSlice;
