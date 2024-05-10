import { getPassager } from "../../../../backend/controllers/passager.controller";
import apiSlice from "../apiSlice";

const passagerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    checkCode: builder.mutation({
      query: (phone) => ({
        url: `/api/passager/phone`,
        method: "POST",
        body: { phone },
      }),
    }),
  }),
});

export const { useCheckCodeMutation } = passagerApiSlice;
