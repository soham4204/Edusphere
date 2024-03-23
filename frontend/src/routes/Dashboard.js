import React, { useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import { useNavigate } from 'react-router-dom';
import { useNotice } from '../components/NoticeContext';

const DashboardComponent = () => {
  const [isStudentFormOpen, setStudentFormOpen] = useState(false);
  const { setNotice } = useNotice();
  const history = useNavigate();
  const [noticeContent, setNoticeContent] = useState('');
  const [noticeType, setNoticeType] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAddStudentClick = () => {
    setStudentFormOpen(true);
  };

  const handleCloseStudentForm = () => {
    setStudentFormOpen(false);
  };

  const [isStudentListOpen, setStudentListOpen] = useState(false);

  const handleDisplayStudwentsClick = () => {
    setStudentListOpen(true);
  }

  const handleCloseStudentList = () => {
    setStudentListOpen(false);
  }

  const handleLogOutClick = () => {
    history('/Login');;
  }

  const handleNoticeSubmit = () => {
    const newNotice = {
      type: noticeType,
      content: noticeContent,
    };
    setNotice(newNotice);
    setNoticeContent('');
    setNoticeType('');
    setShowDropdown(false);
  };

  const handleCancel = () => {
    setNoticeContent(''); 
    setNoticeType('');
    setShowDropdown(false);
  };

  return (
    <div className="mx-auto h-screen overflow-auto bg-gray-800 flex flex-col text-lg">
      <div className="h-1/10 bg-gray-900 text-white flex items-center justify-between p-4">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <button 
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
            onClick={handleLogOutClick}
        >
            Log Out
        </button>
      </div>
      <div className="flex flex-row h-9/10">
        <div className="bg-gray-900 h-full text-white w-1/5 p-4 flex flex-col space-y-4 font-semibold">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleAddStudentClick}
          >
            Add Student
          </button>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleDisplayStudwentsClick}
          >
            View Students
          </button>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => setShowDropdown(true)}
          >
            Important Messages
          </button>
        </div>
        <div className="w-4/5 p-4 h-full">
          {isStudentFormOpen && <StudentForm onClose={handleCloseStudentForm} />}
          {isStudentListOpen && <StudentList onClose={handleCloseStudentList} />}
          {showDropdown && (
            <div className="dropdown bg-gray-700 p-4 rounded shadow-md mt-2">
              <div className="space-x-2 flex flex-row">
                <div className="flex flex-col h-full w-1/5 space-x-2">
                  <select
                    value={noticeType}
                    onChange={(e) => setNoticeType(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 text-white bg-gray-700">
                      <option value="" disabled>Notice Type</option>
                      <option value="Text">TextMessage</option>
                      <option value="Image">Image</option>
                      <option value="Link">Link</option>
                  </select>
                  <div className="flex flex-row space-x-2">
                    <button
                      className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 w-full"
                      onClick={handleNoticeSubmit}
                    >
                      Add Notice
                    </button>
                    <button
                      className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 w-full"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <textarea
                    value={noticeContent}
                    onChange={(e) => setNoticeContent(e.target.value)}
                    className="placeholder-white text-white w-full px-4 py-2 mb-4 rounded-md border border-gray-300 bg-gray-700"
                    placeholder="Notice Content"/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;

