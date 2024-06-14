"use client"

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Task = {
    id: number;
    name: string;
}

const DeleteTask = ({task}:{task: Task}) => {
    const router = useRouter()

    const handleDelete = async (taskId: number) => {
      await axios.delete(`/api/tasks/${taskId}`)
      router.refresh()
    }

  return (
    <button onClick={() => handleDelete(task.id)} type="button">
        <Trash2 />  
    </button>
  );
};

export default DeleteTask