import React, { useState, useEffect } from 'react';

const StudentEdit = ({ studentData, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({ ...studentData });

  useEffect(() => {
    setFormData({ ...studentData });
  }, [studentData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onUpdate function to update the student data
    onUpdate(formData);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-white mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit}>
        {/* Student form fields */}
        <label className="block text-white mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-700 rounded-md px-3 py-1 w-full mt-1"
          />
        </label>
        {/* Add more fields as needed */}

        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentEdit;
