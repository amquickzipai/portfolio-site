'use client';

import { useState, useEffect } from 'react';
import { themes, portfolioSummary, getAllHoldings, type Holding } from '@/data/portfolio';
import { watchlistThemes, getAllWatchlistItems, type WatchlistTheme, type WatchlistItem } from '@/data/watchlist';

interface StockPrice {
  price: number;
  change: number;
  changePercent: number;
  ytdPrice: number;
  ytdChange: number;
  ytdChangePercent: number;
}

type PriceMap = Record<string, StockPrice>;

function formatPercent(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
}

function formatPrice(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function PerformanceBadge({ percent, label }: { percent: number; label: string }) {
  const isPositive = percent >= 0;
  return (
    <div className={`text-xs px-2 py-1 rounded font-mono ${
      isPositive ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'
    }`}>
      <span className="text-zinc-500 mr-1">{label}</span>
      {formatPercent(percent)}
    </div>
  );
}

function HoldingRow({ holding, price }: { holding: Holding; price?: StockPrice }) {
  const currentPrice = price?.price || holding.lastPrice;
  const totalGainPercent = ((currentPrice - holding.costPrice) / holding.costPrice) * 100;

  return (
    <tr className={`border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors ${holding.isShort ? 'bg-red-950/20' : ''}`}>
      <td className="py-3 px-4">
        <div className="flex items-center gap-2">
          {holding.isShort && <span className="text-xs bg-red-600 px-1.5 py-0.5 rounded">SHORT</span>}
          <span className="font-mono font-medium">{holding.ticker}</span>
        </div>
      </td>
      <td className="py-3 px-4 text-zinc-400 max-w-[150px] truncate">{holding.name}</td>
      <td className="py-3 px-4 text-right font-mono text-zinc-500">
        {formatPrice(holding.costPrice)}
      </td>
      <td className="py-3 px-4 text-right font-mono">
        {formatPrice(currentPrice)}
      </td>
      <td className="py-3 px-4 text-right">
        {price ? (
          <span className={`text-sm font-mono ${price.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {formatPercent(price.changePercent)}
          </span>
        ) : (
          <span className="text-zinc-500">-</span>
        )}
      </td>
      <td className="py-3 px-4 text-right">
        {price && price.ytdChangePercent !== 0 ? (
          <span className={`text-sm font-mono ${price.ytdChangePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {formatPercent(price.ytdChangePercent)}
          </span>
        ) : (
          <span className="text-zinc-500">-</span>
        )}
      </td>
      <td className={`py-3 px-4 text-right font-mono font-medium ${totalGainPercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
        {formatPercent(totalGainPercent)}
      </td>
      <td className="py-3 px-4 text-right font-mono text-zinc-400">{Math.abs(holding.allocation).toFixed(2)}%</td>
    </tr>
  );
}

function ThemeCard({ theme, prices, isExpanded, onToggle }: {
  theme: typeof themes[0];
  prices: PriceMap;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const longHoldings = theme.holdings.filter(h => !h.isShort);
  const shortHoldings = theme.holdings.filter(h => h.isShort);

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-zinc-800/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-semibold">{theme.name}</h3>
          <span className="text-zinc-400 text-sm">{theme.holdings.length} positions</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-lg font-mono text-emerald-400">{theme.allocation.toFixed(2)}%</span>
          <svg
            className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-zinc-800">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-zinc-800/50">
                <tr>
                  <th className="py-3 px-4 text-left font-medium text-zinc-400">Ticker</th>
                  <th className="py-3 px-4 text-left font-medium text-zinc-400">Name</th>
                  <th className="py-3 px-4 text-right font-medium text-zinc-400">Entry</th>
                  <th className="py-3 px-4 text-right font-medium text-zinc-400">Current</th>
                  <th className="py-3 px-4 text-right font-medium text-zinc-400">Today</th>
                  <th className="py-3 px-4 text-right font-medium text-zinc-400">YTD</th>
                  <th className="py-3 px-4 text-right font-medium text-zinc-400">Total P&L</th>
                  <th className="py-3 px-4 text-right font-medium text-zinc-400">Weight</th>
                </tr>
              </thead>
              <tbody>
                {longHoldings.map((holding) => (
                  <HoldingRow key={holding.ticker} holding={holding} price={prices[holding.ticker]} />
                ))}
                {shortHoldings.length > 0 && (
                  <>
                    <tr className="bg-zinc-800/30">
                      <td colSpan={8} className="py-2 px-4 text-xs text-zinc-500 uppercase tracking-wider">
                        Short Positions
                      </td>
                    </tr>
                    {shortHoldings.map((holding) => (
                      <HoldingRow key={holding.ticker} holding={holding} price={prices[holding.ticker]} />
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function WatchlistStockCard({ item, price }: { item: WatchlistItem; price?: StockPrice }) {
  return (
    <div className="bg-zinc-800/50 rounded-lg p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-3">
          <span className="font-mono font-bold text-emerald-400">{item.ticker}</span>
          <span className="text-zinc-300">{item.name}</span>
        </div>
        {price && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-white">{formatPrice(price.price)}</span>
            <PerformanceBadge percent={price.changePercent} label="1D" />
            {price.ytdChangePercent !== 0 && (
              <PerformanceBadge percent={price.ytdChangePercent} label="YTD" />
            )}
          </div>
        )}
      </div>
      <p className="text-zinc-400 text-sm">{item.thesis}</p>
    </div>
  );
}

function WatchlistThemeCard({ theme, prices }: { theme: WatchlistTheme; prices: PriceMap }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculate average YTD for the theme
  const themePrices = theme.items
    .map(item => prices[item.ticker])
    .filter(p => p && p.ytdChangePercent !== 0);

  const avgYtd = themePrices.length > 0
    ? themePrices.reduce((sum, p) => sum + p.ytdChangePercent, 0) / themePrices.length
    : null;

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 text-left hover:bg-zinc-800/50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-mono text-sm">#{theme.id}</span>
            <h3 className="text-lg font-semibold">{theme.name}</h3>
          </div>
          <div className="flex items-center gap-3">
            {avgYtd !== null && (
              <PerformanceBadge percent={avgYtd} label="YTD" />
            )}
            <span className="text-zinc-500 text-sm">{theme.items.length} stocks</span>
            <svg
              className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <p className="text-zinc-400 text-sm mt-2 line-clamp-2">{theme.description}</p>
      </button>

      {isExpanded && (
        <div className="border-t border-zinc-800 p-4 space-y-3">
          {theme.items.map((item) => (
            <WatchlistStockCard key={item.ticker} item={item} price={prices[item.ticker]} />
          ))}
        </div>
      )}
    </div>
  );
}

function SummaryCard({ label, value, color = 'white' }: {
  label: string;
  value: string;
  color?: 'white' | 'green' | 'red' | 'yellow';
}) {
  const colorClasses = {
    white: 'text-white',
    green: 'text-green-400',
    red: 'text-red-400',
    yellow: 'text-yellow-400',
  };

  return (
    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6">
      <div className="text-zinc-400 text-sm mb-1">{label}</div>
      <div className={`text-2xl font-bold font-mono ${colorClasses[color]}`}>{value}</div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<'holdings' | 'watchlist'>('holdings');
  const [expandedThemes, setExpandedThemes] = useState<Set<string>>(new Set());
  const [prices, setPrices] = useState<PriceMap>({});
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      try {
        // Get all unique US tickers from holdings and watchlist
        const holdingTickers = getAllHoldings()
          .filter(h => !h.ticker.includes('.'))
          .map(h => h.ticker);

        const watchlistTickers = getAllWatchlistItems()
          .filter(item => !item.ticker.includes('.') && !item.ticker.includes('-'))
          .map(item => item.ticker);

        const allTickers = [...new Set([...holdingTickers, ...watchlistTickers])];

        // Fetch in batches to avoid URL length limits
        const batchSize = 50;
        const allPrices: PriceMap = {};

        for (let i = 0; i < allTickers.length; i += batchSize) {
          const batch = allTickers.slice(i, i + batchSize);
          const response = await fetch(`/api/prices?symbols=${batch.join(',')}`);
          if (response.ok) {
            const data = await response.json();
            Object.assign(allPrices, data);
          }
        }

        setPrices(allPrices);
        setLastUpdated(new Date());
      } catch (error) {
        console.error('Failed to fetch prices:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
    // Refresh prices every 60 seconds
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = (themeName: string) => {
    setExpandedThemes(prev => {
      const next = new Set(prev);
      if (next.has(themeName)) {
        next.delete(themeName);
      } else {
        next.add(themeName);
      }
      return next;
    });
  };

  const expandAll = () => {
    if (activeTab === 'holdings') {
      setExpandedThemes(new Set(themes.map(t => t.name)));
    }
  };

  const collapseAll = () => {
    setExpandedThemes(new Set());
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Portfolio</h1>
              <p className="text-zinc-400 mt-1">{portfolioSummary.name} - {portfolioSummary.date}</p>
            </div>
            <div className="flex items-center gap-4">
              {loading ? (
                <div className="flex items-center gap-2 text-zinc-400">
                  <div className="w-4 h-4 border-2 border-zinc-600 border-t-emerald-400 rounded-full animate-spin" />
                  <span className="text-sm">Updating prices...</span>
                </div>
              ) : lastUpdated && (
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Live prices</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <SummaryCard
            label="Net Exposure"
            value={`${portfolioSummary.netExposure}%`}
            color="green"
          />
          <SummaryCard
            label="Long Exposure"
            value={`${portfolioSummary.longExposure}%`}
            color="green"
          />
          <SummaryCard
            label="Short Exposure"
            value={`${portfolioSummary.shortExposure}%`}
            color="red"
          />
          <SummaryCard
            label="Cash"
            value={`${portfolioSummary.cash}%`}
            color="yellow"
          />
          <SummaryCard
            label="Gross Exposure"
            value={`${portfolioSummary.grossExposure}%`}
          />
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div className="flex gap-1 bg-zinc-900 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('holdings')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'holdings'
                  ? 'bg-emerald-600 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Holdings ({getAllHoldings().length})
            </button>
            <button
              onClick={() => setActiveTab('watchlist')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'watchlist'
                  ? 'bg-emerald-600 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Watchlist ({watchlistThemes.length} Themes)
            </button>
          </div>

          {activeTab === 'holdings' && (
            <div className="flex gap-2">
              <button
                onClick={expandAll}
                className="px-4 py-2 text-sm bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-4 py-2 text-sm bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
              >
                Collapse All
              </button>
            </div>
          )}
        </div>

        {/* Holdings Tab */}
        {activeTab === 'holdings' && (
          <div className="space-y-4">
            {themes.map((theme) => (
              <ThemeCard
                key={theme.name}
                theme={theme}
                prices={prices}
                isExpanded={expandedThemes.has(theme.name)}
                onToggle={() => toggleTheme(theme.name)}
              />
            ))}
          </div>
        )}

        {/* Watchlist Tab */}
        {activeTab === 'watchlist' && (
          <div>
            <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6 mb-6">
              <h2 className="text-xl font-bold mb-2">26 Trades for 2026</h2>
              <p className="text-zinc-400">
                A thematic watchlist for the new year. Each theme represents a potential investment opportunity
                based on macro trends, sector dynamics, or specific catalysts. Prices update in real-time with YTD performance from Jan 2026.
              </p>
            </div>
            <div className="grid gap-4">
              {watchlistThemes.map((theme) => (
                <WatchlistThemeCard key={theme.id} theme={theme} prices={prices} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-zinc-500 text-sm">
          <p>Data sourced from portfolio holdings as of {portfolioSummary.date}</p>
          <p className="mt-1">Prices via Yahoo Finance API. This is for informational purposes only. Not financial advice.</p>
        </div>
      </footer>
    </div>
  );
}
