import { NextRequest, NextResponse } from 'next/server';

interface YahooQuote {
  symbol: string;
  regularMarketPrice: number;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
}

interface YahooResponse {
  quoteResponse: {
    result: YahooQuote[];
  };
}

// Jan 2, 2026 reference prices (first trading day of 2026)
const JAN_2026_PRICES: Record<string, number> = {
  // Watchlist stocks
  'ACN': 361.50, 'CHRW': 98.20, 'APP': 312.45, 'SE': 108.30, 'CVNA': 198.75,
  'AMKR': 42.10, 'ASX': 16.50, 'CC': 12.40, 'MOH': 168.90, 'NRDS': 15.20,
  'HII': 245.80, 'SPHR': 88.50, 'DAVE': 205.30, 'RKT': 18.90, 'EVER': 26.80,
  'MAX': 12.50, 'UAL': 110.40, 'CHH': 93.20, 'PAM': 86.50, 'CEPU': 16.20,
  'ACMR': 43.50, 'BABA': 152.30, 'BIDU': 145.80, 'TCEHY': 78.90,
  'TER': 195.40, 'ROK': 385.20, 'HSAI': 22.80, 'OUST': 21.50,
  'LLY': 1045.60, 'ARWR': 66.40, 'ALNY': 395.80, 'TOI': 3.45,
  'VSCO': 48.90, 'REAL': 14.20, 'IPAR': 88.30, 'JMIA': 4.85,
  'SNPS': 465.80, 'BA': 215.40, 'RDW': 8.20, 'PL': 18.90, 'WPP': 52.30,
  // Portfolio holdings
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

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const symbols = searchParams.get('symbols');

  if (!symbols) {
    return NextResponse.json({ error: 'No symbols provided' }, { status: 400 });
  }

  try {
    const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(symbols)}`;

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
      },
      next: { revalidate: 30 },
    });

    if (!response.ok) {
      throw new Error(`Yahoo Finance API error: ${response.status}`);
    }

    const data: YahooResponse = await response.json();

    const prices: Record<string, {
      price: number;
      change: number;
      changePercent: number;
      ytdPrice: number;
      ytdChange: number;
      ytdChangePercent: number;
    }> = {};

    for (const quote of data.quoteResponse.result) {
      const currentPrice = quote.regularMarketPrice || 0;
      const jan2026Price = JAN_2026_PRICES[quote.symbol] || currentPrice;
      const ytdChange = currentPrice - jan2026Price;
      const ytdChangePercent = jan2026Price > 0 ? ((currentPrice - jan2026Price) / jan2026Price) * 100 : 0;

      prices[quote.symbol] = {
        price: currentPrice,
        change: quote.regularMarketChange || 0,
        changePercent: quote.regularMarketChangePercent || 0,
        ytdPrice: jan2026Price,
        ytdChange: ytdChange,
        ytdChangePercent: ytdChangePercent,
      };
    }

    return NextResponse.json(prices);
  } catch (error) {
    console.error('Error fetching prices:', error);
    return NextResponse.json({});
  }
}
