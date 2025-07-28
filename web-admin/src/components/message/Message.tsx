import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MessageProps {
  title: string;
  description: string;
  button: string;
  showDialog: boolean;
  setShowDialog: (arg: boolean) => void;
}

const Message = ({
  title,
  description,
  button,
  showDialog,
  setShowDialog,
}: MessageProps) => {
  return (
    <div>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button onClick={() => setShowDialog(false)}>{button}</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Message;
