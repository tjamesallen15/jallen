import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@shared/common/core";
import type { Enigma } from "@shared/common/model";

export const authenticationApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  reducerPath: "authenticationApi",
  tagTypes: ["Authentication"],
  endpoints: (build) => ({
    createAuthentication: build.mutation<Enigma, Enigma>({
      query: (body) => ({
        url: "/security/login",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Authentication", id: "AUTH" }],
    }),
  }),
});

export const { useCreateAuthenticationMutation, util } = authenticationApiSlice;
