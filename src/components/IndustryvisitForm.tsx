"use client";

import React, { useState } from "react";

interface IFormData {
  fullName: string;
  dob: string;
  age: string;
  whatsapp: string;
  email: string;
  course: string;
  specialization: string;
  college: string;
  currentYear: string;
  otherYear: string;
  linkedin: string;
  date: string;
}

const IndustryVisit= () => {
  const [formValues, setFormValues] = useState<IFormData>({
    fullName: "",
    dob: "",
    age: "",
    whatsapp:"",
    email: "",
    course: "",
    specialization: "",
    college: "",
    currentYear: "",
    otherYear: "",
    linkedin: "",
    date: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Show modal immediately
    setShowModal(true);

    // Send data in background (fire and forget)
    fetch("https://script.google.com/macros/s/AKfycbyNbI-gftuQVxYHRJg2KkniHFprQapV1AcbhBB4bteTqshApIX4cszSz7LfmJzjp7Or/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    }).catch(() => {
      // Silently handle errors since modal is already shown
    });

    // Reset form
    setFormValues({
      fullName: "",
      dob: "",
      age: "",
      whatsapp: "",
      email: "",
      course: "",
      specialization: "",
      college: "",
      currentYear: "",
      otherYear: "",
      linkedin: "",
      date: "",
    });
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 py-8 px-4 flex justify-center items-start">
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-10 w-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for applying to TechVaseegrah. We have received your application and will get back to you soon.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-6 md:p-10 space-y-6"
      >
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src="/logo.png"
              alt="TechVaseegrah Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
            Welcome TechVaseegrah
          </h1>
          <p className="text-lg font-bold text-gray-600">
            INDUSTRY APPLICATION FORM
          </p>
        </div>

        <div className="space-y-4">
          {/* Full Name */} 
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
              required
            />
          </div>

          {/* DOB & Age */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth *
              </label>
              <input
                type="date"
                name="dob"
                value={formValues.dob}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formValues.age}
                onChange={handleChange}
                placeholder="Your age"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
                required
              />
            </div>
          </div>

          {/* WhatsApp & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp Number *
              </label>
              <input
                type="number"
                name="whatsapp"
                value={formValues.whatsapp || ""}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
                required
              />
            </div>
          </div>

          {/* Course */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course Name *
            </label>
            <input
              type="text"
              name="course"
              value={formValues.course}
              onChange={handleChange}
              placeholder="e.g., B.Tech, MBA, BCA"
              className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
              required
            />
          </div>

          {/* Specialization */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Specialization *
            </label>
            <input
              type="text"
              name="specialization"
              value={formValues.specialization}
              onChange={handleChange}
              placeholder="e.g., Computer Science, Marketing"
              className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
              required
            />
          </div>

          {/* College */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              College Name *
            </label>
            <input
              type="text"
              name="college"
              value={formValues.college}
              onChange={handleChange}
              placeholder="Your college/university name"
              className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
              required
            />
          </div>

          {/* Current Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Year of Study *
            </label>
            <select
              name="currentYear"
              value={formValues.currentYear}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900"
              required
            >
              <option value="">Select year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="Final Year">Final Year</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Show extra box when Other selected */}
          {formValues.currentYear === "Other" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Please specify
              </label>
              <input
                type="text"
                name="otherYear"
                value={formValues.otherYear}
                onChange={handleChange}
                placeholder="Enter your current year of study"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
                required
              />
            </div>
          )}

          {/* LinkedIn */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn Profile URL *
            </label>
            <input
              type="url"
              name="linkedin"
              value={formValues.linkedin}
              onChange={handleChange}
              placeholder="Enter your Linked Url"
              className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
              // required
            />
          </div>

          {/* Application Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Visited Date *
            </label>
            <input
              type="date"
              name="date"
              value={formValues.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900"
              required
            />
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold text-lg transition hover:bg-gray-800"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default IndustryVisit