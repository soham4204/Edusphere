import React, { useState } from 'react';

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

    const formSpreeEndpoint = 'https://formspree.io/f/xbjnovrp';

    const formData = new FormData();
    formData.append('name', name);
    formData.append('_replyto', email);
    formData.append('phone', phone);
    formData.append('subject', subject);
    formData.append('message', message);

    try {
      const response = await fetch(formSpreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred while submitting the form.', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-46 flex items-center justify-center bg-gray-100 mr-24">
      <div className="bg-white p-4 rounded shadow-md w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Contact Us</h2>
        {submitted ? (
          <p className="text-green-500 text-center">Thank you for your message! We'll be in touch.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="w-full space-x-2 flex flex-row">
              <div className="w-1/2 flex flex-col">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded border border-gray-300"
                />
              </div>
              <div className="w-1/2 flex flex-col">
                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded border border-gray-300"
                />
              </div>
            </div>
            <div className="w-full space-x-2 flex flex-row">
              <div className="w-1/2 flex flex-col">
                <input
                  type="email"
                  placeholder="Email Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded border border-gray-300"
                />
              </div>
              <div className="w-1/2 flex flex-col">
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-3 rounded border border-gray-300"
                />
              </div>
            </div>
            <div className="w-full py-1 space-x-2 flex">
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input-message w-full p-3 rounded border border-gray-300"
              ></textarea>
              <button
                type="submit"
                className="p-2 px-4 border border-light-gray bg-mid-gray rounded h-10 bg-blue-800 text-white hover:border-white"
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUsComponent;
