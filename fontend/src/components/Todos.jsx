import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        setLoading(true);
        const response = axios.get(`${backendUrl}+/todo/api/getTodo`, {
          withCredentials: true,
        });
        console.log(response.data.todos);
        setTodos(response.data.todos);
        setError(null);
      } catch (error) {
        setError("Error occuring fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchTodo();
  }, []);

  const todoCreate = async () => {
    if (!newTodo) return;
    try {
      const response = await axios.post(
        `${backendUrl}+/todo/api/create`,
        {
          text: newTodo,
          complete: false,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data.newTodo);
      setTodos([...todos, response.data.newTodo]);
      setNewTodo("");
    } catch (error) {
      console.log(error);
      setError("Failed to create todo");
    }
  };
  const todoStatus = async (id) => {
    const todo = todos.find((t) => t._id === id);

    try {
      const response = await axios.put(
        `${backendUrl}+/todo/api/updateTodo/${id}`,
        { withCredentials: true },
        {
          ...todo,
          completed: !todo.completed,
        }
      );
      setTodos(todos.map((t)=>(t._id===id?response.data.todo:t)))
    } catch (error) {
          setError("Failed to find todo status");
    }
  };
  const todoDelete = async (id) => {
    try {
      await axios.delete(`${backendUrl}+"/todo/api/delete/"+${id}`, {
        withCredentials: true,
      });
      setTodos(todos.filter((t) => t._id !== id));
    } catch (error) {
      setError("Failed to Delete Todo");
    }
  };
  return (
    <div>
      <div className="bg-gray-200 mx-auto w-1/3 my-10 p-10 text-center ">
        <h1 className="text-center font-bold text-2xl mb-4">Todo App</h1>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Add a new todo"
            className="w-full border p-2"
          />
          <button className="bg-blue-600 text-white px-2 py-1 cursor-pointer hover:bg-blue-800 ">
            Add
          </button>
        </div>
        <div className="flex justify-between my-4">
          <div className="flex items-center gap-2">
            {" "}
            <input type="checkbox" />
            <p className="">todos 1</p>
          </div>
          <button className="bg-red-500 text-white p-1 text-xl rounded-md cursor-pointer">
            Delete
          </button>
        </div>

        <p className="mt-6">0 todos remaining</p>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md text-center mt-4 cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Todos;
