"use client";

import React, { useState, useMemo } from "react";

interface IFormData {
  applicantName: string;
  whatsapp: string;
  collegeName: string;
  department: string;
  year: string;
  otherYear: string; // New field for the "Other" year input
  numberOfStudents: string;
  collegeLinkedIn: string;
  dateOfVisit: string;
}

const IndustryVisit = () => {
  const [formValues, setFormValues] = useState<IFormData>({
    applicantName: "",
    whatsapp: "",
    collegeName: "",
    department: "",
    year: "",
    otherYear: "", // Initialize new field
    numberOfStudents: "",
    collegeLinkedIn: "",
    dateOfVisit: "",
  });

  const [showModal, setShowModal] = useState(false);

  // Calculate the minimum date allowed (today's date in YYYY-MM-DD format)
  const minDate = useMemo(() => {
    const today = new Date();
    // Format date as YYYY-MM-DD for the input[type="date"] min attribute
    return today.toISOString().split("T")[0];
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => {
      const newState = { ...prev, [name]: value };

      // Special handling for the 'year' field
      if (name === "year" && value !== "Other") {
        // Clear 'otherYear' if a standard year is selected
        newState.otherYear = "";
      } else if (name === "year" && value === "Other") {
        // Set 'otherYear' to an empty string to show the input
        newState.otherYear = "";
      }

      return newState;
    });
  };

  // New handler for the "Other Year" text box
  const handleOtherYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormValues((prev) => ({ ...prev, otherYear: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Prepare Data
    // Determine the final year value to submit: 'otherYear' if 'year' is 'Other', otherwise 'year'
    const finalYear =
      formValues.year === "Other" ? formValues.otherYear : formValues.year;

    // Filter out the internal 'otherYear' field for the submission data
    const submissionData = {
      applicantName: formValues.applicantName,
      whatsapp: formValues.whatsapp,
      collegeName: formValues.collegeName,
      department: formValues.department,
      // Use the resolved year value
      year: finalYear,
      numberOfStudents: formValues.numberOfStudents,
      collegeLinkedIn: formValues.collegeLinkedIn,
      dateOfVisit: formValues.dateOfVisit,
    };

    console.log("Form Data for Backend:", submissionData);

    // 2. SHOW MODAL (Client-side confirmation)
    setShowModal(true);

    // 3. BACKEND SUBMISSION - You would place your actual Next.js API route or backend fetch here
    /*
    fetch("/api/industry-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
    */

    // 4. Reset Form Values
    setFormValues({
      applicantName: "",
      whatsapp: "",
      collegeName: "",
      department: "",
      year: "",
      otherYear: "", // Reset the new field too
      numberOfStudents: "",
      collegeLinkedIn: "",
      dateOfVisit: "",
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
                Thank you for your interest in an Industry Visit. We have
                received your request and will get back to you soon.
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

      {/* Main Form */}
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
            TechVaseegrah Industry Visit
          </h1>
          <p className="text-lg font-bold text-gray-600">
            REGISTRATION FORM (College/Department)
          </p>
        </div>

        <div className="space-y-4">
          {/* 1. Name of Applicant & 2. WhatsApp Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name of Applicant (Contact Person) *
              </label>
              <input
                type="text"
                name="applicantName"
                value={formValues.applicantName}
                onChange={handleChange}
                placeholder="Enter the name of the contact person"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp Number *
              </label>
              <input
                type="text"
                name="whatsapp"
                value={formValues.whatsapp}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit WhatsApp number"
              />
            </div>
          </div>

          {/* 3. College Name & 4. College LinkedIn/Website */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                College Name *
              </label>
              <input
                type="text"
                name="collegeName"
                value={formValues.collegeName}
                onChange={handleChange}
                placeholder="Your college/university name"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                College LinkedIn Profile or Website URL
              </label>
              <input
                type="url"
                name="collegeLinkedIn"
                value={formValues.collegeLinkedIn}
                onChange={handleChange}
                placeholder="Enter your college's URL"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
              />
            </div>
          </div>

          {/* 5. Department & 6. Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department *
              </label>
              <input
                type="text"
                name="department"
                value={formValues.department}
                onChange={handleChange}
                placeholder="e.g., Computer Science"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Year of Students *
              </label>
              <select
                name="year"
                value={formValues.year}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900"
                required
              >
                <option value="">Select student year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="Final Year">Final Year</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Conditional "Other Year" Input */}
          {formValues.year === "Other" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Please specify the Year/Course *
              </label>
              <input
                type="text"
                name="otherYear"
                value={formValues.otherYear}
                onChange={handleOtherYearChange}
                placeholder="e.g., Diploma, 4th Year Integrated Course"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
                required // Make this required if "Other" is selected
              />
            </div>
          )}

          {/* 7. No of Students & 8. Date of Visit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Students *
              </label>
              <input
                type="number"
                name="numberOfStudents"
                value={formValues.numberOfStudents}
                onChange={handleChange}
                placeholder="Total number of students"
                min="1"
                className="w-full border border-gray-300 rounded-lg p-3 placeholder-gray-600 text-gray-900"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date of Visit *
              </label>
              <input
                type="date"
                name="dateOfVisit"
                value={formValues.dateOfVisit}
                onChange={handleChange}
                min={minDate} // This disables past dates!
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900"
                required
              />
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold text-lg transition hover:bg-gray-800"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default IndustryVisit;