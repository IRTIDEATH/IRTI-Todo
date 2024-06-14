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

const AddTask = () => {
    const [name, setName] = useState("")
    const router = useRouter()

    const handleSubmit = async (e: SyntheticEvent) => {
      e.preventDefault()
      await axios.post('/api/tasks', {
        name: name
      })
      setName("")
      router.refresh()
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new Task</DialogTitle>
          <DialogDescription>
            Make changes to your task here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
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
                <Button type="submit">Save</Button>
            </DialogClose>
            </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTask