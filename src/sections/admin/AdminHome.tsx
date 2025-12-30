export default function AdminHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Welcome Admin 👋
      </h1>

      <p className="text-gray-600 mb-8">
        Use the sidebar to manage internship applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Total Applications</h3>
          <p className="text-3xl font-bold text-green-600">27</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">Web Development</h3>
          <p className="text-3xl font-bold">17</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500">UI / UX</h3>
          <p className="text-3xl font-bold">4</p>
        </div>
      </div>
    </div>
  );
}
