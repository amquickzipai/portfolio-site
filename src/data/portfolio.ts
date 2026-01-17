export interface Holding {
  ticker: string;
  name: string;
  allocation: number;
  shares: number;
  lastPrice: number;
  costPrice: number;
  theme: string;
  isShort?: boolean;
}

export interface Theme {
  name: string;
  allocation: number;
  holdings: Holding[];
}

export const portfolioSummary = {
  name: "Citrindex Core Portfolio",
  date: "01/04/2026",
  netExposure: 87.13,
  longExposure: 90.76,
  shortExposure: -3.62,
  cash: 12.87,
  grossExposure: 94.38,
  totalValue: 334501440,
};

export const themes: Theme[] = [
  {
    name: "Dynamic AI",
    allocation: 18.32,
    holdings: [
      { ticker: "2454.TW", name: "MediaTek Inc", allocation: 1.07, shares: 76685, lastPrice: 46.80, costPrice: 45.98, theme: "Dynamic AI" },
      { ticker: "AMKR", name: "Amkor Technology", allocation: 1.00, shares: 78160, lastPrice: 42.92, costPrice: 29.58, theme: "Dynamic AI" },
      { ticker: "ACMR", name: "ACM Research", allocation: 0.92, shares: 68714, lastPrice: 44.88, costPrice: 37.81, theme: "Dynamic AI" },
      { ticker: "GOOG", name: "Alphabet Inc", allocation: 0.88, shares: 9349, lastPrice: 315.32, costPrice: 176.14, theme: "Dynamic AI" },
      { ticker: "BABA", name: "Alibaba Group", allocation: 0.83, shares: 17924, lastPrice: 155.74, costPrice: 141.20, theme: "Dynamic AI" },
      { ticker: "ASX", name: "ASE Technology", allocation: 0.80, shares: 158821, lastPrice: 16.86, costPrice: 14.83, theme: "Dynamic AI" },
      { ticker: "SITM", name: "SiTime Corp", allocation: 0.80, shares: 7218, lastPrice: 369.96, costPrice: 287.11, theme: "Dynamic AI" },
      { ticker: "SNPS", name: "Synopsys Inc", allocation: 0.77, shares: 5374, lastPrice: 480.42, costPrice: 438.29, theme: "Dynamic AI" },
      { ticker: "AMAT", name: "Applied Materials", allocation: 0.74, shares: 9246, lastPrice: 268.87, costPrice: 240.89, theme: "Dynamic AI" },
      { ticker: "META", name: "Meta Platforms", allocation: 0.72, shares: 3678, lastPrice: 650.41, costPrice: 640.87, theme: "Dynamic AI" },
      { ticker: "000660.KS", name: "SK Hynix", allocation: 0.65, shares: 4617, lastPrice: 469.32, costPrice: 373.88, theme: "Dynamic AI" },
      { ticker: "3037.TW", name: "Unimicron Technology", allocation: 0.59, shares: 281822, lastPrice: 6.97, costPrice: 6.27, theme: "Dynamic AI" },
      { ticker: "FORM", name: "FormFactor Inc", allocation: 0.57, shares: 32212, lastPrice: 59.19, costPrice: 36.33, theme: "Dynamic AI" },
      { ticker: "SANM", name: "Sanmina Corp", allocation: 0.57, shares: 11906, lastPrice: 159.29, costPrice: 177.76, theme: "Dynamic AI" },
      { ticker: "MTSI", name: "MACOM Technology", allocation: 0.53, shares: 10220, lastPrice: 174.96, costPrice: 172.85, theme: "Dynamic AI" },
      { ticker: "TCEHY", name: "Tencent Holdings", allocation: 0.53, shares: 22134, lastPrice: 80.55, costPrice: 71.95, theme: "Dynamic AI" },
      { ticker: "SYNA", name: "Synaptics Inc", allocation: 0.53, shares: 23436, lastPrice: 75.74, costPrice: 73.66, theme: "Dynamic AI" },
      { ticker: "6981.T", name: "Murata Manufacturing", allocation: 0.53, shares: 85051, lastPrice: 20.76, costPrice: 20.30, theme: "Dynamic AI" },
      { ticker: "4182.T", name: "Mitsubishi Gas Chemical", allocation: 0.53, shares: 96907, lastPrice: 18.16, costPrice: 17.81, theme: "Dynamic AI" },
      { ticker: "KLIC", name: "Kulicke & Soffa", allocation: 0.52, shares: 35827, lastPrice: 48.35, costPrice: 45.61, theme: "Dynamic AI" },
      { ticker: "CC", name: "Chemours Co", allocation: 0.50, shares: 137577, lastPrice: 12.25, costPrice: 12.84, theme: "Dynamic AI" },
      { ticker: "FICO", name: "Fair Isaac Corp", allocation: 0.49, shares: 999, lastPrice: 1643.27, costPrice: 1844.16, theme: "Dynamic AI" },
      { ticker: "BIDU", name: "Baidu Inc", allocation: 0.49, shares: 10809, lastPrice: 150.30, costPrice: 127.04, theme: "Dynamic AI" },
      { ticker: "PRY.MI", name: "Prysmian SpA", allocation: 0.47, shares: 15039, lastPrice: 105.44, costPrice: 98.75, theme: "Dynamic AI" },
      { ticker: "6191.TW", name: "Global Brands Manufacture", allocation: 0.46, shares: 433741, lastPrice: 3.52, costPrice: 4.07, theme: "Dynamic AI" },
      { ticker: "KLAC", name: "KLA Corp", allocation: 0.45, shares: 1177, lastPrice: 1274.47, costPrice: 1222.39, theme: "Dynamic AI" },
      { ticker: "QCOM", name: "Qualcomm Inc", allocation: 0.43, shares: 8259, lastPrice: 172.98, costPrice: 174.19, theme: "Dynamic AI" },
      { ticker: "6121.TW", name: "Simplo Technology", allocation: 0.42, shares: 124307, lastPrice: 11.21, costPrice: 11.57, theme: "Dynamic AI" },
      { ticker: "ALAB", name: "Astera Labs", allocation: 0.38, shares: 7129, lastPrice: 179.56, costPrice: 230.11, theme: "Dynamic AI" },
      { ticker: "TEL", name: "TE Connectivity", allocation: 0.36, shares: 5217, lastPrice: 233.22, costPrice: 225.75, theme: "Dynamic AI" },
      { ticker: "AMD", name: "Advanced Micro Devices", allocation: 0.36, shares: 5359, lastPrice: 223.47, costPrice: 122.84, theme: "Dynamic AI" },
      { ticker: "AKAM", name: "Akamai Technologies", allocation: 0.35, shares: 13577, lastPrice: 85.10, costPrice: 90.61, theme: "Dynamic AI" },
      { ticker: "IOT", name: "Samsara Inc", allocation: 0.32, shares: 31598, lastPrice: 33.92, costPrice: 40.08, theme: "Dynamic AI" },
      { ticker: "FSLY", name: "Fastly Inc", allocation: 0.31, shares: 100554, lastPrice: 10.19, costPrice: 11.99, theme: "Dynamic AI" },
      { ticker: "WULF", name: "TeraWulf Inc", allocation: 0.29, shares: 76971, lastPrice: 12.74, costPrice: 15.30, theme: "Dynamic AI" },
      { ticker: "HPQ", name: "HP Inc", allocation: -0.49, shares: -73615, lastPrice: 22.12, costPrice: 23.45, theme: "Dynamic AI", isShort: true },
      { ticker: "7974.T", name: "Nintendo Co", allocation: -0.50, shares: -24459, lastPrice: 67.77, costPrice: 70.58, theme: "Dynamic AI", isShort: true },
      { ticker: "2357.TW", name: "Asustek Computer", allocation: -0.52, shares: -98279, lastPrice: 17.67, costPrice: 17.57, theme: "Dynamic AI", isShort: true },
      { ticker: "0992.HK", name: "Lenovo Group", allocation: -0.52, shares: -1428840, lastPrice: 1.23, costPrice: 1.21, theme: "Dynamic AI", isShort: true },
      { ticker: "DELL", name: "Dell Technologies", allocation: -0.54, shares: -14042, lastPrice: 127.80, costPrice: 122.94, theme: "Dynamic AI", isShort: true },
    ]
  },
  {
    name: "Fiscal Primacy",
    allocation: 17.64,
    holdings: [
      { ticker: "COPX", name: "Global X Copper Miners ETF", allocation: 3.28, shares: 150312, lastPrice: 73.06, costPrice: 59.96, theme: "Fiscal Primacy" },
      { ticker: "EWY", name: "iShares MSCI South Korea ETF", allocation: 3.27, shares: 106951, lastPrice: 102.22, costPrice: 72.80, theme: "Fiscal Primacy" },
      { ticker: "BA", name: "Boeing Co", allocation: 0.72, shares: 10550, lastPrice: 227.77, costPrice: 208.27, theme: "Fiscal Primacy" },
      { ticker: "ELV.AX", name: "Elevra Lithium", allocation: 0.65, shares: 411513, lastPrice: 5.29, costPrice: 3.44, theme: "Fiscal Primacy" },
      { ticker: "POWL", name: "Powell Industries", allocation: 0.63, shares: 5951, lastPrice: 352.52, costPrice: 276.99, theme: "Fiscal Primacy" },
      { ticker: "CENX", name: "Century Aluminum", allocation: 0.60, shares: 48740, lastPrice: 40.94, costPrice: 29.40, theme: "Fiscal Primacy" },
      { ticker: "FSLR", name: "First Solar Inc", allocation: 0.57, shares: 6924, lastPrice: 274.34, costPrice: 219.33, theme: "Fiscal Primacy" },
      { ticker: "AEIS", name: "Advanced Energy Industries", allocation: 0.54, shares: 8106, lastPrice: 221.99, costPrice: 146.50, theme: "Fiscal Primacy" },
      { ticker: "ALB", name: "Albemarle Corp", allocation: 0.52, shares: 12077, lastPrice: 143.93, costPrice: 117.70, theme: "Fiscal Primacy" },
      { ticker: "ENS", name: "EnerSys", allocation: 0.51, shares: 11407, lastPrice: 150.73, costPrice: 144.46, theme: "Fiscal Primacy" },
      { ticker: "SQM", name: "Quimica Y Minera Chile", allocation: 0.50, shares: 23830, lastPrice: 69.73, costPrice: 59.47, theme: "Fiscal Primacy" },
      { ticker: "VIAV", name: "Viavi Solutions", allocation: 0.48, shares: 88086, lastPrice: 18.15, costPrice: 12.79, theme: "Fiscal Primacy" },
      { ticker: "PAM", name: "Pampa Energia", allocation: 0.43, shares: 16243, lastPrice: 88.01, costPrice: 89.36, theme: "Fiscal Primacy" },
      { ticker: "ENR.DE", name: "Siemens Energy AG", allocation: 0.43, shares: 9935, lastPrice: 143.65, costPrice: 140.21, theme: "Fiscal Primacy" },
      { ticker: "CENER.BR", name: "Cenergy Holdings", allocation: 0.42, shares: 76935, lastPrice: 18.42, costPrice: 14.84, theme: "Fiscal Primacy" },
      { ticker: "CEPU", name: "Central Puerto", allocation: 0.41, shares: 78100, lastPrice: 17.35, costPrice: 16.55, theme: "Fiscal Primacy" },
      { ticker: "TLN", name: "Talen Energy", allocation: 0.40, shares: 3393, lastPrice: 396.73, costPrice: 371.72, theme: "Fiscal Primacy" },
      { ticker: "RR.L", name: "Rolls-Royce Holdings", allocation: 0.40, shares: 82393, lastPrice: 16.12, costPrice: 15.31, theme: "Fiscal Primacy" },
      { ticker: "REVG", name: "REV Group Inc", allocation: 0.39, shares: 20895, lastPrice: 62.29, costPrice: 60.42, theme: "Fiscal Primacy" },
      { ticker: "SGM.AX", name: "Sims Ltd", allocation: 0.39, shares: 106296, lastPrice: 12.18, costPrice: 11.87, theme: "Fiscal Primacy" },
      { ticker: "ENPH", name: "Enphase Energy", allocation: 0.39, shares: 38266, lastPrice: 33.75, costPrice: 32.96, theme: "Fiscal Primacy" },
      { ticker: "ORI.AX", name: "Orica Ltd", allocation: 0.38, shares: 77550, lastPrice: 16.30, costPrice: 16.26, theme: "Fiscal Primacy" },
      { ticker: "FLNC", name: "Fluence Energy", allocation: 0.37, shares: 53893, lastPrice: 23.01, costPrice: 13.45, theme: "Fiscal Primacy" },
      { ticker: "DQ", name: "Daqo New Energy", allocation: 0.35, shares: 39949, lastPrice: 29.66, costPrice: 32.66, theme: "Fiscal Primacy" },
      { ticker: "NPKI", name: "NPK International", allocation: 0.35, shares: 96393, lastPrice: 12.10, costPrice: 11.72, theme: "Fiscal Primacy" },
      { ticker: "SEI", name: "Solaris Energy Infrastructure", allocation: 0.29, shares: 19220, lastPrice: 50.26, costPrice: 42.32, theme: "Fiscal Primacy" },
    ]
  },
  {
    name: "Robotics",
    allocation: 14.60,
    holdings: [
      { ticker: "6954.T", name: "Fanuc Corp", allocation: 1.16, shares: 99410, lastPrice: 38.92, costPrice: 38.42, theme: "Robotics" },
      { ticker: "MGA", name: "Magna International", allocation: 1.09, shares: 66473, lastPrice: 54.66, costPrice: 46.21, theme: "Robotics" },
      { ticker: "ADI", name: "Analog Devices", allocation: 0.67, shares: 8237, lastPrice: 273.74, costPrice: 227.11, theme: "Robotics" },
      { ticker: "INTC", name: "Intel Corp", allocation: 0.64, shares: 54518, lastPrice: 39.38, costPrice: 22.08, theme: "Robotics" },
      { ticker: "SHA.DE", name: "Schaeffler AG", allocation: 0.60, shares: 198402, lastPrice: 10.15, costPrice: 4.51, theme: "Robotics" },
      { ticker: "TER", name: "Teradyne Inc", allocation: 0.59, shares: 9513, lastPrice: 207.56, costPrice: 98.62, theme: "Robotics" },
      { ticker: "HON", name: "Honeywell International", allocation: 0.54, shares: 9146, lastPrice: 195.88, costPrice: 200.41, theme: "Robotics" },
      { ticker: "ROK", name: "Rockwell Automation", allocation: 0.53, shares: 4438, lastPrice: 398.55, costPrice: 309.05, theme: "Robotics" },
      { ticker: "HSAI", name: "Hesai Group", allocation: 0.44, shares: 61791, lastPrice: 24.08, costPrice: 21.99, theme: "Robotics" },
      { ticker: "OUST", name: "Ouster Inc", allocation: 0.44, shares: 63495, lastPrice: 23.37, costPrice: 11.08, theme: "Robotics" },
      { ticker: "UMI.BR", name: "Umicore", allocation: 0.43, shares: 66375, lastPrice: 21.81, costPrice: 11.24, theme: "Robotics" },
      { ticker: "SMTC", name: "Semtech Corp", allocation: 0.43, shares: 19135, lastPrice: 75.26, costPrice: 72.00, theme: "Robotics" },
      { ticker: "6480.T", name: "Nippon Thompson", allocation: 0.43, shares: 273233, lastPrice: 5.23, costPrice: 3.75, theme: "Robotics" },
      { ticker: "ON", name: "ON Semiconductor", allocation: 0.42, shares: 25005, lastPrice: 56.70, costPrice: 54.34, theme: "Robotics" },
      { ticker: "MIDD", name: "Middleby Corp", allocation: 0.41, shares: 9166, lastPrice: 150.77, costPrice: 148.24, theme: "Robotics" },
      { ticker: "TXN", name: "Texas Instruments", allocation: 0.41, shares: 7712, lastPrice: 177.52, costPrice: 175.26, theme: "Robotics" },
      { ticker: "CMG", name: "Chipotle Mexican Grill", allocation: 0.40, shares: 36109, lastPrice: 37.49, costPrice: 37.63, theme: "Robotics" },
      { ticker: "6762.T", name: "TDK Corp", allocation: 0.40, shares: 95452, lastPrice: 14.14, costPrice: 14.85, theme: "Robotics" },
      { ticker: "RBC", name: "RBC Bearings", allocation: 0.40, shares: 2938, lastPrice: 458.79, costPrice: 368.17, theme: "Robotics" },
      { ticker: "SG", name: "Sweetgreen Inc", allocation: 0.40, shares: 192464, lastPrice: 6.93, costPrice: 7.06, theme: "Robotics" },
      { ticker: "6976.T", name: "Taiyo Yuden", allocation: 0.40, shares: 58781, lastPrice: 22.64, costPrice: 22.12, theme: "Robotics" },
      { ticker: "3750.HK", name: "CATL", allocation: 0.37, shares: 18626, lastPrice: 66.04, costPrice: 73.45, theme: "Robotics" },
      { ticker: "CAVA", name: "Cava Group", allocation: 0.37, shares: 20206, lastPrice: 60.55, costPrice: 56.04, theme: "Robotics" },
      { ticker: "2308.TW", name: "Delta Electronics", allocation: 0.36, shares: 38355, lastPrice: 31.68, costPrice: 21.40, theme: "Robotics" },
      { ticker: "RRX", name: "Regal Rexnord", allocation: 0.35, shares: 8055, lastPrice: 146.10, costPrice: 141.43, theme: "Robotics" },
      { ticker: "RAL", name: "Ralliant Corp", allocation: 0.33, shares: 21739, lastPrice: 51.22, costPrice: 48.74, theme: "Robotics" },
      { ticker: "ALNT", name: "Allient Inc", allocation: 0.32, shares: 19439, lastPrice: 55.58, costPrice: 32.20, theme: "Robotics" },
      { ticker: "XPEV", name: "XPeng Inc", allocation: 0.30, shares: 48702, lastPrice: 20.43, costPrice: 21.19, theme: "Robotics" },
      { ticker: "CGNX", name: "Cognex Corp", allocation: 0.28, shares: 25045, lastPrice: 36.93, costPrice: 42.20, theme: "Robotics" },
      { ticker: "6471.T", name: "NSK Ltd", allocation: 0.22, shares: 118702, lastPrice: 6.24, costPrice: 4.69, theme: "Robotics" },
      { ticker: "WRD", name: "WeRide Inc", allocation: 0.17, shares: 59138, lastPrice: 9.39, costPrice: 11.24, theme: "Robotics" },
      { ticker: "GE", name: "General Electric", allocation: 0.16, shares: 1639, lastPrice: 320.75, costPrice: 235.75, theme: "Robotics" },
      { ticker: "CA1.DE", name: "Circus SE", allocation: 0.13, shares: 31171, lastPrice: 14.08, costPrice: 14.53, theme: "Robotics" },
    ]
  },
  {
    name: "Nat Gas",
    allocation: 10.18,
    holdings: [
      { ticker: "EQT", name: "EQT Corp", allocation: 0.46, shares: 29057, lastPrice: 53.46, costPrice: 42.65, theme: "Nat Gas" },
      { ticker: "D", name: "Dominion Energy", allocation: 0.45, shares: 25652, lastPrice: 59.24, costPrice: 60.62, theme: "Nat Gas" },
      { ticker: "CECO", name: "CECO Environmental", allocation: 0.45, shares: 25049, lastPrice: 59.79, costPrice: 50.92, theme: "Nat Gas" },
      { ticker: "CRK", name: "Comstock Resources", allocation: 0.44, shares: 62475, lastPrice: 23.58, costPrice: 15.48, theme: "Nat Gas" },
      { ticker: "THR", name: "Thermon Group", allocation: 0.42, shares: 36909, lastPrice: 37.63, costPrice: 32.80, theme: "Nat Gas" },
      { ticker: "BKR", name: "Baker Hughes", allocation: 0.40, shares: 28160, lastPrice: 47.14, costPrice: 44.64, theme: "Nat Gas" },
      { ticker: "EE", name: "Excelerate Energy", allocation: 0.36, shares: 43074, lastPrice: 28.34, costPrice: 28.17, theme: "Nat Gas" },
      { ticker: "LBRT", name: "Liberty Energy", allocation: 0.36, shares: 64612, lastPrice: 18.88, costPrice: 15.32, theme: "Nat Gas" },
      { ticker: "WCP.TO", name: "Whitecap Resources", allocation: 0.36, shares: 141189, lastPrice: 8.51, costPrice: 7.49, theme: "Nat Gas" },
      { ticker: "MG", name: "Mistras Group", allocation: 0.33, shares: 85677, lastPrice: 12.92, costPrice: 12.98, theme: "Nat Gas" },
      { ticker: "PBA", name: "Pembina Pipeline", allocation: 0.32, shares: 27929, lastPrice: 38.57, costPrice: 37.93, theme: "Nat Gas" },
      { ticker: "ECG", name: "Everus Construction", allocation: 0.29, shares: 10774, lastPrice: 89.18, costPrice: 36.18, theme: "Nat Gas" },
      { ticker: "EFX.TO", name: "Enerflex Ltd", allocation: 0.28, shares: 59589, lastPrice: 15.90, costPrice: 10.75, theme: "Nat Gas" },
      { ticker: "ET", name: "Energy Transfer LP", allocation: 0.27, shares: 54910, lastPrice: 16.59, costPrice: 16.68, theme: "Nat Gas" },
      { ticker: "EXE", name: "Expand Energy", allocation: 0.27, shares: 8248, lastPrice: 109.77, costPrice: 98.59, theme: "Nat Gas" },
      { ticker: "DTM", name: "DT Midstream", allocation: 0.26, shares: 7064, lastPrice: 120.99, costPrice: 109.61, theme: "Nat Gas" },
      { ticker: "TPL", name: "Texas Pacific Land", allocation: 0.24, shares: 2699, lastPrice: 297.97, costPrice: 1011.13, theme: "Nat Gas" },
      { ticker: "WMB", name: "Williams Cos", allocation: 0.24, shares: 13127, lastPrice: 60.85, costPrice: 62.53, theme: "Nat Gas" },
      { ticker: "GLEN.L", name: "Glencore PLC", allocation: 0.23, shares: 139302, lastPrice: 5.50, costPrice: 4.72, theme: "Nat Gas" },
      { ticker: "NRG", name: "NRG Energy", allocation: 0.22, shares: 4528, lastPrice: 166.16, costPrice: 169.93, theme: "Nat Gas" },
      { ticker: "EVRG", name: "Evergy Inc", allocation: 0.22, shares: 10138, lastPrice: 73.08, costPrice: 77.50, theme: "Nat Gas" },
      { ticker: "POU.TO", name: "Paramount Resources", allocation: 0.22, shares: 41647, lastPrice: 17.54, costPrice: 15.63, theme: "Nat Gas" },
      { ticker: "FE", name: "FirstEnergy Corp", allocation: 0.22, shares: 16080, lastPrice: 45.26, costPrice: 46.56, theme: "Nat Gas" },
      { ticker: "DTE", name: "DTE Energy", allocation: 0.21, shares: 5490, lastPrice: 130.36, costPrice: 137.60, theme: "Nat Gas" },
      { ticker: "PUMP", name: "ProPetro Holding", allocation: 0.21, shares: 71990, lastPrice: 9.82, costPrice: 5.54, theme: "Nat Gas" },
      { ticker: "EXC", name: "Exelon Corp", allocation: 0.21, shares: 16067, lastPrice: 43.92, costPrice: 46.60, theme: "Nat Gas" },
      { ticker: "KGS", name: "Kodiak Gas Services", allocation: 0.21, shares: 18712, lastPrice: 37.64, costPrice: 38.94, theme: "Nat Gas" },
      { ticker: "AES", name: "AES Corp", allocation: 0.21, shares: 47439, lastPrice: 14.82, costPrice: 13.92, theme: "Nat Gas" },
      { ticker: "AEP", name: "American Electric Power", allocation: 0.21, shares: 6052, lastPrice: 115.81, costPrice: 123.72, theme: "Nat Gas" },
      { ticker: "TOU.TO", name: "Tourmaline Oil", allocation: 0.21, shares: 15508, lastPrice: 44.68, costPrice: 42.23, theme: "Nat Gas" },
      { ticker: "TRGP", name: "Targa Resources", allocation: 0.21, shares: 3707, lastPrice: 186.77, costPrice: 169.88, theme: "Nat Gas" },
      { ticker: "ENB", name: "Enbridge Inc", allocation: 0.20, shares: 13920, lastPrice: 48.12, costPrice: 47.21, theme: "Nat Gas" },
      { ticker: "PWR", name: "Quanta Services", allocation: 0.20, shares: 1490, lastPrice: 439.68, costPrice: 437.52, theme: "Nat Gas" },
      { ticker: "XEL", name: "Xcel Energy", allocation: 0.20, shares: 8735, lastPrice: 74.68, costPrice: 81.10, theme: "Nat Gas" },
      { ticker: "ETR", name: "Entergy Corp", allocation: 0.19, shares: 6789, lastPrice: 93.86, costPrice: 96.02, theme: "Nat Gas" },
      { ticker: "BIR.TO", name: "Birchcliff Energy", allocation: 0.17, shares: 102573, lastPrice: 5.40, costPrice: 4.19, theme: "Nat Gas" },
    ]
  },
  {
    name: "Small Themes",
    allocation: 9.92,
    holdings: [
      { ticker: "RDW", name: "Redwire Corp", allocation: 0.64, shares: 237076, lastPrice: 9.03, costPrice: 7.02, theme: "Small Themes" },
      { ticker: "RKT", name: "Rocket Cos", allocation: 0.62, shares: 104861, lastPrice: 19.88, costPrice: 19.62, theme: "Small Themes" },
      { ticker: "DAVE", name: "Dave Inc", allocation: 0.52, shares: 7971, lastPrice: 219.48, costPrice: 208.78, theme: "Small Themes" },
      { ticker: "NRDS", name: "NerdWallet Inc", allocation: 0.51, shares: 132371, lastPrice: 12.93, costPrice: 15.93, theme: "Small Themes" },
      { ticker: "VSCO", name: "Victoria's Secret", allocation: 0.49, shares: 30520, lastPrice: 53.36, costPrice: 30.39, theme: "Small Themes" },
      { ticker: "CHH", name: "Choice Hotels", allocation: 0.40, shares: 14061, lastPrice: 96.10, costPrice: 94.97, theme: "Small Themes" },
      { ticker: "UAL", name: "United Airlines", allocation: 0.40, shares: 11798, lastPrice: 113.01, costPrice: 112.85, theme: "Small Themes" },
      { ticker: "KER.PA", name: "Kering", allocation: 0.35, shares: 3282, lastPrice: 357.33, costPrice: 318.74, theme: "Small Themes" },
      { ticker: "CFR.SW", name: "Richemont", allocation: 0.35, shares: 5347, lastPrice: 217.45, costPrice: 213.41, theme: "Small Themes" },
      { ticker: "SPHR", name: "Sphere Entertainment", allocation: 0.34, shares: 12134, lastPrice: 94.30, costPrice: 57.56, theme: "Small Themes" },
      { ticker: "ZTO", name: "ZTO Express", allocation: 0.34, shares: 53303, lastPrice: 21.46, costPrice: 21.41, theme: "Small Themes" },
      { ticker: "TREE", name: "LendingTree Inc", allocation: 0.33, shares: 21651, lastPrice: 51.50, costPrice: 52.71, theme: "Small Themes" },
      { ticker: "UPBD", name: "Upbound Group", allocation: 0.33, shares: 64185, lastPrice: 17.35, costPrice: 17.78, theme: "Small Themes" },
      { ticker: "QNST", name: "QuinStreet Inc", allocation: 0.32, shares: 76798, lastPrice: 14.08, costPrice: 14.86, theme: "Small Themes" },
      { ticker: "MC.PA", name: "LVMH", allocation: 0.32, shares: 1429, lastPrice: 752.90, costPrice: 554.75, theme: "Small Themes" },
      { ticker: "EVER", name: "EverQuote Inc", allocation: 0.32, shares: 41454, lastPrice: 25.43, costPrice: 27.53, theme: "Small Themes" },
      { ticker: "MAX", name: "MediaAlpha Inc", allocation: 0.32, shares: 88193, lastPrice: 11.95, costPrice: 12.94, theme: "Small Themes" },
      { ticker: "REAL", name: "The RealReal", allocation: 0.31, shares: 66668, lastPrice: 15.80, costPrice: 8.04, theme: "Small Themes" },
      { ticker: "TNIE.DE", name: "Tonies SE", allocation: 0.29, shares: 81549, lastPrice: 12.04, costPrice: 10.01, theme: "Small Themes" },
      { ticker: "DIBS", name: "1stDibs.com", allocation: 0.29, shares: 162898, lastPrice: 5.90, costPrice: 3.82, theme: "Small Themes" },
      { ticker: "EVLV", name: "Evolv Technologies", allocation: 0.28, shares: 142110, lastPrice: 6.70, costPrice: 7.36, theme: "Small Themes" },
      { ticker: "LC", name: "LendingClub", allocation: 0.27, shares: 47774, lastPrice: 19.12, costPrice: 16.51, theme: "Small Themes" },
      { ticker: "IPAR", name: "Inter Parfums", allocation: 0.25, shares: 9664, lastPrice: 85.44, costPrice: 95.05, theme: "Small Themes" },
      { ticker: "1913.HK", name: "Prada SpA", allocation: 0.23, shares: 134127, lastPrice: 5.74, costPrice: 5.16, theme: "Small Themes" },
      { ticker: "RMS.PA", name: "Hermes International", allocation: 0.23, shares: 312, lastPrice: 2468.20, costPrice: 2531.70, theme: "Small Themes" },
      { ticker: "WOSG.L", name: "Watches of Switzerland", allocation: 0.21, shares: 113854, lastPrice: 6.25, costPrice: 5.89, theme: "Small Themes" },
      { ticker: "RYAAY", name: "Ryanair Holdings", allocation: 0.20, shares: 9107, lastPrice: 72.50, costPrice: 65.68, theme: "Small Themes" },
      { ticker: "SBUX", name: "Starbucks Corp", allocation: 0.19, shares: 7718, lastPrice: 83.97, costPrice: 82.86, theme: "Small Themes" },
      { ticker: "GAP", name: "Gap Inc", allocation: 0.17, shares: 23021, lastPrice: 25.19, costPrice: 21.50, theme: "Small Themes" },
    ]
  },
  {
    name: "Med-Tech & Healthcare",
    allocation: 6.48,
    holdings: [
      { ticker: "TOI", name: "Oncology Institute", allocation: 1.02, shares: 928812, lastPrice: 3.67, costPrice: 0.82, theme: "Med-Tech & Healthcare" },
      { ticker: "ALHC", name: "Alignment Healthcare", allocation: 0.96, shares: 159199, lastPrice: 20.22, costPrice: 13.66, theme: "Med-Tech & Healthcare" },
      { ticker: "MOH", name: "Molina Healthcare", allocation: 0.65, shares: 12258, lastPrice: 178.46, costPrice: 163.69, theme: "Med-Tech & Healthcare" },
      { ticker: "GMED", name: "Globus Medical", allocation: 0.65, shares: 24894, lastPrice: 87.30, costPrice: 83.64, theme: "Med-Tech & Healthcare" },
      { ticker: "PEN", name: "Penumbra Inc", allocation: 0.63, shares: 6861, lastPrice: 309.42, costPrice: 278.51, theme: "Med-Tech & Healthcare" },
      { ticker: "SIBN", name: "SI-Bone Inc", allocation: 0.63, shares: 106341, lastPrice: 19.79, costPrice: 17.92, theme: "Med-Tech & Healthcare" },
      { ticker: "FTRE", name: "Fortrea Holdings", allocation: 0.61, shares: 122166, lastPrice: 16.81, costPrice: 10.12, theme: "Med-Tech & Healthcare" },
      { ticker: "AORT", name: "Artivion Inc", allocation: 0.54, shares: 40699, lastPrice: 44.46, costPrice: 45.12, theme: "Med-Tech & Healthcare" },
      { ticker: "PGNY", name: "Progyny Inc", allocation: 0.44, shares: 56968, lastPrice: 25.74, costPrice: 23.02, theme: "Med-Tech & Healthcare" },
      { ticker: "ATEC", name: "Alphatec Holdings", allocation: 0.34, shares: 54154, lastPrice: 20.76, costPrice: 19.87, theme: "Med-Tech & Healthcare" },
    ]
  },
  {
    name: "GLP-1 Long/Short",
    allocation: 3.95,
    holdings: [
      { ticker: "LLY", name: "Eli Lilly & Co", allocation: 1.54, shares: 4777, lastPrice: 1080.36, costPrice: 439.39, theme: "GLP-1 Long/Short" },
      { ticker: "WW", name: "WW International", allocation: 1.15, shares: 122125, lastPrice: 31.44, costPrice: 38.83, theme: "GLP-1 Long/Short" },
      { ticker: "LWAY", name: "Lifeway Foods", allocation: 0.57, shares: 84352, lastPrice: 22.80, costPrice: 26.22, theme: "GLP-1 Long/Short" },
      { ticker: "NGVC", name: "Natural Grocers", allocation: 0.33, shares: 44312, lastPrice: 24.70, costPrice: 39.99, theme: "GLP-1 Long/Short" },
      { ticker: "PLNT", name: "Planet Fitness", allocation: 0.22, shares: 6681, lastPrice: 109.73, costPrice: 103.24, theme: "GLP-1 Long/Short" },
      { ticker: "GALD.SW", name: "Galderma Group", allocation: 0.21, shares: 3379, lastPrice: 204.88, costPrice: 156.22, theme: "GLP-1 Long/Short" },
      { ticker: "WVE", name: "Wave Life Sciences", allocation: 0.19, shares: 39832, lastPrice: 15.95, costPrice: 15.98, theme: "GLP-1 Long/Short" },
      { ticker: "ARWR", name: "Arrowhead Pharmaceuticals", allocation: 0.19, shares: 9338, lastPrice: 67.79, costPrice: 68.16, theme: "GLP-1 Long/Short" },
      { ticker: "LTH", name: "Life Time Group", allocation: 0.18, shares: 22009, lastPrice: 26.69, costPrice: 29.20, theme: "GLP-1 Long/Short" },
      { ticker: "HALO", name: "Halozyme Therapeutics", allocation: 0.17, shares: 8068, lastPrice: 70.31, costPrice: 68.39, theme: "GLP-1 Long/Short" },
      { ticker: "BN.PA", name: "Danone", allocation: 0.16, shares: 5905, lastPrice: 89.20, costPrice: 89.33, theme: "GLP-1 Long/Short" },
      { ticker: "ALNY", name: "Alnylam Pharmaceuticals", allocation: 0.11, shares: 900, lastPrice: 400.17, costPrice: 400.23, theme: "GLP-1 Long/Short" },
      { ticker: "DPZ", name: "Domino's Pizza", allocation: -0.09, shares: -714, lastPrice: 425.28, costPrice: 478.05, theme: "GLP-1 Long/Short", isShort: true },
      { ticker: "EAT", name: "Brinker International", allocation: -0.10, shares: -2109, lastPrice: 151.52, costPrice: 160.51, theme: "GLP-1 Long/Short", isShort: true },
      { ticker: "QSR", name: "Restaurant Brands", allocation: -0.10, shares: -4849, lastPrice: 67.81, costPrice: 71.14, theme: "GLP-1 Long/Short", isShort: true },
      { ticker: "YUM", name: "Yum! Brands", allocation: -0.10, shares: -2313, lastPrice: 150.49, costPrice: 147.79, theme: "GLP-1 Long/Short", isShort: true },
      { ticker: "HRL", name: "Hormel Foods", allocation: -0.12, shares: -17413, lastPrice: 23.39, costPrice: 29.52, theme: "GLP-1 Long/Short", isShort: true },
      { ticker: "DVA", name: "DaVita Inc", allocation: -0.18, shares: -5164, lastPrice: 114.51, costPrice: 136.47, theme: "GLP-1 Long/Short", isShort: true },
      { ticker: "SHAK", name: "Shake Shack", allocation: -0.18, shares: -7281, lastPrice: 83.47, costPrice: 137.77, theme: "GLP-1 Long/Short", isShort: true },
      { ticker: "FMS", name: "Fresenius Medical Care", allocation: -0.19, shares: -27473, lastPrice: 23.51, costPrice: 19.63, theme: "GLP-1 Long/Short", isShort: true },
    ]
  },
  {
    name: "Electronic Warfare",
    allocation: 3.06,
    holdings: [
      { ticker: "LPTH", name: "LightPath Technologies", allocation: 0.43, shares: 122616, lastPrice: 11.72, costPrice: 3.10, theme: "Electronic Warfare" },
      { ticker: "AVAV", name: "AeroVironment", allocation: 0.41, shares: 5397, lastPrice: 256.19, costPrice: 243.01, theme: "Electronic Warfare" },
      { ticker: "KOG.OL", name: "Kongsberg Gruppen", allocation: 0.41, shares: 51441, lastPrice: 26.77, costPrice: 25.50, theme: "Electronic Warfare" },
      { ticker: "HAG.DE", name: "Hensoldt AG", allocation: 0.41, shares: 15268, lastPrice: 89.27, costPrice: 85.90, theme: "Electronic Warfare" },
      { ticker: "LDO.MI", name: "Leonardo SpA", allocation: 0.35, shares: 19489, lastPrice: 60.09, costPrice: 57.68, theme: "Electronic Warfare" },
      { ticker: "MOB.AX", name: "Mobilicom Ltd", allocation: 0.32, shares: 155659, lastPrice: 6.79, costPrice: 3.50, theme: "Electronic Warfare" },
      { ticker: "PL", name: "Planet Labs", allocation: 0.30, shares: 48842, lastPrice: 20.41, costPrice: 19.18, theme: "Electronic Warfare" },
      { ticker: "FEIM", name: "Frequency Electronics", allocation: 0.29, shares: 19468, lastPrice: 50.55, costPrice: 19.64, theme: "Electronic Warfare" },
      { ticker: "LASR", name: "nLIGHT Inc", allocation: 0.14, shares: 12421, lastPrice: 38.37, costPrice: 18.04, theme: "Electronic Warfare" },
    ]
  },
  {
    name: "Standalone Positions",
    allocation: 2.91,
    holdings: [
      { ticker: "TIC", name: "TIC Solutions Inc", allocation: 2.91, shares: 985510, lastPrice: 9.89, costPrice: 13.45, theme: "Standalone Positions" },
    ]
  },
];

export const getAllHoldings = (): Holding[] => {
  return themes.flatMap(theme => theme.holdings);
};

export const getLongHoldings = (): Holding[] => {
  return getAllHoldings().filter(h => !h.isShort);
};

export const getShortHoldings = (): Holding[] => {
  return getAllHoldings().filter(h => h.isShort);
};
