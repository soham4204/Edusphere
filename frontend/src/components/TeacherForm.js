import React, { useState } from 'react';
import { db } from '../firebase-config'; 
import Button from './ui/Button';

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
    <div className="p-6 rounded-2xl bg-white shadow-card max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h1 className="text-xl font-bold mb-6 text-brand-dark">Add New Teacher</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            name="ID"
            value={teacherData.ID}
            placeholder="ID"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          />
          <input
            type="text"
            name="name"
            value={teacherData.name}
            placeholder="Name"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          />
          <input
            type="text"
            name="phoneNumber"
            value={teacherData.phoneNumber}
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          />
          <input
            type="text"
            name="joinDate"
            value={teacherData.joinDate}
            placeholder="Join Date"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          />
          <input
            type="text"
            name="subjectTaught"
            value={teacherData.subjectTaught}
            placeholder="Subject Taught"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          />
          <input
            type="text"
            name="assignedClass"
            value={teacherData.assignedClass}
            placeholder="Assigned Class"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          />
        </div>
        <div className="flex gap-3">
          <Button variant="primary" type="submit">
            Add Teacher
          </Button>
          <Button variant="ghost" type="button" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;

