import { S_EMPTY, S_SPLIT } from "@shared/common/core";
import { DeleteDialog, Process, SaveDialog } from "@shared/common/core-base";
import type { Work } from "@shared/common/model";
import {
  useDeleteWorkMutation,
  useGetWorkQuery,
  useUpdateWorkMutation,
} from "@/data/api/workApiSlice";
import { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface WorkDetailsProps {
  workId: number;
  toView: string;
  childLoaded: boolean;
  setWorkId: (arg: number) => void;
  setChildLoaded: (arg: boolean) => void;
  setShowDialog: (arg: boolean) => void;
  setDialogState: (arg: any) => void;
}

const WorkDetails = ({
  workId,
  toView,
  childLoaded,
  setWorkId,
  setChildLoaded,
  setShowDialog,
  setDialogState,
}: WorkDetailsProps) => {
  const [work, setWork] = useState<Work>({} as Work);
  const [updateWork] = useUpdateWorkMutation();
  const [deleteWork] = useDeleteWorkMutation();
  const { data: workData } = useGetWorkQuery(
    { id: workId.toString() },
    {
      skip: !workId,
    }
  );

  useEffect(() => {
    if (!workData) return;
    setChildLoaded(true);
    setWork(workData);
  }, [workData]);

  const onSave = async () => {
    try {
      if (work?.id) {
        const result = await updateWork({
          ...work,
          id: work.id,
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
    if (work?.id) {
      try {
        const result = await deleteWork({
          id: work.id.toString(),
        }).unwrap();
        console.info("Deletion succeeded:", result);
        setDialogState({
          title: DeleteDialog.Title,
          description: DeleteDialog.Description,
          button: DeleteDialog.Button,
        });
        setShowDialog(true);
        setWorkId(0);
      } catch (error) {
        console.error("Deletion failed:", error);
      }
    }
  };

  return (
    <div
      className={
        "work-details flex flex-col gap-2 bg-ja-darkblue text-ja-white w-[75%] p-5 rounded-xl min-h-[600px] max-h-[600px] " +
        (toView.includes(Process.Work) ? "flex" : "hidden")
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
          <label>Title:</label>
          <input
            value={work?.name || S_EMPTY}
            id="work-name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWork({
                ...work,
                [e.target.id.split(S_SPLIT)[1]]: e.target.value,
              } as Work)
            }
          ></input>
          <label>Sub:</label>
          <input
            value={work?.sub || S_EMPTY}
            id="work-sub"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWork({
                ...work,
                [e.target.id.split(S_SPLIT)[1]]: e.target.value,
              } as Work)
            }
          ></input>
          <label>Company:</label>
          <input
            value={work?.company || S_EMPTY}
            id="work-company"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWork({
                ...work,
                [e.target.id.split(S_SPLIT)[1]]: e.target.value,
              } as Work)
            }
          ></input>
          <label>Technology:</label>
          <input
            value={work?.technology || S_EMPTY}
            id="work-technology"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWork({
                ...work,
                [e.target.id.split(S_SPLIT)[1]]: e.target.value,
              } as Work)
            }
          ></input>
          <label>Description:</label>
          <textarea
            rows={8}
            value={work?.description || S_EMPTY}
            id="work-description"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setWork({
                ...work,
                [e.target.id.split(S_SPLIT)[1]]: e.target.value,
              } as Work)
            }
          ></textarea>

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

export default WorkDetails;
