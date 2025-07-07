//App.js
import React from 'react';
import './App.css';

const issues = [
    {
    id: 1,
    title: "Bug in login page",
    description: "The login page throws an error when submitting invalid credentials.",
    status: "Open",
  },
  {
    id: 2,
    title: "UI glitch on homepage",
    description: "There is a UI misalignment issue on the homepage for smaller screens.",
    status: "Closed",
  },
  {
    id: 3,
    title: "Missing translation for settings page",
    description: "The settings page is missing translations for the Spanish language.",
    status: "Open",
  },
  {
    id: 4,
    title: "Database connection error",
    description: "Intermittent database connection issue during peak hours.",
    status: "Open",
  }
];

const IssueList = () => {
  return (
    <div>
      <h2>Issue Tracker</h2>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <strong>Status:</strong> {issue.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;