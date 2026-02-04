import axiosInstance from "./axiosInstance";


export const addStudent = (data) => {
    return axiosInstance.post("/student/createstudent", data);
};

export const getStudents = () => {
    return axiosInstance.get("/student");
};


export const updateStudent = (id, data) => {
    return axiosInstance.put(`/student/${id}`, data);
};

export const deleteStudent = (id) => {
    return axiosInstance.delete(`/student/${id}`);
};
