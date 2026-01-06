'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getCompany } from '@/lib/companies';
import './company.css';

export default function CompanyPage() {
  const params = useParams();
  const code = params.code as string;
  const company = getCompany(code);

  if (!company) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Company Not Found</h1>
          <Link href="/" style={{ color: '#ef4444', textDecoration: 'underline' }}>
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="company-page">
      <header className="header">
        <Link href="/" className="back-btn">← Homepage</Link>
        <div className="lang-toggle">EN | JP</div>
      </header>

      <div className="container">
        <div className="company-header">
          <div className="header-top">
            <div className="company-info">
              <div className="company-code">{company.code}</div>
              <h1 className="company-name">{company.name}</h1>
            </div>
            <div className="price-info">
              <div className="price">¥{company.price.toLocaleString()}</div>
              <div className={`price-change ${company.priceChange >= 0 ? 'positive' : 'negative'}`}>
                {company.priceChange >= 0 ? '+' : ''}{company.priceChange}%
              </div>
            </div>
          </div>
          <div className="themes">
            {company.themes.map((theme) => (
              <span key={theme} className="theme-tag">{theme}</span>
            ))}
          </div>
        </div>

        <div className="metrics-box">
          <h2 className="metrics-title">Key Metrics</h2>
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-label">Market Cap</div>
              <div className="metric-value">{company.marketCap}</div>
            </div>
            <div className="metric-item">
              <div className="metric-label">Revenue</div>
              <div className="metric-value">{company.revenue}</div>
            </div>
            <div className="metric-item">
              <div className="metric-label">PER</div>
              <div className="metric-value">{company.per}</div>
            </div>
            <div className="metric-item">
              <div className="metric-label">PBR</div>
              <div className="metric-value">{company.pbr}</div>
            </div>
            <div className="metric-item">
              <div className="metric-label">Founded</div>
              <div className="metric-value">{company.founded}</div>
            </div>
            <div className="metric-item">
              <div className="metric-label">CEO</div>
              <div className="metric-value">{company.ceo}</div>
            </div>
          </div>
        </div>

        <div className="outlook-box">
          <h2 className="outlook-title">Outlook</h2>
          <div className="outlook-list">
            {company.outlook.map((point, index) => (
              <div key={index} className="outlook-point">
                <div className="outlook-number">{index + 1}</div>
                <div className="outlook-text">
                  <strong>{point.title}</strong> {point.content}
                </div>
              </div>
            ))}
          </div>
          <div className="outlook-sources">
            Sources: company documents, public disclosure, social media
          </div>
        </div>

        <div className="outlook-box">
          <h2 className="outlook-title">Social Media Heat Map</h2>
          <div className="heatmap-content">
            {/* Overall Sentiment Gauge */}
            <div className="sentiment-gauge">
              <div className="gauge-label">Overall Sentiment</div>
              <div className="gauge-container">
                <div className="gauge-bar">
                  <div className="gauge-fill" style={{ width: '72%' }}></div>
                  <div className="gauge-marker" style={{ left: '72%' }}></div>
                </div>
                <div className="gauge-labels">
                  <span className="bearish">Bearish</span>
                  <span className="neutral">Neutral</span>
                  <span className="bullish">Bullish</span>
                </div>
              </div>
              <div className="sentiment-score">
                <span className="score-value bullish">72%</span>
                <span className="score-label">Bullish</span>
              </div>
            </div>

            {/* Platform Breakdown */}
            <div className="platform-breakdown">
              <div className="platform-item">
                <div className="platform-icon">𝕏</div>
                <div className="platform-name">X (Twitter)</div>
                <div className="platform-stats">
                  <div className="platform-bar">
                    <div className="platform-fill positive" style={{ width: '68%' }}></div>
                  </div>
                  <span className="platform-percent positive">68%</span>
                </div>
                <div className="platform-mentions">2.4k mentions</div>
              </div>

              <div className="platform-item">
                <div className="platform-icon">📱</div>
                <div className="platform-name">Reddit</div>
                <div className="platform-stats">
                  <div className="platform-bar">
                    <div className="platform-fill positive" style={{ width: '75%' }}></div>
                  </div>
                  <span className="platform-percent positive">75%</span>
                </div>
                <div className="platform-mentions">892 mentions</div>
              </div>

              <div className="platform-item">
                <div className="platform-icon">🇯🇵</div>
                <div className="platform-name">Yahoo Finance JP</div>
                <div className="platform-stats">
                  <div className="platform-bar">
                    <div className="platform-fill positive" style={{ width: '71%' }}></div>
                  </div>
                  <span className="platform-percent positive">71%</span>
                </div>
                <div className="platform-mentions">1.8k mentions</div>
              </div>

              <div className="platform-item">
                <div className="platform-icon">💬</div>
                <div className="platform-name">StockTwits</div>
                <div className="platform-stats">
                  <div className="platform-bar">
                    <div className="platform-fill positive" style={{ width: '65%' }}></div>
                  </div>
                  <span className="platform-percent positive">65%</span>
                </div>
                <div className="platform-mentions">456 mentions</div>
              </div>
            </div>

            <div className="heatmap-footer">
              <span className="last-updated">Last updated: 5 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="analysis-grid">
          <div className="analysis-box tradingview-box">
            <h2 className="section-title">Technical Analysis</h2>
            <div className="tradingview-widget">
              {/* TradingView Widget Container */}
              <iframe 
                src={`https://s.tradingview.com/embed-widget/technical-analysis/?locale=en#%7B%22symbol%22%3A%22TSE%3A${code}%22%2C%22interval%22%3A%221D%22%2C%22width%22%3A%22100%25%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A%22100%25%22%2C%22colorTheme%22%3A%22light%22%7D`}
                style={{ width: '100%', height: '280px', border: 'none' }}
                title="TradingView Technical Analysis"
              />
            </div>
          </div>

          <div className="analysis-box">
            <h2 className="section-title">Analyst Ratings</h2>
            <div className="analyst-content">
              <div className="analyst-consensus">
                <div className="consensus-label">Consensus Rating</div>
                <div className="consensus-badge buy">BUY</div>
                <div className="consensus-score">Score: 4.2 / 5.0</div>
              </div>
              
              <div className="analyst-breakdown">
                <div className="rating-row">
                  <span className="rating-label">Strong Buy</span>
                  <div className="rating-bar">
                    <div className="rating-fill strong-buy" style={{ width: '45%' }}></div>
                  </div>
                  <span className="rating-count">9</span>
                </div>
                <div className="rating-row">
                  <span className="rating-label">Buy</span>
                  <div className="rating-bar">
                    <div className="rating-fill buy" style={{ width: '30%' }}></div>
                  </div>
                  <span className="rating-count">6</span>
                </div>
                <div className="rating-row">
                  <span className="rating-label">Hold</span>
                  <div className="rating-bar">
                    <div className="rating-fill hold" style={{ width: '20%' }}></div>
                  </div>
                  <span className="rating-count">4</span>
                </div>
                <div className="rating-row">
                  <span className="rating-label">Sell</span>
                  <div className="rating-bar">
                    <div className="rating-fill sell" style={{ width: '5%' }}></div>
                  </div>
                  <span className="rating-count">1</span>
                </div>
              </div>

              <div className="price-target">
                <span className="target-label">12-Month Price Target:</span>
                <span className="target-value">¥1,450</span>
                <span className="target-upside positive">+16.5%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="outlook-box">
          <h2 className="outlook-title">Recent News & Events</h2>
          <div className="analysis-placeholder">
            Latest company announcements, earnings releases, regulatory filings, M&A activity, product launches, and market-moving news.
          </div>
        </div>
      </div>
    </div>
  );
}
