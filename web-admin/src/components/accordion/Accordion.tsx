import { ScrollArea } from "@/components/ui/scroll-area";
import type { Application, Work } from "@shared/common/model";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  FaFolder,
  FaFolderOpen,
  FaFile,
  FaFileAlt,
  FaPlus,
} from "react-icons/fa";
import { useCreateApplicationMutation } from "@/data/api/applicationApiSlice";
import {
  NewApplication,
  NewDialog,
  NewWork,
  Process,
} from "@shared/common/core-base";
import { useCreateWorkMutation } from "@/data/api/workApiSlice";

interface AccordionProps {
  applicationId: number;
  workId: number;
  applications: Application[];
  works: Work[];
  applicationExpanded: boolean;
  workExpanded: boolean;
  onShowAccordion: (e: React.MouseEvent<HTMLInputElement>) => void;
  onShowAccordionChild: (
    e: React.MouseEvent<HTMLDivElement>,
    obj: Application | Work
  ) => void;
  setShowDialog: (arg: boolean) => void;
  setDialogState: (arg: any) => void;
  setApplicationId: (arg: number) => void;
  setWorkId: (arg: number) => void;
  setToView: (arg: string) => void;
}

const Accordion = ({
  applicationId,
  applications,
  workId,
  works,
  applicationExpanded,
  workExpanded,
  onShowAccordion,
  onShowAccordionChild,
  setShowDialog,
  setDialogState,
  setApplicationId,
  setWorkId,
  setToView,
}: AccordionProps) => {
  const [createApplication] = useCreateApplicationMutation();
  const [createWork] = useCreateWorkMutation();

  const onNewApplication = async () => {
    try {
      const result = await createApplication({
        title: NewApplication.Title,
        description: NewApplication.Description,
        category: NewApplication.Category,
        tech: NewApplication.Tech,
        repository: NewApplication.Repository,
        site: NewApplication.Site,
      }).unwrap();
      console.info("Success", result);
      setDialogState({
        title: NewDialog.Title,
        description: NewDialog.Description,
        button: NewDialog.Button,
      });
      setShowDialog(true);
      if (result.id) {
        setApplicationId(result.id);
        setToView(Process.Application);
      }
    } catch (error) {
      console.warn("Error", error);
    }
  };
  const onNewWork = async () => {
    try {
      const result = await createWork({
        name: NewWork.Name,
        sub: NewWork.Sub,
        technology: NewWork.Technology,
        company: NewWork.Company,
        description: NewWork.Description,
      }).unwrap();
      console.info("Success", result);
      setDialogState({
        title: NewDialog.Title,
        description: NewDialog.Description,
        button: NewDialog.Button,
      });
      setShowDialog(true);
      if (result.id) {
        setWorkId(result.id);
        setToView(Process.Work);
      }
    } catch (error) {
      console.warn("Error", error);
    }
  };
  return (
    <ScrollArea className="h-[600px] w-[25%]">
      <div className="accordion">
        <div
          className={
            "applications tab " + (applicationExpanded ? "expanded" : "")
          }
        >
          <input
            type="checkbox"
            name="accordion-1"
            id="application-tab"
            defaultChecked={true}
            onClick={onShowAccordion}
          />
          <label
            htmlFor="application-tab"
            className="tab-label flex items-center mr-[15px]"
          >
            <span
              className={
                "flex flex-row items-center gap-2 h-[39px] leading-[39px] " +
                (applicationExpanded ? "font-semibold" : "")
              }
            >
              {applicationExpanded ? (
                <FaFolderOpen className="text-ja-lightblue" />
              ) : (
                <FaFolder />
              )}
              Application
            </span>
            <button
              id="aplication-new"
              className={applicationExpanded ? "block" : "hidden"}
              onClick={onNewApplication}
            >
              <span className="flex flex-row gap-1 items-center">
                <FaPlus /> New
              </span>
            </button>
          </label>
          <div className="tab-content">
            {applications.length === 0 && (
              <Skeleton
                containerClassName="mt-4 flex-1 w-full flex flex-col"
                className="flex-1"
                count={5}
              />
            )}
            {applications?.map((obj: Application) => {
              return (
                <div
                  key={obj.id}
                  id={`application-${obj.id}`}
                  className="cursor-pointer hover:bg-ja-active hover:text-ja-darkblue transition-colors mr-[15px]"
                  onClick={(e) => onShowAccordionChild(e, obj)}
                >
                  <span
                    className={
                      "flex flex-row items-center ms-2 gap-2 " +
                      (applicationId === obj.id
                        ? "text-ja-lightblue font-semibold"
                        : "")
                    }
                  >
                    {applicationId === obj.id ? <FaFileAlt /> : <FaFile />}
                    {obj.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className={"works tab " + (workExpanded ? "expanded" : "")}>
          <input
            type="checkbox"
            name="accordion-2"
            id="work-tab"
            onClick={onShowAccordion}
          />
          <label htmlFor="work-tab" className="tab-label  mr-[15px]">
            <span
              className={
                "flex flex-row items-center gap-2 h-[39px] leading-[39px] " +
                (workExpanded ? "font-semibold" : "")
              }
            >
              {workExpanded ? (
                <FaFolderOpen className="text-ja-lightblue" />
              ) : (
                <FaFolder />
              )}
              Work
            </span>
            <button
              id="work-new"
              className={workExpanded ? "block" : "hidden"}
              onClick={onNewWork}
            >
              <span className="flex flex-row gap-1 items-center">
                <FaPlus /> New
              </span>
            </button>
          </label>
          <div className="tab-content">
            {works.length === 0 && (
              <Skeleton
                containerClassName="mt-4 flex-1 w-full flex flex-col"
                className="flex-1"
                count={5}
              />
            )}
            {works?.map((obj: Work) => {
              return (
                <div
                  key={obj.id}
                  id={`work-${obj.id}`}
                  className="cursor-pointer hover:bg-ja-active hover:text-ja-darkblue transition-colors mr-[15px]"
                  onClick={(e) => onShowAccordionChild(e, obj)}
                >
                  <span
                    className={
                      "flex flex-row items-center ms-2 gap-2 " +
                      (workId === obj.id
                        ? "text-ja-lightblue font-semibold"
                        : "")
                    }
                  >
                    {workId === obj.id ? <FaFileAlt /> : <FaFile />}
                    {obj.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Accordion;
