import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import Input from './ui/Input';
import Textarea from './ui/Textarea';
import Button from './ui/Button';

const ContactUsComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('_replyto', email);
    formData.append('phone', phone);
    formData.append('subject', subject);
    formData.append('message', message);

    try {
      const response = await fetch('https://formspree.io/f/xbjnovrp', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) setSubmitted(true);
    } catch (error) {
      console.error('An error occurred while submitting the form.', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white bg-opacity-10 text-center"
      >
        <CheckCircle className="w-12 h-12 text-brand-light mb-4" />
        <p className="text-lg font-semibold text-brand-light">Thank you!</p>
        <p className="text-white text-opacity-70 mt-1">We'll be in touch soon.</p>
      </motion.div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-brand-light">Get in Touch</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder-white placeholder-opacity-50"
          />
          <Input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder-white placeholder-opacity-50"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder-white placeholder-opacity-50"
          />
          <Input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder-white placeholder-opacity-50"
          />
        </div>
        <Textarea
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder-white placeholder-opacity-50 min-h-[80px]"
        />
        <Button
          type="submit"
          variant="accent"
          loading={submitting}
          icon={Send}
          iconPosition="right"
          className="w-full"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactUsComponent;
