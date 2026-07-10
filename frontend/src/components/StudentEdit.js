import React, { useState } from "react";
import { db } from '../firebase-config';
import Button from './ui/Button';

const StudentEdit = ({ onClose }) => {
  const [standard, setStandard] = useState('8');
  const [division, setDivision] = useState('A');
  const [rollNo, setRollNo] = useState('00');
  const [studentData, setStudentData] = useState(null);

  const fetchStudentData = async () => {
    try {
      const snapshot = await db.collection('Student')
        .where('Standard', '==', standard)
        .where('Division', '==', division)
        .where('RollNo', '==', rollNo)
        .get();
      if (!snapshot.empty) {
        const data = snapshot.docs[0].data();
        const id = snapshot.docs[0].id; 
        setStudentData({ id, ...data }); 
      } else {
        setStudentData(null);
      }
    } catch (error) {
      console.error('Error fetching student data: ', error);
    }
  };  

  const handleStandardChange = (e) => {
    setStandard(e.target.value);
  };

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
  };

  const handleRollNoChange = (e) => {
    setRollNo(e.target.value);
  };

  const handleEditSubmit = async () => {
    try {
      if (!studentData) {
        console.error('Invalid student data: studentData is null or undefined');
        return;
      } 
      if (!studentData.id) {
        console.error('Missing document ID in studentData:', studentData);
        return;
      }
      console.log('Updating student data:', studentData);
      await db.collection('Student').doc(studentData.id).update(studentData);
      console.log('Student data updated successfully');
      onClose();
    } catch (error) {
      console.error('Error updating student data: ', error);
    }
  };
  
  
  return (
    <div className="p-6 rounded-2xl bg-white shadow-card overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-xl font-bold text-brand-dark">Edit Student</h1>
        <Button variant="ghost" onClick={onClose}>
          Close
        </Button>
      </div>
      
      <div className="flex flex-col space-y-6">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex flex-col">
            <label htmlFor="standard" className="text-sm font-semibold text-brand-dark mb-1">Standard</label>
            <select
              id="standard"
              value={standard}
              onChange={handleStandardChange}
              className="px-3 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            >
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="division" className="text-sm font-semibold text-brand-dark mb-1">Division</label>
            <select
              id="division"
              value={division}
              onChange={handleDivisionChange}
              className="px-3 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="rollNo" className="text-sm font-semibold text-brand-dark mb-1">Roll No</label>
            <input
              type="text"
              id="rollNo"
              value={rollNo}
              onChange={handleRollNoChange}
              className="w-20 px-3 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
            />
          </div>
          <Button variant="primary" onClick={fetchStudentData}>
            Select Student
          </Button>
        </div>

        {studentData && (
        <div className="w-full mt-4 space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-brand-light border-opacity-30">
                    <th className="text-left py-3 px-4 font-semibold text-brand-dark">ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-brand-dark">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-brand-dark">Standard</th>
                    <th className="text-left py-3 px-4 font-semibold text-brand-dark">Division</th>
                    <th className="text-left py-3 px-4 font-semibold text-brand-dark">RollNo</th>
                    <th className="text-left py-3 px-4 font-semibold text-brand-dark">Gender</th>
                    <th className="text-left py-3 px-4 font-semibold text-brand-dark">BirthDate</th>
                    <th className="text-left py-3 px-4 font-semibold text-brand-dark">Category</th>           
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brand-light border-opacity-10">
                    <td className="py-3 px-4 text-brand-dark">{studentData.ID}</td>
                    <td className="py-3 px-4 text-brand-dark">{studentData.Name}</td>
                    <td className="py-3 px-4 text-brand-dark">{studentData.Standard}</td>
                    <td className="py-3 px-4 text-brand-dark">{studentData.Division}</td>
                    <td className="py-3 px-4 text-brand-dark">{studentData.RollNo}</td>
                    <td className="py-3 px-4 text-brand-dark">{studentData.Gender}</td>
                    <td className="py-3 px-4 text-brand-dark">{studentData.BirthDate}</td>
                    <td className="py-3 px-4 text-brand-dark">{studentData.Category}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div>
                <label htmlFor="ID" className="text-sm font-semibold text-brand-dark mb-1 block">ID:</label>
                <input
                  type="text"
                  id="ID"
                  value={studentData.ID}
                  onChange={(e) => setStudentData({ ...studentData, ID: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-brand-dark"
                />
              </div>
              <div>
                <label htmlFor="Name" className="text-sm font-semibold text-brand-dark mb-1 block">Name:</label>
                <input
                  type="text"
                  id="Name"
                  value={studentData.Name}
                  onChange={(e) => setStudentData({ ...studentData, Name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-brand-dark"
                />
              </div>
              <div>
                <label htmlFor="Standard" className="text-sm font-semibold text-brand-dark mb-1 block">Standard:</label>
                <input
                  type="text"
                  id="Standard"
                  value={studentData.Standard}
                  onChange={(e) => setStudentData({ ...studentData, Standard: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-brand-dark"
                />
              </div>
              <div>
                <label htmlFor="Division" className="text-sm font-semibold text-brand-dark mb-1 block">Division:</label>
                <input
                  type="text"
                  id="Division"
                  value={studentData.Division}
                  onChange={(e) => setStudentData({ ...studentData, Division: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-brand-dark"
                />
              </div>
              <div>
                <label htmlFor="RollNo" className="text-sm font-semibold text-brand-dark mb-1 block">RollNo:</label>
                <input
                  type="text"
                  id="RollNo"
                  value={studentData.RollNo}
                  onChange={(e) => setStudentData({ ...studentData, RollNo: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-brand-dark"
                />
              </div>
              <div>
                <label htmlFor="Gender" className="text-sm font-semibold text-brand-dark mb-1 block">Gender:</label>
                <input
                  type="text"
                  id="Gender"
                  value={studentData.Gender}
                  onChange={(e) => setStudentData({ ...studentData, Gender: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-brand-dark"
                />
              </div>
              <div>
                <label htmlFor="BirthDate" className="text-sm font-semibold text-brand-dark mb-1 block">BirthDate:</label>
                <input
                  type="text"
                  id="BirthDate"
                  value={studentData.BirthDate}
                  onChange={(e) => setStudentData({ ...studentData, BirthDate: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-brand-dark"
                />
              </div>
              <div>
                <label htmlFor="Category" className="text-sm font-semibold text-brand-dark mb-1 block">Category:</label>
                <input
                  type="text"
                  id="Category"
                  value={studentData.Category}
                  onChange={(e) => setStudentData({ ...studentData, Category: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-brand-dark"
                />
              </div>
            </div>
            <div className="mt-6">
              <Button variant="primary" onClick={handleEditSubmit}>
                Submit Edit
              </Button>
            </div>
          </div>
        )}     
      </div>
    </div>
  );
};

export default StudentEdit;
