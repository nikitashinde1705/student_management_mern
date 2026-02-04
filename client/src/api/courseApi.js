import axiosInstance from "../api/axiosInstance";

// CREATE
export const addCourse = (data) =>
  axiosInstance.post("/courses/createcourse", data);

// READ
export const getCourse = () =>
  axiosInstance.get("/courses/getcourse");

// UPDATE
export const updateCourse = (id, data) =>
  axiosInstance.put(`/courses/${id}`, data);

// DELETE
export const deleteCourse = (id) =>
  axiosInstance.delete(`/courses/${id}`);
