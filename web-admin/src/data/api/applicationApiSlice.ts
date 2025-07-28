import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@shared/common/core";
import type { Application } from "@shared/common/model";
import type {
  CreateApplicationPayload,
  DeleteApplicationPayload,
  GetApplicationPayload,
  UpdateApplicationPayload,
} from "../core";

export const applicationApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  reducerPath: "applicationApi",
  tagTypes: ["Application"],
  endpoints: (build) => ({
    getApplications: build.query<Application[], void>({
      query: () => "/applications",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Application" as const, id })),
              { type: "Application", id: "LIST" },
            ]
          : [{ type: "Application", id: "LIST" }],
    }),
    getApplication: build.query<Application, GetApplicationPayload>({
      query: ({ id }) => `/applications/${id}`,
      providesTags: (result, error, { id }) => {
        if (error) console.warn(error);
        console.log({ result });
        return [{ type: "Application", id }];
      },
    }),
    createApplication: build.mutation<Application, CreateApplicationPayload>({
      query: (body) => ({
        url: "/applications/",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Application", id: "LIST" }],
    }),
    updateApplication: build.mutation<
      Omit<UpdateApplicationPayload, "id">,
      UpdateApplicationPayload
    >({
      query: ({ id, ...body }) => ({
        url: `/applications/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Application", id },
        { type: "Application", id: "LIST" },
      ],
    }),
    deleteApplication: build.mutation<void, DeleteApplicationPayload>({
      query: ({ id }) => ({
        url: `/applications/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: "Application", id },
        { type: "Application", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetApplicationsQuery,
  useGetApplicationQuery,
  useCreateApplicationMutation,
  useUpdateApplicationMutation,
  useDeleteApplicationMutation,
} = applicationApiSlice;
