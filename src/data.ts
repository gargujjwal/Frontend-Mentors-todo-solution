import { v4 as uuidv4 } from "uuid";
import { Todo } from "./types";
const todos: Todo[] = [
    {
        id: uuidv4(),
        completed: true,
        text: "Complete online JavaScript course",
        show: true,
    },
    {
        id: uuidv4(),
        completed: false,
        text: "Jog around the park 3x",
        show: true,
    },
    {
        id: uuidv4(),
        completed: false,
        text: "10 minutes mediation",
        show: true,
    },
    { id: uuidv4(), completed: false, text: "Read for 1 hour", show: true },
    { id: uuidv4(), completed: false, text: "Pick up groceries", show: true },
    {
        id: uuidv4(),
        completed: false,
        text: "Complete Todo App on Frontend Mentor",
        show: true,
    },
];

export default todos;
