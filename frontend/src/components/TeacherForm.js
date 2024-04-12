import React, { useState } from 'react';
import { db } from '../firebase-config'; 

const TeacherForm = ({ onClose }) => {
  const [teacherData, setTeacherData] = useState({
    ID: '',
    name: '',
    phoneNumber: '',
    joinDate: '',
    subjectTaught: '',
    assignedClass: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({ ...teacherData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection('teachers').add(teacherData);
      setTeacherData({
        ID: '',
        name: '',
        phoneNumber: '',
        joinDate: '',
        subjectTaught: '',
        assignedClass: '',
      });
      console.log('Teacher added successfully');
    } catch (error) {
      console.error('Error adding teacher:', error);
    }
  };

  return (
    <div className="w-full">
      <div className="w-full p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-4 text-white">Teacher Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div className="w-full flex space-x-2">
          <input
            type="text"
            name="ID"
            value={teacherData.ID}
            placeholder="ID"
            onChange={handleChange}
            className="placeholder-black w-full px-4 py-2 rounded-md border border-gray-300"
          />
          <input
            type="text"
            name="name"
            value={teacherData.name}
            placeholder="Name"
            onChange={handleChange}
            className="placeholder-black w-full px-4 py-2 rounded-md border border-gray-300"
          />
          <input
            type="text"
            name="phoneNumber"
            value={teacherData.phoneNumber}
            placeholder="Phone Number"
            onChange={handleChange}
            className="placeholder-black w-full px-4 py-2 rounded-md border border-gray-300"
          />
          <input
            type="text"
            name="joinDate"
            value={teacherData.joinDate}
            placeholder="Join Date"
            onChange={handleChange}
            className="placeholder-black w-full px-4 py-2 rounded-md border border-gray-300"
          />
          <input
            type="text"
            name="subjectTaught"
            value={teacherData.subjectTaught}
            placeholder="Subject Taught"
            onChange={handleChange}
            className="placeholder-black w-full px-4 py-2 rounded-md border border-gray-300"
          />
          <input
            type="text"
            name="assignedClass"
            value={teacherData.assignedClass}
            placeholder="Assigned Class"
            onChange={handleChange}
            className="placeholder-black w-full px-4 py-2 rounded-md border border-gray-300"
          />
        </div>
          <div className="flex space-x-2">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Add Teacher
            </button>
            <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-md">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherForm;

