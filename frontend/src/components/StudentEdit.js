import React, { useState } from "react";
import { db } from '../firebase-config';

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
    <div className="w-full h-full bg-gray-800">
      <div className="flex flex-row items-center">
        <h1 className="text-2xl font-bold m-4 float-left text-white">Edit Student</h1>
        <button
          className="bg-blue-500 text-white h-1/2 float-right px-4 rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <div className="flex flex-col space-y-4 text-white p-4">
        <div className="flex flex-row space-x-4 h-18 items-center">
          <div>
            <label htmlFor="standard">Standard:</label>
            <select
              id="standard"
              value={standard}
              onChange={handleStandardChange}
              className="ml-2 px-2 py-1 rounded-md border border-gray-300 bg-gray-700"
            >
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div>
            <label htmlFor="division">Division:</label>
            <select
              id="division"
              value={division}
              onChange={handleDivisionChange}
              className="w-14 ml-2 px-2 py-1 rounded-md border border-gray-300 bg-gray-700"
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          <div>
            <label htmlFor="rollNo">Roll No:</label>
            <input
              type="text"
              id="rollNo"
              value={rollNo}
              onChange={handleRollNoChange}
              className="w-14 ml-2 px-2 py-1 rounded-md border border-gray-300 bg-gray-700"
            />
            <button
              className="bg-blue-500 text-white ml-4 h-full px-4 py-2 rounded hover:bg-blue-700"
              onClick={fetchStudentData}
            >
              Select Student
            </button>
          </div>
        </div>
        {studentData && (
        <div className="w-full mt-4">
          <table className="w-full border-collapse border border-gray-300 bg-gray-800 mt-4">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-2">ID</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Standard</th>
                  <th className="p-2">Division</th>
                  <th className="p-2">RollNo</th>
                  <th className="p-2">Gender</th>
                  <th className="p-2">BirthDate</th>
                  <th className="p-2">Category</th>           
                </tr>
              </thead>
              <tbody>
                <tr className="border border-gray-300 text-white">
                  <td className="p-2 text-center">{studentData.ID}</td>
                  <td className="p-2 text-center">{studentData.Name}</td>
                  <td className="p-2 text-center">{studentData.Standard}</td>
                  <td className="p-2 text-center">{studentData.Division}</td>
                  <td className="p-2 text-center">{studentData.RollNo}</td>
                  <td className="p-2 text-center">{studentData.Gender}</td>
                  <td className="p-2 text-center">{studentData.BirthDate}</td>
                  <td className="p-2 text-center">{studentData.Category}</td>
                </tr>
              </tbody>
            </table>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div>
              <label htmlFor="ID" className="text-white">ID:</label>
              <input
                type="text"
                id="ID"
                value={studentData.ID}
                onChange={(e) => setStudentData({ ...studentData, ID: e.target.value })}
                className="w-full px-2 py-1 rounded-md border border-gray-300 bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="Name" className="text-white">Name:</label>
              <input
                type="text"
                id="Name"
                value={studentData.Name}
                onChange={(e) => setStudentData({ ...studentData, Name: e.target.value })}
                className="w-full px-2 py-1 rounded-md border border-gray-300 bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="Standard" className="text-white">Standard:</label>
              <input
                type="text"
                id="Standard"
                value={studentData.Standard}
                onChange={(e) => setStudentData({ ...studentData, Standard: e.target.value })}
                className="w-full px-2 py-1 rounded-md border border-gray-300 bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="Division" className="text-white">Division:</label>
              <input
                type="text"
                id="Division"
                value={studentData.Division}
                onChange={(e) => setStudentData({ ...studentData, Division: e.target.value })}
                className="w-full px-2 py-1 rounded-md border border-gray-300 bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="RollNo" className="text-white">RollNo:</label>
              <input
                type="text"
                id="RollNo"
                value={studentData.RollNo}
                onChange={(e) => setStudentData({ ...studentData, RollNo: e.target.value })}
                className="w-full px-2 py-1 rounded-md border border-gray-300 bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="Gender" className="text-white">Gender:</label>
              <input
                type="text"
                id="Gender"
                value={studentData.Gender}
                onChange={(e) => setStudentData({ ...studentData, Gender: e.target.value })}
                className="w-full px-2 py-1 rounded-md border border-gray-300 bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="BirthDate" className="text-white">BirthDate:</label>
              <input
                type="text"
                id="BirthDate"
                value={studentData.BirthDate}
                onChange={(e) => setStudentData({ ...studentData, BirthDate: e.target.value })}
                className="w-full px-2 py-1 rounded-md border border-gray-300 bg-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="Category" className="text-white">Category:</label>
              <input
                type="text"
                id="Category"
                value={studentData.Category}
                onChange={(e) => setStudentData({ ...studentData, Category: e.target.value })}
                className="w-full px-2 py-1 rounded-md border border-gray-300 bg-gray-700 text-white"
              />
            </div>
          </div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
            onClick={handleEditSubmit}
          >
            Submit Edit
          </button>
        </div>
      )}     
      </div>
    </div>
  );
};

export default StudentEdit;
