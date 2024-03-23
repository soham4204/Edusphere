import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';

const StudentList = ({ onClose }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const snapshot = await db.collection('Student').get();
        const studentData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStudents(studentData);
      } catch (error) {
        console.error('Error fetching students: ', error);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await db.collection('Student').doc(id).delete();
      setStudents(students.filter((student) => student.id !== id));
      console.log('Student deleted successfully');
    } catch (error) {
      console.error('Error deleting student: ', error);
    }
  };

  return (
    <div className="w-full h-full bg-gray-800">
      <div className="flex flex-row items-center">
        <h1 className="text-2xl font-bold m-4 float-left text-white">Student List</h1>
        <button
          className="bg-blue-500 text-white h-1/2 float-right px-4 rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300 bg-gray-800">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Standard</th>
            <th className="p-2">Division</th>
            <th className="p-2">Gender</th>
            <th className="p-2">Category</th>
            {/* <th className="p-2">BirthDate</th>
            <th className="p-2">RollNo</th> */}
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border border-gray-300 text-white">
              <td className="p-2 text-center">{student.id}</td>
              <td className="p-2 text-center">{student.Name}</td>
              <td className="p-2 text-center">{student.Standard}</td>
              <td className="p-2 text-center">{student.Division}</td>
              <td className="p-2 text-center">{student.Gender}</td>
              <td className="p-2 text-center">{student.Category}</td>
              {/* <td className="p-2 text-center">{student.BirthDate}</td>
              <td className="p-2 text-center">{student.RollNo}</td> */}
              <td className='p-2 text-center'>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="text-red-500 hover:text-red-700"
                >
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

export default StudentList;
