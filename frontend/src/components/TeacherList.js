import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';

const TeacherList = ({ onClose }) => {
    const [teachers, setTeachers] = useState([]);
    const [editTeacherData, setEditTeacherData] = useState(null);

    const fetchTeachers = async () => {
        try {
            const snapshot = await db.collection('teachers').get();
            const teacherData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTeachers(teacherData);
        } catch (error) {
            console.error('Error fetching teachers: ', error);
        }
    };

    useEffect(() => {
        fetchTeachers();
    }, []);

    const handleEditTeacher = (id) => {
        const teacherToEdit = teachers.find((teacher) => teacher.id === id);
        setEditTeacherData(teacherToEdit);
    };

    const handleUpdateTeacher = async () => {
        try {
            console.log('Editing teacher data:', editTeacherData);
    
            if (!editTeacherData || !editTeacherData.id) {
                console.error('Invalid teacher data:', editTeacherData);
                return;
            }
    
            console.log('Updating teacher:', editTeacherData.id);

            await db.collection('teachers').doc(editTeacherData.id).update(editTeacherData);
            console.log('Teacher updated successfully');

            setEditTeacherData(null);
    
            fetchTeachers(); // Fetch updated teacher data again
        } catch (error) {
            console.error('Error updating teacher: ', error);
        }
    };
    
    const handleDeleteTeacher = async (id) => {
        try {
            await db.collection('teachers').doc(id).delete();
            
            setTeachers(teachers.filter((teacher) => teacher.id !== id));
        
            console.log('Teacher deleted successfully');
        } catch (error) {
            console.error('Error deleting teacher: ', error);
        }
    };
    
   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditTeacherData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className='w-full h-full bg-gray-800'>
            <div className='flex flex-row items-center space-x-4'>
                <h2 className="text-2xl text-white font-bold m-4">Teacher List</h2>
                <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onClose}>
                    Cancel
                </button>
            </div>
            <table className="w-full border-collapse border border-gray-300 bg-gray-800 mt-4">
                <thead className="bg-gray-900 text-white">
                    <tr className="border border-gray-300 text-white">
                        <th className="p-2">ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Phone Number</th>
                        <th className="p-2">Join Date</th>
                        <th className="p-2">Subject Taught</th>
                        <th className="p-2">Assigned Class</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-white">
                    {teachers.map((teacher) => (
                        <tr key={teacher.id} className="bg-gray-900">
                            <td className="p-2 text-center">{teacher.ID}</td>
                            <td className="p-2 text-center">{editTeacherData && editTeacherData.id === teacher.id ? (
                                <input type="text" name="name" value={editTeacherData.name} onChange={handleChange} className="w-32 bg-transparent border-none text-white" />
                            ) : teacher.name}</td>
                            <td className="p-2 text-center">{editTeacherData && editTeacherData.id === teacher.id ? (
                                <input type="text" name="phoneNumber" value={editTeacherData.phoneNumber} onChange={handleChange} className="w-32 bg-transparent border-none text-white" />
                            ) : teacher.phoneNumber}</td>
                            <td className="p-2 text-center">{editTeacherData && editTeacherData.id === teacher.id ? (
                                <input type="text" name="joinDate" value={editTeacherData.joinDate} onChange={handleChange} className="w-32 bg-transparent border-none text-white" />
                            ) : teacher.joinDate}</td>
                            <td className="p-2 text-center">{editTeacherData && editTeacherData.id === teacher.id ? (
                                <input type="text" name="subjectTaught" value={editTeacherData.subjectTaught} onChange={handleChange} className="w-32 bg-transparent border-none text-white" />
                            ) : teacher.subjectTaught}</td>
                            <td className="p-2 text-center">{editTeacherData && editTeacherData.id === teacher.id ? (
                                <input type="text" name="assignedClass" value={editTeacherData.assignedClass} onChange={handleChange} className="w-32 bg-transparent border-none text-white" />
                            ) : teacher.assignedClass}</td>
                            <td className="p-2 text-center">
                                {editTeacherData && editTeacherData.id === teacher.id ? (
                                    <button onClick={handleUpdateTeacher} className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">
                                        Save
                                    </button>
                                ) : (
                                    <button onClick={() => handleEditTeacher(teacher.id)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
                                        Edit
                                    </button>
                                )}
                                <button onClick={() => handleDeleteTeacher(teacher.id)} className="bg-red-500 text-white px-4 py-2 rounded-md">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherList;
