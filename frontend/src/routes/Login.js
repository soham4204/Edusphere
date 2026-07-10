import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, Home, AlertCircle } from 'lucide-react';
import { auth } from '../firebase-config';
import logo from '../assets/logo.png';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import BlobBackground from '../components/effects/BlobBackground';
import FadeIn from '../components/effects/FadeIn';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/Dashboard');
    } catch (err) {
      setError('You have entered incorrect credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-brand-bg">
      <BlobBackground />
      <div className="absolute inset-0 noise-bg" />

      <FadeIn className="relative z-10 w-full max-w-md mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-card overflow-hidden"
        >
          <div className="p-6 bg-gradient-dark text-center">
            <img src={logo} alt="Gayatri Vidyalaya" className="h-32 mx-auto mb-4 object-contain" />
            <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
            <p className="text-brand-light text-sm mt-1">Gayatri Vidyalaya</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            <Input
              type="email"
              label="Email Address"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-red-50 text-red-600 text-sm"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </motion.div>
            )}

            <Button type="submit" variant="primary" className="w-full" loading={loading} icon={LogIn}>
              Sign In
            </Button>

            <Link to="/" className="block">
              <Button variant="ghost" className="w-full" icon={Home}>
                Back to Home
              </Button>
            </Link>
          </form>
        </motion.div>
      </FadeIn>
    </div>
  );
};

export default LoginComponent;
