export default interface Task {
    id: string,
    title: string;
    description: string;
    complete: boolean;
    createdAt: Date;
    updatedAt: Date;
    dueAt: Date;
}