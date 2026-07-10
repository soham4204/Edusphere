import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, UserPlus, Edit, Bell, Settings, GraduationCap,
  LogOut, Menu, X, LayoutDashboard,
} from 'lucide-react';
import { db } from '../firebase-config';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import StudentEdit from '../components/StudentEdit';
import TeacherForm from '../components/TeacherForm';
import TeacherList from '../components/TeacherList';
import Button from '../components/ui/Button';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';

const sidebarItems = [
  { id: 'addStudent', label: 'Add Student', icon: UserPlus },
  { id: 'viewStudents', label: 'View Students', icon: Users },
  { id: 'editStudent', label: 'Edit Student', icon: Edit },
  { id: 'addNotice', label: 'Important Notices', icon: Bell },
  { id: 'manageNotices', label: 'Manage Notices', icon: Settings },
  { id: 'addTeacher', label: 'Add Teacher', icon: GraduationCap },
  { id: 'manageTeachers', label: 'Manage Teachers', icon: Users },
];

const DashboardComponent = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [noticeContent, setNoticeContent] = useState('');
  const [noticeType, setNoticeType] = useState('');
  const [noticeSubject, setNoticeSubject] = useState('');
  const [selectedNoticeId, setSelectedNoticeId] = useState(null);
  const [notices, setNotices] = useState([]);
  const navigate = useNavigate();

  const handlePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
    setSidebarOpen(false);
  };

  const handleLogOutClick = () => navigate('/Login');

  const handleEditNotice = (id) => {
    setSelectedNoticeId(id);
    const noticeToUpdate = notices.find((notice) => notice.id === id);
    if (noticeToUpdate) {
      setNoticeType(noticeToUpdate.type);
      setNoticeSubject(noticeToUpdate.subject);
      setNoticeContent(noticeToUpdate.content);
    }
  };

  const handleUpdateNotice = async () => {
    try {
      await db.collection('notices').doc(selectedNoticeId).update({
        type: noticeType,
        subject: noticeSubject,
        content: noticeContent,
      });
      setSelectedNoticeId(null);
      setNoticeType('');
      setNoticeSubject('');
      setNoticeContent('');
      const snapshot = await db.collection('notices').get();
      setNotices(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error('Error updating notice:', error);
    }
  };

  const handleDeleteNotice = async (id) => {
    try {
      await db.collection('notices').doc(id).delete();
      setNotices(notices.filter((notice) => notice.id !== id));
    } catch (error) {
      console.error('Error deleting notice:', error);
    }
  };

  const handleNoticeSubmit = async () => {
    try {
      await db.collection('notices').add({
        type: noticeType,
        subject: noticeSubject,
        content: noticeContent,
      });
      setNoticeContent('');
      setNoticeType('');
      setNoticeSubject('');
      setActivePanel(null);
    } catch (error) {
      console.error('Error adding notice:', error);
    }
  };

  const handleCancel = () => {
    setNoticeContent('');
    setNoticeType('');
    setNoticeSubject('');
    setActivePanel(null);
  };

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const snapshot = await db.collection('notices').get();
        setNotices(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };
    fetchNotices();
  }, []);

  const renderPanel = () => {
    switch (activePanel) {
      case 'addStudent':
        return <StudentForm onClose={() => setActivePanel(null)} />;
      case 'viewStudents':
        return <StudentList onClose={() => setActivePanel(null)} />;
      case 'editStudent':
        return <StudentEdit onClose={() => setActivePanel(null)} />;
      case 'addTeacher':
        return <TeacherForm onClose={() => setActivePanel(null)} />;
      case 'manageTeachers':
        return <TeacherList onClose={() => setActivePanel(null)} />;
      case 'addNotice':
        return (
          <div className="p-6 rounded-2xl bg-white shadow-card">
            <h2 className="text-xl font-bold text-brand-dark mb-6">Add New Notice</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Select
                label="Notice Type"
                value={noticeType}
                onChange={(e) => setNoticeType(e.target.value)}
              >
                <option value="" disabled>Select Type</option>
                <option value="Text">Text Message</option>
                <option value="Image">Image</option>
                <option value="Link">Link</option>
              </Select>
              <div className="lg:col-span-2 space-y-4">
                <Textarea
                  label="Subject"
                  value={noticeSubject}
                  onChange={(e) => setNoticeSubject(e.target.value)}
                  placeholder="Notice Subject"
                  className="min-h-[48px]"
                />
                <Textarea
                  label="Content"
                  value={noticeContent}
                  onChange={(e) => setNoticeContent(e.target.value)}
                  placeholder="Notice Content (URL for Image/Link type)"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button variant="primary" onClick={handleNoticeSubmit}>Add Notice</Button>
              <Button variant="ghost" onClick={handleCancel}>Cancel</Button>
            </div>
          </div>
        );
      case 'manageNotices':
        return (
          <div className="p-6 rounded-2xl bg-white shadow-card overflow-x-auto">
            <h2 className="text-xl font-bold text-brand-dark mb-6">Manage Notices</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-light border-opacity-30">
                  <th className="text-left py-3 px-4 font-semibold text-brand-dark">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-brand-dark">Subject</th>
                  <th className="text-left py-3 px-4 font-semibold text-brand-dark">Content</th>
                  <th className="text-left py-3 px-4 font-semibold text-brand-dark">Actions</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => (
                  <tr key={notice.id} className="border-b border-brand-light border-opacity-10 hover:bg-brand-bg transition-colors">
                    <td className="py-3 px-4">
                      {selectedNoticeId === notice.id ? (
                        <select
                          value={noticeType}
                          onChange={(e) => setNoticeType(e.target.value)}
                          className="px-3 py-1 rounded-lg border border-brand-light text-sm"
                        >
                          <option value="Text">Text</option>
                          <option value="Image">Image</option>
                          <option value="Link">Link</option>
                        </select>
                      ) : notice.type}
                    </td>
                    <td className="py-3 px-4">
                      {selectedNoticeId === notice.id ? (
                        <input
                          type="text"
                          value={noticeSubject}
                          onChange={(e) => setNoticeSubject(e.target.value)}
                          className="px-3 py-1 rounded-lg border border-brand-light text-sm w-full"
                        />
                      ) : notice.subject}
                    </td>
                    <td className="py-3 px-4 max-w-xs truncate">
                      {selectedNoticeId === notice.id ? (
                        <textarea
                          value={noticeContent}
                          onChange={(e) => setNoticeContent(e.target.value)}
                          className="px-3 py-1 rounded-lg border border-brand-light text-sm w-full"
                        />
                      ) : notice.content}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        {selectedNoticeId === notice.id ? (
                          <>
                            <Button variant="primary" size="sm" onClick={handleUpdateNotice}>Save</Button>
                            <Button variant="ghost" size="sm" onClick={() => setSelectedNoticeId(null)}>Cancel</Button>
                          </>
                        ) : (
                          <>
                            <Button variant="secondary" size="sm" onClick={() => handleEditNotice(notice.id)}>Edit</Button>
                            <Button variant="danger" size="sm" onClick={() => handleDeleteNotice(notice.id)}>Delete</Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8">
            <LayoutDashboard className="w-16 h-16 text-brand-light mb-6" />
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Welcome to Admin Dashboard</h2>
            <p className="text-brand text-opacity-70 max-w-md">
              Select an option from the sidebar to manage students, teachers, and notices.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-brand-bg">
      {/* Mobile sidebar toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-brand-dark text-white shadow-card"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || window.innerWidth >= 1024) && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            className={`
              fixed lg:sticky lg:top-0 lg:h-screen inset-y-0 left-0 z-40 w-72 bg-brand-dark text-white
              flex flex-col shadow-card lg:shadow-none
              ${!sidebarOpen ? 'hidden lg:flex' : 'flex'}
            `}
          >
            <div className="p-6 border-b border-white border-opacity-10">
              <h1 className="text-xl font-bold text-brand-light">Admin Dashboard</h1>
              <p className="text-xs text-white text-opacity-50 mt-1">Gayatri Vidyalaya</p>
            </div>
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePanel(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                    transition-all duration-200
                    ${activePanel === item.id
                      ? 'bg-brand text-white shadow-glow-brand'
                      : 'text-white text-opacity-70 hover:bg-white hover:bg-opacity-10 hover:text-white'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="p-4 border-t border-white border-opacity-10">
              <Button variant="danger" className="w-full" icon={LogOut} onClick={handleLogOutClick}>
                Log Out
              </Button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-brand-dark bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 min-h-screen">
        <header className="sticky top-0 z-20 bg-white bg-opacity-80 backdrop-blur-lg border-b border-brand-light border-opacity-20 px-6 py-4 lg:px-8">
          <h2 className="text-lg font-semibold text-brand-dark">
            {activePanel
              ? sidebarItems.find((i) => i.id === activePanel)?.label
              : 'Dashboard Overview'}
          </h2>
        </header>
        <div className="p-4 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePanel || 'default'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderPanel()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default DashboardComponent;
