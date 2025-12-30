// // "use client";
// // import { useState } from "react";

// // export default function InternshipApplyForm({
// //   defaultType = "",
// // }: {
// //   defaultType?: string;
// // }) {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [internshipType, setInternshipType] = useState(defaultType);

// //   const handleSubmit = async (e: any) => {
// //     e.preventDefault();

// //     await fetch("/api/internship", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         name,
// //         email,
// //         phone,
// //         internshipType,
// //       }),
// //     });

// //     alert("Applied Successfully ✅");

// //     setName("");
// //     setEmail("");
// //     setPhone("");
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl">
// //       <input
// //         placeholder="Name"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //         required
// //       />
// //       <input
// //         placeholder="Email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //         required
// //       />
// //       <input
// //         placeholder="Phone"
// //         value={phone}
// //         onChange={(e) => setPhone(e.target.value)}
// //         required
// //       />

// //       <select
// //         value={internshipType}
// //         onChange={(e) => setInternshipType(e.target.value)}
// //         required
// //       >
// //         <option value="">Select Internship</option>
// //         <option value="Web Development">Web Development</option>
// //         <option value="Web App Development">Web App Development</option>
// //         <option value="UI/UX">UI / UX</option>
// //         <option value="DSML">DSML</option>
// //       </select>

// //       <button type="submit">Apply</button>
// //     </form>
// //   );
// // }



// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function InternshipApplyForm({
//   defaultType = "",
// }: {
//   defaultType?: string;
// }) {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [college, setCollege] = useState("");
//   const [department, setDepartment] = useState("");
//   const [TimePeriod, setTimePeriod] = useState("");
//   const [internshipType, setInternshipType] = useState(defaultType);

// const handleSubmit = async (e: any) => {
//   e.preventDefault();

//   const res = await fetch("/api/internship", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       name,
//       email,
//       phone,
//       college,
//       department,
//       internshipType,
//       TimePeriod,
//     }),
//   });

//   const data = await res.json();

//   if (res.ok) {
//     router.push(`/internship/amount/${data._id}`);
//   } else {
//     alert("Submit failed");
//   }
// };


//     setName("");
//     setEmail("");
//     setPhone("");
//     setCollege("");
//     setDepartment("");
//     setTimePeriod("");
//     setInternshipType("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl space-y-3">
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />

//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />

//       <input
//         placeholder="Phone"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//         required
//       />

//       <input
//         placeholder="College"
//         value={college}
//         onChange={(e) => setCollege(e.target.value)}
//         required
//       />

//       <input
//         placeholder="Department"
//         value={department}
//         onChange={(e) => setDepartment(e.target.value)}
//         required
//       />

//       <input
//         placeholder="Duration (eg: 1 Month)"
//         value={TimePeriod}
//         onChange={(e) => setTimePeriod(e.target.value)}
//         required
//       />

//       <select
//         value={internshipType}
//         onChange={(e) => setInternshipType(e.target.value)}
//         required
//       >
//         <option value="">Select Internship</option>
//         <option value="Web Development">Web Development</option>
//         <option value="Web App Development">Web App Development</option>
//         <option value="UI/UX">UI / UX</option>
//         <option value="Data Science/ Machine Learning">
//           Data Science / Machine Learning
//         </option>
//       </select>

//       <button type="submit" className="bg-black text-white px-4 py-2 rounded">
//         Apply
//       </button>
//     </form>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InternshipApplyForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [internshipType, setInternshipType] = useState("");
  const [TimePeriod, setTimePeriod] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/internship", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        college,
        department,
        internshipType,
        TimePeriod,
      }),
    });

    const data = await res.json();

    if (res.ok && data._id) {
      router.push(`/internship/amount/${data._id}`);
    } else {
      alert("Submit failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Apply Internship
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          placeholder="Full Name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Phone"
          className="border p-2 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          placeholder="College"
          className="border p-2 rounded"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          required
        />

        <input
          placeholder="Department"
          className="border p-2 rounded"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

        <input
          placeholder="Duration (eg: 1 Month)"
          className="border p-2 rounded"
          value={TimePeriod}
          onChange={(e) => setTimePeriod(e.target.value)}
          required
        />

        {/* FULL WIDTH */}
        <select
          className="border p-2 rounded col-span-1 md:col-span-2"
          value={internshipType}
          onChange={(e) => setInternshipType(e.target.value)}
          required
        >
          <option value="">Select Internship</option>
          <option value="Web Development">Web Development</option>
          <option value="Web App Development">Web App Development</option>
          <option value="UI/UX">UI / UX</option>
          <option value="Data Science / Machine Learning">
            Data Science / Machine Learning
          </option>
        </select>

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded col-span-1 md:col-span-2 hover:bg-green-700"
        >
          Apply & Continue
        </button>
      </form>
    </div>
  );
}

