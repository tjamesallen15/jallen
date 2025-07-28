import type { Application, Work } from "@shared/common/model";

export type GetApplicationPayload = {
  id: string;
};

export type DeleteApplicationPayload = GetApplicationPayload;
export type CreateApplicationPayload = Omit<Application, "id">;
export type UpdateApplicationPayload = Partial<Application> &
  Pick<Application, "id">;

export type GetWorkPayload = {
  id: string;
};

export type DeleteWorkPayload = GetWorkPayload;
export type CreateWorkPayload = Omit<Work, "id">;
export type UpdateWorkPayload = Partial<Work> & Pick<Work, "id">;
