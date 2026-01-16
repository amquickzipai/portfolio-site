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
    const JAN_2026_PRICES: Record<string, number> = {
      'ACN': 361.50, 'CHRW': 98.20, 'APP': 312.45, 'SE': 108.30, 'CVNA': 198.75,
      'AMKR': 42.10, 'ASX': 16.50, 'CC': 12.40, 'MOH': 168.90, 'NRDS': 15.20,
      'HII': 245.80, 'SPHR': 88.50, 'DAVE': 205.30, 'RKT': 18.90, 'EVER': 26.80,
      'MAX': 12.50, 'UAL': 110.40, 'CHH': 93.20, 'PAM': 86.50, 'CEPU': 16.20,
      'ACMR': 43.50, 'BABA': 152.30, 'BIDU': 145.80, 'TCEHY': 78.90,
      'TER': 195.40, 'ROK': 385.20, 'HSAI': 22.80, 'OUST': 21.50,
      'LLY': 1045.60, 'ARWR': 66.40, 'ALNY': 395.80, 'TOI': 3.45,
      'VSCO': 48.90, 'REAL': 14.20, 'IPAR': 88.30, 'JMIA': 4.85,
      'SNPS': 465.80, 'BA': 215.40, 'RDW': 8.20, 'PL': 18.90,
      'GOOG': 308.50, 'META': 635.20, 'SITM': 355.80, 'AMAT': 262.40,
      'FORM': 56.80, 'SANM': 162.30, 'MTSI': 170.20, 'SYNA': 72.40,
      'KLIC': 46.20, 'FICO': 1680.50, 'KLAC': 1250.80, 'QCOM': 168.90,
      'ALAB': 185.60, 'TEL': 228.40, 'AMD': 215.30, 'AKAM': 88.50,
      'IOT': 35.80, 'FSLY': 10.80, 'WULF': 14.20, 'HPQ': 22.80,
      'DELL': 125.40, 'COPX': 70.20, 'EWY': 98.50, 'POWL': 340.60,
      'CENX': 38.50, 'FSLR': 265.80, 'AEIS': 215.40, 'ALB': 138.90,
      'ENS': 148.20, 'SQM': 67.40, 'VIAV': 17.20, 'TLN': 385.40,
      'REVG': 60.80, 'ENPH': 32.40, 'FLNC': 21.80, 'DQ': 30.50,
      'NPKI': 11.80, 'SEI': 48.50, 'MGA': 52.40, 'ADI': 268.50,
      'INTC': 36.80, 'HON': 198.60, 'SMTC': 73.40, 'ON': 55.20,
      'MIDD': 148.50, 'TXN': 175.80, 'CMG': 36.90, 'RBC': 445.60,
      'SG': 7.20, 'CAVA': 58.40, 'RRX': 143.80, 'ALNT': 52.40,
      'XPEV': 21.80, 'CGNX': 38.50, 'WRD': 10.20, 'GE': 312.40,
      'EQT': 50.80, 'D': 58.40, 'CECO': 56.80, 'CRK': 22.40,
      'THR': 35.80, 'BKR': 45.60, 'EE': 27.80, 'LBRT': 17.50,
      'MG': 12.80, 'PBA': 37.20, 'ECG': 85.40, 'ET': 16.20,
      'EXE': 105.80, 'DTM': 118.40, 'TPL': 295.60, 'WMB': 59.80,
      'NRG': 162.40, 'EVRG': 74.50, 'FE': 44.80, 'DTE': 132.40,
      'PUMP': 9.20, 'EXC': 44.20, 'KGS': 36.80, 'AES': 14.20,
      'AEP': 118.40, 'TRGP': 182.50, 'ENB': 47.40, 'PWR': 432.80,
      'XEL': 76.20, 'ETR': 92.40, 'TREE': 50.80,
      'UPBD': 17.20, 'QNST': 14.20, 'DIBS': 5.40, 'EVLV': 6.90,
      'LC': 18.40, 'RYAAY': 70.20, 'SBUX': 82.40, 'GAP': 24.20,
      'ALHC': 19.50, 'GMED': 85.40, 'PEN': 298.60, 'SIBN': 18.40,
      'FTRE': 15.80, 'AORT': 44.80, 'PGNY': 24.50, 'ATEC': 20.20,
      'WW': 35.80, 'LWAY': 24.50, 'NGVC': 26.80, 'PLNT': 105.40,
      'WVE': 15.40, 'LTH': 28.40, 'HALO': 69.20, 'DPZ': 435.60,
      'EAT': 155.40, 'QSR': 69.50, 'YUM': 148.90, 'HRL': 24.80,
      'DVA': 118.40, 'SHAK': 92.50, 'FMS': 22.80, 'LPTH': 10.20,
      'AVAV': 248.60, 'LASR': 35.80, 'ZTO': 21.20,
    };

    const fetchPrices = async () => {
      setLoading(true);
      try {
        const holdingTickers = getAllHoldings()
          .filter(h => !h.ticker.includes('.'))
          .map(h => h.ticker);

        const watchlistTickers = getAllWatchlistItems()
          .filter(item => !item.ticker.includes('.') && !item.ticker.includes('-'))
          .map(item => item.ticker);

        const allTickers = [...new Set([...holdingTickers, ...watchlistTickers])];
        const allPrices: PriceMap = {};

        // Fetch in batches using CORS proxy to Yahoo Finance
        const batchSize = 20;
        for (let i = 0; i < allTickers.length; i += batchSize) {
          const batch = allTickers.slice(i, i + batchSize);
          const yahooUrl = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${batch.join(',')}`;
          const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(yahooUrl)}`;

          try {
            const response = await fetch(proxyUrl);
            if (response.ok) {
              const data = await response.json();
              if (data.quoteResponse?.result) {
                for (const quote of data.quoteResponse.result) {
                  const currentPrice = quote.regularMarketPrice || 0;
                  const jan2026Price = JAN_2026_PRICES[quote.symbol] || currentPrice;
                  const ytdChange = currentPrice - jan2026Price;
                  const ytdChangePercent = jan2026Price > 0 ? ((currentPrice - jan2026Price) / jan2026Price) * 100 : 0;

                  allPrices[quote.symbol] = {
                    price: currentPrice,
                    change: quote.regularMarketChange || 0,
                    changePercent: quote.regularMarketChangePercent || 0,
                    ytdPrice: jan2026Price,
                    ytdChange: ytdChange,
                    ytdChangePercent: ytdChangePercent,
                  };
                }
              }
            }
          } catch (e) {
            console.error('Batch fetch error:', e);
          }
          // Small delay between batches to avoid rate limiting
          await new Promise(r => setTimeout(r, 100));
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
