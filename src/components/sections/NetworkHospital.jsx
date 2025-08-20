import React from 'react';
import { hospitalData } from '../../data/hospitalData';

const NetworkHospital = () => {
    // In a real app, you would add state here for search, pagination, etc.
    return (
        <section id="networkhospital" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 font-heading tracking-tight">Our Network Hospitals</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed font-body">Find a hospital near you from our extensive network of partners.</p>
                </div>
                <div className="overflow-x-auto bg-white rounded-2xl shadow-lg p-4">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">#</th>
                                <th scope="col" className="px-6 py-3">Area Name</th>
                                <th scope="col" className="px-6 py-3">Hospital Name</th>
                                <th scope="col" className="px-6 py-3">Address</th>
                                <th scope="col" className="px-6 py-3">Facility</th>
                                <th scope="col" className="px-6 py-3">Special Service</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hospitalData.map(hospital => (
                                <tr key={hospital.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="px-6 py-4">{hospital.id}</td>
                                    <td className="px-6 py-4">{hospital.area}</td>
                                    <td className="px-6 py-4 font-bold text-gray-900">{hospital.name}</td>
                                    <td className="px-6 py-4">{hospital.address}</td>
                                    <td className="px-6 py-4">{hospital.facility}</td>
                                    <td className="px-6 py-4">{hospital.specialService}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default NetworkHospital;
