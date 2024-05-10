import apiSlice from "../apiSlice";

const accountApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    CreateAccount: builder.mutation({
      query: (data) => ({
        url: `/api/account/passager`,
        method: "POST",
        body: { data },
      }),
    }),
  }),
});

export const { useCreateAccountMutation } = accountApiSlice;
