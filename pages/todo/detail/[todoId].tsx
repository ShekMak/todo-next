import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SingleTodo from "../../../components/SingleTodo";

const DetailTodo: NextPage = () => {

    const {todoId} = useRouter().query;

    useEffect(() => {
        console.log(todoId)
    }, [todoId])

    return <SingleTodo />
}

export default DetailTodo;