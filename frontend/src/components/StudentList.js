import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import Button from './ui/Button';

const StudentList = ({ onClose }) => {
  const [students, setStudents] = useState([]);
  const [selectedStandard, setSelectedStandard] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        let query = db.collection('Student');
        
        if (selectedStandard !== '') {
          query = query.where('Standard', '==', selectedStandard);
        }
        if (selectedDivision !== '') {
          query = query.where('Division', '==', selectedDivision);
        }

        const snapshot = await query.get();
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
  }, [selectedStandard, selectedDivision]);

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
    <div className="p-6 rounded-2xl bg-white shadow-card overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-xl font-bold text-brand-dark">Student List</h1>
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={selectedStandard}
            onChange={(e) => setSelectedStandard(e.target.value)}
            className="px-3 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          >
            <option value="">Select Standard</option>
            <option value="8">Standard 8th</option>
            <option value="9">Standard 9th</option>
            <option value="10">Standard 10th</option>
          </select>
          <select
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
            className="px-3 py-2 rounded-lg border border-brand-light text-sm bg-transparent outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          >
            <option value="">Select Division</option>
            <option value="A">Division A</option>
            <option value="B">Division B</option>
            <option value="C">Division C</option>
          </select>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-brand-light border-opacity-30">
            <th className="text-left py-3 px-4 font-semibold text-brand-dark">ID</th>
            <th className="text-left py-3 px-4 font-semibold text-brand-dark">Name</th>
            <th className="text-left py-3 px-4 font-semibold text-brand-dark">Standard</th>
            <th className="text-left py-3 px-4 font-semibold text-brand-dark">Division</th>
            <th className="text-left py-3 px-4 font-semibold text-brand-dark">Roll No</th>
            <th className="text-left py-3 px-4 font-semibold text-brand-dark">Gender</th>
            <th className="text-left py-3 px-4 font-semibold text-brand-dark">Birth Date</th>
            <th className="text-left py-3 px-4 font-semibold text-brand-dark">Category</th>           
            <th className="text-left py-3 px-4 font-semibold text-brand-dark">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b border-brand-light border-opacity-10 hover:bg-brand-bg transition-colors">
              <td className="py-3 px-4 text-brand-dark">{student.ID}</td>
              <td className="py-3 px-4 text-brand-dark">{student.Name}</td>
              <td className="py-3 px-4 text-brand-dark">{student.Standard}</td>
              <td className="py-3 px-4 text-brand-dark">{student.Division}</td>
              <td className="py-3 px-4 text-brand-dark">{student.RollNo}</td>
              <td className="py-3 px-4 text-brand-dark">{student.Gender}</td>
              <td className="py-3 px-4 text-brand-dark">{student.BirthDate}</td>
              <td className="py-3 px-4 text-brand-dark">{student.Category}</td>              
              <td className="py-3 px-4">
                <Button variant="danger" size="sm" onClick={() => handleDelete(student.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
