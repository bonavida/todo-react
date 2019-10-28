import http from './httpService';
import { apiUrl } from 'config';

const apiEndpoint = `${apiUrl}/todos`;

export const getTodos = async () => {
    try {
        const { data: res } = await http.get(apiEndpoint);
        return res;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export const getTodo = async (todoId) => {
    try {
        const { data: res } = await http.get(`${apiEndpoint}/${todoId}`);
        return res;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export const saveTodo = async (todo) => {
    try {
        const { data: res } = await http.post(apiEndpoint, todo);
        return res;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export const editTodo = async (todo) => {
    try {
        const { data: res } = await http.put(`${apiEndpoint}/${todo.id}`, todo);
        return res;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export const deleteTodo = async (todoId) => {
    try {
        const { data: res } = await http.delete(`${apiEndpoint}/${todoId}`);
        return res;
    } catch (e) {
        console.log(e);
        return null;
    }
}