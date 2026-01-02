// import { useState } from "react";

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [phone, setPhone] = useState("");
// const [college, setCollege] = useState("");
// const [department, setDepartment] = useState("");
// const [duration, setDuration] = useState("");
// const [fromDate, setFromDate] = useState("");
// const [toDate, setToDate] = useState("");

// const handleSubmit = async () => {
//   const payload = {
//     name,
//     email,
//     phone,
//     college,
//     department,
//     duration,
//     fromDate,
//     toDate,
//   };

//   const res = await fetch("/api/internship", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });

//   if (res.ok) {
//     alert("Applied successfully");
//   } else {
//     alert("Submit failed");
//   }
// };


import InternshipApplyForm from "@/components/InternshipApplyForm";

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <InternshipApplyForm />
    </div>
  );
}
