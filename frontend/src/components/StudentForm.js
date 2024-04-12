import React, { useState } from 'react';
import { db } from '../firebase-config';

const StudentForm = ({onClose}) => {
  const [Name, setName] = useState('');
  const [Gender, setGender] = useState('');
  const [Category, setCategory] = useState('');
  const [Standard, setStandard] = useState('');
  const [Division, setDivision] = useState('');
  const [BirthDate, setBirthDate] = useState('');
  const [ID, setId] = useState('');
  const [RollNo, setRollNo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection('Student').add({
        Name,
        Gender,
        Category,
        Standard,
        Division,
        BirthDate,
        ID,
        RollNo,
      });
      setName('');
      setGender('');
      setCategory('');
      setStandard('');
      setDivision('');
      setBirthDate('');
      setId('');
      setRollNo('');
      console.log('Student added successfully');
    } catch (error) {
      console.error('Error adding student: ', error);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-4 text-white">Student Form</h1>
        <div className="w-full flex space-x-2">
            <input
                    type="text"
                    placeholder="ID"
                    value={ID}
                    onChange={(e) => setId(e.target.value)}
                    className="placeholder-black w-full flex px-4 py-2 mb-4 rounded-md border border-gray-300"
            />
            <input
                    type="text"
                    placeholder="Name"                        
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    className="placeholder-black w-full px-4 py-2 mb-4 rounded-md border border-gray-300 "
            />
            <select
                value={Standard}
                onChange={(e) => setStandard(e.target.value)}
                className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300">
                    <option value="" disabled>Standard</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
            </select>
            <select
                value={Division}
                onChange={(e) => setDivision(e.target.value)}
                className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300"
                >
                    <option value="" disabled>Division</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
            </select>
            <input
                    type="text"
                    placeholder="Roll No."
                    value={RollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    className="placeholder-black w-full px-4 py-2 mb-4 rounded-md border border-gray-300"
            />
            <select
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300">
                    <option value="" disabled>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
            </select>
            <input
                    type="text"
                    placeholder="Category"
                    value={Category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="placeholder-black w-full px-4 py-2 mb-4 rounded-md border border-gray-300"
            />     
            <input
                    type="text"
                    placeholder="Birth Date"
                    value={BirthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="placeholder-black w-full px-4 py-2 mb-4 rounded-md border border-gray-300 "
            />            
        </div>
        <div className="space-x-2">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Add Student
            </button>
            <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={onClose}>
                Cancel
            </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
