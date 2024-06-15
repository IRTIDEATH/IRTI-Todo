import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoreHorizontal, Search, SquarePen } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "@/components/ui/checkbox";

import { PrismaClient } from "@prisma/client";
import AddTask from "./task/addTask";
import DeleteTask from "./task/deleteTask";
import UpdateTask from "./task/updateTask";
import { useState } from "react";
import { Checkedbox } from "@/components/Checked";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

const getTask = async () => {
  const res = await prisma.task.findMany({
    select: {
      id: true,
      name: true,
      complete: true
    },
  });
  return res;
};

const Home = async () => {
  const [tasks] = await Promise.all([getTask()])

  return (
    <div className="w-full">
      <div className="flex items-center justify-center m-16 flex-col">
        <div className="flex space-x-3">
          <div className="relative flex-1 md:grow-0 ">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
            />
          </div>
          <div>
            <AddTask />
          </div>
        </div>

        <div className="flex items-center mt-12">
          <Table>
            {tasks.map((task) => (
              <TableBody key={task.id}>
                <TableRow>
                  <TableCell className={`font-medium text-sm ${task.complete ? 'line-through' : 'leading-none'}`}>
                    {task.name}
                  </TableCell>
                  <TableCell className="space-x-2 flex items-center">
                    <Checkedbox task={task}/>
                    <DeleteTask task={task}/>
                    <UpdateTask task={task}/>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Home;
