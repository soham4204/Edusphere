import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import Button from './ui/Button';

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
        <div className="p-6 rounded-2xl bg-white shadow-card overflow-x-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h1 className="text-xl font-bold text-brand-dark">Teacher List</h1>
                <Button variant="ghost" onClick={onClose}>
                    Close
                </Button>
            </div>
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-brand-light border-opacity-30">
                        <th className="text-left py-3 px-4 font-semibold text-brand-dark">ID</th>
                        <th className="text-left py-3 px-4 font-semibold text-brand-dark">Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-brand-dark">Phone Number</th>
                        <th className="text-left py-3 px-4 font-semibold text-brand-dark">Join Date</th>
                        <th className="text-left py-3 px-4 font-semibold text-brand-dark">Subject Taught</th>
                        <th className="text-left py-3 px-4 font-semibold text-brand-dark">Assigned Class</th>
                        <th className="text-left py-3 px-4 font-semibold text-brand-dark">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher) => (
                        <tr key={teacher.id} className="border-b border-brand-light border-opacity-10 hover:bg-brand-bg transition-colors">
                            <td className="py-3 px-4 text-brand-dark">{teacher.ID}</td>
                            <td className="py-3 px-4 text-brand-dark">
                                {editTeacherData && editTeacherData.id === teacher.id ? (
                                    <input type="text" name="name" value={editTeacherData.name} onChange={handleChange} className="w-32 px-2 py-1 rounded-md border border-brand-light bg-transparent text-brand-dark focus:ring-2 focus:ring-brand outline-none" />
                                ) : teacher.name}
                            </td>
                            <td className="py-3 px-4 text-brand-dark">
                                {editTeacherData && editTeacherData.id === teacher.id ? (
                                    <input type="text" name="phoneNumber" value={editTeacherData.phoneNumber} onChange={handleChange} className="w-32 px-2 py-1 rounded-md border border-brand-light bg-transparent text-brand-dark focus:ring-2 focus:ring-brand outline-none" />
                                ) : teacher.phoneNumber}
                            </td>
                            <td className="py-3 px-4 text-brand-dark">
                                {editTeacherData && editTeacherData.id === teacher.id ? (
                                    <input type="text" name="joinDate" value={editTeacherData.joinDate} onChange={handleChange} className="w-32 px-2 py-1 rounded-md border border-brand-light bg-transparent text-brand-dark focus:ring-2 focus:ring-brand outline-none" />
                                ) : teacher.joinDate}
                            </td>
                            <td className="py-3 px-4 text-brand-dark">
                                {editTeacherData && editTeacherData.id === teacher.id ? (
                                    <input type="text" name="subjectTaught" value={editTeacherData.subjectTaught} onChange={handleChange} className="w-32 px-2 py-1 rounded-md border border-brand-light bg-transparent text-brand-dark focus:ring-2 focus:ring-brand outline-none" />
                                ) : teacher.subjectTaught}
                            </td>
                            <td className="py-3 px-4 text-brand-dark">
                                {editTeacherData && editTeacherData.id === teacher.id ? (
                                    <input type="text" name="assignedClass" value={editTeacherData.assignedClass} onChange={handleChange} className="w-32 px-2 py-1 rounded-md border border-brand-light bg-transparent text-brand-dark focus:ring-2 focus:ring-brand outline-none" />
                                ) : teacher.assignedClass}
                            </td>
                            <td className="py-3 px-4">
                                <div className="flex gap-2">
                                    {editTeacherData && editTeacherData.id === teacher.id ? (
                                        <Button variant="primary" size="sm" onClick={handleUpdateTeacher}>
                                            Save
                                        </Button>
                                    ) : (
                                        <Button variant="secondary" size="sm" onClick={() => handleEditTeacher(teacher.id)}>
                                            Edit
                                        </Button>
                                    )}
                                    <Button variant="danger" size="sm" onClick={() => handleDeleteTeacher(teacher.id)}>
                                        Delete
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherList;
