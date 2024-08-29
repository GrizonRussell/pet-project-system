'use client'
import { useState } from 'react';

export default function Dashboard() {
  const [pets, setPets] = useState([]);

  const [formData, setFormData] = useState({
    owner: '',
    name: '',
    species: '',
    breed: '',
    dob: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPets([...pets, formData]);
    setFormData({ owner: '', name: '', species: '', breed: '', dob: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-5xl font-bold mb-6 ml-5 text-left fade-in fade-in-1">Dashboard</h1>
      <div className="flex justify-center space-x-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-1/4 fade-in fade-in-2">
        {/* akong add pet na form */}
          <h2 className="text-2xl font-bold mb-4">Add Pet</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm">Owner's Name</label>
              <input
                type="text"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                placeholder="Owner's Name"
                className="w-full bg-gray-700 text-white p-2 rounded-lg border border-gray-600 text-xs"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Pet's Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Pet's Name"
                className="w-full bg-gray-700 text-white p-2 rounded-lg border border-gray-600 text-xs"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Species</label>
              <input
                type="text"
                name="species"
                value={formData.species}
                onChange={handleChange}
                placeholder="Species"
                className="w-full bg-gray-700 text-white p-2 rounded-lg border border-gray-600 text-xs"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Breed</label>
              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                placeholder="Breed"
                className="w-full bg-gray-700 text-white p-2 rounded-lg border border-gray-600 text-xs"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Date of Birth</label>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Date of Birth"
                className="w-full bg-gray-700 text-white p-2 rounded-lg border border-gray-600 text-xs"
              />
            </div>
            <button type="submit" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg w-full text-sm">
              Add Pet
            </button>
          </form>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-2/3 fade-in fade-in-3">
        {/* akong pet record na form */}
          <h2 className="text-3xl font-bold mb-4">Pet Record</h2>
          <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden text-xs">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="py-2 px-2 text-left">Owner's Name</th>
                <th className="py-2 px-2 text-left">Pet's Name</th>
                <th className="py-2 px-2 text-left">Species</th>
                <th className="py-2 px-2 text-left">Breed</th>
                <th className="py-2 px-2 text-left">Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet, index) => (
                <tr key={index} className="border-b border-gray-600">
                  <td className="py-2 px-2">{pet.owner}</td>
                  <td className="py-2 px-2">{pet.name}</td>
                  <td className="py-2 px-2">{pet.species}</td>
                  <td className="py-2 px-2">{pet.breed}</td>
                  <td className="py-2 px-2">{pet.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
