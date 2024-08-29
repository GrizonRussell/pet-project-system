'use client'
import { useState } from 'react';

export default function Dashboard() {
  const [pets, setPets] = useState([
    // { owner: 'dabid', name: 'dabid the dog', species: 'Dog', breed: 'Labrador', dob: 'July 28, 2003' },
  ]);

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
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-5xl font-bold mb-10 text-left">Pet System Activity</h1>
      <div className="flex justify-center space-x-10">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-1/3">
          <h2 className="text-5xl font-bold mb-6">Add Pet</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-lg">Owner's Name</label>
              <input
                type="text"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                placeholder="Enter Owner's Name :"
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg">Pet's Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Pet's Name :"
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg">Species</label>
              <input
                type="text"
                name="species"
                value={formData.species}
                onChange={handleChange}
                placeholder="Enter Species :"
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg">Breed</label>
              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                placeholder="Enter Breed :"
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg">Date of Birth</label>
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Enter Date of Birth :"
                className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600"
              />
            </div>
            <button type="submit" className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg w-full text-lg">
              Add Pet
            </button>
          </form>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-2/3">
          <h2 className="text-5xl font-bold mb-6">Pet Record</h2>
          <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="py-3 px-4 text-left text-lg">Owner's Name</th>
                <th className="py-3 px-4 text-left text-lg">Pet's Name</th>
                <th className="py-3 px-4 text-left text-lg">Species</th>
                <th className="py-3 px-4 text-left text-lg">Breed</th>
                <th className="py-3 px-4 text-left text-lg">Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet, index) => (
                <tr key={index} className="border-b border-gray-600">
                  <td className="py-3 px-4 text-lg">{pet.owner}</td>
                  <td className="py-3 px-4 text-lg">{pet.name}</td>
                  <td className="py-3 px-4 text-lg">{pet.species}</td>
                  <td className="py-3 px-4 text-lg">{pet.breed}</td>
                  <td className="py-3 px-4 text-lg">{pet.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
