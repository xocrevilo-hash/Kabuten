'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  getAllCompanyCodes, 
  getCompany, 
  getLatestUpdates,
  getTopByMarketCap,
  getTopThemes,
  getBestPerformers,
  getWorstPerformers
} from '@/lib/companies';
import './home.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  const allCodes = getAllCompanyCodes();
  
  // Get data for each box
  const latestUpdates = getLatestUpdates();
  const topCompanies = getTopByMarketCap();
  const topThemes = getTopThemes();
  const bestPerformers = getBestPerformers();
  const worstPerformers = getWorstPerformers();
  
  const searchResults = searchTerm.trim() === '' ? [] : allCodes
    .map(code => getCompany(code))
    .filter(company => {
      if (!company) return false;
      const term = searchTerm.toLowerCase();
      return (
        company.code.toLowerCase().includes(term) ||
        company.name.toLowerCase().includes(term) ||
        company.nameJp?.toLowerCase().includes(term) ||
        company.themes.some(theme => theme.toLowerCase().includes(term))
      );
    })
    .slice(0, 5);

  return (
    <div className="homepage">
      <div className="lang-toggle-fixed">EN | JP</div>

      <div className="header-section">
        <h1 className="logo">Kabuten 株典</h1>
        <p className="tagline">AI-powered fundamental research</p>

        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search by code, name, theme"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
          />
          {showResults && searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map(company => company && (
                <Link
                  key={company.code}
                  href={`/company/${company.code.split(' ')[0]}`}
                  className="search-result-item"
                  onClick={() => setShowResults(false)}
                >
                  <span className="result-code">{company.code}</span>
                  <span className="result-name">{company.name}</span>
                  <span className="result-themes">{company.themes.join(', ')}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid-section">
        <div className="grid">
          <div className="grid-box prediction-box">
            <div className="grid-box-title">Daily Prediction</div>
            <div className="prediction-content">
              <p className="prediction-question">SoftBank price move in the next month?</p>
              <div className="prediction-options">
                <button className="prediction-btn positive">+10%</button>
                <button className="prediction-btn negative">-10%</button>
              </div>
            </div>
          </div>

          <div className="grid-box">
            <div className="grid-box-title">Latest updates</div>
            <ul className="box-list">
              {latestUpdates.map((company, index) => (
                <li key={company.code}>
                  <Link href={`/company/${company.code.split(' ')[0]}`} className="box-list-link">
                    {index + 1}. {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid-box">
            <div className="grid-box-title">Most viewed companies</div>
            <ul className="box-list">
              {topCompanies.map((company, index) => (
                <li key={company.code}>
                  <Link href={`/company/${company.code.split(' ')[0]}`} className="box-list-link">
                    {index + 1}. {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid-box">
            <div className="grid-box-title">Most viewed themes</div>
            <ul className="box-list">
              {topThemes.map((item, index) => (
                <li key={item.theme}>
                  {index + 1}. {item.theme} ({item.count})
                </li>
              ))}
            </ul>
          </div>

          <div className="grid-box">
            <div className="grid-box-title">Best performers</div>
            <ul className="box-list">
              {bestPerformers.map((company, index) => (
                <li key={company.code}>
                  <Link href={`/company/${company.code.split(' ')[0]}`} className="box-list-link">
                    {index + 1}. {company.name} <span className="perf-positive">+{company.priceChange}%</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid-box">
            <div className="grid-box-title">Worst performers</div>
            <ul className="box-list">
              {worstPerformers.map((company, index) => (
                <li key={company.code}>
                  <Link href={`/company/${company.code.split(' ')[0]}`} className="box-list-link">
                    {index + 1}. {company.name} <span className="perf-negative">{company.priceChange}%</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid-box ask-box">
            <div className="grid-box-title">Ask Kabuten</div>
            <div className="ask-content">
              <p className="ask-prompt">Ask Me Anything...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-section">
        <h2 className="featured-title">Featured Companies</h2>
        <div className="companies-grid">
          {allCodes.slice(0, 5).map(code => {
            const company = getCompany(code);
            return company ? (
              <Link key={code} href={`/company/${code}`} className="company-card">
                <div className="company-code">{company.code}</div>
                <div className="company-name">{company.name}</div>
                <div className="company-themes">{company.themes.join(', ')}</div>
              </Link>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
