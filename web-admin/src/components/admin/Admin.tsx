import { S_EMPTY } from "@shared/common/core";
import {
  NewApplication,
  NewDialog,
  SaveDialog,
  Process,
  NewWork,
} from "@shared/common/core-base";

import type { Application, Work } from "@shared/common/model";
import { useEffect, useState } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import Message from "../message/Message";
import Accordion from "../accordion/Accordion";
import ApplicationDetails from "../details/ApplicationDetails";
import WorkDetails from "../details/WorkDetails";
import { useGetApplicationsQuery } from "@/data/api/applicationApiSlice";
import { useGetWorksQuery } from "@/data/api/workApiSlice";

interface AdminProps {
  authentication: boolean;
}

const Admin = ({ authentication }: AdminProps) => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [applicationId, setApplicationId] = useState(0);
  const [works, setWorks] = useState<Work[]>([]);
  const [workId, setWorkId] = useState(0);
  const [childLoaded, setChildLoaded] = useState(false);
  const [toView, setToView] = useState(S_EMPTY);
  const [applicationExpanded, setApplicationExpanded] = useState(false);
  const [workExpanded, setWorkExpanded] = useState(false);
  const [workLoaded, setWorkLoaded] = useState(false);

  const [dialogState, setDialogState] = useState({
    title: S_EMPTY,
    description: S_EMPTY,
    button: S_EMPTY,
  });
  const [showDialog, setShowDialog] = useState(false);
  const { data: appsData } = useGetApplicationsQuery(undefined, {
    skip: !authentication,
  });

  const { data: worksData } = useGetWorksQuery(undefined, {
    skip: !authentication || !workLoaded,
  });

  useEffect(() => {
    if (!authentication) return;

    if (appsData) {
      setApplicationExpanded(true);
      setApplications(appsData);
      if (appsData[0].id && applicationId === 0)
        setApplicationId(appsData[0].id);
      setToView(Process.Application);
    }
  }, [authentication, appsData]);

  useEffect(() => {
    if (!authentication) return;

    if (worksData) {
      setWorks(worksData);
      if (worksData[0].id && workId === 0) setWorkId(worksData[0].id);
    }
  }, [authentication, worksData]);

  const onShowAccordion = async (e: React.MouseEvent<HTMLInputElement>) => {
    const id = e.currentTarget.id;
    if (id.includes(Process.Application)) {
      setApplicationExpanded(!applicationExpanded);
    }
    if (e.currentTarget.id.includes(Process.Work)) {
      setWorkLoaded(true);
      setWorkExpanded(!workExpanded);
    }
  };

  const onShowAccordionChild = async (
    e: React.MouseEvent<HTMLDivElement>,
    obj: Application | Work
  ) => {
    setChildLoaded(false);
    if (e.currentTarget.id.includes(Process.Application)) {
      const target = obj as Application;
      if (target.id) setApplicationId(target.id);
      setToView(Process.Application);
    } else if (e.currentTarget.id.includes(Process.Work)) {
      const target = obj as Work;
      if (target.id) setWorkId(target.id);
      setToView(Process.Work);
    } else {
      return;
    }
  };

  return (
    <div
      className={
        "min-h-[80vh] py-12 transition-all duration-1000 " +
        (authentication === false
          ? "invisible opacity-0"
          : "visible opacity-100")
      }
    >
      <Message
        title={dialogState.title}
        description={dialogState.description}
        button={dialogState.button}
        showDialog={showDialog}
        setShowDialog={setShowDialog}
      />
      <div className="container mx-auto">
        <div className="flex flex-row gap-8 font-karla">
          <Accordion
            applicationId={applicationId}
            applications={applications}
            workId={workId}
            works={works}
            applicationExpanded={applicationExpanded}
            workExpanded={workExpanded}
            onShowAccordion={onShowAccordion}
            onShowAccordionChild={onShowAccordionChild}
            setShowDialog={setShowDialog}
            setDialogState={setDialogState}
            setApplicationId={setApplicationId}
            setWorkId={setWorkId}
            setToView={setToView}
          />

          <ApplicationDetails
            applicationId={applicationId}
            toView={toView}
            childLoaded={childLoaded}
            setApplicationId={setApplicationId}
            setChildLoaded={setChildLoaded}
            setShowDialog={setShowDialog}
            setDialogState={setDialogState}
          />

          <WorkDetails
            workId={workId}
            toView={toView}
            setWorkId={setWorkId}
            childLoaded={childLoaded}
            setChildLoaded={setChildLoaded}
            setShowDialog={setShowDialog}
            setDialogState={setDialogState}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
