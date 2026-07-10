import React, { useState } from 'react';
import { db } from '../firebase-config';
import Button from './ui/Button';

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
    <div className="p-6 rounded-2xl bg-white shadow-card max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h1 className="text-xl font-bold mb-6 text-brand-dark">Add New Student</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
                    type="text"
                    placeholder="ID"
                    value={ID}
                    onChange={(e) => setId(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            />
            <input
                    type="text"
                    placeholder="Name"                        
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            />
            <select
                value={Standard}
                onChange={(e) => setStandard(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all">
                    <option value="" disabled>Standard</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
            </select>
            <select
                value={Division}
                onChange={(e) => setDivision(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all">
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
                    className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            />
            <select
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all">
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
                    className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            />     
            <input
                    type="text"
                    placeholder="Birth Date"
                    value={BirthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            />            
        </div>
        <div className="flex gap-3">
            <Button variant="primary" type="submit">
                Add Student
            </Button>
            <Button variant="ghost" type="button" onClick={onClose}>
                Cancel
            </Button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
