'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const CustomAlert = ({ success, message }: { success: boolean; message: string }) => (
    <div className={`p-4 rounded-md mb-6 flex items-start gap-3 ${success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
        {success ? (
            <CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
        ) : (
            <AlertCircle className="h-5 w-5 mt-0.5 text-red-600" />
        )}
        <div>
            <h3 className="font-medium">{success ? 'Success!' : 'Error'}</h3>
            <p className="text-sm mt-1">{message}</p>
        </div>
    </div>
);

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    message: formData.message,
                },
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
            );

            if (result.status === 200) {
                setStatus({
                    submitted: true,
                    success: true,
                    message: 'Thank you! Your message has been sent successfully.'
                });
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            setStatus({
                submitted: true,
                success: false,
                message: 'Sorry, something went wrong. Please try again later.'
            });
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="min-h-screen bg-contact-bg bg-center bg-cover py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="text-center mb-8">
                    <h2 className="lg:text-[120px] text-[80px] font-custom1 text-white">Contact Us</h2>

                </div>

                {status.submitted && (
                    <CustomAlert success={status.success} message={status.message} />
                )}

                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-transperant shadow-md rounded-lg p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="space-y-6 bg-black bg-opacity-35  rounded-xl  p-10 w-[540px]">
                        <div className='flex gap-5 pl-5 rounded-xl font-custom1 text-[40px] border border-[#FFB000] w-full'>
                            <label htmlFor="name" className="block  font-medium text-[#FFB000]">
                                Name&nbsp;:
                            </label>
                            <motion.input
                                whileFocus={{ scale: 1.01 }}
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 rounded-md border-none  bg-transparent text-lg outline-none font-sans text-white font-bold"

                            />
                        </div>

                        <div className='flex gap-5 pl-5 rounded-xl font-custom1 text-[40px] border border-[#FFB000] w-full'>
                            <label htmlFor="email" className="block  font-medium text-[#FFB000]">
                                Email&nbsp;:
                            </label>
                            <motion.input
                                whileFocus={{ scale: 1.01 }}
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 rounded-md border-none  bg-transparent text-lg outline-none font-sans text-white font-bold"
                            />
                        </div>

                        <div className='flex gap-5 pl-5 rounded-xl font-custom1 text-[40px] border border-[#FFB000] w-full'>
                            <label htmlFor="message" className="block  font-medium text-[#FFB000]">
                                Message&nbsp;:
                            </label>
                            <motion.textarea
                                whileFocus={{ scale: 1.01 }}
                                name="message"
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 rounded-md border-none  bg-transparent text-lg outline-none font-sans text-white font-bold"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FFB000] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </div>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default ContactPage;