import axiosInstance from "../api/axiosInstance";

// CREATE
export const addCourse = (data) =>
  axiosInstance.post("/courses", data);

// READ
export const getCourse = () =>
  axiosInstance.get("/courses");

// UPDATE
export const updateCourse = (id, data) =>
  axiosInstance.put(`/courses/${id}`, data);

// DELETE
export const deleteCourse = (id) =>
  axiosInstance.delete(`/courses/${id}`);
