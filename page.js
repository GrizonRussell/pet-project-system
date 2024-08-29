'use client';
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
  const [filter, setFilter] = useState('All');
  const [filterValue, setFilterValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (
      !formData.owner ||
      !formData.name ||
      !formData.species ||
      !formData.breed ||
      !formData.dob
    ) {
      alert('Please fill the fields before adding.');
      return;
    }

    if (editIndex !== null) {
      // Edit existing pet
      const updatedPets = pets.map((pet, index) =>
        index === editIndex ? formData : pet
      );
      setPets(updatedPets);
      setEditIndex(null);
    } else {
      // Add new pet
      setPets([...pets, formData]);
    }
    setFormData({ owner: '', name: '', species: '', breed: '', dob: '' });
  };

  const handleEdit = (index) => {
    setFormData(pets[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedPets = pets.filter((_, i) => i !== index);
    setPets(updatedPets);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setFilterValue('');
  };

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  const getFilteredPets = () => {
    if (filter === 'All' || filterValue === '') {
      return pets;
    }

    const lowercasedFilterValue = filterValue.toLowerCase();
    return pets.filter((pet) =>
      pet[filter.toLowerCase()].toLowerCase().includes(lowercasedFilterValue)
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-5xl font-bold mb-6 ml-5 text-left fade-in fade-in-1">Dashboard</h1>
      <div className="flex justify-center space-x-4">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-1/4 fade-in fade-in-2">
          {/* Add or edit pet form */}
          <h2 className="text-2xl font-bold mb-4">{editIndex !== null ? 'Edit Pet' : 'Add Pet'}</h2>
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
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg w-full text-sm"
            >
              {editIndex !== null ? 'Update Pet' : 'Add Pet'}
            </button>
          </form>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-2/3 fade-in fade-in-3">
          <h2 className="text-3xl font-bold mb-4">Pet Record</h2>
          {/* Filter controls */}
          <div className="mb-4 flex items-end">
            <div className="w-1/2 mr-2">
              <label className="block mb-1 text-sm">Filter by</label>
              <select
                className="w-full bg-gray-700 text-white p-2 rounded-lg border border-gray-600 text-xs"
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="All">All</option>
                <option value="Breed">Breed</option>
                <option value="Owner">Owner</option>
                <option value="Species">Species</option>
              </select>
            </div>
            {filter !== 'All' && (
              <div className="w-1/2">
                <label className="block mb-1 text-sm">Enter {filter}</label>
                <input
                  type="text"
                  placeholder={`Enter ${filter} to filter :`}
                  className="w-full bg-gray-700 text-white p-2 rounded-lg border border-gray-600 text-xs"
                  value={filterValue}
                  onChange={handleFilterValueChange}
                />
              </div>
            )}
          </div>
          {/* Pet record table */}
          <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden text-xs">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="py-3 px-6 text-left w-1/6">Owner's Name</th>
                <th className="py-3 px-4 text-left w-1/6">Pet's Name</th>
                <th className="py-3 px-4 text-left w-1/6">Species</th>
                <th className="py-3 px-4 text-left w-1/6">Breed</th>
                <th className="py-3 px-4 text-left w-1/6">Date of Birth</th>
                <th className="py-3 px-6 text-left w-1/6">Action</th>
              </tr>
            </thead>
            <tbody>
              {getFilteredPets().map((pet, index) => (
                <tr key={index} className="border-b border-gray-600">
                  <td className="py-2 px-4 text-left w-1/6 whitespace-nowrap overflow-hidden text-ellipsis">{pet.owner}</td>
                  <td className="py-2 px-4 text-left w-1/6 whitespace-nowrap overflow-hidden text-ellipsis">{pet.name}</td>
                  <td className="py-2 px-4 text-left w-1/6 whitespace-nowrap overflow-hidden text-ellipsis">{pet.species}</td>
                  <td className="py-2 px-4 text-left w-1/6 whitespace-nowrap overflow-hidden text-ellipsis">{pet.breed}</td>
                  <td className="py-2 px-4 text-left w-1/6 whitespace-nowrap overflow-hidden text-ellipsis">{pet.dob}</td>
                  <td className="py-2 px-4 text-left w-1/6 whitespace-nowrap">
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-2 py-1 rounded-lg text-xs"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-600 hover:bg-red-500 text-white px-2 py-1 rounded-lg text-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
