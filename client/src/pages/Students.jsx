
import React, { useEffect, useState } from 'react'
import { addStudent, deleteStudent, getStudents, updateStudent } from '../api/studentApi';
import { getCourse } from '../api/courseApi';
import Layout from '../components/Layout';

const Students = () => {

    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");

    const [editId, setEditId] = useState(null);

    useEffect(() => {
        loadStudents();
        loadCourses();

    }, []);

    const loadStudents = async() => {
        const res = await getStudents();
        //setStudents(res.data.students);
        setStudents(res.data || []);
    }

    const loadCourses = async() => {
        const res = await getCourse();
        setCourses(res.data);
    }

    const handleSubmit = async() => {
        if(!name || !email || !phone || !course) {
            alert("All field are required")
        }
    

        const studentData = {
            name,
            email,
            phone,
            course
        };

        if(editId){
            await updateStudent(editId, studentData);
        }
        else{
            await addStudent(studentData)
        }

        resetForm();
        loadStudents();

    };

    const handleEdit = (student) => {
        setEditId(student._id);
        setName(student.name);
        setEmail(student.email);
        setPhone(student.phone);
        setCourse(student.course?._id || "");
    };

    const handleDelete = async(id) => {
        if(window.confirm("Are you sure want to delete this student")){
            await deleteStudent(id);
            loadStudents();
        }
    }

    const resetForm = () => {
        setEditId(null);
        setName("");
        setEmail("");
        setPhone("");
        setCourse("");
    }

  return (
    <div className='container'>

        <Layout>
            <h3 className='mb-3'>Students</h3>
            <div className='card p-3 mb-4'>
                <h5 className='mb-3'>{editId ? "Edit Student" : "Add Student"}</h5>
                <div className="row">
                    <div className="col-md-2">
                        <input
                            className='form-control'
                            placeholder='Student Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2">
                        <input
                            className='form-control'
                            placeholder='Student Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2">
                        <input
                            className='form-control'
                            placeholder='Student Phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <select name="" id=""
                            className='form-control'
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}>

                                <option value="">---Select Courses---</option>
                                {courses.map((c) => (
                                    <option key={c._id} value={c._id}>{c.courseName}</option>
                                ))}

                            </select>
                    </div>
                </div>
            </div>

            <div>
                <button className='btn btn-success me-2' onClick={handleSubmit}>
                    {editId ? "Update" : "Add"}
                </button>

                {editId && (
                    <button className='btn btn-secondary' onClick={resetForm}>Cancel/Edit</button>
                )}
            </div>

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Course</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length === 0 ? (
                        <tr>
                            <td colSpan="5" className='text center'>No Student found</td>
                        </tr>
                    ) : (
                        students.map((s) => (
                            <tr key={s._id}>
                                <td>{s.name}</td>
                                <td>{s.email}</td>
                                <td>{s.phone}</td>
                                <td>{s.course ?.courseName || "-"}</td>
                                <td>
                                    {/* <button className='btn btn-warning me-2' onClick={handleEdit(s)}>Edit</button>
                                    <button className='btn btn-danger me-2' onClick={handleDelete(s._id)}>Delete</button> */}
                                    <button
  className='btn btn-warning me-2'
  onClick={() => handleEdit(s)}
>
  Edit
</button>

<button
  className='btn btn-danger me-2'
  onClick={() => handleDelete(s._id)}
>
  Delete
</button>

                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </Layout>
      
    </div>
  )
}

export default Students
