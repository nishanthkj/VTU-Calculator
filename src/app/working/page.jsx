"use client";
import React from "react";
import Link from "next/link"; // Adjust the import path according to your project structure

const SGPAExplanation = () => {
  return (
    <div className=" mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">How to Calculate SGPA</h1>
      
      <h2 className="text-2xl font-semibold mb-4 text-white">Step 1: Obtain Your Marks</h2>
      <p className="text-lg mb-4 text-white text-justify">
        Visit the official VTU website or your academic portal to retrieve your marks for each subject.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4 text-white">Step 2: Convert Marks to Grades</h2>
      <p className="text-lg mb-4 text-white text-justify">
        Convert your percentage marks into grade points using the following conversion table:
      </p>
      <table className="min-w-full bg-gray-800 border border-gray-600 mb-6 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-700">
            <th className="border px-4 py-2 text-white text-left">Letter Grade</th>
            <th className="border px-4 py-2 text-white text-left">Grade Point</th>
            <th className="border px-4 py-2 text-white text-left">% of Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-white">O</td>
            <td className="border px-4 py-2 text-white">10</td>
            <td className="border px-4 py-2 text-white">90-100</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-white">A+</td>
            <td className="border px-4 py-2 text-white">9</td>
            <td className="border px-4 py-2 text-white">80-89</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-white">A</td>
            <td className="border px-4 py-2 text-white">8</td>
            <td className="border px-4 py-2 text-white">70-79</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-white">B+</td>
            <td className="border px-4 py-2 text-white">7</td>
            <td className="border px-4 py-2 text-white">60-69</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-white">B</td>
            <td className="border px-4 py-2 text-white">6</td>
            <td className="border px-4 py-2 text-white">55-59</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-white">C</td>
            <td className="border px-4 py-2 text-white">5</td>
            <td className="border px-4 py-2 text-white">50-54</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-white">P</td>
            <td className="border px-4 py-2 text-white">4</td>
            <td className="border px-4 py-2 text-white">40-49</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-white">F</td>
            <td className="border px-4 py-2 text-white">0</td>
            <td className="border px-4 py-2 text-white">0-39</td>
          </tr>
        </tbody>
      </table>
      
      <h2 className="text-2xl font-semibold mb-4 text-white">Step 3: Calculate Total Credits</h2>
      <p className="text-lg mb-4 text-white text-justify">
        Sum up the credit values for all subjects.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4 text-white">Step 4: Multiply Grade Points by Credits</h2>
      <p className="text-lg mb-4 text-white text-justify">
        For each subject, multiply the grade points obtained by the subject's credit points.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4 text-white">Step 5: Calculate SGPA</h2>
      <p className="text-lg mb-4 text-white text-justify">
        Compute the total weighted grade points by summing up the results from Step 4. Then, divide this sum by the total credits calculated in Step 3.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4 text-white">Step 6: Optional</h2>
      <p className="text-lg mb-4 text-white text-justify">
        If you prefer not to calculate manually, you can use an online SGPA calculator for convenience.
      </p>
      
      <h2 className="text-2xl font-semibold mb-4 text-white">Example Calculation</h2>
      <p className="text-lg mb-4 text-white text-justify">
        Here’s an example to illustrate the calculation process:
      </p>
      <ul className="list-disc list-inside mb-6 text-white">
        <li className="mb-2"><strong>Math (4 Credits):</strong> 85% = A+ = 9 points</li>
        <li className="mb-2"><strong>Physics (3 Credits):</strong> 78% = A = 8 points</li>
        <li className="mb-2"><strong>Chemistry (3 Credits):</strong> 65% = B+ = 7 points</li>
      </ul>
      <p className="text-lg mb-4 text-white text-justify">
        Total Credits = 4 (Math) + 3 (Physics) + 3 (Chemistry) = 10
      </p>
      <p className="text-lg mb-4 text-white text-justify">
        Weighted Grade Points: 
        <br /> Math: 9 × 4 = 36
        <br /> Physics: 8 × 3 = 24
        <br /> Chemistry: 7 × 3 = 21
        <br /> Total Weighted Grade Points = 36 + 24 + 21 = 81
      </p>
      <p className="text-lg mb-4 text-white text-justify">
        SGPA = Total Weighted Grade Points / Total Credits = 81 / 10 = 8.1
      </p>
      
      <p className="text-lg mt-6 text-white text-justify">
        For more information, please visit our{" "}
        <Link href="/" legacyBehavior>
          <a className="text-blue-400 hover:underline">home page</a>
        </Link>.
      </p>
    </div>
  );
};

export default SGPAExplanation;
