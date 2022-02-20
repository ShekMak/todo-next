import Task from "../models/Task";
import { addDocument, getCollectionAt, getCollectionWithLimit, getDocument, updateDocument } from "./firestore";

export const getTasks = async (state: boolean, uidUser: string) => {
    return await getCollectionWithLimit<Task>('tasks', 'createdAt', state, uidUser);
};

export const getMoreTasks = (lastElement: any, state: boolean, uidUser: string) => getCollectionAt<Task>('tasks', 'createdAt', `tasks/${lastElement}`, state, uidUser);

export const getTask = (uidTask: string) => getDocument<Task>(`tasks/${uidTask}`);

export const addTask = (task: Task) => addDocument('tasks', task);

export const UpdateTask = (task: Task) => updateDocument(`tasks/${task.id}`, task);