import { S_EMPTY, S_SPLIT } from "@shared/common/core";
import { DeleteDialog, Process, SaveDialog } from "@shared/common/core-base";
import type { Application } from "@shared/common/model";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaSave } from "react-icons/fa";
import {
  useDeleteApplicationMutation,
  useGetApplicationQuery,
  useUpdateApplicationMutation,
} from "@/data/api/applicationApiSlice";
import { useEffect, useState } from "react";

interface ApplicationDetailsProps {
  applicationId: number;
  toView: string;
  childLoaded: boolean;
  setApplicationId: (arg: number) => void;
  setChildLoaded: (arg: boolean) => void;
  setShowDialog: (arg: boolean) => void;
  setDialogState: (arg: any) => void;
}

const ApplicationDetails = ({
  applicationId,
  toView,
  childLoaded,
  setApplicationId,
  setChildLoaded,
  setShowDialog,
  setDialogState,
}: ApplicationDetailsProps) => {
  const [application, setApplication] = useState<Application>(
    {} as Application
  );
  const { data: appData } = useGetApplicationQuery(
    { id: applicationId.toString() },
    {
      skip: !applicationId,
    }
  );
  const [updateApplication] = useUpdateApplicationMutation();
  const [deleteApplication] = useDeleteApplicationMutation();

  useEffect(() => {
    if (!appData) return;
    setChildLoaded(true);
    setApplication(appData);
  }, [appData]);

  const onSave = async () => {
    try {
      if (application?.id) {
        const result = await updateApplication({
          ...application,
          id: application.id,
        }).unwrap();
        console.info("Success", result);
        setDialogState({
          title: SaveDialog.Title,
          description: SaveDialog.Description,
          button: SaveDialog.Button,
        });
        setShowDialog(true);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const onDelete = async () => {
    if (application?.id) {
      try {
        const result = await deleteApplication({
          id: application.id.toString(),
        }).unwrap();
        console.info("Deletion succeeded:", result);
        setDialogState({
          title: DeleteDialog.Title,
          description: DeleteDialog.Description,
          button: DeleteDialog.Button,
        });
        setShowDialog(true);
        setApplicationId(0);
      } catch (error) {
        console.error("Deletion failed:", error);
      }
    }
  };

  return (
    <div
      className={
        "application-details flex-col gap-2 bg-ja-darkblue text-ja-white w-[75%] p-5 rounded-xl min-h-[600px] max-h-[600px] " +
        (toView.includes(Process.Application) ? "flex" : "hidden")
      }
    >
      {!childLoaded ? (
        <SkeletonTheme baseColor="#003876" highlightColor="#55a3f3">
          <Skeleton
            containerClassName="mt-4 flex-1 w-full flex flex-col"
            className="flex-1"
            count={14}
          />
        </SkeletonTheme>
      ) : (
        <>
          <label>Name:</label>
          <input
            value={application?.title || ""}
            id="application-title"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setApplication({
                ...application,
                [e.target.id.split(S_SPLIT)[1]]: e.target.value,
              } as Application)
            }
          ></input>
          <label>Description:</label>
          <textarea
            rows={8}
            value={application?.description || S_EMPTY}
            id="application-description"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setApplication({
                ...application,
                [e.target.id.split(S_SPLIT)[1]]: e.target.value,
              } as Application)
            }
          ></textarea>
          <label>Category:</label>
          <input
            value={application?.category || ""}
            id="application-category"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setApplication({
                ...application,
                [e.target.id.split(S_SPLIT)[1]]: e.target.value,
              } as Application)
            }
          ></input>
          <label>Technology:</label>
          <input
            value={application?.tech || ""}
            id="application-tech"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setApplication({
                ...application,
                [e.target.id.split(S_SPLIT)[1]]: e.target.value,
              } as Application)
            }
          ></input>
          <label>Repository:</label>
          <input
            value={application?.repository || ""}
            id="application-repository"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setApplication({
                ...application,
                [e.target.id.split(S_SPLIT)[1]]: e.target.value,
              } as Application)
            }
          ></input>
          <label>Site:</label>
          <input
            value={application?.site || ""}
            id="application-site"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setApplication({
                ...application,
                [e.target.id.split(S_SPLIT)[1]]: e.target.value,
              } as Application)
            }
          ></input>

          <div className="mt-2 flex flex-row gap-1">
            <button id="application-save" onClick={onSave}>
              <span className="flex flex-row gap-1 items-center">
                <FaSave /> Save
              </span>
            </button>
            <button id="application-delete" onClick={onDelete}>
              <span className="flex flex-row gap-1 items-center">
                <FaSave /> Delete
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ApplicationDetails;
