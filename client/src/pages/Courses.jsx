import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { addCourse, getCourse } from '../api/courseApi';

const Courses = () => {

    const[courses, setCourses] = useState([]);
    const[courseName, setCourseName] = useState("");

    useEffect(() => {load();}, []);

    const load = async () => {
        const res = await getCourse();
        setCourses(res.data);
    }

    const submit = async () => {
        await addCourse({courseName});
    };

    return (
        <Layout>
            <h3>Courses</h3>

            <input className='form-control mb-3' placeholder='Enter Coursee Name'
            onChange={e=>setCourseName(e.target.value)}
             />

             <button className='btn btn-success mb-3' onClick={submit}>
                Add
             </button>

             <ul className='list-group'>
                {courses.map(c=>(
                    <li key={c._id} className='list-group-item' >{c.courseName}</li>
                ))}
             </ul>

        </Layout>
    )

}

export default Courses
