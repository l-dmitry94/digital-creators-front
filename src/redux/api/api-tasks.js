// import axios from 'axios';

// const baseURL = import.meta.env.VITE_BACKEND_URL;

// const tasksInstance = axios.create({
//     baseURL,
// });

// ///////////////////////////////
// /////////// BOARDS ////////////
// ///////////////////////////////

// export const getBoards = async () => {
//     const { data } = await tasksInstance.get('/boards');
//     return data;
// };

// export const addBoard = async body => {
//     const { data } = await tasksInstance.post('/boards', body);
//     return data;
// };

// export const removeBoard = async boardId => {
//     const { data } = await tasksInstance.delete(`/boards/${boardId}`);
//     return data;
// };

// export const editBoard = async (boardId, body) => {
//     const { data } = await tasksInstance.patch(`/boards/${boardId}`, body);
//     return data;
// };

// ///////////////////////////////
// /////////// COLUMNS ////////////
// ///////////////////////////////

// export const getColumns = async boardId => {
//     const { data } = await tasksInstance.get(`/boards/${boardId}/columns`);
//     return data;
// };

// export const addColumn = async (boardId, body) => {
//     const { data } = await tasksInstance.post(
//         `/boards/${boardId}/columns`,
//         body
//     );
//     return data;
// };

// export const removeColumn = async (boardId, columnId) => {
//     const { data } = await tasksInstance.delete(
//         `/boards/${boardId}/columns/${columnId}`
//     );
//     return data;
// };

// export const editColumn = async (boardId, columnId, body) => {
//     const { data } = await tasksInstance.patch(
//         `/boards/${boardId}/columns/${columnId}`,
//         body
//     );
//     return data;
// };

// ///////////////////////////////
// /////////// CARDS ////////////
// ///////////////////////////////

// export const getCards = async (boardId, columnId) => {
//     const { data } = await tasksInstance.get(
//         `/boards/${boardId}/columns/${columnId}/cards`
//     );
//     return data;
// };

// export const addCard = async (boardId, columnId, body) => {
//     const { data } = await tasksInstance.post(
//         `/boards/${boardId}/columns/${columnId}/cards`,
//         body
//     );
//     return data;
// };

// export const removeCard = async (boardId, columnId, cardId) => {
//     const { data } = await tasksInstance.delete(
//         `/boards/${boardId}/columns/${columnId}/cards/${cardId}`
//     );
//     return data;
// };

// export const editCard = async (boardId, columnId, cardId, body) => {
//     const { data } = await tasksInstance.patch(
//         `/boards/${boardId}/columns/${columnId}/cards/${cardId}`,
//         body
//     );
//     return data;
// };
