"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

type Task = {
    id: number;
    name: string;
    complete: boolean;
}

export const Checkedbox = ({task}:{task: Task}) => {
    const router = useRouter()

    const handleChange = async (e: SyntheticEvent) => {
        // e.preventDefault()
        router.refresh()
        if (task.id === task.id) {
            return await axios.patch(`/api/tasks/${task.id}`, {
                complete: !task.complete
            }) && router.refresh()
        } else {
            return task && router.refresh()
        }
    }

    return (
        <input type="checkbox" checked={task.complete} onChange={handleChange}/>
    )
}