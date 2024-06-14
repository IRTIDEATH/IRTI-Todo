"use client"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { SquarePen } from "lucide-react";

type Task = {
    id: number;
    name: string;
}

const UpdateTask = ({task}: {task: Task}) => {
    const [name, setName] = useState(task.name)
    const router = useRouter()

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault()
      await axios.patch(`/api/tasks/${task.id}`, {
        name: name
      })
      router.refresh()
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
            <SquarePen size={'23px'} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleUpdate}>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-left">
                    Task name
                </Label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
            </div>
            </div>
            <DialogFooter>
            <DialogClose asChild>
                <Button type="submit">Update</Button>
            </DialogClose>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTask