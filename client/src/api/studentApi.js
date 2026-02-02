import axiosInstance from "./axiosInstance";

export const addStudent = (data) => {
    return axiosInstance.post("/student", data);
};

export const getStudents = () => {
    return axiosInstance.get("/student");
}

export const updateStudent = () => {
    return axiosInstance.put(`/student/${id}`, data);
};

export const deleteStudent = () => {
    return axiosInstance.delete(`/student/${id}`);
}