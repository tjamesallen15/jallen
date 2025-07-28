import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@shared/common/core";
import type { Work } from "@shared/common/model";
import type {
  CreateWorkPayload,
  DeleteWorkPayload,
  GetWorkPayload,
  UpdateWorkPayload,
} from "../core";

export const workApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  reducerPath: "workApi",
  tagTypes: ["Work"],
  endpoints: (build) => ({
    getWorks: build.query<Work[], void>({
      query: () => "/works",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Work" as const, id })),
              { type: "Work", id: "LIST" },
            ]
          : [{ type: "Work", id: "LIST" }],
    }),
    getWork: build.query<Work, GetWorkPayload>({
      query: ({ id }) => `/works/${id}`,
      providesTags: (result, error, { id }) => {
        if (error) console.warn(error);
        console.log({ result });
        return [{ type: "Work", id }];
      },
    }),
    createWork: build.mutation<Work, CreateWorkPayload>({
      query: (body) => ({
        url: "/works/",
        method: "POST",
        body,
      }),
      transformResponse: (response: any) => {
        console.log(response);
        return response;
      },
      invalidatesTags: [{ type: "Work", id: "LIST" }],
    }),
    updateWork: build.mutation<
      Omit<UpdateWorkPayload, "id">,
      UpdateWorkPayload
    >({
      query: ({ id, ...body }) => ({
        url: `/works/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Work", id },
        { type: "Work", id: "LIST" },
      ],
    }),
    deleteWork: build.mutation<void, DeleteWorkPayload>({
      query: ({ id }) => ({
        url: `/works/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Work", id },
        { type: "Work", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetWorksQuery,
  useGetWorkQuery,
  useCreateWorkMutation,
  useUpdateWorkMutation,
  useDeleteWorkMutation,
} = workApiSlice;
