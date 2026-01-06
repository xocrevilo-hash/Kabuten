export interface Company {
  code: string;
  name: string;
  nameJp: string;
  themes: string[];
  price: number;
  priceChange: number;
  marketCap: string;
  revenue: string;
  per: string;
  pbr: string;
  founded: string;
  ceo: string;
  outlook: {
    title: string;
    content: string;
  }[];
}

const companies: { [code: string]: Company } = {
  "4755": {
    code: "4755 JP",
    name: "Rakuten",
    nameJp: "楽天",
    themes: ["E-commerce", "Telecom", "Bank"],
    price: 1245,
    priceChange: 2.35,
    marketCap: "¥1.65T",
    revenue: "¥2.09T",
    per: "—",
    pbr: "2.68",
    founded: "1997",
    ceo: "Hiroshi Mikitani",
    outlook: [
      {
        title: "The Mobile Breakthrough Moment:",
        content: "After years of losses, Rakuten Mobile just crossed the profitability threshold—December 2024 delivered ¥2.3 billion in monthly EBITDA. With 9.5 million subscribers and Net ARPU climbing to ¥2,474 (+¥114 YoY), could this be the inflection point bulls have been waiting for?"
      },
      {
        title: "The Ecosystem Flywheel Accelerates:",
        content: "Here's the magic: Rakuten Mobile subscribers spend 47% more on Rakuten Ichiba than non-subscribers. This isn't just a mobile play—it's a customer acquisition engine for the entire ecosystem!"
      },
      {
        title: "AI Becoming the Secret Weapon:",
        content: "Rakuten's AI investments are delivering jaw-dropping results—search ad clickthrough rates jumped 13.7% in Q1 2025, while ad revenue per request surged 5.9%."
      },
      {
        title: "Debt Cloud Finally Lifting:",
        content: "The refinancing nightmare is over! Rakuten secured funding for all bonds through end-FY2025, issued domestic perpetual subordinated bonds in October 2025, and earned a rating upgrade to 'Stable.'"
      },
      {
        title: "Key Risks:",
        content: "What could derail the story? Intensifying competition from incumbents driving up customer acquisition costs; ecosystem synergies failing to materialize at expected levels; regulatory crackdowns on telecom pricing or data practices."
      }
    ]
  },
  "6758": {
    code: "6758 JP",
    name: "Sony",
    nameJp: "ソニー",
    themes: ["Electronics", "Entertainment", "Gaming"],
    price: 12850,
    priceChange: 1.25,
    marketCap: "¥15.8T",
    revenue: "¥11.5T",
    per: "18.5",
    pbr: "1.95",
    founded: "1946",
    ceo: "Kenichiro Yoshida",
    outlook: [
      {
        title: "PlayStation 5 Dominance:",
        content: "PS5 sales hit 50 million units globally, with gaming division margins expanding to record highs. The shift to digital downloads and subscription services (PlayStation Plus) creates recurring revenue streams."
      },
      {
        title: "Entertainment Portfolio Strength:",
        content: "Sony Pictures and Sony Music continue to deliver blockbuster hits. Strategic investments in anime and music catalogs provide long-term content value in the streaming era."
      },
      {
        title: "Image Sensor Leadership:",
        content: "Sony controls 50% of the global smartphone camera sensor market. As smartphones push toward better cameras, Sony's technology remains irreplaceable for Apple, Samsung, and Chinese manufacturers."
      },
      {
        title: "Financial Services Hidden Gem:",
        content: "Sony Financial (banking and insurance) contributes stable profits that many investors overlook. This diversification provides downside protection during tech cycles."
      },
      {
        title: "Key Risks:",
        content: "Console cycle maturity, competition from Xbox and Nintendo, yen volatility affecting overseas earnings, and potential disruption in sensor technology from emerging competitors."
      }
    ]
  },
  "7203": {
    code: "7203 JP",
    name: "Toyota",
    nameJp: "トヨタ",
    themes: ["Automotive", "Manufacturing"],
    price: 2845,
    priceChange: -0.85,
    marketCap: "¥37.2T",
    revenue: "¥39.5T",
    per: "9.2",
    pbr: "1.05",
    founded: "1937",
    ceo: "Koji Sato",
    outlook: [
      {
        title: "EV Strategy Under Scrutiny:",
        content: "Toyota's bet on hybrid technology faces pressure as global markets accelerate EV adoption. The company's planned $35 billion EV investment by 2030 aims to catch up with Tesla and BYD."
      },
      {
        title: "Production System Excellence:",
        content: "Despite supply chain disruptions, Toyota's legendary 'Just-in-Time' manufacturing and quality control maintain industry-leading profit margins. Operating margin of 10%+ outpaces most competitors."
      },
      {
        title: "Hydrogen Dreams:",
        content: "Toyota's hydrogen fuel cell technology could be a game-changer for commercial vehicles and long-haul transport, though mainstream adoption remains years away."
      },
      {
        title: "China Exposure:",
        content: "Toyota generates 30% of profits from China, where local EV makers like BYD are gaining market share rapidly. Can Toyota maintain its position against aggressive domestic competition?"
      },
      {
        title: "Key Risks:",
        content: "Slow EV transition timing, rising competition in key markets, dependence on hybrid technology as bridge strategy, and potential tariffs on Japanese auto exports."
      }
    ]
  },
  "9984": {
    code: "9984 JP",
    name: "SoftBank Group",
    nameJp: "ソフトバンクグループ",
    themes: ["Telecom", "Investment", "Technology"],
    price: 8420,
    priceChange: 3.15,
    marketCap: "¥12.4T",
    revenue: "¥6.2T",
    per: "15.8",
    pbr: "1.42",
    founded: "1981",
    ceo: "Masayoshi Son",
    outlook: [
      {
        title: "Arm Holdings IPO Success:",
        content: "The September 2023 Arm IPO valued at $54 billion provided SoftBank with a massive win. Arm's AI chip architecture positions it as a key player in the AI revolution, with 99% of smartphones using Arm designs."
      },
      {
        title: "Vision Fund Recovery:",
        content: "After brutal 2022 losses, Vision Fund portfolio companies are rebounding. Investments in AI, automation, and enterprise software are gaining traction as tech valuations stabilize."
      },
      {
        title: "Alibaba Stake Monetization:",
        content: "SoftBank's $50+ billion Alibaba stake provides flexibility for buybacks and investments. Strategic stake sales have reduced debt and improved the discount to NAV."
      },
      {
        title: "AI Infrastructure Bet:",
        content: "Masayoshi Son's aggressive push into AI infrastructure, data centers, and semiconductors could position SoftBank as the 'arms dealer' of the AI boom."
      },
      {
        title: "Key Risks:",
        content: "Concentrated portfolio exposure, Masa Son's unpredictable deal-making, leverage concerns, tech sector volatility, and geopolitical tensions affecting China investments."
      }
    ]
  },
  "8306": {
    code: "8306 JP",
    name: "Mitsubishi UFJ Financial",
    nameJp: "三菱UFJフィナンシャル・グループ",
    themes: ["Banking", "Financial Services"],
    price: 1685,
    priceChange: 0.95,
    marketCap: "¥19.8T",
    revenue: "¥7.8T",
    per: "12.3",
    pbr: "0.68",
    founded: "1919",
    ceo: "Hironori Kamezawa",
    outlook: [
      {
        title: "Interest Rate Revival:",
        content: "Bank of Japan's pivot away from negative rates is a game-changer for MUFG. Higher rates expand net interest margins, with each 0.25% rate hike potentially adding ¥100 billion in annual profit."
      },
      {
        title: "Global Footprint:",
        content: "MUFG's overseas operations (40% of profits) include Union Bank in the US and strong positions in Southeast Asia. This geographic diversification reduces dependence on Japan's stagnant economy."
      },
      {
        title: "Digital Transformation:",
        content: "Heavy investment in fintech, blockchain, and digital currencies positions MUFG to lead Japan's banking digital revolution. Partnership with Akamai for payment infrastructure shows forward thinking."
      },
      {
        title: "Shareholder Returns:",
        content: "With PBR below 0.7x, MUFG's aggressive buyback program and rising dividends make it a value investor's dream. The bank targets 50% payout ratio with room to increase."
      },
      {
        title: "Key Risks:",
        content: "Japan's aging population reducing loan demand, real estate exposure if property markets weaken, regulatory capital requirements limiting returns, and credit quality concerns in a recession."
      }
    ]
  },
  "8035": {
    code: "8035 JP",
    name: "Tokyo Electron",
    nameJp: "東京エレクトロン",
    themes: ["Semiconductor", "Manufacturing Equipment", "Technology"],
    price: 23450,
    priceChange: 1.85,
    marketCap: "¥11.2T",
    revenue: "¥2.2T",
    per: "25.3",
    pbr: "6.12",
    founded: "1963",
    ceo: "Toshiki Kawai",
    outlook: [
      {
        title: "AI Chip Boom Fueling Unprecedented Demand:",
        content: "Tokyo Electron sits at the heart of the AI revolution—every NVIDIA, AMD, and Intel chip requires their equipment to manufacture. With global semiconductor capex projected to hit $180 billion in 2025, TEL's order book is overflowing. The company just raised guidance for the third consecutive quarter!"
      },
      {
        title: "EUV and Advanced Packaging Dominance:",
        content: "TEL controls 90% of the coater/developer market for EUV lithography—the most critical bottleneck in cutting-edge chip production. As TSMC, Samsung, and Intel race to 2nm, TEL's technology is literally irreplaceable."
      },
      {
        title: "China Risk Overstated?:",
        content: "While US export restrictions have hit China sales, TEL has pivoted masterfully—legacy node equipment still ships freely, and domestic Japanese/Korean/Taiwan customers are ramping faster than expected to fill the gap."
      },
      {
        title: "Shareholder Returns Accelerating:",
        content: "Management announced a massive ¥300 billion buyback program and raised dividends 25% YoY. With net cash of ¥400 billion, the balance sheet is a fortress."
      },
      {
        title: "Key Risks:",
        content: "Semiconductor cycles remain brutal—capex cuts could come fast if AI demand disappoints. Geopolitical escalation could further restrict China sales. Valuation at 25x earnings assumes continued growth execution."
      }
    ]
  },
  "6146": {
    code: "6146 JP",
    name: "Disco",
    nameJp: "ディスコ",
    themes: ["Semiconductor", "Precision Equipment", "Technology"],
    price: 38900,
    priceChange: 2.45,
    marketCap: "¥4.2T",
    revenue: "¥320B",
    per: "32.1",
    pbr: "8.45",
    founded: "1937",
    ceo: "Kazuma Sekiya",
    outlook: [
      {
        title: "The 'Picks and Shovels' of AI:",
        content: "Every AI chip must be precisely cut and ground—and Disco owns 80% of the global dicing saw market. Their precision grinders achieve tolerances measured in microns. When NVIDIA ships more GPUs, Disco ships more equipment. It's that simple."
      },
      {
        title: "HBM Packaging Driving New Growth Vector:",
        content: "High Bandwidth Memory (HBM) requires ultra-precise wafer thinning—Disco's specialty. With HBM demand up 300% YoY for AI applications, this segment alone could add ¥50 billion in annual revenue."
      },
      {
        title: "Pricing Power Like No Other:",
        content: "Disco regularly raises prices 5-10% annually and customers pay without complaint—there's simply no alternative at their quality level. Gross margins consistently exceed 55%, among the highest in the industry."
      },
      {
        title: "Unique Corporate Culture:",
        content: "The 'Disco Values' management system creates intense employee ownership. Profit-sharing means factory workers earn bonuses equivalent to 6+ months salary in good years. Turnover is near zero."
      },
      {
        title: "Key Risks:",
        content: "Extremely high valuation (32x earnings) leaves no room for error. Customer concentration with TSMC/Samsung creates dependency. A semiconductor downturn would hit both volume and pricing power."
      }
    ]
  },
  "6857": {
    code: "6857 JP",
    name: "Advantest",
    nameJp: "アドバンテスト",
    themes: ["Semiconductor", "Testing Equipment", "Technology"],
    price: 7250,
    priceChange: 3.12,
    marketCap: "¥5.4T",
    revenue: "¥560B",
    per: "28.7",
    pbr: "7.23",
    founded: "1954",
    ceo: "Yoshiaki Yoshida",
    outlook: [
      {
        title: "Every AI Chip Must Be Tested:",
        content: "Advantest dominates semiconductor test equipment with 55% global market share. Here's the kicker: AI chips require 10x more testing time than traditional processors due to their complexity. More AI = more Advantest revenue per chip."
      },
      {
        title: "Memory Testing Renaissance:",
        content: "HBM memory for AI requires extensive testing—Advantest's memory test systems are seeing order growth of 80% YoY. This segment was dormant for years and has suddenly become a growth engine."
      },
      {
        title: "Recurring Revenue Transformation:",
        content: "Software and services now contribute 25% of revenue, up from 10% five years ago. Test program development and maintenance create sticky, high-margin recurring income."
      },
      {
        title: "Geographic Diversification Paying Off:",
        content: "While Japan remains home base, Advantest now generates 70% of revenue from Taiwan, Korea, and the US—diversified exposure to all major chip manufacturing hubs."
      },
      {
        title: "Key Risks:",
        content: "Teradyne remains a fierce competitor in logic testing. Test time efficiency improvements could offset volume growth. Valuation assumes AI chip testing complexity remains high—simplification would hurt pricing."
      }
    ]
  },
  "3350": {
    code: "3350 JP",
    name: "Metaplanet",
    nameJp: "メタプラネット",
    themes: ["Bitcoin", "Treasury Strategy", "Investment"],
    price: 4850,
    priceChange: 8.75,
    marketCap: "¥180B",
    revenue: "¥2.5B",
    per: "—",
    pbr: "4.85",
    founded: "1999",
    ceo: "Simon Gerovich",
    outlook: [
      {
        title: "Japan's MicroStrategy Play:",
        content: "Metaplanet has become Asia's first pure-play Bitcoin treasury company, accumulating over 1,500 BTC at an average cost of $65,000. With Bitcoin approaching $100,000, the unrealized gain exceeds ¥7 billion—transforming a struggling hotel company into a crypto phenomenon."
      },
      {
        title: "Unlimited Yen Printing Tailwind:",
        content: "CEO Simon Gerovich's thesis is elegant: Japan's debt-to-GDP exceeds 260%, forcing perpetual yen debasement. Bitcoin offers Japanese investors an escape hatch from currency destruction. The weak yen makes this trade even more compelling."
      },
      {
        title: "Stock as Bitcoin Acquisition Vehicle:",
        content: "Metaplanet issues equity at premium-to-NAV to buy more Bitcoin—a flywheel that increases BTC per share. Recent at-the-market offerings raised ¥10 billion at effectively zero cost of capital."
      },
      {
        title: "Institutional Awakening:",
        content: "Japanese institutions are starting to notice. SBI Holdings partnership discussions, inclusion in crypto-focused ETFs, and growing analyst coverage signal mainstream acceptance is building."
      },
      {
        title: "Key Risks:",
        content: "This is NOT a low-risk investment. Bitcoin could crash 50%+ in a bear market. Regulatory crackdowns remain possible. Premium to NAV could collapse if sentiment shifts. Hotel operations continue bleeding cash."
      }
    ]
  },
  "6098": {
    code: "6098 JP",
    name: "Recruit Holdings",
    nameJp: "リクルートホールディングス",
    themes: ["HR Tech", "Online Services", "Technology"],
    price: 9180,
    priceChange: 1.25,
    marketCap: "¥15.2T",
    revenue: "¥3.4T",
    per: "34.2",
    pbr: "8.15",
    founded: "1960",
    ceo: "Hisayuki Idekoba",
    outlook: [
      {
        title: "Indeed: The Global Jobs Monster:",
        content: "Recruit owns Indeed, the world's #1 job site with 350 million monthly visitors. In the US alone, Indeed captures 25% of all job market spend. When unemployment is low, companies pay premium prices to find scarce talent—pricing power is extraordinary."
      },
      {
        title: "AI Matching Revolution:",
        content: "Recruit is deploying AI to match candidates with jobs automatically—reducing time-to-hire by 40% and increasing placement rates. This efficiency flywheel deepens the moat while improving margins."
      },
      {
        title: "Japan HR Business Steady Cash Cow:",
        content: "The domestic staffing, recruitment, and HR services business generates ¥500 billion in annual operating profit with minimal volatility. This funds global expansion and returns to shareholders."
      },
      {
        title: "Hidden Gems in Portfolio:",
        content: "Glassdoor (company reviews), Staffmark (US staffing), and Japanese lifestyle brands (Hot Pepper, Suumo) are often overlooked but collectively worth trillions of yen."
      },
      {
        title: "Key Risks:",
        content: "US job market cooling would directly hit Indeed revenue. LinkedIn competition is intensifying in professional segments. High valuation (34x) requires sustained growth execution."
      }
    ]
  },
  "6861": {
    code: "6861 JP",
    name: "Keyence",
    nameJp: "キーエンス",
    themes: ["Factory Automation", "Sensors", "Technology"],
    price: 67800,
    priceChange: 0.95,
    marketCap: "¥16.5T",
    revenue: "¥970B",
    per: "42.5",
    pbr: "7.85",
    founded: "1974",
    ceo: "Takemitsu Takizaki",
    outlook: [
      {
        title: "The 55% Operating Margin Machine:",
        content: "Keyence achieves operating margins that would make software companies jealous—55%+ consistently. The secret? Direct sales model eliminates distributors, fabless manufacturing avoids capital intensity, and premium pricing reflects genuine value creation."
      },
      {
        title: "Factory Automation Megatrend Beneficiary:",
        content: "Labor shortages across developed economies are forcing manufacturing automation investments. Keyence sensors, vision systems, and measurement instruments are mission-critical components in every automated factory."
      },
      {
        title: "Recurring Revenue Hidden in Plain Sight:",
        content: "While reported as product sales, Keyence equipment requires ongoing calibration, software updates, and consumables. Customer relationships span decades with 90%+ retention rates."
      },
      {
        title: "Unusual Sales Culture:",
        content: "Keyence sales engineers are legendary—average compensation exceeds ¥20 million annually, but they're expected to deeply understand customer manufacturing processes and propose solutions competitors can't match."
      },
      {
        title: "Key Risks:",
        content: "Valuation is extreme at 42x earnings—any growth deceleration will be punished severely. Founder Takizaki (Japan's richest person) still controls the company—succession planning is opaque. China manufacturing slowdown could reduce demand."
      }
    ]
  },
  "6954": {
    code: "6954 JP",
    name: "Fanuc",
    nameJp: "ファナック",
    themes: ["Robotics", "Factory Automation", "CNC"],
    price: 4125,
    priceChange: -0.65,
    marketCap: "¥4.1T",
    revenue: "¥800B",
    per: "28.5",
    pbr: "2.95",
    founded: "1972",
    ceo: "Kenji Yamaguchi",
    outlook: [
      {
        title: "The Yellow Robots Everywhere:",
        content: "Fanuc's iconic yellow industrial robots dominate factories worldwide—market share exceeds 20% globally. From automotive assembly to electronics manufacturing, these robots work 24/7 with minimal maintenance for decades."
      },
      {
        title: "CNC Systems: The Hidden Gem:",
        content: "Fanuc controls 50% of the global CNC (computer numerical control) market—the brains that control machine tools. Every precision-manufactured component likely touched a Fanuc system somewhere in its production."
      },
      {
        title: "EV Transition Tailwind:",
        content: "Electric vehicle manufacturing requires massive robotic automation—battery assembly, motor production, and new chassis designs all demand Fanuc solutions. The EV transition is a multi-decade growth driver."
      },
      {
        title: "Mt. Fuji Fortress:",
        content: "Fanuc's headquarters at the base of Mt. Fuji houses 'lights out' factories where robots literally build other robots. This manufacturing efficiency creates cost advantages competitors struggle to match."
      },
      {
        title: "Key Risks:",
        content: "Chinese robotics competitors (Siasun, Estun) are improving rapidly at lower price points. Automotive sector weakness directly impacts orders. Strong yen would compress overseas profit margins."
      }
    ]
  },
  "6503": {
    code: "6503 JP",
    name: "Mitsubishi Electric",
    nameJp: "三菱電機",
    themes: ["Electronics", "Infrastructure", "Factory Automation"],
    price: 2680,
    priceChange: 0.45,
    marketCap: "¥5.8T",
    revenue: "¥5.2T",
    per: "18.2",
    pbr: "1.65",
    founded: "1921",
    ceo: "Kei Uruma",
    outlook: [
      {
        title: "Diversification is the Story:",
        content: "Mitsubishi Electric operates across factory automation, building systems, automotive equipment, energy, and semiconductors. This diversification provides stability—when one segment struggles, others typically compensate."
      },
      {
        title: "Factory Automation Growth Engine:",
        content: "The FA Systems segment (PLCs, servo motors, industrial robots) is growing double-digits driven by reshoring trends and automation investments. Margins are expanding as scale benefits kick in."
      },
      {
        title: "Defense and Space Upside:",
        content: "Japan's defense budget is surging toward 2% of GDP. Mitsubishi Electric supplies radar systems, missile guidance, and satellite components—a multi-year tailwind as Japan rearms."
      },
      {
        title: "Governance Reformation:",
        content: "After quality scandals damaged reputation, new management is implementing genuine cultural change. Improved governance could unlock re-rating toward peers."
      },
      {
        title: "Key Risks:",
        content: "Conglomerate discount persists—sum of parts likely exceeds market cap. Slower China factory automation spending could hit key growth segment. Past quality issues may resurface."
      }
    ]
  },
  "7013": {
    code: "7013 JP",
    name: "IHI Corporation",
    nameJp: "IHI",
    themes: ["Aerospace", "Defense", "Industrial Machinery"],
    price: 8950,
    priceChange: 2.15,
    marketCap: "¥1.4T",
    revenue: "¥1.4T",
    per: "22.5",
    pbr: "2.85",
    founded: "1853",
    ceo: "Hiroshi Ide",
    outlook: [
      {
        title: "Jet Engine Renaissance:",
        content: "IHI is a key partner in GE's jet engine programs, manufacturing components for the best-selling LEAP engine. With aircraft deliveries ramping post-COVID and engine aftermarket demand surging, aero is booming—operating margins hit record levels in 2024."
      },
      {
        title: "Defense Spending Surge:",
        content: "Japan's defense budget expansion directly benefits IHI—they build jet engines for F-35 components, manufacture naval vessels, and supply rocket motors for missiles. Order backlog has never been higher."
      },
      {
        title: "Clean Energy Pivot:",
        content: "IHI is repositioning for the energy transition—ammonia co-firing for power plants, carbon capture systems, and hydrogen turbines. These technologies could become major growth drivers as decarbonization accelerates."
      },
      {
        title: "Turbocharger Cash Cow:",
        content: "Often overlooked, IHI's vehicular turbocharger business holds 30%+ global market share. Even as EVs grow, turbocharged ICE engines remain dominant globally for years to come."
      },
      {
        title: "Key Risks:",
        content: "Aerospace is cyclical—any recession could defer aircraft orders. Defense contracts are lumpy and subject to political changes. Heavy engineering carries execution risk on complex projects."
      }
    ]
  },
  "9697": {
    code: "9697 JP",
    name: "Capcom",
    nameJp: "カプコン",
    themes: ["Gaming", "Entertainment", "Digital Content"],
    price: 2875,
    priceChange: 1.45,
    marketCap: "¥1.5T",
    revenue: "¥180B",
    per: "21.5",
    pbr: "4.25",
    founded: "1979",
    ceo: "Haruhiro Tsujimoto",
    outlook: [
      {
        title: "Franchise Powerhouse:",
        content: "Capcom owns Monster Hunter (100 million units sold), Resident Evil (150 million), Street Fighter, and Devil May Cry. Unlike competitors relying on single franchises, Capcom's diversified portfolio reduces hit-or-miss volatility."
      },
      {
        title: "Monster Hunter Wilds Anticipation:",
        content: "The next mainline Monster Hunter launches in 2025—previous entry Monster Hunter World sold 25 million copies. Wilds is tracking for similar or better performance based on trailer views and pre-order data."
      },
      {
        title: "Digital Transformation Complete:",
        content: "Digital sales now exceed 90% of game revenue, up from 50% five years ago. This shift eliminated retail margins and returns risk—operating margins have expanded from 25% to 40%+."
      },
      {
        title: "Catalog Monetization:",
        content: "Capcom continuously re-releases classic games on new platforms—RE4 Remake sold 7 million copies. The back catalog is an annuity stream requiring minimal development investment."
      },
      {
        title: "Key Risks:",
        content: "Game development is inherently risky—a major flop could reset expectations. Mobile gaming remains a weakness versus competitors. Key creative talent departure could impact franchise quality."
      }
    ]
  },
  "3659": {
    code: "3659 JP",
    name: "Nexon",
    nameJp: "ネクソン",
    themes: ["Gaming", "Online Games", "Free-to-Play"],
    price: 2340,
    priceChange: -1.25,
    marketCap: "¥1.9T",
    revenue: "¥420B",
    per: "15.8",
    pbr: "1.95",
    founded: "1994",
    ceo: "Owen Mahoney",
    outlook: [
      {
        title: "Asia Online Gaming Giant:",
        content: "Nexon pioneered the free-to-play model that now dominates gaming. MapleStory, Dungeon Fighter Online, and KartRider generate billions in revenue across Korea, Japan, and China with incredibly long lifecycles—some games are 20+ years old and still growing!"
      },
      {
        title: "Virtual World Expansion:",
        content: "Nexon is building persistent virtual worlds that blur gaming and social platforms. The vision is 'digital countries' where players live, work, and socialize—potentially creating entirely new monetization categories."
      },
      {
        title: "Hidden Balance Sheet Value:",
        content: "Nexon holds ¥600 billion in cash and investments, including significant Bitcoin holdings and stakes in gaming companies. Net of cash, the core gaming business trades at single-digit earnings multiples."
      },
      {
        title: "Global Expansion Progress:",
        content: "Western market penetration has been Nexon's weakness, but recent partnerships (with Ubisoft, Embark Studios) signal renewed push. Success here would unlock massive re-rating potential."
      },
      {
        title: "Key Risks:",
        content: "Korea and China regulatory risks persist—gaming restrictions could tighten. Key games are aging—eventual decline is inevitable without successful new IP. Bitcoin holdings add volatility that some investors dislike."
      }
    ]
  },
  "9766": {
    code: "9766 JP",
    name: "Konami",
    nameJp: "コナミ",
    themes: ["Gaming", "Entertainment", "Sports"],
    price: 14250,
    priceChange: 0.85,
    marketCap: "¥1.9T",
    revenue: "¥350B",
    per: "24.5",
    pbr: "4.65",
    founded: "1969",
    ceo: "Takuya Kozuki",
    outlook: [
      {
        title: "Gaming Division Revival:",
        content: "After years of mobile-focused disappointment, Konami is returning to AAA console games. Metal Gear Solid Delta (MGS3 remake) and Silent Hill 2 remake are generating massive fan excitement—the franchises still command incredible brand loyalty."
      },
      {
        title: "eFootball Turnaround:",
        content: "The disastrous eFootball launch damaged Konami's reputation, but patient rebuilding has attracted 750 million downloads. Free-to-play soccer is a massive market—Konami just needs acceptable execution to monetize this base."
      },
      {
        title: "Sports and Fitness Hidden Gem:",
        content: "Konami's sports club business operates 180+ fitness facilities across Japan. Post-COVID recovery is driving membership growth, and this stable cash flow subsidizes gaming investments."
      },
      {
        title: "Yu-Gi-Oh! Eternal Revenue:",
        content: "The Yu-Gi-Oh! trading card game and Master Duel digital version generate ¥50+ billion annually with minimal ongoing investment. This franchise alone might be worth Konami's entire market cap."
      },
      {
        title: "Key Risks:",
        content: "Konami has disappointed gamers repeatedly—skepticism is warranted until games actually ship. Pachinko/pachislot gambling business faces secular decline. Management has historically prioritized mobile over console despite fan preferences."
      }
    ]
  },
  "6501": {
    code: "6501 JP",
    name: "Hitachi",
    nameJp: "日立製作所",
    themes: ["Infrastructure", "Technology", "Conglomerate"],
    price: 3850,
    priceChange: 0.75,
    marketCap: "¥17.8T",
    revenue: "¥10.8T",
    per: "16.5",
    pbr: "2.15",
    founded: "1910",
    ceo: "Keiji Kojima",
    outlook: [
      {
        title: "The Great Transformation Complete:",
        content: "Hitachi has executed one of Japan's most successful corporate transformations—divesting 20+ businesses (chemicals, metals, construction equipment stakes) to focus on digital, green, and connectivity. Operating margins have doubled from 5% to 10%+ in five years."
      },
      {
        title: "Lumada Platform Scaling:",
        content: "Lumada, Hitachi's IoT platform, now generates ¥2 trillion in annual revenue. This software-centric business connects industrial equipment, optimizes operations, and creates recurring revenue streams—a far cry from the old hardware-focused Hitachi."
      },
      {
        title: "GlobalLogic Digital Services:",
        content: "The $9.5 billion GlobalLogic acquisition brought 28,000 software engineers and deep expertise in digital transformation consulting. This positions Hitachi as a true technology services company, not just a manufacturer."
      },
      {
        title: "Green Energy Infrastructure:",
        content: "Hitachi Energy (power grids, transformers) is perfectly positioned for global grid modernization driven by renewable energy integration. Order backlog is at all-time highs."
      },
      {
        title: "Key Risks:",
        content: "Complexity remains—Hitachi still operates in dozens of segments that are hard to analyze. Rail business faces project execution risks. Yen strength would compress overseas profit translation."
      }
    ]
  },
  "8766": {
    code: "8766 JP",
    name: "Tokio Marine",
    nameJp: "東京海上ホールディングス",
    themes: ["Insurance", "Financial Services", "Global"],
    price: 5420,
    priceChange: 0.55,
    marketCap: "¥10.8T",
    revenue: "¥6.8T",
    per: "12.8",
    pbr: "1.85",
    founded: "1879",
    ceo: "Satoru Komiya",
    outlook: [
      {
        title: "Global Diversification Success:",
        content: "Unlike domestic-focused Japanese insurers, Tokio Marine generates 45% of profits overseas through strategic acquisitions (Delphi, Philadelphia, HCC). This geographic mix provides growth and reduces Japan's shrinking population impact."
      },
      {
        title: "Specialty Insurance Moat:",
        content: "HCC and Philadelphia specialize in professional liability, cyber insurance, and specialty lines where expertise creates pricing power. These aren't commodity products—underwriting skill generates consistent combined ratios below 90%."
      },
      {
        title: "Rising Rate Environment Tailwind:",
        content: "Property and casualty insurance pricing has increased 15%+ over three years due to climate-related losses and reinsurance cost increases. Tokio Marine's disciplined underwriting means these rate increases flow to the bottom line."
      },
      {
        title: "Shareholder Return Acceleration:",
        content: "Management has committed to ¥1 trillion in buybacks through 2025 and continues raising dividends. ROE targets of 15%+ force capital discipline that benefits shareholders."
      },
      {
        title: "Key Risks:",
        content: "Natural catastrophe losses can be severe and unpredictable—a major earthquake or hurricane could impact quarterly results significantly. Japan domestic market faces structural decline. Investment portfolio carries interest rate sensitivity."
      }
    ]
  },
  "5765": {
    code: "5765 JP",
    name: "JX Advanced Metals",
    nameJp: "JX金属",
    themes: ["Materials", "Mining", "Semiconductors"],
    price: 1850,
    priceChange: 4.25,
    marketCap: "¥1.1T",
    revenue: "¥1.8T",
    per: "14.5",
    pbr: "1.25",
    founded: "1905",
    ceo: "Seiichi Murayama",
    outlook: [
      {
        title: "Semiconductor Materials Specialist:",
        content: "JX Advanced Metals supplies ultra-high-purity copper for chip manufacturing, sputtering targets for semiconductor deposition, and specialty alloys. As chips get more complex, material purity requirements intensify—playing directly to JX's expertise."
      },
      {
        title: "Recent IPO Momentum:",
        content: "Spun off from ENEOS in late 2024, JX Advanced Metals is now a pure-play on advanced materials. The IPO unlocked value that was hidden inside the energy conglomerate—analyst coverage is just beginning."
      },
      {
        title: "Copper Recycling Circular Economy:",
        content: "JX operates Japan's largest copper recycling operations, processing e-waste and industrial scrap. As sustainability becomes mandatory for chipmakers, recycled copper commands premium pricing."
      },
      {
        title: "Capacity Expansion Underway:",
        content: "A ¥200 billion investment program is expanding semiconductor materials capacity 50% by 2027. Customers (TSMC, Intel, Samsung) are locked in with long-term supply agreements."
      },
      {
        title: "Key Risks:",
        content: "Commodity copper prices create revenue volatility even though specialty products are differentiated. Limited trading history post-IPO makes valuation uncertain. Competition from Korean and Chinese materials suppliers is intensifying."
      }
    ]
  },
  "4062": {
    code: "4062 JP",
    name: "Ibiden",
    nameJp: "イビデン",
    themes: ["Semiconductor", "Substrates", "Electronics"],
    price: 4850,
    priceChange: 2.15,
    marketCap: "¥680B",
    revenue: "¥420B",
    per: "18.5",
    pbr: "1.85",
    founded: "1912",
    ceo: "Takeshi Aoki",
    outlook: [
      {
        title: "The Hidden AI Infrastructure Play:",
        content: "Ibiden manufactures IC package substrates—the critical layer connecting chips to circuit boards. Every NVIDIA AI GPU requires Ibiden's advanced substrates. As AI chips grow larger and more complex, substrate demand is exploding with 40% YoY growth."
      },
      {
        title: "Capacity Expansion at Full Speed:",
        content: "Ibiden is investing ¥250 billion to double substrate capacity by 2027. Customers including Intel, AMD, and NVIDIA have locked in multi-year supply agreements, providing revenue visibility that's rare in the semiconductor supply chain."
      },
      {
        title: "Technical Moat Widening:",
        content: "Advanced substrates require ultra-precise manufacturing with tolerances measured in microns. Ibiden's decades of expertise create barriers that Chinese competitors struggle to overcome—yield rates on cutting-edge products remain a key differentiator."
      },
      {
        title: "Diversification Beyond Semiconductors:",
        content: "Often overlooked, Ibiden's ceramics business supplies diesel particulate filters to European automakers and fuel cell components. This provides steady cash flow during semiconductor cycles."
      },
      {
        title: "Key Risks:",
        content: "Semiconductor cycles can turn quickly—capex cuts would hit substrate demand. Heavy investment phase is pressuring near-term margins. Customer concentration with top 5 customers representing 70%+ of revenue."
      }
    ]
  },
  "6479": {
    code: "6479 JP",
    name: "Minebea Mitsumi",
    nameJp: "ミネベアミツミ",
    themes: ["Precision Components", "Electronics", "Manufacturing"],
    price: 2450,
    priceChange: 0.85,
    marketCap: "¥1.0T",
    revenue: "¥1.4T",
    per: "14.2",
    pbr: "1.65",
    founded: "1951",
    ceo: "Yoshihisa Kainuma",
    outlook: [
      {
        title: "The 'Components King' Strategy:",
        content: "Minebea Mitsumi dominates niche precision components—#1 globally in miniature ball bearings (60% share), #1 in smartphone backlights, #1 in stepping motors. This 'king of components' strategy creates diversified exposure to electronics growth."
      },
      {
        title: "Smartphone Camera Modules Surging:",
        content: "The acquisition of camera actuator technology has made Minebea a key supplier for smartphone camera modules. As phones add more cameras with better stabilization, content per device is rising rapidly."
      },
      {
        title: "Automotive Electrification Tailwind:",
        content: "EVs require 3x more motors than ICE vehicles—window motors, seat motors, HVAC motors, and precision sensors. Minebea's small motor expertise translates directly to EV applications."
      },
      {
        title: "Analog Semiconductor Push:",
        content: "The Mitsumi merger brought analog IC capabilities. Combined with sensing and motor technologies, Minebea can now offer integrated solutions that pure component makers cannot match."
      },
      {
        title: "Key Risks:",
        content: "Smartphone market maturity limits growth in key segments. Ball bearing commoditization pressure from Chinese competitors. Complex conglomerate structure makes analysis difficult—hidden value but also hidden risks."
      }
    ]
  },
  "6504": {
    code: "6504 JP",
    name: "Fuji Electric",
    nameJp: "富士電機",
    themes: ["Power Electronics", "Industrial Equipment", "Energy"],
    price: 7250,
    priceChange: 1.25,
    marketCap: "¥1.0T",
    revenue: "¥1.1T",
    per: "15.8",
    pbr: "1.95",
    founded: "1923",
    ceo: "Shiro Kondo",
    outlook: [
      {
        title: "Power Semiconductor Sweet Spot:",
        content: "Fuji Electric ranks #3 globally in power semiconductors (IGBTs, SiC modules) behind Infineon and ON Semi. These components are essential for EVs, renewable energy inverters, and industrial automation—all high-growth markets."
      },
      {
        title: "EV Traction Inverter Wins:",
        content: "Fuji Electric supplies traction inverters to multiple EV manufacturers in Japan and China. Each EV contains ¥30,000-50,000 of power semiconductor content—a massive expansion from ICE vehicles."
      },
      {
        title: "Data Center Power Management:",
        content: "Hyperscale data centers require sophisticated power distribution and UPS systems. Fuji Electric's solutions are deployed across major cloud providers in Asia, growing 20%+ annually."
      },
      {
        title: "Vending Machine Hidden Champion:",
        content: "Surprisingly, Fuji Electric dominates Japan's vending machine market with 50%+ share. This mature business generates stable cash flow and is now expanding IoT-enabled machines across Asia."
      },
      {
        title: "Key Risks:",
        content: "Power semiconductor competition is intensifying as everyone chases EV/renewable growth. China's domestic power semi industry is advancing rapidly. Traditional heavy electrical equipment business faces margin pressure."
      }
    ]
  },
  "6506": {
    code: "6506 JP",
    name: "Yaskawa Electric",
    nameJp: "安川電機",
    themes: ["Robotics", "Motion Control", "Factory Automation"],
    price: 4125,
    priceChange: -0.45,
    marketCap: "¥1.1T",
    revenue: "¥570B",
    per: "22.5",
    pbr: "2.85",
    founded: "1915",
    ceo: "Hiroshi Ogasawara",
    outlook: [
      {
        title: "Servo Motor Global Champion:",
        content: "Yaskawa holds #1 global position in AC servo motors and motion controllers—the 'muscles and nerves' of factory automation. Market share exceeds 25% globally, with particularly strong positions in Asia."
      },
      {
        title: "Robot Arms for Every Application:",
        content: "Yaskawa's Motoman robot brand ranks #4 globally with installed base exceeding 500,000 units. From arc welding to semiconductor handling, Yaskawa robots work in virtually every manufacturing environment."
      },
      {
        title: "China Factory Automation Wave:",
        content: "Chinese manufacturers are automating rapidly due to rising wages and quality requirements. Yaskawa's strong local presence (factories in Shenyang and Changzhou) positions them to capture this multi-decade trend."
      },
      {
        title: "Huawei Robotics Partnership:",
        content: "Strategic collaboration with Huawei on next-generation smart manufacturing could accelerate Yaskawa's software and AI capabilities—though it also creates geopolitical complexity."
      },
      {
        title: "Key Risks:",
        content: "China exposure cuts both ways—economic slowdown or US restrictions could impact growth. Fanuc remains the premium brand—Yaskawa competes partly on price. Semiconductor equipment cycles create quarterly volatility."
      }
    ]
  },
  "6526": {
    code: "6526 JP",
    name: "Socionext",
    nameJp: "ソシオネクスト",
    themes: ["Semiconductor", "Chip Design", "Technology"],
    price: 2850,
    priceChange: 3.45,
    marketCap: "¥520B",
    revenue: "¥210B",
    per: "24.5",
    pbr: "4.25",
    founded: "2015",
    ceo: "Masahiro Koezuka",
    outlook: [
      {
        title: "Japan's Fabless Champion:",
        content: "Socionext is Japan's largest fabless semiconductor company, designing custom SoCs (System-on-Chips) for automotive, data center, and consumer applications. Unlike commodity chips, custom designs command premium margins and create sticky customer relationships."
      },
      {
        title: "Automotive Design Win Pipeline:",
        content: "Next-generation vehicles require powerful SoCs for autonomous driving, infotainment, and connectivity. Socionext has secured design wins with multiple OEMs—each representing 5+ years of production revenue once vehicles launch."
      },
      {
        title: "Data Center Custom Silicon:",
        content: "Hyperscalers increasingly want custom chips optimized for their specific workloads. Socionext's design expertise positions them as a partner for companies not large enough to build internal chip teams."
      },
      {
        title: "Post-IPO Momentum:",
        content: "Since IPO in late 2022, Socionext has consistently beaten expectations. The spin-off from Fujitsu/Panasonic freed management to pursue growth aggressively—R&D investment is up 30%."
      },
      {
        title: "Key Risks:",
        content: "Custom chip business is lumpy—large orders create tough comparisons. Design cycles are long—today's R&D won't generate revenue for 2-3 years. Competition from global fabless giants with deeper pockets."
      }
    ]
  },
  "6645": {
    code: "6645 JP",
    name: "Omron",
    nameJp: "オムロン",
    themes: ["Factory Automation", "Healthcare", "Electronics"],
    price: 5450,
    priceChange: 0.65,
    marketCap: "¥1.1T",
    revenue: "¥880B",
    per: "28.5",
    pbr: "2.15",
    founded: "1933",
    ceo: "Junta Tsujinaga",
    outlook: [
      {
        title: "Industrial Automation Core Strength:",
        content: "Omron's sensors, controllers, and safety systems are essential components in automated factories worldwide. The company pioneered sensing and control technology—brand reputation for quality commands premium pricing."
      },
      {
        title: "Healthcare Diversification:",
        content: "Omron Healthcare (blood pressure monitors, nebulizers) holds #1 global market share in home health monitoring. Aging populations worldwide create secular growth, and the business provides stability during industrial cycles."
      },
      {
        title: "Collaborative Robot Push:",
        content: "Omron's TM collaborative robots work safely alongside humans—a faster-growing segment than traditional industrial robots. Recent software investments enhance ease of programming, reducing adoption barriers."
      },
      {
        title: "Sustainability Solutions:",
        content: "Energy management systems and solar inverters position Omron for the green transition. Japanese government incentives for energy efficiency create domestic tailwinds."
      },
      {
        title: "Key Risks:",
        content: "China factory automation slowdown directly impacts core business. Healthcare margins are lower than industrial—product mix shift could pressure profitability. Activist investor involvement creates uncertainty around strategic direction."
      }
    ]
  },
  "6674": {
    code: "6674 JP",
    name: "GS Yuasa",
    nameJp: "ジーエス・ユアサ",
    themes: ["Batteries", "Energy Storage", "Automotive"],
    price: 2680,
    priceChange: 1.85,
    marketCap: "¥280B",
    revenue: "¥540B",
    per: "12.5",
    pbr: "0.95",
    founded: "1895",
    ceo: "Osamu Murao",
    outlook: [
      {
        title: "Lithium-ion for Aviation Taking Off:",
        content: "GS Yuasa supplies lithium-ion batteries for Boeing 787 and Airbus aircraft—one of few companies certified for aviation applications. The rigorous safety requirements create enormous barriers to entry and pricing power."
      },
      {
        title: "Honda JV Accelerates EV Ambitions:",
        content: "The Blue Energy joint venture with Honda is building dedicated EV battery production. Honda's aggressive electrification targets provide demand visibility, while GS Yuasa contributes battery expertise."
      },
      {
        title: "Lead-Acid Cash Cow:",
        content: "Traditional lead-acid automotive batteries remain highly profitable—GS Yuasa leads the Japanese aftermarket. This mature business funds growth investments in lithium and next-generation chemistries."
      },
      {
        title: "Industrial Energy Storage Growth:",
        content: "Grid-scale energy storage is essential for renewable energy integration. GS Yuasa's industrial battery systems are deployed across utilities and large commercial installations throughout Asia."
      },
      {
        title: "Key Risks:",
        content: "EV battery competition is brutal—CATL and BYD have massive scale advantages. Technology transitions could strand current manufacturing investments. Raw material costs (lithium, cobalt) create margin volatility."
      }
    ]
  },
  "6701": {
    code: "6701 JP",
    name: "NEC",
    nameJp: "日本電気",
    themes: ["IT Services", "Telecom", "Technology"],
    price: 12850,
    priceChange: 0.95,
    marketCap: "¥3.5T",
    revenue: "¥3.3T",
    per: "18.5",
    pbr: "2.05",
    founded: "1899",
    ceo: "Takayuki Morita",
    outlook: [
      {
        title: "IT Services Transformation Success:",
        content: "NEC has successfully pivoted from hardware to IT services—now 70% of revenue. Government digitization projects (My Number system, digital IDs) provide multi-year revenue streams with high switching costs."
      },
      {
        title: "Biometric Authentication Leader:",
        content: "NEC's facial recognition and fingerprint technology ranks #1 in global accuracy benchmarks. Airport immigration, border control, and enterprise security applications are growing 20%+ annually."
      },
      {
        title: "5G Network Infrastructure:",
        content: "NEC is one of few non-Chinese 5G equipment suppliers. Government pressure to exclude Huawei benefits NEC in Japan and potentially other security-conscious markets—Open RAN architecture could expand addressable market."
      },
      {
        title: "Defense Business Expansion:",
        content: "Japan's defense budget surge directly benefits NEC—radar systems, communications equipment, and cybersecurity contracts are accelerating. Defense typically carries higher margins than commercial business."
      },
      {
        title: "Key Risks:",
        content: "Government contract dependence creates budget cycle exposure. Global IT services competition from Accenture, TCS, etc. is intensifying. Legacy hardware businesses continue declining and require restructuring costs."
      }
    ]
  },
  "6702": {
    code: "6702 JP",
    name: "Fujitsu",
    nameJp: "富士通",
    themes: ["IT Services", "Technology", "Digital Transformation"],
    price: 2750,
    priceChange: 1.15,
    marketCap: "¥5.7T",
    revenue: "¥3.8T",
    per: "22.5",
    pbr: "3.25",
    founded: "1935",
    ceo: "Takahito Tokita",
    outlook: [
      {
        title: "Fujitsu Uvance Growth Platform:",
        content: "The Uvance digital transformation platform is Fujitsu's bet on the future—sustainability solutions, hybrid cloud, and industry-specific applications. Management targets ¥700 billion Uvance revenue by 2025, up from ¥300 billion."
      },
      {
        title: "Quantum Computing Pioneer:",
        content: "Fujitsu launched the world's fastest quantum computer simulator and partners with RIKEN on quantum hardware development. Commercial quantum computing services could create entirely new revenue streams."
      },
      {
        title: "Global Delivery Model Scaling:",
        content: "Fujitsu is building offshore delivery centers in India and the Philippines to compete with global IT services firms. Labor cost arbitrage should improve margins while maintaining Japanese quality standards."
      },
      {
        title: "Supercomputer Heritage:",
        content: "Fugaku remains the world's most powerful supercomputer for certain applications. This technological prestige wins enterprise customers who want cutting-edge partners."
      },
      {
        title: "Key Risks:",
        content: "UK Post Office scandal damaged reputation and may result in significant liabilities. Margin improvement requires continued portfolio restructuring. Competition from hyperscalers in cloud services is relentless."
      }
    ]
  },
  "6723": {
    code: "6723 JP",
    name: "Renesas Electronics",
    nameJp: "ルネサスエレクトロニクス",
    themes: ["Semiconductor", "Automotive", "MCU"],
    price: 2150,
    priceChange: 2.35,
    marketCap: "¥4.2T",
    revenue: "¥1.5T",
    per: "14.5",
    pbr: "2.45",
    founded: "2010",
    ceo: "Hidetoshi Shibata",
    outlook: [
      {
        title: "Automotive MCU Dominance:",
        content: "Renesas supplies 30% of global automotive microcontrollers—the chips controlling everything from engine management to infotainment. As vehicles add more electronics (150+ MCUs per car), Renesas content per vehicle keeps rising."
      },
      {
        title: "Acquisition Strategy Delivering:",
        content: "Strategic acquisitions (Intersil, IDT, Dialog) transformed Renesas from a struggling Japanese chipmaker into a global analog/mixed-signal powerhouse. Cross-selling synergies are now flowing through to results."
      },
      {
        title: "Winning Socket Approach:",
        content: "Renesas' 'Winning Combinations' pre-integrate multiple chips into reference designs—reducing customer development time and locking in multi-chip orders. This solution selling approach expands wallet share."
      },
      {
        title: "Industrial and IoT Expansion:",
        content: "Beyond automotive, Renesas is gaining share in industrial automation and IoT applications. Factory automation trends directly benefit their motor control and sensing product lines."
      },
      {
        title: "Key Risks:",
        content: "Automotive chip oversupply concerns are growing after pandemic shortages. Heavy debt from acquisitions limits financial flexibility. Fire at Naka factory in 2021 highlighted concentration risks—now being addressed."
      }
    ]
  },
  "6724": {
    code: "6724 JP",
    name: "Seiko Epson",
    nameJp: "セイコーエプソン",
    themes: ["Printers", "Robotics", "Precision Equipment"],
    price: 2180,
    priceChange: -0.35,
    marketCap: "¥780B",
    revenue: "¥1.3T",
    per: "11.5",
    pbr: "1.15",
    founded: "1942",
    ceo: "Yasunori Ogawa",
    outlook: [
      {
        title: "Ink Tank Printer Transformation:",
        content: "Epson's EcoTank ink tank printers have disrupted their own cartridge business—but strategically. Higher upfront prices with refillable tanks create better customer lifetime value and competitive moat against cheap inkjet alternatives."
      },
      {
        title: "Office Printing Resilience:",
        content: "Despite 'paperless office' predictions, commercial printing remains sticky. Epson's high-speed line inkjet printers are replacing laser printers in offices—lower total cost of ownership drives enterprise adoption."
      },
      {
        title: "Compact Robot Opportunity:",
        content: "Epson's SCARA robots hold #1 global market share for compact assembly robots. These are ideal for electronics manufacturing—a growth segment as supply chains diversify out of China."
      },
      {
        title: "Wearables and Sensing:",
        content: "Watch movements, quartz sensors, and wearable devices leverage Epson's precision manufacturing heritage. The sensing business supplies gyroscopes and timing devices to automotive and industrial applications."
      },
      {
        title: "Key Risks:",
        content: "Structural print volume decline continues—digital alternatives keep improving. Robot business is small relative to printing—will take years to move the needle. Yen weakness helps near-term but masks underlying challenges."
      }
    ]
  },
  "6752": {
    code: "6752 JP",
    name: "Panasonic",
    nameJp: "パナソニック",
    themes: ["Electronics", "Batteries", "Consumer Products"],
    price: 1285,
    priceChange: 0.75,
    marketCap: "¥3.2T",
    revenue: "¥8.5T",
    per: "12.8",
    pbr: "0.85",
    founded: "1918",
    ceo: "Yuki Kusumi",
    outlook: [
      {
        title: "Tesla Battery Partnership Evolution:",
        content: "Panasonic supplies battery cells for Tesla from Nevada and Japan factories—a relationship worth trillions of yen annually. While Tesla is diversifying suppliers, Panasonic remains critical for North American production and is investing $4 billion in Kansas expansion."
      },
      {
        title: "EV Battery Independence Push:",
        content: "Beyond Tesla, Panasonic is aggressively courting other automakers. Partnerships with Mazda, Subaru, and potentially Lucid reduce Tesla concentration risk while expanding total addressable market."
      },
      {
        title: "Supply Chain Solutions Hidden Gem:",
        content: "Panasonic Connect's supply chain software and hardware (warehouse automation, logistics systems) is growing 15%+ annually. This B2B business is higher margin than consumer electronics."
      },
      {
        title: "Housing and Living Products:",
        content: "Often ignored, Panasonic Homes and living solutions (wiring, lighting, kitchen equipment) generate stable domestic profits. Aging Japanese housing stock requires renovation—a multi-decade opportunity."
      },
      {
        title: "Key Risks:",
        content: "EV battery competition from CATL, LG, and Samsung SDI is intense—scale disadvantages hurt margins. Consumer electronics remains challenged with limited differentiation. Conglomerate structure obscures segment performance."
      }
    ]
  },
  "6753": {
    code: "6753 JP",
    name: "Sharp",
    nameJp: "シャープ",
    themes: ["Electronics", "Displays", "Consumer Products"],
    price: 985,
    priceChange: -1.15,
    marketCap: "¥640B",
    revenue: "¥2.5T",
    per: "—",
    pbr: "1.85",
    founded: "1912",
    ceo: "Wu Po-Hsuan",
    outlook: [
      {
        title: "Foxconn Ownership Reality:",
        content: "Since Foxconn's 2016 acquisition, Sharp has become integrated into Hon Hai's manufacturing empire. This provides scale advantages but also means Sharp's strategy is subordinate to Foxconn's global plans."
      },
      {
        title: "Display Business Restructuring:",
        content: "Large LCD panel manufacturing has shifted to Foxconn's Chinese facilities. Sharp is pivoting to higher-value display technologies—OLED development and specialized industrial displays offer better margins."
      },
      {
        title: "Brand Licensing Strategy:",
        content: "The Sharp brand still commands recognition, particularly in Japan and Asia. Licensing agreements for TVs and appliances generate royalty income without capital investment or inventory risk."
      },
      {
        title: "Smart Home and AIoT Push:",
        content: "Sharp is positioning its appliance lineup as connected smart home devices. Integration with Foxconn's AIoT platforms could differentiate versus pure appliance competitors."
      },
      {
        title: "Key Risks:",
        content: "Profitability has been elusive since Foxconn acquisition—restructuring fatigue is real. Display technology transitions require heavy investment that may not pay off. Japanese brand heritage may erode under foreign ownership."
      }
    ]
  },
  "6762": {
    code: "6762 JP",
    name: "TDK",
    nameJp: "TDKグループ",
    themes: ["Electronic Components", "Batteries", "Sensors"],
    price: 1850,
    priceChange: 1.45,
    marketCap: "¥3.5T",
    revenue: "¥2.2T",
    per: "16.5",
    pbr: "1.75",
    founded: "1935",
    ceo: "Noboru Saito",
    outlook: [
      {
        title: "Passive Components Backbone:",
        content: "TDK leads in multilayer ceramic capacitors (MLCCs), inductors, and ferrite cores—components essential for every electronic device. Smartphones contain 1,000+ MLCCs each; EVs contain 10,000+. Volume growth is structural."
      },
      {
        title: "Small Battery Big Business:",
        content: "TDK's ATL subsidiary dominates small lithium polymer batteries for smartphones, tablets, and wearables. Apple, Samsung, and Huawei all depend on ATL cells—switching costs are enormous."
      },
      {
        title: "Sensor Fusion Strategy:",
        content: "Acquisitions (InvenSense, Chirp) created a comprehensive sensor portfolio—motion, pressure, ultrasonic. As IoT devices proliferate, integrated sensor solutions become more valuable."
      },
      {
        title: "EV Component Expansion:",
        content: "Beyond batteries, TDK supplies DC-DC converters, wireless charging modules, and sensors for EVs. Content per vehicle opportunity extends well beyond their traditional passive components."
      },
      {
        title: "Key Risks:",
        content: "Smartphone market maturity limits growth in key consumer segments. China passive component makers are improving rapidly—commoditization pressure is real. ATL concentration with major smartphone makers creates customer risk."
      }
    ]
  },
  "6770": {
    code: "6770 JP",
    name: "Alps Alpine",
    nameJp: "アルプスアルパイン",
    themes: ["Electronic Components", "Automotive", "Consumer Electronics"],
    price: 1420,
    priceChange: -0.85,
    marketCap: "¥310B",
    revenue: "¥920B",
    per: "15.5",
    pbr: "0.75",
    founded: "1948",
    ceo: "Fumihiko Kozato",
    outlook: [
      {
        title: "Automotive Electronics Integration:",
        content: "The Alps/Alpine merger created an automotive electronics powerhouse—switches, sensors, and displays from Alps combined with Alpine's infotainment and ADAS systems. Integration synergies are finally materializing after rocky start."
      },
      {
        title: "CASE Megatrend Beneficiary:",
        content: "Connected, Autonomous, Shared, Electric—all four automotive megatrends increase electronic content. Alps Alpine supplies components and systems across all four domains, from 5G antennas to touch sensors."
      },
      {
        title: "Premium HMI Solutions:",
        content: "Human-machine interface (haptic feedback, premium switches, touch panels) differentiates Alps Alpine from commodity component makers. Luxury automakers pay premium prices for superior tactile experience."
      },
      {
        title: "Gaming and Consumer Upside:",
        content: "Alps supplies haptic actuators, controllers, and switches to gaming companies including Nintendo and Sony. Gaming hardware cycles create periodic revenue bumps."
      },
      {
        title: "Key Risks:",
        content: "Merger integration took longer and cost more than expected—management credibility damaged. Auto production volatility directly impacts quarterly results. Trading below book value suggests market skepticism about turnaround."
      }
    ]
  },
  "6841": {
    code: "6841 JP",
    name: "Yokogawa Electric",
    nameJp: "横河電機",
    themes: ["Industrial Automation", "Instrumentation", "Control Systems"],
    price: 3250,
    priceChange: 0.55,
    marketCap: "¥870B",
    revenue: "¥520B",
    per: "18.5",
    pbr: "1.95",
    founded: "1915",
    ceo: "Hitoshi Nara",
    outlook: [
      {
        title: "Process Industry Automation Leader:",
        content: "Yokogawa dominates distributed control systems (DCS) for oil refineries, chemical plants, and LNG facilities. These mission-critical systems control entire production processes—customers don't switch vendors lightly."
      },
      {
        title: "Recurring Revenue Transformation:",
        content: "Lifecycle services (maintenance, upgrades, optimization) now contribute 40% of revenue. Installed base of 10,000+ control systems generates predictable high-margin recurring income."
      },
      {
        title: "Energy Transition Opportunity:",
        content: "Carbon capture, hydrogen production, and renewable integration all require sophisticated process control. Yokogawa's expertise in complex industrial processes translates directly to green energy applications."
      },
      {
        title: "Life Sciences Expansion:",
        content: "Pharmaceutical and biotech process control is growing rapidly—complex manufacturing requires precise instrumentation. Yokogawa's life innovation business unit is targeting double-digit growth."
      },
      {
        title: "Key Risks:",
        content: "Oil and gas capex cycles directly impact new system orders. Long project cycles mean economic downturns take time to impact results. Competition from Emerson, Honeywell, and Siemens is intense in all segments."
      }
    ]
  },
  "6902": {
    code: "6902 JP",
    name: "Denso",
    nameJp: "デンソー",
    themes: ["Automotive", "Electronics", "EV Components"],
    price: 2150,
    priceChange: -0.55,
    marketCap: "¥6.5T",
    revenue: "¥7.1T",
    per: "12.8",
    pbr: "0.95",
    founded: "1949",
    ceo: "Koji Arima",
    outlook: [
      {
        title: "Toyota's Technology Partner:",
        content: "As Toyota's primary supplier (24% ownership), Denso has unrivaled access to the world's largest automaker. This relationship provides volume stability while joint development projects access Toyota's hybrid and EV roadmap."
      },
      {
        title: "Electrification Component Leader:",
        content: "Denso supplies inverters, motor generators, battery management systems, and thermal management for EVs. Content per EV is 3-5x higher than ICE vehicles—electrification is growth even if total vehicle production stagnates."
      },
      {
        title: "Thermal Management Opportunity:",
        content: "EV batteries and electronics require sophisticated cooling systems. Denso's thermal expertise from decades of HVAC and engine cooling translates to EV heat pumps and battery cooling systems."
      },
      {
        title: "ADAS and Autonomous Driving:",
        content: "Radar sensors, camera systems, and ECUs for advanced driver assistance position Denso for the autonomous future. Safety regulations mandating collision avoidance create near-term growth."
      },
      {
        title: "Key Risks:",
        content: "Toyota dependence cuts both ways—Toyota's slower EV transition has impacted perception. Trading below book value reflects market concern about ICE to EV transition. Competition from Bosch, Continental, and Chinese suppliers intensifying."
      }
    ]
  },
  "7741": {
    code: "7741 JP",
    name: "HOYA",
    nameJp: "HOYA",
    themes: ["Optics", "Healthcare", "Semiconductor"],
    price: 18500,
    priceChange: 1.25,
    marketCap: "¥6.8T",
    revenue: "¥750B",
    per: "32.5",
    pbr: "6.85",
    founded: "1941",
    ceo: "Eiichi Katayama",
    outlook: [
      {
        title: "EUV Mask Blanks Monopoly:",
        content: "HOYA supplies over 80% of EUV mask blanks—the ultra-flat glass substrates essential for cutting-edge chip manufacturing. With zero defect tolerance at the atomic level, this is one of the most technically demanding products in the semiconductor supply chain."
      },
      {
        title: "Healthcare Optics Growth:",
        content: "Eyeglass lenses, contact lenses, and endoscopes generate stable high-margin revenue. Aging global populations drive structural demand growth—HOYA's premium positioning avoids commodity competition."
      },
      {
        title: "Asset-Light Business Model:",
        content: "Unlike typical manufacturers, HOYA operates with minimal capital intensity. Return on equity exceeds 20%, and free cash flow conversion is exceptional—enabling continuous buybacks and dividends."
      },
      {
        title: "Decentralized Management:",
        content: "HOYA's divisional structure empowers business unit leaders with P&L responsibility. This entrepreneurial culture attracts talent and drives accountability—unusual for traditional Japanese companies."
      },
      {
        title: "Key Risks:",
        content: "Premium valuation (32x earnings) requires continued execution excellence. EUV adoption pace depends on leading-edge chip demand—any slowdown hits mask blank orders. Healthcare business faces pricing pressure in some markets."
      }
    ]
  },
  "7974": {
    code: "7974 JP",
    name: "Nintendo",
    nameJp: "任天堂",
    themes: ["Gaming", "Entertainment", "Consumer Electronics"],
    price: 8250,
    priceChange: 0.45,
    marketCap: "¥10.7T",
    revenue: "¥1.6T",
    per: "18.5",
    pbr: "3.85",
    founded: "1889",
    ceo: "Shuntaro Furukawa",
    outlook: [
      {
        title: "Switch 2 Anticipation Building:",
        content: "The next-generation Switch is expected in 2025—potentially the biggest product launch in Nintendo history. The installed base of 140 million Switch users provides a massive upgrade opportunity, while backward compatibility reduces adoption friction."
      },
      {
        title: "IP Monetization Renaissance:",
        content: "The Super Mario movie grossed $1.3 billion; Nintendo World theme parks are expanding globally; merchandise licensing is accelerating. Nintendo's IP may be worth more than its gaming hardware business."
      },
      {
        title: "Evergreen Software Library:",
        content: "Mario Kart 8 has sold 65 million copies over 10 years; Zelda, Pokemon, and Animal Crossing maintain extraordinary longevity. This software catalog generates profit with minimal ongoing investment."
      },
      {
        title: "Fortress Balance Sheet:",
        content: "Nintendo holds ¥1.8 trillion in cash and investments—enough to operate for years without revenue. This conservative approach may frustrate growth investors but provides extraordinary downside protection."
      },
      {
        title: "Key Risks:",
        content: "Console transitions are inherently risky—Switch 2 must succeed. Mobile gaming efforts have underperformed expectations. Competition from PlayStation, Xbox, and PC gaming for player time is intense. Key creative talent (Miyamoto) succession planning is uncertain."
      }
    ]
  },
  "8001": {
    code: "8001 JP",
    name: "Itochu",
    nameJp: "伊藤忠商事",
    themes: ["Trading", "Conglomerate", "Investment"],
    price: 7450,
    priceChange: 0.85,
    marketCap: "¥11.2T",
    revenue: "¥14.0T",
    per: "11.5",
    pbr: "1.85",
    founded: "1858",
    ceo: "Keita Ishii",
    outlook: [
      {
        title: "Buffett's Japan Bet:",
        content: "Berkshire Hathaway owns 8%+ of Itochu—Warren Buffett's largest Japan investment. This endorsement from the world's most famous value investor has drawn global attention to Japanese trading houses' undervaluation."
      },
      {
        title: "Non-Resource Model Outperforms:",
        content: "Unlike Mitsubishi and Mitsui (heavy commodity exposure), Itochu focuses on consumer goods, retail, and food. This non-resource model provides more stable earnings through commodity cycles."
      },
      {
        title: "FamilyMart and Retail Ecosystem:",
        content: "Controlling stake in FamilyMart (Japan's #2 convenience store chain) provides retail distribution platform. Data from 16,000+ stores informs consumer product development and trading decisions."
      },
      {
        title: "China Expertise Differentiator:",
        content: "Itochu's CITIC partnership provides unmatched access to Chinese markets and deal flow. As other companies struggle with China complexity, Itochu's relationships become more valuable."
      },
      {
        title: "Key Risks:",
        content: "China exposure creates geopolitical risk if US-China tensions escalate. Trading house business model is complex and opaque—difficult for outside investors to analyze. Commodity price volatility still impacts results despite diversification."
      }
    ]
  },
  "6920": {
    code: "6920 JP",
    name: "Lasertec",
    nameJp: "レーザーテック",
    themes: ["Semiconductor", "Inspection Equipment", "Technology"],
    price: 17850,
    priceChange: 3.85,
    marketCap: "¥1.7T",
    revenue: "¥230B",
    per: "28.5",
    pbr: "8.95",
    founded: "1960",
    ceo: "Osamu Okabayashi",
    outlook: [
      {
        title: "EUV Mask Inspection Monopoly:",
        content: "Lasertec holds 100% market share in actinic EUV mask inspection—the only equipment that can verify EUV photomasks work correctly. Every TSMC, Samsung, and Intel advanced chip requires Lasertec's blessing. This is arguably the most critical bottleneck in semiconductor manufacturing."
      },
      {
        title: "Pricing Power Beyond Compare:",
        content: "With zero competition, Lasertec commands extraordinary pricing—each EUV inspection system sells for ¥5+ billion. Gross margins exceed 50%, and customers have no negotiating leverage when there's no alternative."
      },
      {
        title: "Installed Base Driving Services:",
        content: "Every shipped system requires ongoing maintenance, calibration, and upgrades. As the installed base grows, high-margin service revenue becomes increasingly significant—a recurring revenue stream that smooths cyclicality."
      },
      {
        title: "High-NA EUV Next Catalyst:",
        content: "Next-generation High-NA EUV lithography requires even more sophisticated mask inspection. Lasertec is already developing systems for Intel and ASML's High-NA roadmap—another generation of monopoly profits ahead."
      },
      {
        title: "Key Risks:",
        content: "Extreme valuation assumes monopoly persists indefinitely—any competitive threat would crater the stock. Customer concentration is severe—top 3 customers are 80%+ of revenue. Semiconductor downturns could defer orders even if monopoly is secure."
      }
    ]
  },
  "6952": {
    code: "6952 JP",
    name: "Casio Computer",
    nameJp: "カシオ計算機",
    themes: ["Consumer Electronics", "Watches", "Musical Instruments"],
    price: 1150,
    priceChange: 0.45,
    marketCap: "¥290B",
    revenue: "¥270B",
    per: "15.5",
    pbr: "1.25",
    founded: "1957",
    ceo: "Kazuhiro Kashio",
    outlook: [
      {
        title: "G-Shock Global Icon:",
        content: "The G-Shock brand transcends watches—it's a cultural phenomenon with celebrity collaborations, limited editions, and devoted collectors worldwide. Premium G-Shock models (¥50,000+) carry margins that luxury watchmakers would envy."
      },
      {
        title: "Watch Segment Transformation:",
        content: "Casio has successfully pivoted from commodity digital watches to premium lifestyle products. Metal G-Shocks, Pro Trek outdoor watches, and Edifice chronographs command prices 10x basic models—mix shift is driving margin expansion."
      },
      {
        title: "Electronic Musical Instruments Steady:",
        content: "Casio keyboards remain popular for music education worldwide. While not high-growth, this business generates stable profits and benefits from periodic refresh cycles."
      },
      {
        title: "Education Technology Niche:",
        content: "Scientific calculators and educational tools maintain dominant positions in schools globally. Curriculum integration creates switching costs—teachers build lesson plans around Casio products."
      },
      {
        title: "Key Risks:",
        content: "Smartwatch competition continues pressuring traditional watch demand. Consumer discretionary spending vulnerable to economic downturns. Yen weakness helps but masks underlying growth challenges."
      }
    ]
  },
  "6963": {
    code: "6963 JP",
    name: "Rohm",
    nameJp: "ローム",
    themes: ["Semiconductor", "Power Electronics", "Automotive"],
    price: 1580,
    priceChange: 1.65,
    marketCap: "¥640B",
    revenue: "¥510B",
    per: "14.8",
    pbr: "0.95",
    founded: "1958",
    ceo: "Isao Matsumoto",
    outlook: [
      {
        title: "SiC Power Semiconductor Leader:",
        content: "Rohm ranks #2 globally in silicon carbide (SiC) power devices behind STMicro. SiC enables 10% better EV efficiency versus traditional silicon—Tesla, BYD, and European automakers are all adopting SiC, driving 40%+ annual growth."
      },
      {
        title: "Vertically Integrated Advantage:",
        content: "Unlike fabless competitors, Rohm manufactures SiC wafers, epitaxy, and devices in-house. This vertical integration provides cost advantages and quality control that's difficult to replicate."
      },
      {
        title: "Automotive Revenue Surge:",
        content: "Automotive now represents 35% of revenue, up from 20% five years ago. Beyond SiC, Rohm supplies LED drivers, motor controllers, and power management ICs across vehicle electronics."
      },
      {
        title: "Capacity Expansion Aggressive:",
        content: "Rohm is investing ¥400 billion through 2027 to expand SiC capacity 6x. Customer commitments (long-term supply agreements with auto OEMs) de-risk this massive investment."
      },
      {
        title: "Key Risks:",
        content: "SiC competition is intensifying—Infineon, ON Semi, and Chinese players are all expanding. Technology transitions (GaN alternatives) could disrupt SiC adoption trajectory. Trading below book value suggests market skepticism."
      }
    ]
  },
  "6971": {
    code: "6971 JP",
    name: "Kyocera",
    nameJp: "京セラ",
    themes: ["Ceramics", "Electronics", "Diversified"],
    price: 1650,
    priceChange: 0.35,
    marketCap: "¥2.5T",
    revenue: "¥2.0T",
    per: "18.5",
    pbr: "0.75",
    founded: "1959",
    ceo: "Hideo Tanimoto",
    outlook: [
      {
        title: "Fine Ceramics Heritage:",
        content: "Kyocera pioneered fine ceramics for electronics—IC packages, semiconductor components, and cutting tools. This technical foundation creates barriers that commodity manufacturers cannot easily cross."
      },
      {
        title: "Semiconductor Package Growth:",
        content: "Advanced chip packaging requires ceramic substrates for thermal management and reliability. As chips run hotter and packages grow more complex, Kyocera's ceramic expertise becomes more valuable."
      },
      {
        title: "Conglomerate Discount Reality:",
        content: "Kyocera owns stakes in KDDI (¥1.5 trillion value), Kyocera Document Solutions (copiers), solar, and more. Sum-of-parts likely exceeds market cap significantly—but management shows no urgency to unlock value."
      },
      {
        title: "Amoeba Management Philosophy:",
        content: "Founder Kazuo Inamori's management philosophy divides the company into small profit-responsible units. This creates entrepreneurial culture but also complexity that outsiders struggle to analyze."
      },
      {
        title: "Key Risks:",
        content: "Conglomerate structure obscures performance and likely destroys value. Solar business faces intense Chinese competition. Trading at 0.75x book reflects persistent value trap concerns."
      }
    ]
  },
  "6976": {
    code: "6976 JP",
    name: "Taiyo Yuden",
    nameJp: "太陽誘電",
    themes: ["Electronic Components", "Capacitors", "Inductors"],
    price: 3250,
    priceChange: 1.25,
    marketCap: "¥420B",
    revenue: "¥350B",
    per: "12.5",
    pbr: "1.35",
    founded: "1950",
    ceo: "Katsuya Sase",
    outlook: [
      {
        title: "MLCC Specialist Focus:",
        content: "While smaller than Murata, Taiyo Yuden focuses on high-reliability MLCCs for automotive and industrial applications. This specialization commands premium pricing versus commodity smartphone components."
      },
      {
        title: "Automotive Content Expansion:",
        content: "EVs require 3x more capacitors than ICE vehicles for power electronics and ADAS systems. Taiyo Yuden's automotive-grade components are gaining share as vehicle electrification accelerates."
      },
      {
        title: "5G Infrastructure Play:",
        content: "Base stations and network equipment require high-frequency inductors and capacitors—Taiyo Yuden's specialty. 5G buildout across emerging markets provides multi-year demand visibility."
      },
      {
        title: "Inventory Normalization Complete:",
        content: "After post-COVID inventory correction, channel inventories have normalized. Order trends are recovering as customers return to just-in-time purchasing patterns."
      },
      {
        title: "Key Risks:",
        content: "Murata's scale advantages pressure pricing in overlapping segments. Smartphone market maturity limits consumer electronics growth. China component makers improving quality at lower price points."
      }
    ]
  },
  "6981": {
    code: "6981 JP",
    name: "Murata Manufacturing",
    nameJp: "村田製作所",
    themes: ["Electronic Components", "Capacitors", "Technology"],
    price: 2650,
    priceChange: 0.95,
    marketCap: "¥5.4T",
    revenue: "¥1.7T",
    per: "18.5",
    pbr: "1.85",
    founded: "1944",
    ceo: "Norio Nakajima",
    outlook: [
      {
        title: "MLCC Global Dominance:",
        content: "Murata commands 40% global market share in multilayer ceramic capacitors—the most ubiquitous electronic component. Every smartphone contains 1,000+ MLCCs; every EV contains 10,000+. Murata benefits from virtually all electronics growth."
      },
      {
        title: "Smartphone Concentration Shifting:",
        content: "While smartphones remain important, Murata is diversifying toward automotive (now 25% of revenue), industrial, and energy applications. This reduces Apple/Samsung concentration risk."
      },
      {
        title: "Technology Leadership Sustaining:",
        content: "Murata produces the world's smallest MLCCs (0201 size) and highest capacitance products. This technology leadership enables premium pricing—competitors are always one generation behind."
      },
      {
        title: "Battery and Module Expansion:",
        content: "Beyond passives, Murata is expanding into battery modules, wireless modules, and sensor solutions. These higher-value products improve revenue per device."
      },
      {
        title: "Key Risks:",
        content: "Smartphone market maturity limits core business growth. Chinese MLCC makers (Yageo, Samsung Electro-Mechanics) are gaining share in mid-tier segments. Inventory cycles create quarterly volatility."
      }
    ]
  },
  "7735": {
    code: "7735 JP",
    name: "Screen Holdings",
    nameJp: "SCREENホールディングス",
    themes: ["Semiconductor", "Manufacturing Equipment", "Technology"],
    price: 8950,
    priceChange: 2.45,
    marketCap: "¥420B",
    revenue: "¥480B",
    per: "14.5",
    pbr: "2.15",
    founded: "1943",
    ceo: "Toshio Hiroe",
    outlook: [
      {
        title: "Wafer Cleaning Equipment Leader:",
        content: "Screen dominates semiconductor wafer cleaning with 50%+ global share. As chips shrink, cleanliness requirements intensify—even nanometer-scale particles cause defects. Screen's cleaning expertise is mission-critical."
      },
      {
        title: "AI Chip Complexity Tailwind:",
        content: "Advanced AI chips require more cleaning steps than ever—both front-end wafer processing and advanced packaging. Screen benefits from increasing process complexity across the semiconductor value chain."
      },
      {
        title: "Coater/Developer Position:",
        content: "Beyond cleaning, Screen holds strong positions in photoresist coating and developing equipment. This adjacency creates cross-selling opportunities and deeper customer relationships."
      },
      {
        title: "China Exposure Manageable:",
        content: "Unlike lithography equipment, cleaning tools face fewer export restrictions. Screen continues shipping to Chinese fabs for mature nodes—providing growth while advanced nodes drive elsewhere."
      },
      {
        title: "Key Risks:",
        content: "Semiconductor equipment cycles create boom-bust quarterly patterns. Competition from Tokyo Electron and Lam Research in some segments. Smaller scale than larger competitors limits R&D leverage."
      }
    ]
  },
  "7751": {
    code: "7751 JP",
    name: "Canon",
    nameJp: "キヤノン",
    themes: ["Imaging", "Office Equipment", "Medical"],
    price: 4850,
    priceChange: 0.65,
    marketCap: "¥6.1T",
    revenue: "¥4.2T",
    per: "14.5",
    pbr: "1.35",
    founded: "1937",
    ceo: "Fujio Mitarai",
    outlook: [
      {
        title: "Camera Market Resilience:",
        content: "Despite smartphone disruption, Canon's professional and mirrorless cameras thrive. The EOS R mirrorless system is winning market share from Sony, and content creator demand for high-quality video capabilities drives upgrade cycles."
      },
      {
        title: "Office Equipment Transformation:",
        content: "Canon is repositioning from hardware sales to managed print services and workflow solutions. Recurring service revenue now exceeds 50% of office segment—improving earnings stability and customer stickiness."
      },
      {
        title: "Medical Imaging Growth Engine:",
        content: "CT scanners, MRI systems, and diagnostic equipment represent Canon's fastest-growing segment. The Canon Medical (formerly Toshiba Medical) acquisition created a credible #4 global player with 10% market share."
      },
      {
        title: "Semiconductor Lithography Ambitions:",
        content: "Canon's nanoimprint lithography offers potential alternative to EUV for certain applications. While still nascent, successful commercialization could create significant upside."
      },
      {
        title: "Key Risks:",
        content: "Office printing faces structural decline as digitization continues. Camera market, while stable, offers limited growth. Semiconductor lithography efforts may not achieve commercial success against ASML dominance."
      }
    ]
  },
  "7752": {
    code: "7752 JP",
    name: "Ricoh",
    nameJp: "リコー",
    themes: ["Office Equipment", "IT Services", "Printing"],
    price: 1450,
    priceChange: 0.25,
    marketCap: "¥920B",
    revenue: "¥2.3T",
    per: "12.5",
    pbr: "0.75",
    founded: "1936",
    ceo: "Jake Yamashita",
    outlook: [
      {
        title: "Office Services Pivot:",
        content: "Ricoh is transforming from a copier company to a digital services provider. Managed IT services, cloud workflow solutions, and workplace transformation consulting are growing while hardware declines."
      },
      {
        title: "Hybrid Work Solutions:",
        content: "Post-COVID hybrid work creates demand for integrated office/home solutions. Ricoh's collaboration tools, document management, and remote support services address this emerging market."
      },
      {
        title: "Production Printing Strength:",
        content: "Commercial printing (marketing materials, packaging, publishing) remains profitable. Ricoh's high-speed inkjet presses compete effectively against offset printing for short runs."
      },
      {
        title: "Sustainability Focus:",
        content: "Refurbished equipment programs and circular economy initiatives resonate with corporate sustainability mandates. This differentiation helps win contracts from ESG-conscious customers."
      },
      {
        title: "Key Risks:",
        content: "Office printing structural decline continues regardless of transformation efforts. Services business margins remain below hardware historically. Trading at 0.75x book reflects market skepticism about turnaround."
      }
    ]
  },
  "7201": {
    code: "7201 JP",
    name: "Nissan Motor",
    nameJp: "日産自動車",
    themes: ["Automotive", "Electric Vehicles", "Manufacturing"],
    price: 420,
    priceChange: -1.85,
    marketCap: "¥1.7T",
    revenue: "¥12.7T",
    per: "5.5",
    pbr: "0.25",
    founded: "1933",
    ceo: "Makoto Uchida",
    outlook: [
      {
        title: "EV Pioneer Losing Ground:",
        content: "Nissan launched the Leaf in 2010—the first mass-market EV. But competitors have leapfrogged Nissan's technology. The Ariya crossover and upcoming models must prove Nissan can compete with Tesla, BYD, and legacy rivals' EV offerings."
      },
      {
        title: "Alliance Restructuring:",
        content: "The Renault-Nissan-Mitsubishi Alliance is being restructured with reduced cross-shareholdings. Greater independence could enable faster decision-making, but also removes financial backstop."
      },
      {
        title: "US Market Critical:",
        content: "North America generates the majority of Nissan's profits. Success of redesigned Rogue, Pathfinder, and new EV models will determine near-term financial trajectory."
      },
      {
        title: "China Joint Venture Struggles:",
        content: "Nissan's China sales have collapsed as local EV makers dominate. The JV partnership requires strategic reassessment—continuing losses may force difficult restructuring decisions."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.25x book value signals severe market pessimism. EV transition execution is existential—failure means irrelevance. Quality and brand perception have deteriorated versus Toyota/Honda. Balance sheet constraints limit investment flexibility."
      }
    ]
  },
  "7202": {
    code: "7202 JP",
    name: "Isuzu Motors",
    nameJp: "いすゞ自動車",
    themes: ["Automotive", "Commercial Vehicles", "Trucks"],
    price: 1980,
    priceChange: 0.55,
    marketCap: "¥1.5T",
    revenue: "¥3.2T",
    per: "8.5",
    pbr: "1.05",
    founded: "1916",
    ceo: "Masanori Katayama",
    outlook: [
      {
        title: "Commercial Vehicle Specialist:",
        content: "Isuzu focuses exclusively on trucks and commercial vehicles—no passenger car distractions. This specialization creates efficiency advantages and deeper customer relationships with fleet operators."
      },
      {
        title: "Southeast Asia Dominance:",
        content: "Isuzu holds #1 market share in Thailand and leading positions across ASEAN. Emerging market infrastructure development drives truck demand for decades—roads, construction, and logistics all require trucks."
      },
      {
        title: "Diesel Engine Excellence:",
        content: "Isuzu's diesel engines power not just their trucks but OEM supply to competitors. Engine technology and fuel efficiency are competitive advantages that support premium pricing."
      },
      {
        title: "EV Transition More Gradual:",
        content: "Commercial vehicles will electrify slower than passenger cars—range requirements, charging infrastructure, and total cost of ownership favor diesel for heavy-duty applications through 2030+."
      },
      {
        title: "Key Risks:",
        content: "Emerging market currency volatility impacts profitability. Long-term diesel-to-electric transition will eventually require significant investment. Thailand political instability could disrupt key market."
      }
    ]
  },
  "7205": {
    code: "7205 JP",
    name: "Hino Motors",
    nameJp: "日野自動車",
    themes: ["Automotive", "Trucks", "Commercial Vehicles"],
    price: 420,
    priceChange: -0.45,
    marketCap: "¥240B",
    revenue: "¥1.4T",
    per: "—",
    pbr: "0.85",
    founded: "1942",
    ceo: "Satoshi Ogiso",
    outlook: [
      {
        title: "Emissions Scandal Recovery:",
        content: "Hino's 2022 emissions data falsification scandal devastated the company—certifications suspended, sales halted, and reputation destroyed. Recovery is underway but trust rebuilding takes years."
      },
      {
        title: "Toyota Parent Support:",
        content: "As Toyota's 50%-owned subsidiary, Hino has financial backing to survive the crisis. Toyota's supply chain integration and technology sharing provide recovery foundation."
      },
      {
        title: "Japan Truck Market Position:",
        content: "Hino historically held #1 domestic truck market share. Regaining certification for all models is essential—customers are returning but cautiously."
      },
      {
        title: "BEV and FCEV Development:",
        content: "Joint development with Toyota on hydrogen fuel cell trucks positions Hino for eventual zero-emission commercial vehicles. The BEV truck partnership with BYD provides near-term EV options."
      },
      {
        title: "Key Risks:",
        content: "Scandal aftermath continues—legal liabilities and compensation costs unclear. Market share loss during suspension may be permanent. Management credibility requires years of clean execution to restore."
      }
    ]
  },
  "7211": {
    code: "7211 JP",
    name: "Mitsubishi Motors",
    nameJp: "三菱自動車",
    themes: ["Automotive", "Electric Vehicles", "SUVs"],
    price: 480,
    priceChange: 0.85,
    marketCap: "¥720B",
    revenue: "¥2.8T",
    per: "6.5",
    pbr: "0.75",
    founded: "1970",
    ceo: "Takao Kato",
    outlook: [
      {
        title: "PHEV Pioneer Recognition:",
        content: "Mitsubishi's Outlander PHEV was among the first mainstream plug-in hybrids. While others have caught up, Mitsubishi retains credibility in electrification that helps in markets prioritizing green credentials."
      },
      {
        title: "ASEAN Growth Focus:",
        content: "Southeast Asia is Mitsubishi Motors' stronghold—the Xpander and Triton dominate in Indonesia, Thailand, and Vietnam. Emerging market growth provides volume that developed markets cannot."
      },
      {
        title: "Alliance Technology Access:",
        content: "The Renault-Nissan-Mitsubishi Alliance provides access to platforms and technology that Mitsubishi couldn't afford independently. The Outlander shares Nissan Rogue platform, reducing development costs."
      },
      {
        title: "Smaller but Profitable:",
        content: "Post-restructuring Mitsubishi is focused and profitable rather than chasing volume. Withdrawal from Europe and focus on core markets improves capital efficiency."
      },
      {
        title: "Key Risks:",
        content: "Brand perception remains weak versus Toyota/Honda. Limited product lineup reduces appeal. Alliance restructuring could reduce technology access. Low valuation (0.75x book) reflects persistent concerns."
      }
    ]
  },
  "7261": {
    code: "7261 JP",
    name: "Mazda Motor",
    nameJp: "マツダ",
    themes: ["Automotive", "Premium Vehicles", "Manufacturing"],
    price: 1050,
    priceChange: -0.65,
    marketCap: "¥660B",
    revenue: "¥4.0T",
    per: "5.5",
    pbr: "0.45",
    founded: "1920",
    ceo: "Masahiro Moro",
    outlook: [
      {
        title: "Premium Brand Positioning:",
        content: "Mazda has successfully repositioned as a premium brand—interior quality, driving dynamics, and design rival European competitors at Japanese prices. This premiumization supports higher margins than volume competitors."
      },
      {
        title: "Skyactiv Technology Platform:",
        content: "Mazda's Skyactiv engines and platform achieve exceptional fuel efficiency without hybridization. This efficient ICE approach buys time during EV transition while minimizing investment requirements."
      },
      {
        title: "US Market Recovery:",
        content: "After years of underperformance, Mazda's US sales are recovering with CX-50, CX-70, and CX-90 crossovers. North American profitability improvement is essential for overall financial health."
      },
      {
        title: "Toyota Partnership Expanding:",
        content: "Joint manufacturing in Alabama, hybrid technology licensing, and potential deeper collaboration provide Mazda access to Toyota's scale and technology advantages."
      },
      {
        title: "Key Risks:",
        content: "Small scale limits R&D spending versus giants. EV strategy remains unclear—multi-solution approach may spread resources too thin. Trading at 0.45x book reflects market concern about EV transition capability."
      }
    ]
  },
  "7267": {
    code: "7267 JP",
    name: "Honda Motor",
    nameJp: "ホンダ",
    themes: ["Automotive", "Motorcycles", "Electric Vehicles"],
    price: 1450,
    priceChange: 0.45,
    marketCap: "¥7.5T",
    revenue: "¥18.4T",
    per: "8.5",
    pbr: "0.55",
    founded: "1948",
    ceo: "Toshihiro Mibe",
    outlook: [
      {
        title: "Motorcycle Global Dominance:",
        content: "Honda sells 20 million motorcycles annually—more than all competitors combined in key markets. From Vietnam commuter bikes to premium African Twin adventures, motorcycles generate reliable profits funding automotive transformation."
      },
      {
        title: "EV Acceleration Finally:",
        content: "After cautious approach, Honda is aggressively investing in EVs—¥5 trillion through 2030. The Prologue SUV, GM partnership for affordable EVs, and Sony joint venture (Afeela) signal serious commitment."
      },
      {
        title: "North America Profit Engine:",
        content: "Honda earns majority of profits in North America where CR-V, Accord, and Civic command strong pricing. US manufacturing localization provides currency hedge and trade policy protection."
      },
      {
        title: "Power Products Hidden Value:",
        content: "Generators, lawn mowers, and marine engines generate ¥400 billion revenue with stable margins. This often-ignored business provides diversification and funds core auto investment."
      },
      {
        title: "Key Risks:",
        content: "China sales collapsing as local EV makers dominate—JV restructuring likely required. EV transition later than competitors may cost market share. Trading at 0.55x book reflects EV transition uncertainty."
      }
    ]
  },
  "7269": {
    code: "7269 JP",
    name: "Suzuki Motor",
    nameJp: "スズキ",
    themes: ["Automotive", "Motorcycles", "Compact Vehicles"],
    price: 1680,
    priceChange: 0.75,
    marketCap: "¥3.3T",
    revenue: "¥5.0T",
    per: "11.5",
    pbr: "1.25",
    founded: "1909",
    ceo: "Toshihiro Suzuki",
    outlook: [
      {
        title: "India Market Leadership:",
        content: "Maruti Suzuki dominates India with 40%+ market share—a position built over 40 years. As India becomes the world's 3rd largest auto market, Suzuki's embedded position is extraordinarily valuable."
      },
      {
        title: "Compact Car Expertise:",
        content: "Suzuki specializes in small, affordable vehicles that emerging market consumers can afford. This focus creates cost discipline and manufacturing efficiency that larger competitors struggle to match."
      },
      {
        title: "Toyota Alliance Benefits:",
        content: "Toyota's 5% stake brings technology sharing, hybrid systems, and potential platform collaboration. Suzuki gains scale benefits while maintaining independence."
      },
      {
        title: "Motorcycle Strength:",
        content: "Suzuki motorcycles hold strong positions in India, Indonesia, and enthusiast markets globally. Two-wheeler and four-wheeler synergies in shared markets create distribution advantages."
      },
      {
        title: "Key Risks:",
        content: "India concentration creates country-specific risk—policy changes or economic slowdown directly impacts results. EV transition in India is accelerating—Maruti must respond to Tata and Chinese EV competition. Japan domestic business faces structural decline."
      }
    ]
  },
  "7270": {
    code: "7270 JP",
    name: "Subaru",
    nameJp: "SUBARU",
    themes: ["Automotive", "AWD Vehicles", "Safety"],
    price: 2650,
    priceChange: 0.55,
    marketCap: "¥2.0T",
    revenue: "¥4.0T",
    per: "7.5",
    pbr: "0.75",
    founded: "1953",
    ceo: "Atsushi Osaki",
    outlook: [
      {
        title: "AWD Specialization Moat:",
        content: "Subaru's symmetrical all-wheel drive is standard across the lineup—unique among mainstream brands. This AWD expertise creates loyal customers in snow-belt regions and outdoor enthusiast demographics."
      },
      {
        title: "North America Concentration:",
        content: "North America generates 75%+ of Subaru's profits. The Outback and Forester dominate their segments with safety-conscious families and active lifestyle buyers. Brand loyalty exceeds 60%."
      },
      {
        title: "EyeSight Safety Leadership:",
        content: "Subaru's EyeSight driver assistance system pioneered camera-based ADAS before competitors. Safety reputation drives purchase decisions—particularly with family buyers."
      },
      {
        title: "Toyota Partnership Deepening:",
        content: "Toyota's 20% stake enables technology sharing—the Solterra EV shares Toyota bZ4X platform. Access to Toyota's hybrid and EV technology fills gaps Subaru couldn't afford independently."
      },
      {
        title: "Key Risks:",
        content: "Extreme US concentration creates currency and trade policy vulnerability. EV transition relies heavily on Toyota partnership—limited independent EV capability. Small scale limits R&D versus global giants."
      }
    ]
  },
  "8058": {
    code: "8058 JP",
    name: "Mitsubishi Corporation",
    nameJp: "三菱商事",
    themes: ["Trading", "Commodities", "Conglomerate"],
    price: 2580,
    priceChange: 0.65,
    marketCap: "¥10.8T",
    revenue: "¥19.5T",
    per: "10.5",
    pbr: "1.15",
    founded: "1954",
    ceo: "Katsuya Nakanishi",
    outlook: [
      {
        title: "Buffett Endorsement:",
        content: "Berkshire Hathaway's 8%+ stake signals Warren Buffett's conviction in Japanese trading houses' value. This endorsement has drawn global investor attention to previously overlooked sogo shosha model."
      },
      {
        title: "Natural Resources Portfolio:",
        content: "Mitsubishi Corporation owns stakes in Australian coking coal, Chilean copper, LNG projects globally, and Indonesian thermal coal. Commodity exposure provides leverage to global growth and inflation."
      },
      {
        title: "Energy Transition Investment:",
        content: "Beyond fossil fuels, MC is investing heavily in offshore wind, hydrogen, ammonia, and carbon capture. The traditional resource trading network provides routes to market for new energy commodities."
      },
      {
        title: "Industrial Value Chain Integration:",
        content: "MC's investments span raw materials through manufacturing to retail—owning Lawson convenience stores, Mitsubishi Motors stake, and food distribution. This integration creates information advantages and profit opportunities across cycles."
      },
      {
        title: "Key Risks:",
        content: "Commodity price volatility directly impacts earnings—coking coal prices can swing 50% annually. Climate transition creates stranded asset risk for fossil fuel investments. Complex structure makes true value difficult to assess."
      }
    ]
  },
  "8031": {
    code: "8031 JP",
    name: "Mitsui & Co",
    nameJp: "三井物産",
    themes: ["Trading", "Commodities", "Infrastructure"],
    price: 3250,
    priceChange: 0.85,
    marketCap: "¥9.5T",
    revenue: "¥14.8T",
    per: "9.5",
    pbr: "1.25",
    founded: "1947",
    ceo: "Kenichi Hori",
    outlook: [
      {
        title: "LNG Global Leader:",
        content: "Mitsui has the largest LNG trading and investment portfolio among Japanese trading houses. Stakes in projects from Australia to Mozambique to US Gulf Coast provide diversified exposure to global gas demand growth."
      },
      {
        title: "Iron Ore Australian Assets:",
        content: "Mitsui owns significant stakes in Australian iron ore projects alongside BHP and Rio Tinto. Steel production in India and Southeast Asia provides long-term demand visibility for iron ore."
      },
      {
        title: "Healthcare and Nutrition Pivot:",
        content: "Mitsui is building a healthcare platform through acquisitions (IHH Healthcare, DaVita Medical) and nutrition investments (aquaculture, protein alternatives). These non-commodity businesses provide earnings stability."
      },
      {
        title: "Infrastructure Recurring Revenue:",
        content: "Rail (UK train leasing), power generation, and water utilities generate stable cash flows less correlated to commodity cycles. This diversification smooths earnings volatility."
      },
      {
        title: "Key Risks:",
        content: "Iron ore and LNG prices drive near-term earnings—commodity downturns hit results hard. Climate transition requires careful management of fossil fuel exposure. Geographic/political risks across emerging market investments."
      }
    ]
  },
  "9432": {
    code: "9432 JP",
    name: "NTT",
    nameJp: "日本電信電話",
    themes: ["Telecom", "Technology", "Data Centers"],
    price: 156,
    priceChange: 0.35,
    marketCap: "¥14.2T",
    revenue: "¥13.4T",
    per: "12.5",
    pbr: "1.45",
    founded: "1985",
    ceo: "Akira Shimada",
    outlook: [
      {
        title: "Domestic Telecom Cash Cow:",
        content: "NTT Docomo, NTT East/West fixed line operations generate enormous stable cash flows from Japan's telecom infrastructure. Government-regulated returns provide downside protection while enabling investment elsewhere."
      },
      {
        title: "Data Center Global Expansion:",
        content: "NTT is building one of the world's largest data center platforms through organic growth and acquisitions. Enterprise cloud demand and AI compute requirements drive double-digit growth in this segment."
      },
      {
        title: "IOWN Innovation Initiative:",
        content: "NTT's IOWN (Innovative Optical and Wireless Network) vision uses photonics to replace electronics in computing and networking. If successful, IOWN could leapfrog current semiconductor limitations."
      },
      {
        title: "Shareholder Returns Commitment:",
        content: "NTT consistently returns cash through dividends and buybacks—payout ratio targets exceed 40%. The recent stock split (25:1) improved retail investor accessibility."
      },
      {
        title: "Key Risks:",
        content: "Japan mobile market is mature with intense competition—ARPU pressure continues. Massive infrastructure investments in fiber and 5G strain capital resources. Data center expansion requires continued execution across geographies."
      }
    ]
  },
  "4543": {
    code: "4543 JP",
    name: "Terumo",
    nameJp: "テルモ",
    themes: ["Medical Devices", "Healthcare", "Cardiovascular"],
    price: 2850,
    priceChange: 0.65,
    marketCap: "¥4.3T",
    revenue: "¥920B",
    per: "32.5",
    pbr: "3.85",
    founded: "1921",
    ceo: "Shinjiro Sato",
    outlook: [
      {
        title: "Interventional Cardiology Leader:",
        content: "Terumo dominates interventional cardiology devices—catheters, guidewires, and vascular closure devices. The shift to minimally invasive procedures drives structural growth as hospitals prefer shorter recovery times and lower costs."
      },
      {
        title: "Blood Management Hidden Strength:",
        content: "Terumo's blood bags, apheresis systems, and cell processing equipment support blood banks and hospitals globally. This stable business provides recurring revenue with limited cyclicality."
      },
      {
        title: "Global Expansion Accelerating:",
        content: "Unlike many Japanese medtech companies, Terumo generates 75%+ of revenue outside Japan. Strong positions in Europe and growing presence in emerging markets reduce Japan demographic risk."
      },
      {
        title: "R&D Pipeline Robust:",
        content: "New product launches in drug-coated balloons, TAVI delivery systems, and robotic surgery position Terumo at the innovation frontier. Partnerships with startups supplement internal development."
      },
      {
        title: "Key Risks:",
        content: "Healthcare cost containment pressures pricing globally. Competition from Medtronic, Abbott, and Boston Scientific is intense. Premium valuation (32x) requires sustained growth execution."
      }
    ]
  },
  "4902": {
    code: "4902 JP",
    name: "Konica Minolta",
    nameJp: "コニカミノルタ",
    themes: ["Office Equipment", "Healthcare", "Industrial"],
    price: 485,
    priceChange: -0.85,
    marketCap: "¥240B",
    revenue: "¥1.1T",
    per: "—",
    pbr: "0.45",
    founded: "1873",
    ceo: "Toshimitsu Taiko",
    outlook: [
      {
        title: "Office Printing Decline Reality:",
        content: "Konica Minolta's core MFP (multifunction printer) business faces structural decline as digitization reduces print volumes. Management acknowledges this reality and is aggressively pursuing transformation."
      },
      {
        title: "Healthcare Imaging Pivot:",
        content: "Digital X-ray systems, ultrasound, and healthcare IT solutions represent growth opportunities. Acquisitions have built capabilities, but scale remains small relative to GE, Siemens, and Philips."
      },
      {
        title: "Industrial Sensing and Measurement:",
        content: "Display measurement instruments and industrial sensors serve semiconductor and automotive customers. This niche business carries higher margins than office equipment."
      },
      {
        title: "Workplace Hub Vision:",
        content: "Konica Minolta's Workplace Hub integrates printing, IT services, and cloud applications—attempting to become an IT services provider rather than hardware vendor."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.45x book reflects severe market skepticism about transformation. Office equipment decline may outpace new business growth. Multiple restructuring programs haven't yet delivered profitability."
      }
    ]
  },
  "7731": {
    code: "7731 JP",
    name: "Nikon",
    nameJp: "ニコン",
    themes: ["Imaging", "Semiconductor Equipment", "Precision"],
    price: 1580,
    priceChange: 1.25,
    marketCap: "¥580B",
    revenue: "¥650B",
    per: "14.5",
    pbr: "0.95",
    founded: "1917",
    ceo: "Toshikazu Umatate",
    outlook: [
      {
        title: "Mirrorless Camera Recovery:",
        content: "Nikon's Z-series mirrorless cameras have stabilized the imaging business after years of smartphone-driven decline. The Z8 and Z9 flagships compete effectively with Sony and Canon for professional photographers."
      },
      {
        title: "Semiconductor Lithography Niche:",
        content: "While ASML dominates cutting-edge EUV, Nikon maintains profitable positions in i-line and KrF lithography for mature semiconductor nodes. China demand for non-restricted equipment provides growth."
      },
      {
        title: "FPD Lithography Strength:",
        content: "Nikon leads in flat panel display lithography—equipment manufacturing LCD and OLED screens. Display fab expansion in China drives orders despite US-China tensions."
      },
      {
        title: "Healthcare and Components:",
        content: "Microscopy, ophthalmology equipment, and precision components diversify beyond imaging. These businesses are smaller but carry attractive margins."
      },
      {
        title: "Key Risks:",
        content: "Camera market structurally smaller than peak—limited growth potential. Semiconductor lithography lost to ASML in advanced nodes. Trading near book value reflects transformation challenges."
      }
    ]
  },
  "7733": {
    code: "7733 JP",
    name: "Olympus",
    nameJp: "オリンパス",
    themes: ["Medical Devices", "Endoscopy", "Healthcare"],
    price: 2250,
    priceChange: 0.45,
    marketCap: "¥2.9T",
    revenue: "¥940B",
    per: "28.5",
    pbr: "3.25",
    founded: "1919",
    ceo: "Stefan Kaufmann",
    outlook: [
      {
        title: "Endoscopy Global Dominance:",
        content: "Olympus holds 70% global market share in gastrointestinal endoscopes—the gold standard for detecting and treating digestive diseases. This near-monopoly creates extraordinary pricing power and recurring revenue from single-use accessories."
      },
      {
        title: "Therapeutic Expansion:",
        content: "Beyond diagnostic endoscopy, Olympus is expanding into therapeutic devices—tools that treat conditions during endoscopic procedures. Higher-value therapeutic devices improve revenue per procedure."
      },
      {
        title: "Camera Exit Complete:",
        content: "Olympus sold its struggling camera business in 2021, enabling 100% focus on medical devices. This strategic clarity has improved margins and management focus."
      },
      {
        title: "Global CEO Leadership:",
        content: "CEO Stefan Kaufmann brings Western medtech experience to transform Olympus culture and governance. Improved capital allocation and shareholder communication signal modernization."
      },
      {
        title: "Key Risks:",
        content: "Endoscope reprocessing safety concerns have driven regulatory scrutiny. Single-use scope competition from Boston Scientific and Ambu could disrupt reusable model. Premium valuation assumes continued dominance."
      }
    ]
  },
  "9433": {
    code: "9433 JP",
    name: "KDDI",
    nameJp: "KDDI",
    themes: ["Telecom", "Mobile", "Financial Services"],
    price: 4850,
    priceChange: 0.35,
    marketCap: "¥10.8T",
    revenue: "¥5.8T",
    per: "14.5",
    pbr: "1.95",
    founded: "1984",
    ceo: "Makoto Takahashi",
    outlook: [
      {
        title: "au Mobile Stability:",
        content: "KDDI's au brand holds #2 position in Japan mobile with 30%+ market share. While government pressure reduced prices, rational competition and 5G upselling have stabilized ARPU trends."
      },
      {
        title: "Enterprise and DX Growth:",
        content: "KDDI's enterprise segment—cloud, IoT, and digital transformation services—is growing double digits. Corporate Japan's digitization creates sustainable demand beyond consumer mobile."
      },
      {
        title: "Financial Services Ecosystem:",
        content: "au PAY, au Jibun Bank, and insurance services create financial ecosystem around mobile customers. Cross-selling improves customer lifetime value and reduces churn."
      },
      {
        title: "Shareholder Returns Priority:",
        content: "KDDI has increased dividends for 21 consecutive years—among the longest streaks in Japan. Consistent buybacks demonstrate commitment to shareholder value."
      },
      {
        title: "Key Risks:",
        content: "Japan mobile market is saturated—growth requires taking share or adjacent expansion. Rakuten Mobile competition adds pricing pressure. Myanmar investment has faced political turmoil."
      }
    ]
  },
  "9434": {
    code: "9434 JP",
    name: "SoftBank Corp",
    nameJp: "ソフトバンク",
    themes: ["Telecom", "Mobile", "Technology"],
    price: 185,
    priceChange: 0.55,
    marketCap: "¥8.8T",
    revenue: "¥6.1T",
    per: "18.5",
    pbr: "3.85",
    founded: "1986",
    ceo: "Junichi Miyakawa",
    outlook: [
      {
        title: "Japan's #3 Mobile Carrier:",
        content: "SoftBank Corp (the telco, separate from SoftBank Group) operates Japan's #3 mobile network with Y!mobile value brand. Strong enterprise services and PayPay digital payments complement core mobile."
      },
      {
        title: "PayPay Super App Ambitions:",
        content: "PayPay has become Japan's dominant mobile payment platform with 60 million+ users. Expanding into financial services, mini-apps, and commerce could create significant value beyond telecom."
      },
      {
        title: "5G and Enterprise Leadership:",
        content: "Early 5G rollout and enterprise digitization services position SoftBank Corp for corporate market growth. Private 5G networks for factories and warehouses are emerging opportunities."
      },
      {
        title: "AI Integration Focus:",
        content: "Partnership with parent SoftBank Group's AI investments (OpenAI, Arm) could provide differentiated AI-powered services for enterprise customers."
      },
      {
        title: "Key Risks:",
        content: "Parent company SoftBank Group's 40% ownership creates governance complexity. Mobile market pricing pressure continues. Heavy debt load limits financial flexibility."
      }
    ]
  },
  "5831": {
    code: "5831 JP",
    name: "Shizuoka Financial Group",
    nameJp: "しずおかフィナンシャルグループ",
    themes: ["Banking", "Regional Finance", "Financial Services"],
    price: 1450,
    priceChange: 0.85,
    marketCap: "¥580B",
    revenue: "¥180B",
    per: "10.5",
    pbr: "0.55",
    founded: "1943",
    ceo: "Hisashi Shibata",
    outlook: [
      {
        title: "Shizuoka Regional Dominance:",
        content: "Shizuoka Bank dominates its home prefecture—one of Japan's wealthiest regions with strong manufacturing (Suzuki, Yamaha headquarters). Regional concentration provides deposit stability and relationship lending opportunities."
      },
      {
        title: "Interest Rate Sensitivity:",
        content: "As BOJ normalizes rates, regional banks benefit disproportionately—net interest margins expand on their large deposit bases. Each 25bp rate hike could add billions in annual profit."
      },
      {
        title: "Digital Banking Push:",
        content: "Investment in digital banking reduces branch costs while reaching younger customers. Partnership strategies supplement in-house digital development."
      },
      {
        title: "Wealth Management Opportunity:",
        content: "Aging Shizuoka population creates wealth transfer and advisory opportunities. Capturing inheritance and retirement assets is strategic priority."
      },
      {
        title: "Key Risks:",
        content: "Regional population decline threatens loan demand. Trading at 0.55x book reflects structural concerns about regional banking model. Competition from megabanks and digital banks intensifying."
      }
    ]
  },
  "7186": {
    code: "7186 JP",
    name: "Concordia Financial Group",
    nameJp: "コンコルディア・フィナンシャルグループ",
    themes: ["Banking", "Regional Finance", "Financial Services"],
    price: 720,
    priceChange: 0.65,
    marketCap: "¥920B",
    revenue: "¥320B",
    per: "9.5",
    pbr: "0.48",
    founded: "2016",
    ceo: "Yasuyuki Kawasaki",
    outlook: [
      {
        title: "Yokohama Bank Foundation:",
        content: "Concordia combines Bank of Yokohama and Higashi-Nippon Bank—creating a regional powerhouse serving the greater Tokyo area. Yokohama's proximity to Tokyo provides access to dynamic economic region."
      },
      {
        title: "Greater Tokyo Advantage:",
        content: "Unlike rural regional banks, Concordia's footprint includes Japan's economic heartland. Corporate and retail customer bases are larger and growing faster than typical regional banks."
      },
      {
        title: "Merger Synergies Ongoing:",
        content: "Branch consolidation, system integration, and operational efficiency improvements continue post-merger. Cost synergies should improve ROE toward management targets."
      },
      {
        title: "SME Lending Focus:",
        content: "Small and medium enterprises in Kanagawa and surrounding areas form core lending relationships. These relationship-based loans carry better margins than megabank competition."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.48x book signals market skepticism. Interest rate normalization benefits may be priced in. Competition from megabanks in greater Tokyo is intense."
      }
    ]
  },
  "8304": {
    code: "8304 JP",
    name: "Aozora Bank",
    nameJp: "あおぞら銀行",
    themes: ["Banking", "Specialty Finance", "Real Estate"],
    price: 2150,
    priceChange: -1.25,
    marketCap: "¥250B",
    revenue: "¥85B",
    per: "8.5",
    pbr: "0.55",
    founded: "1957",
    ceo: "Kei Tanikawa",
    outlook: [
      {
        title: "Specialty Banking Model:",
        content: "Aozora positions as a specialty bank focusing on corporate finance, real estate, and specialty lending—differentiated from megabank commodity products and regional bank retail focus."
      },
      {
        title: "US Real Estate Exposure:",
        content: "Significant US commercial real estate lending has created recent challenges as office valuations declined post-COVID. Provisioning for US CRE losses has pressured earnings."
      },
      {
        title: "Corporate Restructuring Expertise:",
        content: "Aozora's history as the former Nippon Credit Bank (restructured post-bubble) created expertise in distressed situations and corporate turnarounds—valuable in economic downturns."
      },
      {
        title: "Digital Banking Initiatives:",
        content: "GMO Aozora Net Bank joint venture targets digital-native customers and fintech partnerships. This provides exposure to digital banking growth without cannibalizing core business."
      },
      {
        title: "Key Risks:",
        content: "US CRE exposure may require additional provisions if office market deteriorates further. Small scale limits competitive positioning. Dividend sustainability uncertain given earnings pressure."
      }
    ]
  },
  "8308": {
    code: "8308 JP",
    name: "Resona Holdings",
    nameJp: "りそなホールディングス",
    themes: ["Banking", "Retail Banking", "Financial Services"],
    price: 985,
    priceChange: 0.75,
    marketCap: "¥2.3T",
    revenue: "¥780B",
    per: "11.5",
    pbr: "0.65",
    founded: "2001",
    ceo: "Masahiro Minami",
    outlook: [
      {
        title: "Retail Banking Focus:",
        content: "Unlike megabanks with corporate focus, Resona emphasizes retail banking—mortgages, consumer loans, and wealth management. This consumer orientation provides stable funding and growth opportunities in aging Japan."
      },
      {
        title: "Trust Banking Strength:",
        content: "Resona's trust operations handle inheritance, real estate, and corporate trusts. As Japan's population ages and wealth transfers accelerate, trust services become increasingly valuable."
      },
      {
        title: "Greater Osaka Footprint:",
        content: "Strong presence in Kansai region (Osaka, Kyoto, Kobe) provides regional diversification from Tokyo-centric competitors. Kansai's economic revival supports regional growth."
      },
      {
        title: "Reformed Governance:",
        content: "Post-bailout (2003) reforms created strong governance culture. Resona often leads Japanese banks in ESG and disclosure practices."
      },
      {
        title: "Key Risks:",
        content: "Retail banking margins are thin and competitive. Trading at 0.65x book reflects ongoing challenges in low-rate environment. Population decline threatens retail loan demand long-term."
      }
    ]
  },
  "8309": {
    code: "8309 JP",
    name: "Sumitomo Mitsui Trust",
    nameJp: "三井住友トラスト・ホールディングス",
    themes: ["Trust Banking", "Asset Management", "Financial Services"],
    price: 3250,
    priceChange: 0.45,
    marketCap: "¥2.5T",
    revenue: "¥1.8T",
    per: "12.5",
    pbr: "0.72",
    founded: "2011",
    ceo: "Toru Takakura",
    outlook: [
      {
        title: "Trust Banking Pure Play:",
        content: "SuMi TRUST is Japan's largest trust bank—managing assets, handling securities administration, and providing fiduciary services. Trust banking carries higher margins than commercial lending."
      },
      {
        title: "Asset Management Scale:",
        content: "Through Nikko Asset Management and Sumitomo Mitsui DS Asset Management, SuMi TRUST manages ¥90+ trillion in assets. AUM growth drives fee income regardless of interest rates."
      },
      {
        title: "Pension Fund Administrator:",
        content: "Administration of corporate pension funds is a sticky, recurring revenue business. Japan's defined benefit pension system requires sophisticated administration services."
      },
      {
        title: "Real Estate and Stock Transfer:",
        content: "Real estate trusts, stock transfer agency services, and corporate administration create diversified fee income streams less correlated to loan volumes."
      },
      {
        title: "Key Risks:",
        content: "Stock market declines directly impact AUM-based fees. Trust banking is complex—investor understanding is limited. Trading at 0.72x book despite unique positioning suggests structural concerns."
      }
    ]
  },
  "7272": {
    code: "7272 JP",
    name: "Yamaha Motor",
    nameJp: "ヤマハ発動機",
    themes: ["Motorcycles", "Marine", "Recreational"],
    price: 1280,
    priceChange: 0.55,
    marketCap: "¥1.4T",
    revenue: "¥2.4T",
    per: "8.5",
    pbr: "1.15",
    founded: "1955",
    ceo: "Yoshihiro Hidaka",
    outlook: [
      {
        title: "Premium Motorcycle Position:",
        content: "Yamaha competes in premium motorcycle segments globally—sport bikes, adventure touring, and premium scooters. While Honda leads volume, Yamaha's brand commands loyalty among enthusiasts."
      },
      {
        title: "Marine Products Strength:",
        content: "Yamaha outboard motors hold #1 global market share. Boating and personal watercraft benefit from affluent consumer spending on recreation—a growth segment post-COVID."
      },
      {
        title: "Emerging Market Mobility:",
        content: "Motorcycles and scooters remain primary transportation in Southeast Asia, India, and Africa. Rising incomes drive upgrade cycles toward Yamaha's premium offerings."
      },
      {
        title: "Robotics and Industrial:",
        content: "Surface mount technology, industrial robots, and drones provide diversification beyond recreational products. These B2B businesses are smaller but growing."
      },
      {
        title: "Key Risks:",
        content: "Motorcycle markets in developed countries face demographic headwinds—aging riders. Marine products are discretionary—economic downturns hit orders quickly. EV transition for motorcycles remains uncertain."
      }
    ]
  },
  "8316": {
    code: "8316 JP",
    name: "Sumitomo Mitsui Financial",
    nameJp: "三井住友フィナンシャルグループ",
    themes: ["Banking", "Financial Services", "Global"],
    price: 3150,
    priceChange: 0.85,
    marketCap: "¥12.2T",
    revenue: "¥6.8T",
    per: "12.8",
    pbr: "0.85",
    founded: "2002",
    ceo: "Toru Nakashima",
    outlook: [
      {
        title: "Most Profitable Megabank:",
        content: "SMFG consistently achieves highest ROE among Japanese megabanks—efficiency-focused culture drives cost discipline while maintaining revenue growth. Management targets 10%+ ROE."
      },
      {
        title: "Interest Rate Beneficiary:",
        content: "As BOJ normalizes policy, SMFG's massive deposit base generates expanding net interest margins. Each 25bp rate increase could add ¥100+ billion to annual profits."
      },
      {
        title: "Asia Growth Platform:",
        content: "Strategic investments in Indonesia (BTPN), Vietnam, and India provide exposure to faster-growing Asian economies. These positions are maturing and contributing profits."
      },
      {
        title: "Digital Banking Leader:",
        content: "Olive banking platform and Vpass integration modernize retail banking. SMFG's digital initiatives are among most advanced of Japanese banks."
      },
      {
        title: "Key Risks:",
        content: "Global economic slowdown would increase credit costs. Trading at 0.85x book despite profitability suggests persistent skepticism about Japanese banks. US interest rate exposure creates securities portfolio volatility."
      }
    ]
  },
  "8411": {
    code: "8411 JP",
    name: "Mizuho Financial",
    nameJp: "みずほフィナンシャルグループ",
    themes: ["Banking", "Financial Services", "Global"],
    price: 3580,
    priceChange: 0.65,
    marketCap: "¥9.1T",
    revenue: "¥6.2T",
    per: "11.5",
    pbr: "0.72",
    founded: "2003",
    ceo: "Masahiro Kihara",
    outlook: [
      {
        title: "Systems Issues Behind:",
        content: "After embarrassing system failures (2021), Mizuho has invested heavily in IT infrastructure and governance. Regulatory business improvement orders have been lifted—rehabilitation is progressing."
      },
      {
        title: "Corporate Banking Strength:",
        content: "Mizuho's strength lies in corporate banking—deep relationships with Japan's largest companies. Cross-border M&A advisory and project finance leverage these relationships globally."
      },
      {
        title: "Rate Normalization Beneficiary:",
        content: "Like peers, Mizuho benefits significantly from rising Japanese interest rates. The large low-cost deposit base provides meaningful margin expansion potential."
      },
      {
        title: "Rakuten Partnership:",
        content: "Strategic partnership with Rakuten includes retail banking referrals and potential fintech collaboration. This provides retail growth avenue without heavy branch investment."
      },
      {
        title: "Key Risks:",
        content: "Operational risk remains elevated given system history—any repeat failure would be devastating. Trading at 0.72x book reflects governance skepticism. Profitability lags MUFG and SMFG."
      }
    ]
  },
  "8601": {
    code: "8601 JP",
    name: "Daiwa Securities",
    nameJp: "大和証券グループ本社",
    themes: ["Securities", "Investment Banking", "Asset Management"],
    price: 1050,
    priceChange: 1.25,
    marketCap: "¥1.7T",
    revenue: "¥680B",
    per: "12.5",
    pbr: "0.95",
    founded: "1902",
    ceo: "Akihiko Ogino",
    outlook: [
      {
        title: "Japan's #2 Securities Firm:",
        content: "Daiwa holds #2 position behind Nomura in Japanese securities—retail brokerage, investment banking, and trading. Scale provides competitive advantages in capital-intensive businesses."
      },
      {
        title: "Wealth Management Focus:",
        content: "Daiwa is pivoting from transaction-based brokerage to fee-based wealth management. Wrap accounts and advisory services create recurring revenue less dependent on trading volumes."
      },
      {
        title: "NISA Expansion Opportunity:",
        content: "Japan's expanded NISA (tax-advantaged investment accounts) drives retail investment growth. Daiwa's retail network captures assets flowing from savings to investments."
      },
      {
        title: "Daiwa Next Bank:",
        content: "The banking subsidiary provides deposit-taking and lending capabilities, enabling integrated wealth solutions. Bank-securities integration is strategic priority."
      },
      {
        title: "Key Risks:",
        content: "Securities business is highly cyclical—market downturns crush revenues and profits. Competition from online brokers pressures retail commissions. Investment banking fees depend on deal activity."
      }
    ]
  },
  "8604": {
    code: "8604 JP",
    name: "Nomura Holdings",
    nameJp: "野村ホールディングス",
    themes: ["Securities", "Investment Banking", "Global Finance"],
    price: 895,
    priceChange: 1.45,
    marketCap: "¥2.8T",
    revenue: "¥1.6T",
    per: "10.5",
    pbr: "0.75",
    founded: "1925",
    ceo: "Kentaro Okuda",
    outlook: [
      {
        title: "Japan's Global Investment Bank:",
        content: "Nomura is Japan's largest securities firm and only Japanese bank with significant global investment banking presence. US and European operations provide geographic diversification."
      },
      {
        title: "Wholesale vs Retail Balance:",
        content: "Unlike US investment banks, Nomura maintains large retail brokerage network in Japan. This provides stable revenue base funding wholesale business investments."
      },
      {
        title: "Cost Reduction Progress:",
        content: "After years of overseas struggles (Archegos loss), Nomura has rationalized international operations. Focused strategy on core competencies is improving profitability."
      },
      {
        title: "Japanese Market Strength:",
        content: "Strong equity and fixed income trading in Japan leverages deep domestic relationships. Japan DCM (debt capital markets) leadership provides steady fee income."
      },
      {
        title: "Key Risks:",
        content: "Investment banking inherently volatile—one bad quarter can erase years of gains. Global operations have historically destroyed value. Trading at 0.75x book reflects skepticism about sustainable profitability."
      }
    ]
  },
  "4503": {
    code: "4503 JP",
    name: "Astellas Pharma",
    nameJp: "アステラス製薬",
    themes: ["Pharmaceuticals", "Healthcare", "Oncology"],
    price: 1450,
    priceChange: -0.45,
    marketCap: "¥2.7T",
    revenue: "¥1.6T",
    per: "22.5",
    pbr: "1.65",
    founded: "2005",
    ceo: "Naoki Okamura",
    outlook: [
      {
        title: "Xtandi Franchise Foundation:",
        content: "Xtandi (enzalutamide) for prostate cancer generates ¥600+ billion annually—Astellas' profit engine. While facing eventual generic competition, lifecycle management and expanded indications extend value."
      },
      {
        title: "Pipeline Diversification Critical:",
        content: "Beyond Xtandi, Astellas is building presence in gene therapy, cell therapy, and immunology. AT132 (gene therapy for X-linked myotubular myopathy) represents transformative science."
      },
      {
        title: "Oncology Focus:",
        content: "Strategic focus on oncology aligns with industry growth and Astellas' commercial capabilities. Padcev (bladder cancer) partnership with Seagen provides near-term growth driver."
      },
      {
        title: "M&A Track Record:",
        content: "Astellas has completed successful acquisitions (Agensys, Ocata Therapeutics) building capabilities organically unavailable. Balance sheet supports continued business development."
      },
      {
        title: "Key Risks:",
        content: "Xtandi concentration risk is severe—patent expiration will significantly impact profits. R&D productivity must improve to replace revenue. Gene therapy development carries high failure rates and regulatory uncertainty."
      }
    ]
  },
  "4502": {
    code: "4502 JP",
    name: "Takeda Pharmaceutical",
    nameJp: "武田薬品工業",
    themes: ["Pharmaceuticals", "Healthcare", "Global"],
    price: 4150,
    priceChange: 0.25,
    marketCap: "¥6.5T",
    revenue: "¥4.3T",
    per: "45.5",
    pbr: "1.05",
    founded: "1781",
    ceo: "Christophe Weber",
    outlook: [
      {
        title: "Global Top 10 Pharma:",
        content: "Takeda's acquisition of Shire (2019) created Japan's largest and truly global pharmaceutical company. Diversified portfolio spans GI, oncology, neuroscience, and rare diseases across 80+ countries."
      },
      {
        title: "Growth Drivers Portfolio:",
        content: "14 'growth drivers' including Entyvio (IBD), Vyvanse (ADHD), and plasma-derived therapies are offsetting mature product declines. Management targets mid-single-digit core revenue growth."
      },
      {
        title: "Plasma-Derived Therapies:",
        content: "Shire acquisition brought leading plasma business—treating rare immune deficiencies. Plasma collection network and manufacturing are difficult to replicate."
      },
      {
        title: "Deleveraging Progress:",
        content: "Post-Shire debt reduction ahead of schedule through asset sales and free cash flow. Investment grade rating maintained with improving credit metrics."
      },
      {
        title: "Key Risks:",
        content: "High valuation (45x) reflects optimism that may disappoint. Pipeline must deliver to replace maturing products. Integration of Shire consumed management attention for years."
      }
    ]
  },
  "4519": {
    code: "4519 JP",
    name: "Chugai Pharmaceutical",
    nameJp: "中外製薬",
    themes: ["Pharmaceuticals", "Healthcare", "Oncology"],
    price: 5850,
    priceChange: 0.85,
    marketCap: "¥9.8T",
    revenue: "¥1.3T",
    per: "28.5",
    pbr: "5.45",
    founded: "1943",
    ceo: "Osamu Okuda",
    outlook: [
      {
        title: "Roche Strategic Partnership:",
        content: "Roche's 60% ownership provides Chugai access to global R&D capabilities, commercial infrastructure, and late-stage assets. This partnership creates unique competitive advantages versus standalone Japanese pharma."
      },
      {
        title: "Hemlibra Global Success:",
        content: "Chugai-discovered Hemlibra (hemophilia A) generates ¥500+ billion globally through Roche. This validates Chugai's research capabilities and creates significant royalty income."
      },
      {
        title: "Japan Commercial Excellence:",
        content: "Chugai holds top market share in Japan oncology and immunology—Roche products commercialized locally. This commercial strength makes Chugai the partner of choice for global pharma entering Japan."
      },
      {
        title: "Next-Generation Antibodies:",
        content: "Proprietary antibody engineering platforms (SMART-Ig, recycling antibodies) generate differentiated molecules. Multiple pipeline assets leverage these technologies."
      },
      {
        title: "Key Risks:",
        content: "Roche dependence creates strategic constraints—Chugai lacks independent global capability. Premium valuation (28x earnings, 5x book) requires continued innovation. Currency translation affects reported results significantly."
      }
    ]
  },
  "4568": {
    code: "4568 JP",
    name: "Daiichi Sankyo",
    nameJp: "第一三共",
    themes: ["Pharmaceuticals", "Healthcare", "Oncology"],
    price: 4450,
    priceChange: 1.15,
    marketCap: "¥8.6T",
    revenue: "¥1.6T",
    per: "35.5",
    pbr: "4.85",
    founded: "2005",
    ceo: "Sunao Manabe",
    outlook: [
      {
        title: "ADC Platform Revolution:",
        content: "Daiichi Sankyo's antibody-drug conjugate (ADC) platform has produced breakthrough cancer treatments. Enhertu (with AstraZeneca) is becoming a blockbuster—potential ¥1.5 trillion peak sales makes it among the most valuable oncology assets globally."
      },
      {
        title: "AstraZeneca Partnership Value:",
        content: "The ¥7+ trillion AstraZeneca partnership for ADCs validates Daiichi Sankyo's science. Upfront payments, milestones, and profit sharing provide massive value while AstraZeneca handles global commercial."
      },
      {
        title: "Pipeline Depth:",
        content: "Beyond Enhertu, Daiichi Sankyo's ADC pipeline includes 6+ clinical-stage programs. Dato-DXd, HER3-DXd, and others could create multiple blockbusters through the decade."
      },
      {
        title: "Transformation Complete:",
        content: "From diversified pharma with cardiovascular focus, Daiichi Sankyo has transformed into an oncology-focused innovator. This strategic clarity has driven re-rating."
      },
      {
        title: "Key Risks:",
        content: "ADC competition intensifying—Pfizer, Merck, and others developing competitive platforms. Manufacturing complexity for ADCs could constrain supply. Premium valuation (35x) assumes pipeline success that is not guaranteed."
      }
    ]
  },
  "8331": {
    code: "8331 JP",
    name: "Chiba Bank",
    nameJp: "千葉銀行",
    themes: ["Banking", "Regional Finance", "Financial Services"],
    price: 1180,
    priceChange: 0.65,
    marketCap: "¥880B",
    revenue: "¥280B",
    per: "11.5",
    pbr: "0.62",
    founded: "1943",
    ceo: "Tsutomu Yonemoto",
    outlook: [
      {
        title: "Greater Tokyo Regional Leader:",
        content: "Chiba Bank dominates Chiba Prefecture—a wealthy region adjacent to Tokyo with major industrial zones (Narita Airport, petrochemicals). This prime location provides better growth prospects than rural regional banks."
      },
      {
        title: "Interest Rate Sensitivity:",
        content: "As BOJ normalizes rates, Chiba Bank's large deposit base generates expanding net interest margins. Management estimates significant profit uplift from each 25bp rate increase."
      },
      {
        title: "Tsubasa Alliance Benefits:",
        content: "The Tsubasa Financial Group alliance with other regional banks enables system sharing, product development, and operational efficiencies without full merger complexity."
      },
      {
        title: "Wealth Management Push:",
        content: "Chiba's aging affluent population creates wealth management opportunities. Investment product sales and inheritance advisory services are growing focus areas."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.62x book reflects persistent regional bank skepticism. Competition from megabanks in greater Tokyo is intense. Loan growth limited by regional economic dynamics."
      }
    ]
  },
  "8354": {
    code: "8354 JP",
    name: "Fukuoka Financial Group",
    nameJp: "ふくおかフィナンシャルグループ",
    themes: ["Banking", "Regional Finance", "Financial Services"],
    price: 3850,
    priceChange: 0.85,
    marketCap: "¥720B",
    revenue: "¥240B",
    per: "10.5",
    pbr: "0.58",
    founded: "2007",
    ceo: "Takashige Shibato",
    outlook: [
      {
        title: "Kyushu Regional Powerhouse:",
        content: "Fukuoka Financial Group dominates Kyushu—Japan's southwestern island with 13 million population. Bank of Fukuoka, Kumamoto Bank, and Shinwa Bank create comprehensive regional coverage."
      },
      {
        title: "Asia Gateway Position:",
        content: "Fukuoka's proximity to Korea and China positions FFG for Asian trade finance and cross-border banking. Regional companies expanding into Asia rely on FFG relationships."
      },
      {
        title: "Digital Banking Pioneer:",
        content: "Minna Bank—Japan's first digital-only bank—demonstrates FFG's innovation capability. Digital initiatives could attract younger customers and reduce branch costs."
      },
      {
        title: "Consolidation Opportunities:",
        content: "As weaker Kyushu regional banks struggle, FFG may find acquisition opportunities to expand market share and achieve further scale economies."
      },
      {
        title: "Key Risks:",
        content: "Kyushu population declining faster than national average. Trading at 0.58x book reflects structural concerns. Digital investments require continued execution."
      }
    ]
  },
  "8253": {
    code: "8253 JP",
    name: "Credit Saison",
    nameJp: "クレディセゾン",
    themes: ["Consumer Finance", "Credit Cards", "Financial Services"],
    price: 2850,
    priceChange: 0.45,
    marketCap: "¥520B",
    revenue: "¥420B",
    per: "9.5",
    pbr: "0.75",
    founded: "1951",
    ceo: "Katsumi Mizuno",
    outlook: [
      {
        title: "Credit Card Issuer Scale:",
        content: "Credit Saison is Japan's largest independent credit card issuer—50 million cardholders generate transaction fees, revolving interest, and merchant acquiring revenue."
      },
      {
        title: "Retail Partnerships:",
        content: "Co-branded cards with major retailers (Walmart Japan, Parco, Mitsukoshi) provide customer acquisition channels and create loyalty ecosystems benefiting both partners."
      },
      {
        title: "Fintech and Digital Payments:",
        content: "Investment in digital payments, BNPL (buy now pay later), and fintech startups positions Credit Saison for payment industry evolution beyond traditional cards."
      },
      {
        title: "Asian Expansion:",
        content: "Consumer finance operations in Vietnam, Indonesia, and India provide exposure to faster-growing markets. Asian middle class growth drives credit demand."
      },
      {
        title: "Key Risks:",
        content: "Regulatory pressure on interchange fees could compress margins. Competition from PayPay, LINE Pay, and other digital payments intensifying. Consumer credit quality deteriorates in recessions."
      }
    ]
  },
  "8591": {
    code: "8591 JP",
    name: "Orix",
    nameJp: "オリックス",
    themes: ["Leasing", "Financial Services", "Diversified"],
    price: 3250,
    priceChange: 0.75,
    marketCap: "¥4.0T",
    revenue: "¥2.7T",
    per: "10.5",
    pbr: "0.95",
    founded: "1964",
    ceo: "Makoto Inoue",
    outlook: [
      {
        title: "Japan's Berkshire Hathaway:",
        content: "Orix defies simple categorization—leasing, private equity, real estate, infrastructure, insurance, and banking combine into a unique conglomerate. This diversification provides stability through cycles."
      },
      {
        title: "Infrastructure and Renewable Energy:",
        content: "Orix has built substantial positions in solar, wind, and infrastructure assets. The energy transition creates opportunities to deploy capital in long-duration assets with predictable returns."
      },
      {
        title: "Private Equity Returns:",
        content: "Orix's PE business acquires and improves mid-market Japanese companies. Recent exits have generated strong returns, demonstrating value creation capabilities."
      },
      {
        title: "Asset Rotation Model:",
        content: "Unlike static conglomerates, Orix actively rotates assets—buying undervalued businesses and selling when value is realized. This dynamic approach maximizes capital efficiency."
      },
      {
        title: "Key Risks:",
        content: "Conglomerate complexity makes true value difficult to assess. Aviation leasing faced COVID challenges—recovery timing uncertain. Interest rate rises increase funding costs."
      }
    ]
  },
  "8697": {
    code: "8697 JP",
    name: "Japan Exchange Group",
    nameJp: "日本取引所グループ",
    themes: ["Exchange", "Financial Infrastructure", "Technology"],
    price: 1850,
    priceChange: 1.25,
    marketCap: "¥980B",
    revenue: "¥160B",
    per: "28.5",
    pbr: "3.85",
    founded: "2013",
    ceo: "Hiromi Yamaji",
    outlook: [
      {
        title: "Tokyo Stock Exchange Owner:",
        content: "JPX operates the Tokyo Stock Exchange, Osaka Exchange (derivatives), and Japan Securities Clearing Corporation. This monopoly on Japanese equity and derivatives trading generates high-margin recurring revenue."
      },
      {
        title: "Trading Volume Recovery:",
        content: "Japanese equity trading volumes are recovering from multi-decade lows as corporate governance reforms attract foreign investors. Higher volumes directly increase exchange revenue."
      },
      {
        title: "Derivatives Growth:",
        content: "Nikkei 225 futures and options volumes are growing as institutional hedging activity increases. Derivatives carry higher margins than cash equity trading."
      },
      {
        title: "Data and Technology Services:",
        content: "Market data, indices, and technology services create recurring revenue beyond transaction fees. ESG data and analytics represent emerging opportunities."
      },
      {
        title: "Key Risks:",
        content: "Trading volumes are inherently cyclical—bear markets crush activity. Premium valuation (28x) assumes continued volume growth. Competition from private markets and off-exchange trading."
      }
    ]
  },
  "8630": {
    code: "8630 JP",
    name: "Sompo Holdings",
    nameJp: "SOMPOホールディングス",
    themes: ["Insurance", "P&C Insurance", "Nursing Care"],
    price: 3450,
    priceChange: 0.55,
    marketCap: "¥3.2T",
    revenue: "¥4.8T",
    per: "12.5",
    pbr: "1.25",
    founded: "2010",
    ceo: "Mikio Okumura",
    outlook: [
      {
        title: "Japan P&C Insurance Leader:",
        content: "Sompo Japan Insurance is #2 in domestic P&C market—auto, fire, and marine insurance provide stable premium income. Rate increases following natural catastrophe losses are improving underwriting margins."
      },
      {
        title: "Overseas Growth Strategy:",
        content: "Acquisitions including Endurance (specialty), SI Insurance (Turkey), and Sompo International diversify beyond Japan. International now contributes 30%+ of profits."
      },
      {
        title: "Nursing Care Differentiation:",
        content: "Unique among insurers, Sompo operates 500+ nursing care facilities across Japan. Aging demographics drive structural growth in this essential service."
      },
      {
        title: "Digital Transformation:",
        content: "Real Data Platform initiative aims to leverage insurance data for risk prevention and new services. Partnerships with mobility and health companies explore data monetization."
      },
      {
        title: "Key Risks:",
        content: "Natural catastrophe losses can be severe—Japan typhoons and earthquakes create volatility. Nursing care labor shortages challenge growth. Investment portfolio carries market risk."
      }
    ]
  },
  "8725": {
    code: "8725 JP",
    name: "MS&AD Insurance",
    nameJp: "MS&ADインシュアランスグループ",
    themes: ["Insurance", "P&C Insurance", "Global"],
    price: 2850,
    priceChange: 0.45,
    marketCap: "¥4.1T",
    revenue: "¥5.8T",
    per: "11.5",
    pbr: "1.15",
    founded: "2010",
    ceo: "Noriyuki Hara",
    outlook: [
      {
        title: "Japan's Largest P&C Group:",
        content: "Mitsui Sumitomo Insurance and Aioi Nissay Dowa Insurance create Japan's largest P&C group. Combined market share exceeds 30%, providing scale economies and distribution advantages."
      },
      {
        title: "Toyota Partnership Value:",
        content: "Aioi Nissay Dowa has deep relationship with Toyota—insuring fleet, dealers, and developing telematics-based insurance products. Connected car data could transform auto insurance pricing."
      },
      {
        title: "International Diversification:",
        content: "MS Amlin (Lloyd's), Asia operations, and US presence provide geographic diversification. International profits smooth domestic catastrophe volatility."
      },
      {
        title: "Shareholder Return Focus:",
        content: "Management is committed to improved ROE through capital efficiency and shareholder returns. Share buybacks and dividend growth signal alignment with investors."
      },
      {
        title: "Key Risks:",
        content: "Natural catastrophe exposure concentrated in Japan—earthquake, typhoon risks persist. Investment portfolio vulnerable to interest rate and equity market movements. Auto insurance pricing competition remains intense."
      }
    ]
  },
  "8750": {
    code: "8750 JP",
    name: "Dai-ichi Life",
    nameJp: "第一生命ホールディングス",
    themes: ["Insurance", "Life Insurance", "Asset Management"],
    price: 3650,
    priceChange: 0.65,
    marketCap: "¥3.5T",
    revenue: "¥8.5T",
    per: "14.5",
    pbr: "0.85",
    founded: "1902",
    ceo: "Seiji Inagaki",
    outlook: [
      {
        title: "Japan Life Insurance Giant:",
        content: "Dai-ichi Life is Japan's second-largest life insurer with ¥40 trillion in assets under management. Established sales force of 40,000+ agents provides distribution advantage."
      },
      {
        title: "International Expansion:",
        content: "Acquisitions in US (Protective Life), Australia, and Asia diversify beyond Japan's shrinking insurance market. International profits now exceed 40% of group total."
      },
      {
        title: "Interest Rate Sensitivity:",
        content: "Rising Japanese interest rates significantly benefit life insurers—investment yields improve while legacy guarantees become less burdensome. BOJ normalization is material positive."
      },
      {
        title: "Asset Management Growth:",
        content: "Dai-ichi Life Asset Management provides third-party investment services. Growing AUM generates fee income less correlated to insurance underwriting."
      },
      {
        title: "Key Risks:",
        content: "Japan life insurance market structurally declining—population shrinkage reduces addressable market. Foreign exchange hedging costs pressure international returns. Legacy low-rate guarantees remain drag until runoff."
      }
    ]
  },
  "8795": {
    code: "8795 JP",
    name: "T&D Holdings",
    nameJp: "T&Dホールディングス",
    themes: ["Insurance", "Life Insurance", "Financial Services"],
    price: 2350,
    priceChange: 0.55,
    marketCap: "¥1.5T",
    revenue: "¥2.4T",
    per: "10.5",
    pbr: "0.72",
    founded: "2004",
    ceo: "Hirohisa Uehara",
    outlook: [
      {
        title: "Three-Brand Strategy:",
        content: "T&D combines Taiyo Life (household market), Daido Life (SME market), and T&D Financial Life (bank channel) into complementary brands. Each serves distinct customer segments with specialized products."
      },
      {
        title: "SME Insurance Specialist:",
        content: "Daido Life dominates SME business owner insurance—key person coverage, business succession planning, and retirement products. This niche is defensible and less competitive than mass market."
      },
      {
        title: "Interest Rate Leverage:",
        content: "Like peers, T&D benefits substantially from rising rates. The investment portfolio yield expansion flows directly to earnings as BOJ normalizes policy."
      },
      {
        title: "Capital Efficiency Improving:",
        content: "Management focus on ROE improvement through capital management and business portfolio optimization. Dividend payout ratio targets and buybacks demonstrate shareholder orientation."
      },
      {
        title: "Key Risks:",
        content: "Smaller scale than Dai-ichi or Nippon Life limits competitive positioning. Trading at 0.72x book reflects ongoing skepticism. SME market concentration creates economic sensitivity."
      }
    ]
  },
  "1332": {
    code: "1332 JP",
    name: "Nissui",
    nameJp: "ニッスイ",
    themes: ["Food", "Fishery", "Consumer Products"],
    price: 850,
    priceChange: 0.35,
    marketCap: "¥270B",
    revenue: "¥800B",
    per: "10.5",
    pbr: "1.15",
    founded: "1911",
    ceo: "Shingo Hamada",
    outlook: [
      {
        title: "Global Seafood Leader:",
        content: "Nissui (Nippon Suisan) operates across the entire seafood value chain—fishing, aquaculture, processing, and distribution. Global operations span from Alaska pollock to Chilean salmon farming."
      },
      {
        title: "Aquaculture Growth:",
        content: "Wild catch fisheries are capacity constrained, making aquaculture essential for meeting protein demand. Nissui's salmon and trout farming operations in Chile and Japan are expanding."
      },
      {
        title: "Fine Chemicals Diversification:",
        content: "EPA (omega-3) pharmaceutical ingredients and functional foods leverage fish oil expertise. These higher-margin products reduce commodity seafood exposure."
      },
      {
        title: "Frozen Foods Brand:",
        content: "Consumer frozen food products under Nissui brand hold strong positions in Japanese retail. Convenience and quality drive steady domestic demand."
      },
      {
        title: "Key Risks:",
        content: "Fishing quotas and ocean sustainability concerns could constrain supply. Aquaculture faces disease and environmental risks. Commodity fish prices create revenue volatility."
      }
    ]
  },
  "9983": {
    code: "9983 JP",
    name: "Fast Retailing",
    nameJp: "ファーストリテイリング",
    themes: ["Retail", "Apparel", "Consumer"],
    price: 48500,
    priceChange: 0.85,
    marketCap: "¥15.4T",
    revenue: "¥2.8T",
    per: "42.5",
    pbr: "7.85",
    founded: "1963",
    ceo: "Tadashi Yanai",
    outlook: [
      {
        title: "Uniqlo Global Expansion:",
        content: "Uniqlo operates 2,400+ stores globally, with international now exceeding Japan revenue. Greater China, Southeast Asia, and Western markets all offer significant expansion runway—management targets 3,000+ international stores."
      },
      {
        title: "LifeWear Philosophy:",
        content: "Uniqlo's 'LifeWear' concept—simple, quality, affordable basics—resonates globally. This positioning avoids fashion risk while creating wardrobe staples customers repurchase repeatedly."
      },
      {
        title: "Innovation and Technology:",
        content: "HEATTECH, AIRism, and fabric innovations differentiate from competitors. R&D partnerships and manufacturing technology create product advantages difficult to copy."
      },
      {
        title: "Founder-Led Excellence:",
        content: "Tadashi Yanai (Japan's richest person) maintains hands-on leadership driving operational excellence. His long-term vision has consistently proven skeptics wrong."
      },
      {
        title: "Key Risks:",
        content: "Premium valuation (42x) leaves no margin for error. China geopolitical risks could disrupt critical growth market. Succession planning as Yanai approaches 80 remains concern. Weather and fashion risk never fully eliminated."
      }
    ]
  },
  "6367": {
    code: "6367 JP",
    name: "Daikin Industries",
    nameJp: "ダイキン工業",
    themes: ["HVAC", "Air Conditioning", "Manufacturing"],
    price: 18500,
    priceChange: 0.65,
    marketCap: "¥5.4T",
    revenue: "¥4.0T",
    per: "24.5",
    pbr: "3.25",
    founded: "1924",
    ceo: "Masanori Togawa",
    outlook: [
      {
        title: "Global HVAC Leader:",
        content: "Daikin is world's #1 air conditioning company—leading in Japan, strong in Europe, growing in Americas. As climate change increases cooling demand globally, Daikin benefits from structural tailwinds."
      },
      {
        title: "Heat Pump Transition:",
        content: "European energy crisis accelerated heat pump adoption for heating—replacing gas boilers. Daikin's heat pump technology leadership positions it to capture this multi-decade transition."
      },
      {
        title: "Refrigerant Innovation:",
        content: "Regulatory phase-out of high-GWP refrigerants creates replacement demand. Daikin's next-generation low-GWP refrigerants and equipment give customers compliance solutions."
      },
      {
        title: "Applied Solutions Growth:",
        content: "Beyond residential, Daikin's commercial and industrial HVAC serves data centers, factories, and buildings. Data center cooling demand is exploding with AI compute buildout."
      },
      {
        title: "Key Risks:",
        content: "Residential HVAC demand is cyclical and weather-dependent. Chinese competitors improving quality at lower prices. Premium valuation requires sustained execution."
      }
    ]
  },
  "4661": {
    code: "4661 JP",
    name: "Oriental Land",
    nameJp: "オリエンタルランド",
    themes: ["Entertainment", "Theme Parks", "Consumer"],
    price: 3450,
    priceChange: 0.45,
    marketCap: "¥6.3T",
    revenue: "¥660B",
    per: "65.5",
    pbr: "8.95",
    founded: "1960",
    ceo: "Kenji Yoshida",
    outlook: [
      {
        title: "Tokyo Disney Resort Monopoly:",
        content: "Oriental Land operates Tokyo Disneyland and DisneySea under exclusive Disney license for Japan. This irreplaceable asset generates extraordinary returns—operating margins exceed 25% with pricing power."
      },
      {
        title: "Fantasy Springs Expansion:",
        content: "The ¥320 billion Fantasy Springs expansion (2024) added Frozen, Tangled, and Peter Pan areas—largest expansion in DisneySea history. Premium experiences command premium pricing."
      },
      {
        title: "Pricing Power Demonstrated:",
        content: "Multiple ticket price increases have been absorbed by guests without meaningful attendance decline. Dynamic pricing and premium experiences extract more revenue per guest."
      },
      {
        title: "Post-COVID Recovery Complete:",
        content: "Attendance has recovered while spending per guest has increased permanently. Operational improvements during COVID created efficiency gains that persist."
      },
      {
        title: "Key Risks:",
        content: "Extreme valuation (65x earnings) assumes perpetual growth and margin expansion. Japan demographic decline eventually limits domestic attendance. Natural disaster risk—earthquake could damage facilities."
      }
    ]
  },
  "9020": {
    code: "9020 JP",
    name: "JR East",
    nameJp: "東日本旅客鉄道",
    themes: ["Transportation", "Rail", "Real Estate"],
    price: 2850,
    priceChange: 0.35,
    marketCap: "¥3.2T",
    revenue: "¥2.7T",
    per: "14.5",
    pbr: "1.15",
    founded: "1987",
    ceo: "Yuji Fukasawa",
    outlook: [
      {
        title: "Kanto Region Rail Dominance:",
        content: "JR East operates railways across greater Tokyo and eastern Japan—13 billion passenger-kilometers annually. Commuter rail is essential infrastructure with limited competition."
      },
      {
        title: "Shinkansen Recovery:",
        content: "Tohoku and Hokuriku Shinkansen revenues are recovering post-COVID. Business travel hasn't fully returned but tourism (especially inbound) is growing rapidly."
      },
      {
        title: "Station Development Value:",
        content: "JR East owns prime real estate around 1,700+ stations. Station buildings, hotels, and commercial development generate stable profits independent of rail operations."
      },
      {
        title: "Suica Payment Ecosystem:",
        content: "Suica IC cards (90+ million issued) are used for transit and retail payments. This payment platform creates data and merchant service opportunities."
      },
      {
        title: "Key Risks:",
        content: "Population decline reduces long-term passenger demand. Remote work may permanently reduce commuter traffic. Heavy capital requirements for maintenance and safety investments."
      }
    ]
  },
  "9021": {
    code: "9021 JP",
    name: "JR West",
    nameJp: "西日本旅客鉄道",
    themes: ["Transportation", "Rail", "Real Estate"],
    price: 2650,
    priceChange: 0.45,
    marketCap: "¥1.3T",
    revenue: "¥1.6T",
    per: "12.5",
    pbr: "1.05",
    founded: "1987",
    ceo: "Kazuaki Hasegawa",
    outlook: [
      {
        title: "Western Japan Coverage:",
        content: "JR West operates rail networks across Osaka, Kyoto, Kobe, Hiroshima, and western Honshu. The Kansai region is Japan's second economic center with strong rail demand."
      },
      {
        title: "Inbound Tourism Beneficiary:",
        content: "Kyoto, Osaka, and Hiroshima are premier tourist destinations. Inbound visitor surge drives Shinkansen and limited express revenue growth."
      },
      {
        title: "Osaka-Kansai Expo 2025:",
        content: "World Expo in Osaka creates infrastructure investment and visitor influx. New station developments and service enhancements improve long-term capacity."
      },
      {
        title: "Real Estate Development:",
        content: "Station renovation projects (Osaka Station City, Hiroshima) create commercial and office revenue. Real estate provides earnings stability beyond rail operations."
      },
      {
        title: "Key Risks:",
        content: "Natural disaster exposure—JR West territory includes earthquake and typhoon risk zones. Lower population density than JR East limits growth. Fukuchiyama Line accident legacy requires continued safety focus."
      }
    ]
  },
  "9022": {
    code: "9022 JP",
    name: "JR Central",
    nameJp: "東海旅客鉄道",
    themes: ["Transportation", "Rail", "Shinkansen"],
    price: 3250,
    priceChange: 0.55,
    marketCap: "¥3.3T",
    revenue: "¥1.7T",
    per: "10.5",
    pbr: "1.25",
    founded: "1987",
    ceo: "Shunsuke Niwa",
    outlook: [
      {
        title: "Tokaido Shinkansen Monopoly:",
        content: "JR Central operates the Tokaido Shinkansen—the world's busiest high-speed rail connecting Tokyo, Nagoya, and Osaka. This 515km route generates extraordinary profits from business travelers."
      },
      {
        title: "Business Travel Recovery:",
        content: "Corporate travel on the Tokyo-Osaka corridor is recovering toward pre-COVID levels. Economic normalization supports continued ridership growth."
      },
      {
        title: "Chuo Shinkansen (Maglev):",
        content: "The ¥9 trillion Chuo Shinkansen maglev project will connect Tokyo-Nagoya (2027 target) and eventually Osaka. This next-generation infrastructure creates long-term growth option."
      },
      {
        title: "Operating Efficiency:",
        content: "The Tokaido Shinkansen runs with legendary precision—operating margins exceed 35% in normal years. This efficiency generates enormous free cash flow."
      },
      {
        title: "Key Risks:",
        content: "Chuo Shinkansen delays and cost overruns are ongoing concerns. Business travel structural decline if remote work persists. Concentrated route exposure—any disruption severely impacts revenue."
      }
    ]
  },
  "2914": {
    code: "2914 JP",
    name: "Japan Tobacco",
    nameJp: "日本たばこ産業",
    themes: ["Tobacco", "Consumer Products", "Defensive"],
    price: 4150,
    priceChange: 0.25,
    marketCap: "¥7.4T",
    revenue: "¥2.8T",
    per: "14.5",
    pbr: "2.05",
    founded: "1985",
    ceo: "Masamichi Terabatake",
    outlook: [
      {
        title: "Global Tobacco Scale:",
        content: "JT is world's #3 tobacco company—Winston, Camel (outside US), and Mevius brands sold in 130+ countries. International tobacco generates majority of profits with strong emerging market positions."
      },
      {
        title: "Heated Tobacco Products:",
        content: "Ploom heated tobacco devices compete with Philip Morris's IQOS in reduced-risk products. While trailing in Japan, international HTP growth provides future optionality."
      },
      {
        title: "Dividend Aristocrat:",
        content: "JT has maintained or increased dividends for 20+ years—current yield exceeds 4%. Stable cash flows and shareholder-friendly policy attract income investors."
      },
      {
        title: "Pharmaceutical and Food:",
        content: "JT's pharmaceutical (Torii Pharmaceutical) and processed food businesses provide modest diversification. These aren't growth drivers but add stability."
      },
      {
        title: "Key Risks:",
        content: "Tobacco faces structural volume decline as smoking rates fall globally. Regulatory and tax risks persist across markets. ESG concerns limit investor universe."
      }
    ]
  },
  "4063": {
    code: "4063 JP",
    name: "Shin-Etsu Chemical",
    nameJp: "信越化学工業",
    themes: ["Chemicals", "Semiconductors", "Materials"],
    price: 5450,
    priceChange: 1.25,
    marketCap: "¥11.0T",
    revenue: "¥2.5T",
    per: "15.5",
    pbr: "2.15",
    founded: "1926",
    ceo: "Yasuhiko Saitoh",
    outlook: [
      {
        title: "Silicon Wafer Dominance:",
        content: "Shin-Etsu holds 30% global market share in silicon wafers for semiconductors—the foundation material for all chips. Every advanced semiconductor requires Shin-Etsu's ultra-pure wafers."
      },
      {
        title: "PVC Global Leader:",
        content: "Shintech (US subsidiary) is world's largest PVC producer. Integrated production from US shale gas provides cost advantages that competitors cannot match."
      },
      {
        title: "Photoresist Materials:",
        content: "Advanced photoresists for semiconductor lithography are another dominant position. As chips shrink to smaller nodes, material purity requirements intensify—favoring Shin-Etsu."
      },
      {
        title: "Conservative Excellence:",
        content: "Legendary conservative management maintains minimal debt, excess cash, and consistent profitability. This discipline enables investment through cycles when competitors struggle."
      },
      {
        title: "Key Risks:",
        content: "Semiconductor cycles create silicon wafer demand volatility. PVC demand tied to construction activity globally. Premium valuation assumes continued dominance in growing markets."
      }
    ]
  },
  "6273": {
    code: "6273 JP",
    name: "SMC Corporation",
    nameJp: "SMC",
    themes: ["Factory Automation", "Pneumatics", "Industrial"],
    price: 68500,
    priceChange: 0.85,
    marketCap: "¥4.6T",
    revenue: "¥870B",
    per: "22.5",
    pbr: "2.65",
    founded: "1959",
    ceo: "Yoshiki Takada",
    outlook: [
      {
        title: "Pneumatic Equipment Monopoly:",
        content: "SMC commands 40% global market share in pneumatic components—cylinders, valves, and air preparation equipment. Every automated factory requires these products for material handling and assembly."
      },
      {
        title: "Semiconductor Manufacturing Boom:",
        content: "Semiconductor fabs are intensive users of pneumatic equipment—cleanroom-compatible components for wafer handling and processing. Fab buildouts directly drive SMC orders."
      },
      {
        title: "Product Breadth Moat:",
        content: "SMC offers 700,000+ products—far exceeding competitors. Engineers specify SMC because complete solutions simplify procurement and integration."
      },
      {
        title: "High Profitability:",
        content: "Operating margins consistently exceed 30%—remarkable for a manufacturing company. Scale economies, vertical integration, and pricing power create extraordinary profitability."
      },
      {
        title: "Key Risks:",
        content: "Factory automation cycles create demand volatility. China manufacturing slowdown impacts near-term orders. Premium valuation assumes sustained market leadership."
      }
    ]
  },
  "6594": {
    code: "6594 JP",
    name: "Nidec",
    nameJp: "日本電産",
    themes: ["Motors", "Electric Vehicles", "Technology"],
    price: 2650,
    priceChange: -0.85,
    marketCap: "¥3.2T",
    revenue: "¥2.3T",
    per: "35.5",
    pbr: "2.15",
    founded: "1973",
    ceo: "Mitsuya Kishida",
    outlook: [
      {
        title: "Small Motor Dominance:",
        content: "Nidec produces more motors than any company on Earth—from HDD spindle motors to cooling fans to automotive motors. As the world electrifies, motors become more essential in everything."
      },
      {
        title: "EV Traction Motor Ambitions:",
        content: "Nidec's e-axle (integrated EV drive unit) business is growing rapidly. Target of ¥1 trillion in EV motor revenue positions Nidec as major EV supplier alongside Bosch and BorgWarner."
      },
      {
        title: "Acquisition Machine:",
        content: "Founder Shigenobu Nagamori built Nidec through 60+ acquisitions—consolidating motor industry globally. This playbook continues with deals in EV and industrial automation."
      },
      {
        title: "Founder Transition:",
        content: "Nagamori (80) has stepped back from CEO role—succession planning tested by multiple CEO departures. Current CEO Kishida represents stabilization attempt."
      },
      {
        title: "Key Risks:",
        content: "EV motor competition intensifying from Chinese suppliers. HDD motor business declining structurally with storage technology evolution. High valuation (35x) requires growth acceleration."
      }
    ]
  },
  "2002": {
    code: "2002 JP",
    name: "Nisshin Seifun",
    nameJp: "日清製粉グループ本社",
    themes: ["Food", "Flour Milling", "Consumer Products"],
    price: 1850,
    priceChange: 0.35,
    marketCap: "¥560B",
    revenue: "¥820B",
    per: "18.5",
    pbr: "1.25",
    founded: "1900",
    ceo: "Kenji Hayakawa",
    outlook: [
      {
        title: "Japan's Flour King:",
        content: "Nisshin Seifun controls 40% of Japan's flour market—supplying bakeries, food manufacturers, and restaurants. This dominant position provides stable cash flows regardless of economic conditions."
      },
      {
        title: "Premiumization Strategy:",
        content: "Beyond commodity flour, Nisshin focuses on premium products—specialty flours for artisan baking, prepared mixes, and pasta. Higher-margin products reduce commodity exposure."
      },
      {
        title: "International Expansion:",
        content: "Operations in North America, Southeast Asia, and Australia provide growth beyond Japan's shrinking population. Local production serves growing food demand in emerging markets."
      },
      {
        title: "Healthcare and Biotechnology:",
        content: "Nisshin Pharma develops pharmaceuticals and health foods leveraging grain-based research. This diversification adds growth optionality beyond core milling."
      },
      {
        title: "Key Risks:",
        content: "Wheat price volatility impacts input costs—hedging only partially effective. Japan flour demand declining with population. Premium products face private label competition."
      }
    ]
  },
  "2269": {
    code: "2269 JP",
    name: "Meiji Holdings",
    nameJp: "明治ホールディングス",
    themes: ["Food", "Pharmaceuticals", "Dairy"],
    price: 3150,
    priceChange: 0.45,
    marketCap: "¥920B",
    revenue: "¥1.1T",
    per: "16.5",
    pbr: "1.45",
    founded: "1916",
    ceo: "Kazuo Kawamura",
    outlook: [
      {
        title: "Dairy and Confectionery Leader:",
        content: "Meiji dominates Japanese dairy (milk, yogurt, cheese) and chocolate markets. Iconic brands like Meiji Bulgaria Yogurt and Meiji Chocolate have generational consumer loyalty."
      },
      {
        title: "Protein Nutrition Growth:",
        content: "SAVAS protein products lead Japan's sports nutrition market—growing double digits as fitness culture expands. Premium positioning commands strong margins."
      },
      {
        title: "Pharmaceutical Stability:",
        content: "Meiji Seika Pharma provides diversification through generic drugs, vaccines, and agricultural chemicals. Healthcare offers stability when food faces headwinds."
      },
      {
        title: "China Expansion:",
        content: "Chinese consumers trust Japanese dairy quality—infant formula and dairy products are growing in China despite broader trade tensions."
      },
      {
        title: "Key Risks:",
        content: "Raw milk and cocoa prices create input cost volatility. Japan dairy consumption declining structurally. Pharmaceutical generics face pricing pressure."
      }
    ]
  },
  "2282": {
    code: "2282 JP",
    name: "NH Foods",
    nameJp: "日本ハム",
    themes: ["Food", "Meat Processing", "Consumer Products"],
    price: 4850,
    priceChange: 0.25,
    marketCap: "¥500B",
    revenue: "¥1.3T",
    per: "12.5",
    pbr: "0.95",
    founded: "1942",
    ceo: "Yoshihide Hata",
    outlook: [
      {
        title: "Integrated Meat Producer:",
        content: "NH Foods operates across the entire meat value chain—hog and poultry farming, processing, and branded consumer products. This integration provides quality control and margin capture."
      },
      {
        title: "Premium Brand Portfolio:",
        content: "SCHAU ESSEN sausages and other premium brands command shelf space and consumer loyalty. Brand strength enables price increases to offset input cost inflation."
      },
      {
        title: "Overseas Protein:",
        content: "Beef operations in Australia provide export-quality product for Asian markets. Global protein demand growth supports international expansion."
      },
      {
        title: "Alternative Protein Watch:",
        content: "NH Foods is monitoring and investing in alternative proteins—plant-based and cultivated meat. These investments hedge against long-term protein transition."
      },
      {
        title: "Key Risks:",
        content: "Animal disease outbreaks (swine fever, avian flu) can devastate operations. Feed and livestock costs volatile with commodity markets. Plant-based disruption is long-term threat."
      }
    ]
  },
  "2501": {
    code: "2501 JP",
    name: "Sapporo Holdings",
    nameJp: "サッポロホールディングス",
    themes: ["Beverages", "Beer", "Real Estate"],
    price: 6850,
    priceChange: 0.55,
    marketCap: "¥540B",
    revenue: "¥530B",
    per: "35.5",
    pbr: "1.45",
    founded: "1876",
    ceo: "Masaki Oga",
    outlook: [
      {
        title: "Premium Beer Heritage:",
        content: "Sapporo is Japan's oldest beer brand with 150-year heritage. While #3 in domestic market share, the brand commands loyalty among premium beer drinkers."
      },
      {
        title: "North American Presence:",
        content: "Sapporo owns Stone Brewing and distributes across North America. The US craft beer market provides growth absent in mature Japan market."
      },
      {
        title: "Real Estate Hidden Value:",
        content: "Sapporo owns prime real estate including Yebisu Garden Place in Tokyo. Property holdings may be worth more than beverage business—activist targets."
      },
      {
        title: "Restaurant and Food:",
        content: "Ginza Lion beer halls and food service operations provide integrated brand experience. These outlets showcase products while generating profits."
      },
      {
        title: "Key Risks:",
        content: "Japan beer market declining structurally with demographic changes. Activist pressure may force strategic changes. Premium valuation (35x) difficult to justify on beverages alone."
      }
    ]
  },
  "2502": {
    code: "2502 JP",
    name: "Asahi Group",
    nameJp: "アサヒグループホールディングス",
    themes: ["Beverages", "Beer", "Global"],
    price: 5450,
    priceChange: 0.65,
    marketCap: "¥2.8T",
    revenue: "¥2.8T",
    per: "15.5",
    pbr: "1.35",
    founded: "1889",
    ceo: "Atsushi Katsuki",
    outlook: [
      {
        title: "Global Premium Beer Leader:",
        content: "Asahi Super Dry is Japan's #1 beer, but Asahi is now truly global—acquiring Peroni, Grolsch, Pilsner Urquell, and Fuller's. European premiumization drives growth and margins."
      },
      {
        title: "Australia/NZ Dominance:",
        content: "CUB (Carlton & United Breweries) acquisition created Australia's leading brewer. These mature markets generate stable cash flows funding further expansion."
      },
      {
        title: "Premium Strategy Working:",
        content: "Focus on premium and super-premium beer improves mix and margins globally. Trading up behavior supports price increases above cost inflation."
      },
      {
        title: "Non-Alcohol Innovation:",
        content: "Asahi leads non-alcoholic beer in Japan—a rapidly growing segment as health consciousness rises. This positions Asahi for changing consumer preferences."
      },
      {
        title: "Key Risks:",
        content: "Debt from acquisitions remains elevated—deleveraging is priority. Currency translation impacts reported earnings. Global beer volumes facing headwinds from spirits and cannabis alternatives."
      }
    ]
  },
  "2503": {
    code: "2503 JP",
    name: "Kirin Holdings",
    nameJp: "キリンホールディングス",
    themes: ["Beverages", "Beer", "Pharmaceuticals"],
    price: 2150,
    priceChange: 0.35,
    marketCap: "¥1.9T",
    revenue: "¥2.1T",
    per: "14.5",
    pbr: "1.65",
    founded: "1885",
    ceo: "Yoshinori Isozaki",
    outlook: [
      {
        title: "Beer Plus Pharma Model:",
        content: "Unlike pure beverage peers, Kirin owns Kyowa Kirin pharmaceutical company—a unique diversification providing stability and growth from healthcare."
      },
      {
        title: "Kyowa Kirin Value:",
        content: "Kyowa Kirin's antibody drugs and pipeline may be worth more than Kirin's beverage business. Crysvita (rare disease) and oncology portfolio drive pharmaceutical growth."
      },
      {
        title: "Southeast Asia Beverages:",
        content: "Myanmar Brewery (divested due to crisis), San Miguel partnership in Philippines, and other Asian positions provide emerging market exposure."
      },
      {
        title: "Craft Beer Portfolio:",
        content: "Brooklyn Brewery stake and craft beer initiatives address shifting consumer preferences toward variety and premium products."
      },
      {
        title: "Key Risks:",
        content: "Conglomerate discount persists—sum of parts exceeds market cap. Myanmar exit highlighted emerging market risks. Japan beer market structural decline continues."
      }
    ]
  },
  "2801": {
    code: "2801 JP",
    name: "Kikkoman",
    nameJp: "キッコーマン",
    themes: ["Food", "Condiments", "Global"],
    price: 1750,
    priceChange: 0.45,
    marketCap: "¥1.7T",
    revenue: "¥680B",
    per: "32.5",
    pbr: "3.85",
    founded: "1917",
    ceo: "Noriaki Horikiri",
    outlook: [
      {
        title: "Global Soy Sauce Dominance:",
        content: "Kikkoman is synonymous with soy sauce worldwide—60% market share in US, dominant in Europe, and growing in emerging markets. This brand moat has compounded for decades."
      },
      {
        title: "International Drives Growth:",
        content: "Americas and Europe now exceed Japan revenue. Western cooking increasingly incorporates Asian flavors—structural tailwind for Kikkoman's core products."
      },
      {
        title: "Beyond Soy Sauce:",
        content: "Teriyaki sauce, ponzu, and other Japanese condiments extend the brand into adjacent categories. Each product reinforces Kikkoman's authenticity positioning."
      },
      {
        title: "Del Monte Asia:",
        content: "Del Monte license for Asia provides additional branded food platform. This complements Japanese condiments with Western-style products."
      },
      {
        title: "Key Risks:",
        content: "Premium valuation (32x) assumes continued global growth execution. Soy sauce commoditization at low end pressures mass market. Currency translation impacts international profits."
      }
    ]
  },
  "2802": {
    code: "2802 JP",
    name: "Ajinomoto",
    nameJp: "味の素",
    themes: ["Food", "Amino Acids", "Healthcare"],
    price: 6250,
    priceChange: 0.75,
    marketCap: "¥3.4T",
    revenue: "¥1.4T",
    per: "28.5",
    pbr: "3.45",
    founded: "1909",
    ceo: "Taro Fujie",
    outlook: [
      {
        title: "Amino Acid Science Leader:",
        content: "Ajinomoto invented MSG and leads global amino acid production for food, feed, and pharmaceuticals. This scientific foundation differentiates from pure food companies."
      },
      {
        title: "Semiconductor Materials Growth:",
        content: "ABF (Ajinomoto Build-up Film) is critical substrate material for advanced semiconductors—used in virtually all high-end processors. This high-margin business is growing rapidly."
      },
      {
        title: "Global Seasonings:",
        content: "Seasoning products across Asia, Latin America, and Africa leverage Ajinomoto's umami expertise. Emerging market growth drives volume gains."
      },
      {
        title: "Healthcare and Specialty:",
        content: "Amino acid-based pharmaceuticals, medical foods, and specialty chemicals provide diversification into higher-margin applications."
      },
      {
        title: "Key Risks:",
        content: "MSG perception issues persist in some Western markets. Semiconductor ABF faces competition as market grows. Premium valuation requires continued specialty growth."
      }
    ]
  },
  "2871": {
    code: "2871 JP",
    name: "Nichirei",
    nameJp: "ニチレイ",
    themes: ["Food", "Frozen Foods", "Logistics"],
    price: 4250,
    priceChange: 0.35,
    marketCap: "¥580B",
    revenue: "¥680B",
    per: "16.5",
    pbr: "1.55",
    founded: "1942",
    ceo: "Kenya Okushi",
    outlook: [
      {
        title: "Frozen Food Innovation:",
        content: "Nichirei leads Japanese frozen food with products rivaling restaurant quality. Technological advances in freezing and preparation have transformed frozen from compromise to preference."
      },
      {
        title: "Cold Chain Logistics:",
        content: "Nichirei Logistics operates Japan's largest refrigerated warehouse network—essential infrastructure for food supply chains. This B2B business provides steady recurring revenue."
      },
      {
        title: "Labor Shortage Solution:",
        content: "As restaurants struggle with staffing, prepared frozen foods become essential for food service operators. Nichirei supplies both retail and commercial channels."
      },
      {
        title: "Acai and Health Foods:",
        content: "Acquisition of acai and health food businesses diversifies into premium wellness categories. These products command higher margins than traditional frozen foods."
      },
      {
        title: "Key Risks:",
        content: "Energy costs for refrigeration impact logistics margins. Competition from retailer private labels in frozen foods. Raw material (seafood, meat) price volatility."
      }
    ]
  },
  "3086": {
    code: "3086 JP",
    name: "J.Front Retailing",
    nameJp: "J.フロント リテイリング",
    themes: ["Retail", "Department Stores", "Real Estate"],
    price: 1450,
    priceChange: 0.65,
    marketCap: "¥380B",
    revenue: "¥420B",
    per: "14.5",
    pbr: "0.85",
    founded: "2007",
    ceo: "Ryoichi Yamamoto",
    outlook: [
      {
        title: "Daimaru Matsuzakaya Heritage:",
        content: "J.Front operates Daimaru and Matsuzakaya department stores—historic brands with prime urban real estate. Flagship locations in Tokyo, Osaka, and Nagoya serve affluent consumers."
      },
      {
        title: "Ginza Six Success:",
        content: "Ginza Six development transformed traditional retail into luxury mixed-use destination. This model demonstrates J.Front's real estate development capabilities."
      },
      {
        title: "PARCO Fashion Forward:",
        content: "PARCO stores target younger consumers with curated fashion and culture. This brand captures demographic segments department stores traditionally miss."
      },
      {
        title: "Inbound Tourism Recovery:",
        content: "Chinese and Asian tourists drive luxury department store sales. Inbound recovery to pre-COVID levels could significantly boost comparable store sales."
      },
      {
        title: "Key Risks:",
        content: "Department store format faces structural decline from e-commerce. Real estate development carries execution risk. Trading below book value reflects sector skepticism."
      }
    ]
  },
  "3092": {
    code: "3092 JP",
    name: "ZOZO",
    nameJp: "ZOZO",
    themes: ["E-commerce", "Fashion", "Technology"],
    price: 4850,
    priceChange: 1.25,
    marketCap: "¥1.5T",
    revenue: "¥200B",
    per: "28.5",
    pbr: "12.5",
    founded: "1998",
    ceo: "Kotaro Sawada",
    outlook: [
      {
        title: "Japan's Fashion E-commerce Leader:",
        content: "ZOZOTOWN is Japan's dominant fashion e-commerce platform—8 million active customers and 1,500+ brand partners. Platform model earns take rate on GMV without inventory risk."
      },
      {
        title: "Yahoo/LINE Integration:",
        content: "Z Holdings (SoftBank) ownership integrates ZOZO with Yahoo Shopping and LINE ecosystem. This creates cross-selling opportunities and traffic synergies."
      },
      {
        title: "Private Label ZOZO:",
        content: "Made-to-measure clothing using ZOZOSUIT body measurement technology creates unique private label offering. Customization differentiates from commodity fashion."
      },
      {
        title: "Used Fashion Sustainability:",
        content: "ZOZOUSED enables secondhand fashion marketplace—growing rapidly as sustainability consciousness rises. Circular fashion extends customer engagement."
      },
      {
        title: "Key Risks:",
        content: "High valuation (28x earnings, 12x book) assumes sustained growth. Competition from Amazon, Rakuten, and brand direct-to-consumer channels. Fashion retail inherently cyclical with economic conditions."
      }
    ]
  },
  "3099": {
    code: "3099 JP",
    name: "Isetan Mitsukoshi",
    nameJp: "三越伊勢丹ホールディングス",
    themes: ["Retail", "Department Stores", "Luxury"],
    price: 2150,
    priceChange: 0.55,
    marketCap: "¥840B",
    revenue: "¥540B",
    per: "18.5",
    pbr: "1.25",
    founded: "2008",
    ceo: "Toshiyuki Makita",
    outlook: [
      {
        title: "Shinjuku Flagship Powerhouse:",
        content: "Isetan Shinjuku is Japan's highest-revenue department store—a destination for domestic and international luxury shoppers. This single location generates extraordinary productivity."
      },
      {
        title: "Luxury Positioning:",
        content: "Isetan Mitsukoshi focuses on luxury and premium segments where department stores retain relevance. Personal shopping services and exclusive products justify premium positioning."
      },
      {
        title: "Digital Customer Engagement:",
        content: "MI Passport app and digital initiatives connect with customers beyond store visits. Online sales and remote styling services extend reach."
      },
      {
        title: "Inbound Recovery Beneficiary:",
        content: "Tourist spending at flagship stores recovering strongly. Chinese luxury demand particularly benefits high-end department stores."
      },
      {
        title: "Key Risks:",
        content: "Department store format challenged by specialty retailers and e-commerce. Regional store closures may continue as unprofitable locations rationalized. Labor intensive model faces cost pressures."
      }
    ]
  },
  "3382": {
    code: "3382 JP",
    name: "Seven & i Holdings",
    nameJp: "セブン&アイ・ホールディングス",
    themes: ["Retail", "Convenience Stores", "Consumer"],
    price: 2050,
    priceChange: 0.45,
    marketCap: "¥5.4T",
    revenue: "¥11.8T",
    per: "22.5",
    pbr: "1.45",
    founded: "2005",
    ceo: "Ryuichi Isaka",
    outlook: [
      {
        title: "Global Convenience Store Leader:",
        content: "7-Eleven is the world's largest convenience store chain—83,000+ stores globally. The franchise model generates high-margin royalties while franchisees bear operating risk."
      },
      {
        title: "Japan CVS Dominance:",
        content: "7-Eleven Japan achieves extraordinary daily sales per store—50% higher than competitors. Product innovation, freshness, and store operations create sustainable advantages."
      },
      {
        title: "7-Eleven North America:",
        content: "Speedway acquisition created North American convenience/fuel giant. Integration and operational improvement could unlock significant value."
      },
      {
        title: "Activist Pressure:",
        content: "ValueAct and other activists pressure for focus—spinning off underperforming Ito-Yokado supermarkets and department stores. Strategic review ongoing."
      },
      {
        title: "Key Risks:",
        content: "Conglomerate discount from non-core retail assets. Japan convenience store saturation limits growth. US fuel retail faces EV transition headwinds long-term."
      }
    ]
  },
  "7453": {
    code: "7453 JP",
    name: "Ryohin Keikaku",
    nameJp: "良品計画",
    themes: ["Retail", "Lifestyle", "Consumer Products"],
    price: 2450,
    priceChange: 0.85,
    marketCap: "¥690B",
    revenue: "¥580B",
    per: "32.5",
    pbr: "3.85",
    founded: "1980",
    ceo: "Nobuo Domae",
    outlook: [
      {
        title: "MUJI Global Minimalism:",
        content: "MUJI's 'no-brand quality goods' philosophy resonates globally—simple, functional products with minimal design. This positioning transcends fast fashion cycles and builds loyal customers."
      },
      {
        title: "China Growth Engine:",
        content: "Greater China is MUJI's largest market outside Japan with 300+ stores. Chinese consumers appreciate MUJI's quality and aesthetic—growth runway remains substantial."
      },
      {
        title: "Category Expansion:",
        content: "Beyond apparel and housewares, MUJI expands into food, hotels, and home renovation. Each category reinforces the lifestyle brand positioning."
      },
      {
        title: "Sustainability Alignment:",
        content: "MUJI's anti-consumerism ethos aligns with sustainability trends. Durable, repairable products attract environmentally conscious consumers."
      },
      {
        title: "Key Risks:",
        content: "China operations face geopolitical and economic risks. Premium valuation (32x) requires sustained international growth. Fast fashion competitors can copy aesthetic at lower prices."
      }
    ]
  },
  "8233": {
    code: "8233 JP",
    name: "Takashimaya",
    nameJp: "高島屋",
    themes: ["Retail", "Department Stores", "Real Estate"],
    price: 2350,
    priceChange: 0.45,
    marketCap: "¥390B",
    revenue: "¥460B",
    per: "14.5",
    pbr: "0.65",
    founded: "1831",
    ceo: "Yoshio Murata",
    outlook: [
      {
        title: "Heritage Department Store:",
        content: "Takashimaya's 190-year history includes flagship stores in Nihonbashi, Shinjuku, Osaka, and Kyoto. Historic buildings and locations provide irreplaceable real estate."
      },
      {
        title: "Singapore Success:",
        content: "Takashimaya Singapore is one of few successful Japanese department store exports—serving Southeast Asian affluent consumers and tourists."
      },
      {
        title: "Real Estate Development:",
        content: "Times Square (Shinjuku), Nihonbashi redevelopment, and other projects leverage real estate holdings. Property value may exceed retail business."
      },
      {
        title: "Cross-Border E-commerce:",
        content: "Online sales to Chinese consumers leverage Japanese quality perception. Cross-border e-commerce grows when physical travel is constrained."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.65x book reflects department store structural challenges. Regional store profitability difficult to maintain. E-commerce competition intensifying."
      }
    ]
  },
  "8252": {
    code: "8252 JP",
    name: "Marui Group",
    nameJp: "丸井グループ",
    themes: ["Retail", "Fintech", "Credit Cards"],
    price: 2350,
    priceChange: 0.75,
    marketCap: "¥490B",
    revenue: "¥240B",
    per: "18.5",
    pbr: "1.45",
    founded: "1931",
    ceo: "Hiroshi Aoi",
    outlook: [
      {
        title: "Retail to Fintech Evolution:",
        content: "Marui has transformed from department store operator to fintech company—EPOS credit card generates 70%+ of operating profit. This strategic pivot is rare and successful."
      },
      {
        title: "EPOS Card Ecosystem:",
        content: "7 million EPOS cardholders generate transaction fees, revolving interest, and data. Co-branded cards with anime, games, and entertainment properties attract younger users."
      },
      {
        title: "Store as Media:",
        content: "Remaining retail spaces operate as 'selling space rental'—brands pay for prime real estate and customer access. This asset-light model eliminates inventory risk."
      },
      {
        title: "D2C and Startup Support:",
        content: "Marui invests in and supports direct-to-consumer brands—providing retail presence to digital-native companies. This positions Marui at retail innovation frontier."
      },
      {
        title: "Key Risks:",
        content: "Credit business faces regulatory and economic cycle risks. Retail transformation execution must continue. Competition from PayPay and other digital payments intensifying."
      }
    ]
  },
  "8267": {
    code: "8267 JP",
    name: "Aeon",
    nameJp: "イオン",
    themes: ["Retail", "Supermarkets", "Shopping Malls"],
    price: 3650,
    priceChange: 0.35,
    marketCap: "¥3.2T",
    revenue: "¥9.5T",
    per: "85.5",
    pbr: "2.15",
    founded: "1926",
    ceo: "Akio Yoshida",
    outlook: [
      {
        title: "Japan's Retail Giant:",
        content: "Aeon is Japan's largest retailer—supermarkets, shopping malls, convenience stores, and financial services. Scale provides purchasing power and supplier negotiating leverage."
      },
      {
        title: "Mall Developer:",
        content: "Aeon Mall develops and operates large shopping centers across Japan and Asia. These properties generate stable rental income and anchor Aeon retail presence."
      },
      {
        title: "ASEAN Expansion:",
        content: "Southeast Asian operations (Vietnam, Malaysia, Indonesia, Cambodia) provide growth absent in mature Japan market. Rising middle class drives modern retail adoption."
      },
      {
        title: "Private Brand Strength:",
        content: "TOPVALU private label spans food, household, and apparel—generating better margins than national brands. Private brand penetration continues increasing."
      },
      {
        title: "Key Risks:",
        content: "High valuation (85x) difficult to justify given thin retail margins. Japan retail market structurally challenging with population decline. E-commerce disruption accelerating."
      }
    ]
  },
  "9843": {
    code: "9843 JP",
    name: "Nitori Holdings",
    nameJp: "ニトリホールディングス",
    themes: ["Retail", "Furniture", "Home Goods"],
    price: 17500,
    priceChange: 0.45,
    marketCap: "¥2.0T",
    revenue: "¥950B",
    per: "22.5",
    pbr: "2.85",
    founded: "1967",
    ceo: "Akio Nitori",
    outlook: [
      {
        title: "Japan's IKEA:",
        content: "Nitori dominates Japanese furniture and home goods retail—700+ stores with vertically integrated manufacturing. Quality products at affordable prices have created loyal customer base."
      },
      {
        title: "Manufacturing Integration:",
        content: "Unlike competitors relying on suppliers, Nitori controls manufacturing in Vietnam and Indonesia. This vertical integration enables cost control and quality management."
      },
      {
        title: "Shimachu Integration:",
        content: "Acquisition of home center chain Shimachu expands into DIY and home improvement. Integration synergies are being realized through shared sourcing and operations."
      },
      {
        title: "Comparable Store Growth:",
        content: "Despite Japan retail challenges, Nitori maintains positive comparable store sales through product innovation and store improvements. This execution deserves premium valuation."
      },
      {
        title: "Key Risks:",
        content: "Founder Akio Nitori approaching 80—succession planning critical. Currency impacts manufacturing costs in Southeast Asia. Housing market softness could slow furniture demand."
      }
    ]
  },
  "4452": {
    code: "4452 JP",
    name: "Kao Corporation",
    nameJp: "花王",
    themes: ["Consumer Products", "Cosmetics", "Chemicals"],
    price: 5850,
    priceChange: 0.35,
    marketCap: "¥2.7T",
    revenue: "¥1.5T",
    per: "25.5",
    pbr: "2.65",
    founded: "1887",
    ceo: "Yoshihiro Hasebe",
    outlook: [
      {
        title: "Japan's P&G:",
        content: "Kao leads Japanese consumer products—laundry detergent (Attack), personal care (Bioré), and beauty (Kanebo). Strong domestic market positions generate stable cash flows."
      },
      {
        title: "Premium Beauty Focus:",
        content: "Kanebo, SUQQU, and other prestige beauty brands command premium pricing and margins. Duty-free and travel retail channels drive growth."
      },
      {
        title: "Chemical Specialties:",
        content: "Industrial chemicals and materials for electronics, automotive, and construction diversify beyond consumer products. These B2B businesses are often overlooked."
      },
      {
        title: "ESG Leadership:",
        content: "Kao's sustainability initiatives (refill packaging, carbon neutrality) resonate with conscious consumers. ESG leadership differentiates versus competitors."
      },
      {
        title: "Key Risks:",
        content: "China cosmetics demand softening impacts premium beauty growth. Raw material costs (palm oil, petrochemicals) create margin pressure. Competition from global giants and local specialists."
      }
    ]
  },
  "4911": {
    code: "4911 JP",
    name: "Shiseido",
    nameJp: "資生堂",
    themes: ["Cosmetics", "Beauty", "Consumer Products"],
    price: 2750,
    priceChange: 0.55,
    marketCap: "¥1.1T",
    revenue: "¥1.0T",
    per: "—",
    pbr: "2.25",
    founded: "1872",
    ceo: "Kentaro Fujiwara",
    outlook: [
      {
        title: "Japan Beauty Pioneer:",
        content: "Shiseido is Japan's oldest and largest cosmetics company—150 years of brand heritage. Premium skincare and makeup command global respect, particularly in Asia."
      },
      {
        title: "China Dependency Challenge:",
        content: "Greater China represents 30%+ of revenue—creating significant exposure to Chinese economic conditions, travel retail, and geopolitics. China weakness has pressured recent results."
      },
      {
        title: "Brand Portfolio Optimization:",
        content: "Shiseido has divested mass market and personal care brands to focus on prestige beauty. This premiumization strategy should improve margins as restructuring completes."
      },
      {
        title: "Travel Retail Recovery:",
        content: "Airport duty-free and travel retail are critical channels for prestige cosmetics. Asian travel recovery supports channel rebound."
      },
      {
        title: "Key Risks:",
        content: "China exposure creates near-term earnings uncertainty. Restructuring costs impacting profitability—negative P/E reflects challenges. Competition from Korean and Western beauty brands intensifying."
      }
    ]
  },
  "2413": {
    code: "2413 JP",
    name: "M3",
    nameJp: "エムスリー",
    themes: ["Healthcare", "Technology", "Medical Platform"],
    price: 1350,
    priceChange: -0.85,
    marketCap: "¥920B",
    revenue: "¥240B",
    per: "22.5",
    pbr: "4.85",
    founded: "2000",
    ceo: "Itaru Tanimura",
    outlook: [
      {
        title: "Physician Platform Dominance:",
        content: "M3 operates Japan's largest online physician community—300,000+ doctors (90% of Japan's physicians) use the platform. This captive audience is invaluable for pharmaceutical marketing and medical information."
      },
      {
        title: "Pharmaceutical Marketing Engine:",
        content: "Drug companies pay premium prices to reach physicians through M3's platform—digital marketing, clinical trial recruitment, and medical education. This is far more efficient than traditional MR sales forces."
      },
      {
        title: "Global Expansion:",
        content: "M3 has expanded to US (MDLinx), Europe, and Asia—building similar physician platforms internationally. Global reach amplifies pharmaceutical customer value proposition."
      },
      {
        title: "Evidence and Research:",
        content: "Real-world evidence generation and clinical research services leverage physician network for data collection and research recruitment."
      },
      {
        title: "Key Risks:",
        content: "COVID tailwinds fading—telehealth and digital engagement normalizing from pandemic peaks. Valuation has compressed significantly from highs. Pharmaceutical marketing budgets face pressure."
      }
    ]
  },
  "2432": {
    code: "2432 JP",
    name: "DeNA",
    nameJp: "ディー・エヌ・エー",
    themes: ["Gaming", "Technology", "Sports"],
    price: 1850,
    priceChange: 0.65,
    marketCap: "¥240B",
    revenue: "¥140B",
    per: "15.5",
    pbr: "1.25",
    founded: "1999",
    ceo: "Shingo Okamura",
    outlook: [
      {
        title: "Mobile Gaming Pioneer:",
        content: "DeNA pioneered Japanese mobile gaming with Mobage platform. While gaming faces challenges, partnerships with Nintendo (Mario Kart Tour, Pokemon Masters) provide IP-backed titles."
      },
      {
        title: "Yokohama DeNA BayStars:",
        content: "Professional baseball team ownership creates stable entertainment revenue and brand visibility. Sports business provides diversification from volatile gaming."
      },
      {
        title: "Healthcare and Automotive:",
        content: "DeNA has diversified into healthcare apps and autonomous driving (partnership with Nissan). These new businesses could become significant growth drivers."
      },
      {
        title: "AI and Technology Services:",
        content: "Enterprise AI solutions and technology services leverage DeNA's engineering talent for B2B applications beyond consumer gaming."
      },
      {
        title: "Key Risks:",
        content: "Gaming revenue declining as mobile gaming matures. New business investments require continued funding before profitability. Competition in all segments is intense."
      }
    ]
  },
  "3697": {
    code: "3697 JP",
    name: "SHIFT",
    nameJp: "SHIFT",
    themes: ["IT Services", "Software Testing", "Technology"],
    price: 14500,
    priceChange: 1.25,
    marketCap: "¥250B",
    revenue: "¥110B",
    per: "35.5",
    pbr: "8.95",
    founded: "2005",
    ceo: "Masaru Tange",
    outlook: [
      {
        title: "Software Testing Specialist:",
        content: "SHIFT dominates Japanese software quality assurance—testing applications before release. As software becomes mission-critical everywhere, testing demand grows structurally."
      },
      {
        title: "DX Transformation Beneficiary:",
        content: "Japan's digital transformation creates enormous testing demand—legacy system migrations, new application development, and cloud transitions all require QA services."
      },
      {
        title: "M&A Roll-up Strategy:",
        content: "SHIFT actively acquires smaller IT services firms—consolidating fragmented market and expanding service offerings. This roll-up creates scale economies."
      },
      {
        title: "Engineer Army:",
        content: "SHIFT employs 10,000+ engineers—recruiting and training talent that Japan's IT labor shortage makes scarce. Human capital is the key asset."
      },
      {
        title: "Key Risks:",
        content: "Premium valuation (35x) requires sustained growth execution. Labor-intensive model faces wage pressure. Competition from global IT services firms intensifying."
      }
    ]
  },
  "4307": {
    code: "4307 JP",
    name: "Nomura Research Institute",
    nameJp: "野村総合研究所",
    themes: ["IT Services", "Consulting", "Technology"],
    price: 4250,
    priceChange: 0.55,
    marketCap: "¥2.4T",
    revenue: "¥720B",
    per: "28.5",
    pbr: "5.45",
    founded: "1965",
    ceo: "Shingo Konomoto",
    outlook: [
      {
        title: "Financial IT Backbone:",
        content: "NRI operates critical IT infrastructure for Japanese financial institutions—securities trading systems, asset management platforms, and banking solutions. This creates extremely sticky recurring revenue."
      },
      {
        title: "Consulting Plus Systems:",
        content: "Unlike pure system integrators, NRI combines management consulting with IT implementation. This end-to-end capability commands premium pricing and deepens client relationships."
      },
      {
        title: "Seven & i Partnership:",
        content: "NRI operates core systems for 7-Eleven convenience stores—another mission-critical relationship with Japan's retail leader."
      },
      {
        title: "Digital Transformation Services:",
        content: "DX consulting and implementation growing rapidly as Japanese enterprises modernize. NRI's reputation enables winning strategic transformation projects."
      },
      {
        title: "Key Risks:",
        content: "Financial services concentration creates sector exposure. Premium valuation assumes continued growth in competitive IT services market. Large project execution risk inherent in systems integration."
      }
    ]
  },
  "4324": {
    code: "4324 JP",
    name: "Dentsu Group",
    nameJp: "電通グループ",
    themes: ["Advertising", "Marketing", "Media"],
    price: 3850,
    priceChange: 0.45,
    marketCap: "¥1.1T",
    revenue: "¥1.3T",
    per: "—",
    pbr: "0.85",
    founded: "1901",
    ceo: "Hiroshi Igarashi",
    outlook: [
      {
        title: "Japan Advertising Dominance:",
        content: "Dentsu controls 25%+ of Japan's advertising market—television, digital, outdoor, and events. This domestic dominance provides stable profit base despite global challenges."
      },
      {
        title: "Global Integration Struggles:",
        content: "International acquisitions (Aegis, Merkle) created global scale but integration has been difficult. Restructuring and write-downs have impacted recent results."
      },
      {
        title: "Digital Transformation:",
        content: "Dentsu is repositioning from traditional advertising to integrated customer transformation—data, technology, and experience services alongside media."
      },
      {
        title: "Olympics and Events:",
        content: "Major events (Olympics, World Expo) create revenue opportunities unique to Dentsu's position as Japan's event marketing leader."
      },
      {
        title: "Key Risks:",
        content: "Global advertising market cyclicality and structural shifts to digital platforms. International operations have destroyed value historically. Trading below book value reflects restructuring challenges."
      }
    ]
  },
  "4385": {
    code: "4385 JP",
    name: "Mercari",
    nameJp: "メルカリ",
    themes: ["E-commerce", "C2C Marketplace", "Technology"],
    price: 1950,
    priceChange: 1.45,
    marketCap: "¥310B",
    revenue: "¥180B",
    per: "45.5",
    pbr: "5.85",
    founded: "2013",
    ceo: "Shintaro Yamada",
    outlook: [
      {
        title: "Japan's Secondhand Revolution:",
        content: "Mercari dominates C2C e-commerce in Japan—20 million monthly active users buying and selling used goods. The platform has normalized secondhand shopping across demographics."
      },
      {
        title: "Merpay Fintech Integration:",
        content: "Merpay payment service creates seamless buy-sell-pay ecosystem. Users keep earnings in Merpay for purchases—increasing platform engagement and transaction velocity."
      },
      {
        title: "US Market Progress:",
        content: "Mercari US is growing and approaching profitability after years of investment. US success would significantly expand addressable market."
      },
      {
        title: "Sustainability Tailwind:",
        content: "Circular economy and sustainability trends benefit secondhand marketplaces. Younger consumers prefer resale for both economic and environmental reasons."
      },
      {
        title: "Key Risks:",
        content: "High valuation (45x) requires continued growth acceleration. US market remains competitive with eBay, Poshmark, and others. Japan growth may slow as market matures."
      }
    ]
  },
  "4689": {
    code: "4689 JP",
    name: "LY Corporation",
    nameJp: "LINEヤフー",
    themes: ["Technology", "Internet", "Fintech"],
    price: 385,
    priceChange: 0.55,
    marketCap: "¥2.9T",
    revenue: "¥1.8T",
    per: "—",
    pbr: "1.45",
    founded: "2023",
    ceo: "Takeshi Idezawa",
    outlook: [
      {
        title: "Japan Internet Giant:",
        content: "LY Corporation combines LINE messenger (95 million Japan users) with Yahoo Japan's portal and services. This creates Japan's most comprehensive internet platform."
      },
      {
        title: "PayPay Fintech Engine:",
        content: "PayPay has become Japan's dominant mobile payment—60 million+ users and 5 million+ merchants. Fintech services (lending, investing, insurance) expand monetization."
      },
      {
        title: "Commerce Ecosystem:",
        content: "Yahoo Shopping, ZOZOTOWN, and PayPay Mall create e-commerce platform rivaling Rakuten and Amazon Japan. Payments integration drives competitive advantage."
      },
      {
        title: "Data and Advertising:",
        content: "Combined user data enables targeted advertising across LINE, Yahoo, and partner properties. This data advantage improves ad effectiveness and pricing."
      },
      {
        title: "Key Risks:",
        content: "Integration of LINE and Yahoo cultures and systems remains challenging. Security incidents have damaged trust. Competition from global platforms and domestic rivals intense."
      }
    ]
  },
  "4704": {
    code: "4704 JP",
    name: "Trend Micro",
    nameJp: "トレンドマイクロ",
    themes: ["Cybersecurity", "Software", "Technology"],
    price: 7850,
    priceChange: 0.85,
    marketCap: "¥1.1T",
    revenue: "¥250B",
    per: "25.5",
    pbr: "4.25",
    founded: "1988",
    ceo: "Eva Chen",
    outlook: [
      {
        title: "Global Cybersecurity Leader:",
        content: "Trend Micro is a top-5 global cybersecurity vendor—enterprise endpoint protection, cloud security, and network defense. Japanese heritage but global revenue base."
      },
      {
        title: "Cloud Security Growth:",
        content: "As enterprises migrate to cloud, Trend Micro's Cloud One platform protects workloads across AWS, Azure, and Google Cloud. Cloud security is fastest-growing segment."
      },
      {
        title: "XDR Platform Evolution:",
        content: "Extended Detection and Response (XDR) platform integrates endpoint, network, and cloud security. Platform consolidation is industry trend favoring established vendors."
      },
      {
        title: "Japan Enterprise Strength:",
        content: "Deep relationships with Japanese enterprises provide stable domestic revenue base while international operations drive growth."
      },
      {
        title: "Key Risks:",
        content: "Cybersecurity market highly competitive—CrowdStrike, Palo Alto, Microsoft all aggressive. Technology shifts require continuous R&D investment. Endpoint security faces commoditization pressure."
      }
    ]
  },
  "4751": {
    code: "4751 JP",
    name: "CyberAgent",
    nameJp: "サイバーエージェント",
    themes: ["Internet", "Gaming", "Advertising"],
    price: 950,
    priceChange: 0.75,
    marketCap: "¥480B",
    revenue: "¥720B",
    per: "28.5",
    pbr: "3.45",
    founded: "1998",
    ceo: "Susumu Fujita",
    outlook: [
      {
        title: "Internet Advertising Pioneer:",
        content: "CyberAgent built Japan's leading internet advertising agency—performance marketing, programmatic buying, and creative services. Digital ad shift benefits established players."
      },
      {
        title: "ABEMA Streaming Platform:",
        content: "ABEMA is CyberAgent's bet on streaming video—free ad-supported model with premium content. World Cup rights and original programming drive viewer growth."
      },
      {
        title: "Game Studio Portfolio:",
        content: "Cygames subsidiary (Uma Musume, Granblue Fantasy) generates significant profits. Hit games provide earnings upside while misses are absorbed by advertising stability."
      },
      {
        title: "Founder-Led Innovation:",
        content: "CEO Susumu Fujita maintains entrepreneurial culture despite company scale—willing to invest in new businesses and accept short-term losses for long-term positioning."
      },
      {
        title: "Key Risks:",
        content: "ABEMA requires continued investment with uncertain path to profitability. Gaming hits are unpredictable—Uma Musume success hard to repeat. Advertising cyclical with economic conditions."
      }
    ]
  },
  "6178": {
    code: "6178 JP",
    name: "Japan Post Holdings",
    nameJp: "日本郵政",
    themes: ["Financial Services", "Postal", "Insurance"],
    price: 1350,
    priceChange: 0.25,
    marketCap: "¥4.5T",
    revenue: "¥11.5T",
    per: "12.5",
    pbr: "0.45",
    founded: "2006",
    ceo: "Hiroya Masuda",
    outlook: [
      {
        title: "Japan's Largest Financial Group:",
        content: "Japan Post Holdings combines postal services with Japan Post Bank (¥230 trillion deposits) and Japan Post Insurance. Sheer scale makes it systemically important."
      },
      {
        title: "Post Office Network:",
        content: "24,000+ post offices create unmatched physical distribution network—valuable for financial services, e-commerce delivery, and government services."
      },
      {
        title: "Interest Rate Beneficiary:",
        content: "Japan Post Bank's massive deposit base benefits enormously from rising interest rates. BOJ normalization could significantly improve banking profitability."
      },
      {
        title: "Government Stake Sales:",
        content: "Government continues selling down stake—creating supply pressure but also signaling confidence in standalone viability and governance improvement."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.45x book reflects structural concerns about postal decline and bureaucratic culture. Insurance sales scandal damaged reputation. E-commerce disrupting traditional postal volumes."
      }
    ]
  },
  "6532": {
    code: "6532 JP",
    name: "BayCurrent Consulting",
    nameJp: "ベイカレント・コンサルティング",
    themes: ["Consulting", "IT Services", "Technology"],
    price: 4150,
    priceChange: 1.15,
    marketCap: "¥580B",
    revenue: "¥94B",
    per: "32.5",
    pbr: "12.5",
    founded: "1998",
    ceo: "Tatsuro Abe",
    outlook: [
      {
        title: "Pure-Play Japan Consulting:",
        content: "BayCurrent is Japan's largest independent consulting firm—competing with McKinsey, BCG, and Accenture for strategic and digital transformation projects."
      },
      {
        title: "DX Consulting Boom:",
        content: "Japanese enterprises are investing heavily in digital transformation—BayCurrent's sweet spot. Demand far exceeds supply of qualified consultants."
      },
      {
        title: "Talent Magnet:",
        content: "BayCurrent has become destination for ambitious Japanese professionals—competitive compensation and interesting projects attract top talent from traditional companies."
      },
      {
        title: "Margin Expansion:",
        content: "Operating margins exceeding 25% are remarkable for professional services. Scale and efficiency improvements continue driving margin expansion."
      },
      {
        title: "Key Risks:",
        content: "Extreme valuation (32x earnings, 12x book) requires sustained hypergrowth. Consulting is people business—key person departure risk. Competition from global firms with deeper resources."
      }
    ]
  },
  "9602": {
    code: "9602 JP",
    name: "Toho",
    nameJp: "東宝",
    themes: ["Entertainment", "Film", "Real Estate"],
    price: 5850,
    priceChange: 0.65,
    marketCap: "¥1.1T",
    revenue: "¥280B",
    per: "22.5",
    pbr: "2.15",
    founded: "1932",
    ceo: "Yoshishige Shimatani",
    outlook: [
      {
        title: "Japan's Film Studio Giant:",
        content: "Toho dominates Japanese film industry—producing and distributing hits like Godzilla, Your Name, and Demon Slayer. Box office market share consistently exceeds 30%."
      },
      {
        title: "Godzilla Global Franchise:",
        content: "Godzilla IP has global value—Hollywood partnerships (Legendary Pictures) and merchandise create revenue streams beyond Japanese theatrical."
      },
      {
        title: "Theater Chain Integration:",
        content: "Toho Cinemas is Japan's largest theater chain—vertical integration from production through exhibition captures margins across the value chain."
      },
      {
        title: "Real Estate Hidden Value:",
        content: "Toho owns valuable Tokyo real estate including areas around theaters. Property holdings provide stability regardless of film performance."
      },
      {
        title: "Key Risks:",
        content: "Film production inherently hit-driven—box office misses impact results. Streaming competition could pressure theatrical releases. Anime production costs rising with talent shortage."
      }
    ]
  },
  "9735": {
    code: "9735 JP",
    name: "Secom",
    nameJp: "セコム",
    themes: ["Security Services", "Safety", "Technology"],
    price: 4650,
    priceChange: 0.35,
    marketCap: "¥2.2T",
    revenue: "¥1.1T",
    per: "22.5",
    pbr: "1.85",
    founded: "1962",
    ceo: "Ichiro Ozeki",
    outlook: [
      {
        title: "Japan Security Pioneer:",
        content: "Secom invented Japan's security services industry—monitoring 2.4 million commercial and residential subscribers. First-mover advantage created dominant market position."
      },
      {
        title: "Recurring Revenue Model:",
        content: "Monthly monitoring fees create highly predictable recurring revenue—customer retention exceeds 95%. This stability commands premium valuation."
      },
      {
        title: "Beyond Traditional Security:",
        content: "Secom has expanded into medical services, insurance, and real estate. Home medical monitoring and senior care leverage security infrastructure."
      },
      {
        title: "Technology Integration:",
        content: "AI-powered monitoring, drone security, and IoT sensors modernize traditional security services. Technology investment maintains competitive advantage."
      },
      {
        title: "Key Risks:",
        content: "Japan market maturity limits domestic growth. International expansion has been challenging. Competition from home security alternatives and smart devices."
      }
    ]
  },
  "1605": {
    code: "1605 JP",
    name: "Inpex",
    nameJp: "INPEX",
    themes: ["Energy", "Oil & Gas", "Resources"],
    price: 1950,
    priceChange: -0.45,
    marketCap: "¥2.7T",
    revenue: "¥2.4T",
    per: "8.5",
    pbr: "0.65",
    founded: "1966",
    ceo: "Takayuki Ueda",
    outlook: [
      {
        title: "Japan's Upstream Champion:",
        content: "Inpex is Japan's largest oil and gas E&P company—essential for energy security in resource-poor Japan. Government support ensures strategic importance."
      },
      {
        title: "Ichthys LNG Producing:",
        content: "The massive Ichthys LNG project in Australia is fully operational—providing decades of production and cash flow. This world-class asset anchors the portfolio."
      },
      {
        title: "Net Zero Transition:",
        content: "Inpex is investing in hydrogen, ammonia, CCS, and renewable energy. These investments position for energy transition while oil and gas fund the pivot."
      },
      {
        title: "Middle East Relationships:",
        content: "Long-standing relationships in Abu Dhabi, Indonesia, and other producing regions provide access to reserves that competitors cannot easily replicate."
      },
      {
        title: "Key Risks:",
        content: "Oil and gas prices drive profitability—commodity volatility is inherent. Energy transition could strand hydrocarbon assets. ESG concerns limit investor universe."
      }
    ]
  },
  "5401": {
    code: "5401 JP",
    name: "Nippon Steel",
    nameJp: "日本製鉄",
    themes: ["Steel", "Materials", "Industrial"],
    price: 3050,
    priceChange: 0.55,
    marketCap: "¥2.9T",
    revenue: "¥8.0T",
    per: "8.5",
    pbr: "0.65",
    founded: "1970",
    ceo: "Eiji Hashimoto",
    outlook: [
      {
        title: "Global Steel Leader:",
        content: "Nippon Steel is world's #4 steelmaker and Japan's largest—supplying automotive, construction, and industrial customers with high-grade steel products."
      },
      {
        title: "US Steel Acquisition:",
        content: "Proposed acquisition of US Steel would create global integrated steel powerhouse. US market access and strategic importance drive the deal rationale."
      },
      {
        title: "High-Grade Steel Focus:",
        content: "Nippon Steel focuses on premium products—electrical steel for EVs, automotive high-tensile steel, and specialty grades commanding better margins."
      },
      {
        title: "Carbon Neutrality Challenge:",
        content: "Steel production is carbon-intensive—Nippon Steel is developing hydrogen steelmaking and other technologies to decarbonize. Success could create competitive advantage."
      },
      {
        title: "Key Risks:",
        content: "US Steel deal faces political opposition—approval uncertain. Chinese steel overcapacity pressures global pricing. Energy costs significantly impact profitability."
      }
    ]
  },
  "5411": {
    code: "5411 JP",
    name: "JFE Holdings",
    nameJp: "JFEホールディングス",
    themes: ["Steel", "Engineering", "Materials"],
    price: 1850,
    priceChange: 0.45,
    marketCap: "¥1.1T",
    revenue: "¥5.2T",
    per: "7.5",
    pbr: "0.45",
    founded: "2002",
    ceo: "Yoshihisa Kitano",
    outlook: [
      {
        title: "Integrated Steel Producer:",
        content: "JFE Steel is Japan's #2 steelmaker—integrated production from raw materials to finished products. Scale provides efficiency but also capital intensity."
      },
      {
        title: "Engineering and Trading:",
        content: "JFE Engineering and JFE Shoji diversify beyond steel production—plant construction, environmental equipment, and steel trading reduce cyclicality."
      },
      {
        title: "Automotive Steel Focus:",
        content: "High-strength automotive steel for lightweighting and EV applications represents growth opportunity. Japanese automaker relationships provide stable demand."
      },
      {
        title: "Restructuring Progress:",
        content: "Capacity rationalization and efficiency improvements continue. Focus on higher-margin products improves profitability versus commodity steel."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.45x book reflects steel industry structural challenges. Chinese competition and overcapacity pressure pricing. Capital intensity limits returns."
      }
    ]
  },
  "5713": {
    code: "5713 JP",
    name: "Sumitomo Metal Mining",
    nameJp: "住友金属鉱山",
    themes: ["Mining", "Materials", "Batteries"],
    price: 3850,
    priceChange: 1.25,
    marketCap: "¥1.1T",
    revenue: "¥1.4T",
    per: "12.5",
    pbr: "0.85",
    founded: "1950",
    ceo: "Akira Nozaki",
    outlook: [
      {
        title: "Battery Materials Leader:",
        content: "Sumitomo Metal Mining is world's largest producer of nickel-based cathode materials for EV batteries—supplying Panasonic/Tesla and other battery makers."
      },
      {
        title: "Integrated Mining to Materials:",
        content: "From nickel and copper mining through refining to battery materials, vertical integration provides cost advantages and supply security."
      },
      {
        title: "Gold Mining Portfolio:",
        content: "Hishikari gold mine in Japan and Pogo mine in Alaska provide gold production—diversifying from industrial metals."
      },
      {
        title: "EV Growth Exposure:",
        content: "As EV production scales globally, demand for cathode materials grows proportionally. Sumitomo Metal Mining is positioned for this structural growth."
      },
      {
        title: "Key Risks:",
        content: "Commodity prices (nickel, copper, gold) drive profitability volatility. Battery chemistry shifts (LFP gaining share) could reduce nickel demand. Mining operations face environmental and social challenges."
      }
    ]
  },
  "5802": {
    code: "5802 JP",
    name: "Sumitomo Electric",
    nameJp: "住友電気工業",
    themes: ["Electronics", "Automotive", "Infrastructure"],
    price: 2250,
    priceChange: 0.55,
    marketCap: "¥1.8T",
    revenue: "¥4.0T",
    per: "12.5",
    pbr: "0.85",
    founded: "1911",
    ceo: "Osamu Inoue",
    outlook: [
      {
        title: "Wiring Harness Global Leader:",
        content: "Sumitomo Electric is world's #2 automotive wiring harness supplier—the nervous system connecting vehicle electronics. Every car contains kilometers of Sumitomo wire."
      },
      {
        title: "EV Transition Beneficiary:",
        content: "Electric vehicles require more wiring and higher-voltage components than ICE vehicles. Content per vehicle increases with electrification."
      },
      {
        title: "Optical Fiber and Communications:",
        content: "Optical fiber cables for telecommunications and data centers provide infrastructure growth exposure. 5G and AI data center buildouts drive demand."
      },
      {
        title: "Power Cable Infrastructure:",
        content: "High-voltage power cables for offshore wind, grid interconnections, and transmission infrastructure benefit from energy transition investments."
      },
      {
        title: "Key Risks:",
        content: "Automotive production volatility directly impacts wiring harness demand. Copper price exposure creates cost volatility. Competition in commoditized wire and cable segments."
      }
    ]
  },
  "3405": {
    code: "3405 JP",
    name: "Kuraray",
    nameJp: "クラレ",
    themes: ["Chemicals", "Materials", "Specialty"],
    price: 2050,
    priceChange: 0.45,
    marketCap: "¥720B",
    revenue: "¥730B",
    per: "12.5",
    pbr: "1.05",
    founded: "1926",
    ceo: "Kenji Kawahashi",
    outlook: [
      {
        title: "PVA and PVOH Dominance:",
        content: "Kuraray holds 80% global market share in PVA (polyvinyl alcohol) resin—essential for LCD polarizing films, textiles, and packaging. This near-monopoly creates pricing power."
      },
      {
        title: "EVAL Barrier Films:",
        content: "EVAL ethylene vinyl alcohol resins provide oxygen barrier properties for food packaging—extending shelf life and reducing waste. Growing sustainability applications."
      },
      {
        title: "Dental Materials Growth:",
        content: "Dental adhesives and restorative materials from Kuraray Noritake create healthcare exposure. Dental aesthetics drive premium product demand."
      },
      {
        title: "Carbon Fiber and Advanced Materials:",
        content: "Activated carbon for water purification and specialty fibers diversify the portfolio beyond petrochemicals."
      },
      {
        title: "Key Risks:",
        content: "PVA demand tied to LCD production—industry maturity limits growth. Specialty chemical competition intensifying. Energy and raw material costs impact margins."
      }
    ]
  },
  "4188": {
    code: "4188 JP",
    name: "Mitsubishi Chemical",
    nameJp: "三菱ケミカルグループ",
    themes: ["Chemicals", "Pharmaceuticals", "Materials"],
    price: 785,
    priceChange: 0.35,
    marketCap: "¥1.2T",
    revenue: "¥4.4T",
    per: "—",
    pbr: "0.65",
    founded: "2005",
    ceo: "Jean-Marc Gilson",
    outlook: [
      {
        title: "Japan's Chemical Giant:",
        content: "Mitsubishi Chemical Group is Japan's largest chemical company—specialty materials, performance chemicals, and industrial gases across virtually every industry."
      },
      {
        title: "Portfolio Transformation:",
        content: "New CEO (first non-Japanese) is driving portfolio restructuring—divesting commodities and focusing on specialty materials with better returns."
      },
      {
        title: "Specialty Materials Focus:",
        content: "Semiconductor materials, display films, and battery materials represent growth focus areas. These high-tech applications justify premium pricing."
      },
      {
        title: "Pharma Spinoff Potential:",
        content: "Mitsubishi Tanabe Pharma could be separated to unlock value and allow chemical business focus. Strategic options under review."
      },
      {
        title: "Key Risks:",
        content: "Conglomerate complexity makes analysis difficult. Commodity chemical cycles create volatility. Trading at 0.65x book reflects transformation uncertainty."
      }
    ]
  },
  "3401": {
    code: "3401 JP",
    name: "Teijin",
    nameJp: "帝人",
    themes: ["Materials", "Healthcare", "Fibers"],
    price: 1350,
    priceChange: 0.45,
    marketCap: "¥260B",
    revenue: "¥1.0T",
    per: "—",
    pbr: "0.55",
    founded: "1918",
    ceo: "Akimoto Uchikawa",
    outlook: [
      {
        title: "Aramid Fiber Global Leader:",
        content: "Teijin produces Twaron and Technora aramid fibers—used in bulletproof vests, automotive parts, and industrial applications. These high-performance materials command premium pricing."
      },
      {
        title: "Carbon Fiber Composites:",
        content: "Automotive and aerospace carbon fiber composites represent growth opportunity. Lightweighting demand for fuel efficiency and EV range drives adoption."
      },
      {
        title: "Healthcare Diversification:",
        content: "Teijin Healthcare provides home oxygen therapy and medical devices in Japan. Aging population drives demand for home healthcare services."
      },
      {
        title: "IT Materials:",
        content: "Polyester films for displays and electronics leverage fiber technology for IT applications. These specialty films serve growing display markets."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.55x book reflects structural challenges across segments. Aramid competition from DuPont intensifying. Healthcare margins pressured by reimbursement cuts."
      }
    ]
  },
  "3402": {
    code: "3402 JP",
    name: "Toray Industries",
    nameJp: "東レ",
    themes: ["Materials", "Carbon Fiber", "Chemicals"],
    price: 850,
    priceChange: 0.35,
    marketCap: "¥1.4T",
    revenue: "¥2.5T",
    per: "15.5",
    pbr: "0.85",
    founded: "1926",
    ceo: "Mitsuo Ohya",
    outlook: [
      {
        title: "Carbon Fiber World Leader:",
        content: "Toray holds 50% global market share in carbon fiber—supplying Boeing, Airbus, and automotive manufacturers. Aerospace recovery and EV lightweighting drive demand growth."
      },
      {
        title: "Boeing Strategic Partnership:",
        content: "Long-term supply agreements with Boeing for 787 and future aircraft create revenue visibility. Aerospace carbon fiber commands premium margins."
      },
      {
        title: "Water Treatment Membranes:",
        content: "Reverse osmosis membranes for desalination and water purification address global water scarcity. Environmental applications provide growth diversification."
      },
      {
        title: "Battery Separator Films:",
        content: "Lithium-ion battery separators for EVs represent another growth avenue. Toray's film technology extends to battery applications."
      },
      {
        title: "Key Risks:",
        content: "Carbon fiber capacity additions could pressure pricing. Textile businesses face structural decline. Energy costs impact petrochemical-derived products."
      }
    ]
  },
  "3861": {
    code: "3861 JP",
    name: "Oji Holdings",
    nameJp: "王子ホールディングス",
    themes: ["Paper", "Packaging", "Materials"],
    price: 580,
    priceChange: 0.25,
    marketCap: "¥580B",
    revenue: "¥1.7T",
    per: "8.5",
    pbr: "0.55",
    founded: "1873",
    ceo: "Hiroyuki Isono",
    outlook: [
      {
        title: "Japan's Paper Giant:",
        content: "Oji Holdings is Japan's largest paper and packaging company—150-year heritage serving publishing, packaging, and industrial markets."
      },
      {
        title: "Packaging Growth Focus:",
        content: "As paper printing declines, Oji pivots to packaging—corrugated boxes for e-commerce, food packaging, and industrial applications."
      },
      {
        title: "Southeast Asia Expansion:",
        content: "Packaging operations in Malaysia, Vietnam, and India serve growing consumer markets. Asian middle class drives packaging demand."
      },
      {
        title: "Forest Resources:",
        content: "Oji manages sustainable forests in Japan, Australia, and Southeast Asia. These provide raw material security and potential carbon credit value."
      },
      {
        title: "Key Risks:",
        content: "Paper demand structural decline continues despite packaging growth. Trading at 0.55x book reflects industry challenges. Energy intensive production faces cost pressure."
      }
    ]
  },
  "3407": {
    code: "3407 JP",
    name: "Asahi Kasei",
    nameJp: "旭化成",
    themes: ["Chemicals", "Housing", "Healthcare"],
    price: 1050,
    priceChange: 0.45,
    marketCap: "¥1.5T",
    revenue: "¥2.7T",
    per: "12.5",
    pbr: "0.75",
    founded: "1931",
    ceo: "Koshiro Kagami",
    outlook: [
      {
        title: "Diversified Chemical Conglomerate:",
        content: "Asahi Kasei spans chemicals, homes, and healthcare—unusual diversification providing stability through cycles. Each segment contributes meaningfully to profits."
      },
      {
        title: "Battery Separator Leadership:",
        content: "Hipore battery separators hold leading global share for lithium-ion batteries. EV growth drives separator demand structurally."
      },
      {
        title: "Hebel House Housing:",
        content: "Asahi Kasei Homes builds premium residential housing in Japan using proprietary Hebel (autoclaved aerated concrete) technology."
      },
      {
        title: "Critical Care Medical:",
        content: "Zoll Medical (acquired) provides defibrillators and critical care equipment. Healthcare provides counter-cyclical stability."
      },
      {
        title: "Key Risks:",
        content: "Conglomerate discount persists—sum of parts may exceed market value. Housing faces Japan demographic headwinds. Chemical cyclicality creates quarterly volatility."
      }
    ]
  },
  "4004": {
    code: "4004 JP",
    name: "Resonac Holdings",
    nameJp: "レゾナック・ホールディングス",
    themes: ["Chemicals", "Semiconductors", "Materials"],
    price: 2450,
    priceChange: 0.85,
    marketCap: "¥440B",
    revenue: "¥1.3T",
    per: "—",
    pbr: "0.85",
    founded: "1939",
    ceo: "Hidehito Takahashi",
    outlook: [
      {
        title: "Semiconductor Materials Focus:",
        content: "Resonac (formerly Showa Denko) is transforming into semiconductor materials specialist—CMP slurries, high-purity gases, and advanced packaging materials."
      },
      {
        title: "Advanced Packaging Growth:",
        content: "AI chip packaging requires sophisticated materials—Resonac's molding compounds, die bonding films, and substrates serve this fast-growing segment."
      },
      {
        title: "Portfolio Restructuring:",
        content: "Legacy commodity chemicals being divested to focus on high-value semiconductor and electronics materials. Transformation ongoing."
      },
      {
        title: "Hitachi Chemical Integration:",
        content: "Hitachi Chemical acquisition (2020) brought semiconductor materials expertise. Integration synergies being realized."
      },
      {
        title: "Key Risks:",
        content: "Transformation execution risk—divesting businesses while building new ones. Semiconductor cycle volatility impacts near-term results. Competition in specialty materials intensifying."
      }
    ]
  },
  "4005": {
    code: "4005 JP",
    name: "Sumitomo Chemical",
    nameJp: "住友化学",
    themes: ["Chemicals", "Pharmaceuticals", "Agriculture"],
    price: 320,
    priceChange: -0.55,
    marketCap: "¥530B",
    revenue: "¥2.9T",
    per: "—",
    pbr: "0.55",
    founded: "1913",
    ceo: "Keiichi Iwata",
    outlook: [
      {
        title: "Integrated Chemical Company:",
        content: "Sumitomo Chemical spans petrochemicals, IT materials, agrochemicals, and pharmaceuticals (via Sumitomo Pharma)—diversification creating stability but also complexity."
      },
      {
        title: "Display Materials Strength:",
        content: "Polarizing films and touch sensor films for displays serve smartphone and TV manufacturers. Apple supply chain relationship is significant."
      },
      {
        title: "Crop Protection Global:",
        content: "Agricultural chemicals serve farmers globally—herbicides, fungicides, and insecticides addressing food security needs."
      },
      {
        title: "Sumitomo Pharma Challenges:",
        content: "Pharmaceutical subsidiary faces pipeline challenges and Latuda patent expiration. This has pressured overall group results."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.55x book reflects pharma disappointments and chemical cyclicality. Petrochemical margins volatile with oil prices. Restructuring needed across segments."
      }
    ]
  },
  "4021": {
    code: "4021 JP",
    name: "Nissan Chemical",
    nameJp: "日産化学",
    themes: ["Chemicals", "Semiconductors", "Agriculture"],
    price: 5250,
    priceChange: 0.65,
    marketCap: "¥780B",
    revenue: "¥230B",
    per: "18.5",
    pbr: "3.25",
    founded: "1887",
    ceo: "Shinsuke Yoshitaka",
    outlook: [
      {
        title: "Semiconductor Materials Excellence:",
        content: "Nissan Chemical produces anti-reflective coatings and multilayer materials for semiconductor lithography—essential for advanced chipmaking."
      },
      {
        title: "High Margin Specialty Focus:",
        content: "Unlike commodity chemical companies, Nissan Chemical focuses on high-margin specialties. Operating margins consistently exceed 20%—exceptional for chemicals."
      },
      {
        title: "Display Materials:",
        content: "Alignment films for LCD and OLED displays serve global panel manufacturers. Technology leadership commands premium pricing."
      },
      {
        title: "Agricultural Chemicals:",
        content: "Herbicides and plant growth regulators provide stable agricultural segment. Japan and international markets contribute."
      },
      {
        title: "Key Risks:",
        content: "Premium valuation (18x) requires continued specialty growth. Semiconductor cycle impacts materials demand. Smaller scale limits R&D versus global chemical giants."
      }
    ]
  },
  "4042": {
    code: "4042 JP",
    name: "Tosoh",
    nameJp: "東ソー",
    themes: ["Chemicals", "Healthcare", "Materials"],
    price: 1850,
    priceChange: 0.45,
    marketCap: "¥610B",
    revenue: "¥1.0T",
    per: "9.5",
    pbr: "0.75",
    founded: "1935",
    ceo: "Toshinori Yamamoto",
    outlook: [
      {
        title: "Chlor-Alkali Integration:",
        content: "Tosoh operates integrated chlor-alkali complex—caustic soda, VCM, and PVC production with cost advantages from scale and energy efficiency."
      },
      {
        title: "Zirconia Specialty Materials:",
        content: "High-purity zirconia for dental implants and industrial applications commands premium margins. Dental materials growing with aging populations."
      },
      {
        title: "Diagnostic Reagents:",
        content: "Bioscience segment provides diagnostic reagents and separation materials for healthcare and research. Life science applications diversify from commodity chemicals."
      },
      {
        title: "Ethylene Amines:",
        content: "Global leader in ethylene amines used in agrochemicals, paper chemicals, and asphalt additives. Specialty positions within commodity chains."
      },
      {
        title: "Key Risks:",
        content: "PVC and chlor-alkali margins volatile with supply-demand balance. Energy costs significantly impact profitability. China capacity additions pressure pricing globally."
      }
    ]
  },
  "4043": {
    code: "4043 JP",
    name: "Tokuyama",
    nameJp: "トクヤマ",
    themes: ["Chemicals", "Semiconductors", "Materials"],
    price: 2650,
    priceChange: 0.75,
    marketCap: "¥190B",
    revenue: "¥380B",
    per: "8.5",
    pbr: "0.85",
    founded: "1918",
    ceo: "Hiroshi Yokota",
    outlook: [
      {
        title: "Polysilicon for Semiconductors:",
        content: "Tokuyama produces high-purity polysilicon for semiconductor wafers—essential material for chip manufacturing. Quality requirements create barriers to entry."
      },
      {
        title: "Electronic Materials Focus:",
        content: "Silica and specialty materials for semiconductor and display applications represent growth focus. Technology intensity improves margins versus commodities."
      },
      {
        title: "Cement and Building Materials:",
        content: "Cement operations in Japan provide stable cash flows. Domestic infrastructure spending supports construction materials demand."
      },
      {
        title: "Healthcare Materials:",
        content: "Dental materials and healthcare chemicals diversify the portfolio. These specialty applications leverage chemical expertise."
      },
      {
        title: "Key Risks:",
        content: "Polysilicon faces competition from Chinese producers. Cement demand faces long-term decline with Japan demographics. Energy costs impact both cement and chemicals."
      }
    ]
  },
  "4061": {
    code: "4061 JP",
    name: "Denka",
    nameJp: "デンカ",
    themes: ["Chemicals", "Electronics", "Healthcare"],
    price: 2350,
    priceChange: 0.55,
    marketCap: "¥200B",
    revenue: "¥430B",
    per: "12.5",
    pbr: "0.85",
    founded: "1915",
    ceo: "Toshio Imai",
    outlook: [
      {
        title: "Specialty Chemical Transformation:",
        content: "Denka is pivoting from commodity chemicals to specialty materials—electronics, infrastructure, and healthcare applications with better margins."
      },
      {
        title: "Spherical Alumina:",
        content: "High-purity spherical alumina for semiconductor encapsulants and thermal interface materials serve advanced packaging needs."
      },
      {
        title: "Acetylene Black:",
        content: "Conductive carbon black for lithium-ion batteries positions Denka in EV supply chain. Battery materials represent growth opportunity."
      },
      {
        title: "Vaccine Business:",
        content: "Influenza vaccine production provides healthcare diversification. Pandemic preparedness has increased focus on vaccine manufacturing capability."
      },
      {
        title: "Key Risks:",
        content: "Transformation requires continued investment before payoff. Commodity chemical businesses drag overall returns. Scale limitations versus larger competitors."
      }
    ]
  },
  "4183": {
    code: "4183 JP",
    name: "Mitsui Chemicals",
    nameJp: "三井化学",
    themes: ["Chemicals", "Healthcare", "Materials"],
    price: 3650,
    priceChange: 0.55,
    marketCap: "¥730B",
    revenue: "¥1.9T",
    per: "10.5",
    pbr: "0.85",
    founded: "1997",
    ceo: "Osamu Hashimoto",
    outlook: [
      {
        title: "Mobility Materials Focus:",
        content: "Mitsui Chemicals focuses on automotive materials—PP compounds, elastomers, and coatings serving global automakers. EV transition creates new material opportunities."
      },
      {
        title: "Healthcare Vision Care:",
        content: "Ophthalmic lens materials for eyeglasses represent growth segment. Aging populations drive vision correction demand globally."
      },
      {
        title: "ICT Materials:",
        content: "Materials for semiconductors, displays, and electronics serve technology customers. Specialty positions within growing markets."
      },
      {
        title: "Sustainability Focus:",
        content: "Circular economy initiatives including chemical recycling and bio-based materials align with customer sustainability goals."
      },
      {
        title: "Key Risks:",
        content: "Automotive production volatility impacts materials demand. Petrochemical margins cyclical with oil prices. Competition from larger global chemical companies."
      }
    ]
  },
  "4208": {
    code: "4208 JP",
    name: "UBE Corporation",
    nameJp: "UBE",
    themes: ["Chemicals", "Materials", "Machinery"],
    price: 2450,
    priceChange: 0.35,
    marketCap: "¥250B",
    revenue: "¥500B",
    per: "10.5",
    pbr: "0.65",
    founded: "1942",
    ceo: "Masato Izumihara",
    outlook: [
      {
        title: "Specialty Chemicals Focus:",
        content: "UBE has transformed from conglomerate to specialty chemicals focus—battery materials, semiconductor gases, and engineering plastics."
      },
      {
        title: "Battery Electrolyte Materials:",
        content: "Electrolyte solvents and additives for lithium-ion batteries serve growing EV market. Battery materials represent core growth strategy."
      },
      {
        title: "Polyimide Films:",
        content: "High-performance polyimide films for flexible displays and electronics leverage UBE's polymer expertise. Technology applications command premium pricing."
      },
      {
        title: "Separation of Cement:",
        content: "Cement business separated (Mitsubishi UBE Cement) to focus on specialty chemicals. Cleaner portfolio improves investor understanding."
      },
      {
        title: "Key Risks:",
        content: "Transformation ongoing—execution risk remains. Battery materials competition intensifying. Trading at 0.65x book reflects historical challenges."
      }
    ]
  },
  "4901": {
    code: "4901 JP",
    name: "Fujifilm Holdings",
    nameJp: "富士フイルムホールディングス",
    themes: ["Healthcare", "Materials", "Imaging"],
    price: 3250,
    priceChange: 0.65,
    marketCap: "¥4.1T",
    revenue: "¥2.9T",
    per: "16.5",
    pbr: "1.35",
    founded: "1934",
    ceo: "Teiichi Goto",
    outlook: [
      {
        title: "Healthcare Transformation Complete:",
        content: "Fujifilm has successfully transformed from film company to healthcare leader—medical imaging, pharmaceutical CDMO, and regenerative medicine now drive growth."
      },
      {
        title: "Pharmaceutical CDMO Growth:",
        content: "Bio CDMO business (contract manufacturing for biologics) is growing rapidly. mRNA manufacturing capability positions for future vaccine and therapeutic demand."
      },
      {
        title: "Medical Imaging Systems:",
        content: "Endoscopes, X-ray systems, and healthcare IT serve hospitals globally. Medical imaging expertise evolved from photography heritage."
      },
      {
        title: "Display Materials:",
        content: "Films for displays (TAC, OLED materials) leverage chemical expertise. Technology positions serve growing display markets."
      },
      {
        title: "Key Risks:",
        content: "CDMO competitive landscape intensifying. Instax instant photography faces consumer discretionary spending risk. Large acquisitions create integration challenges."
      }
    ]
  },
  "6988": {
    code: "6988 JP",
    name: "Nitto Denko",
    nameJp: "日東電工",
    themes: ["Materials", "Electronics", "Healthcare"],
    price: 2450,
    priceChange: 0.85,
    marketCap: "¥1.8T",
    revenue: "¥920B",
    per: "14.5",
    pbr: "1.65",
    founded: "1918",
    ceo: "Hideo Takasaki",
    outlook: [
      {
        title: "Functional Films Specialist:",
        content: "Nitto Denko produces specialty tapes and films—optical films for displays, semiconductor process tapes, and automotive films. These functional materials serve global technology customers."
      },
      {
        title: "Optical Film Leadership:",
        content: "Polarizing films and retardation films for LCDs and OLEDs serve major display manufacturers. Technology leadership creates customer stickiness."
      },
      {
        title: "Nucleic Acid CDMO:",
        content: "Contract manufacturing for oligonucleotide therapeutics (siRNA, mRNA) represents healthcare growth. Nitto provides critical manufacturing for pharma companies."
      },
      {
        title: "Global Niche Strategy:",
        content: "Nitto pursues 'Global Niche Top' strategy—dominating specialized markets with technical barriers. This focus drives above-average margins."
      },
      {
        title: "Key Risks:",
        content: "Display market maturity limits optical film growth. Semiconductor tapes face customer concentration risk. Healthcare CDMO requires scale to compete."
      }
    ]
  },
  "5019": {
    code: "5019 JP",
    name: "Idemitsu Kosan",
    nameJp: "出光興産",
    themes: ["Energy", "Oil Refining", "Chemicals"],
    price: 1050,
    priceChange: -0.35,
    marketCap: "¥1.5T",
    revenue: "¥9.5T",
    per: "6.5",
    pbr: "0.65",
    founded: "1911",
    ceo: "Shunichi Kito",
    outlook: [
      {
        title: "Integrated Oil Refiner:",
        content: "Idemitsu Kosan operates refineries across Japan—producing gasoline, diesel, petrochemicals, and lubricants. Vertical integration from crude to retail."
      },
      {
        title: "Service Station Network:",
        content: "Apollo and Idemitsu branded stations create retail distribution. Transition to EV charging infrastructure underway."
      },
      {
        title: "Functional Materials:",
        content: "OLED materials, lubricants, and specialty chemicals represent higher-margin diversification from commodity fuel."
      },
      {
        title: "Energy Transition Investment:",
        content: "Solar, biomass, and next-generation fuels receive investment focus. Transition away from fossil fuels is strategic priority."
      },
      {
        title: "Key Risks:",
        content: "Oil refining faces structural decline in Japan as EV adoption grows. Refining margins volatile with crude prices. Energy transition requires massive capital investment."
      }
    ]
  },
  "5020": {
    code: "5020 JP",
    name: "Eneos Holdings",
    nameJp: "ENEOSホールディングス",
    themes: ["Energy", "Oil Refining", "Resources"],
    price: 750,
    priceChange: -0.25,
    marketCap: "¥2.3T",
    revenue: "¥15.0T",
    per: "8.5",
    pbr: "0.55",
    founded: "2010",
    ceo: "Takeshi Soda",
    outlook: [
      {
        title: "Japan's Largest Oil Refiner:",
        content: "Eneos controls 50% of Japan's refining capacity—dominant position from consolidation. Scale provides efficiency advantages in declining market."
      },
      {
        title: "Metals Business Value:",
        content: "JX Metals subsidiary produces copper, precious metals, and semiconductor materials. This business may be worth more than oil refining long-term."
      },
      {
        title: "Hydrogen and Clean Energy:",
        content: "Eneos is investing heavily in hydrogen supply chain—production, transport, and distribution. Positioned for potential hydrogen economy."
      },
      {
        title: "Service Station Transformation:",
        content: "Converting gas stations to energy hubs—EV charging, hydrogen refueling, and energy services."
      },
      {
        title: "Key Risks:",
        content: "Oil demand structural decline with EV adoption. Trading at 0.55x book reflects energy transition challenges. Massive capital required for transformation."
      }
    ]
  },
  "5101": {
    code: "5101 JP",
    name: "Yokohama Rubber",
    nameJp: "横浜ゴム",
    themes: ["Tires", "Automotive", "Industrial"],
    price: 2850,
    priceChange: 0.45,
    marketCap: "¥480B",
    revenue: "¥950B",
    per: "8.5",
    pbr: "0.95",
    founded: "1917",
    ceo: "Masataka Yamaishi",
    outlook: [
      {
        title: "Premium Tire Focus:",
        content: "Yokohama positions in premium tire segments—ADVAN performance tires and Geolandar SUV tires command better margins than commodity tires."
      },
      {
        title: "OEM Relationships:",
        content: "Original equipment supply to Porsche, Mercedes, and Japanese automakers provides volume stability and technology validation."
      },
      {
        title: "Tire Consolidation:",
        content: "Acquisition of Alliance Tire Group expanded agricultural and specialty tire business—diversifying from passenger vehicles."
      },
      {
        title: "Industrial Products:",
        content: "Marine hoses, conveyor belts, and industrial rubber products serve non-automotive customers."
      },
      {
        title: "Key Risks:",
        content: "Tire industry faces EV disruption—tire wear patterns may change with heavier EVs. Raw rubber and petrochemical costs volatile. Competition from Asian tire makers intensifying."
      }
    ]
  },
  "5108": {
    code: "5108 JP",
    name: "Bridgestone",
    nameJp: "ブリヂストン",
    themes: ["Tires", "Automotive", "Global"],
    price: 5450,
    priceChange: 0.35,
    marketCap: "¥3.9T",
    revenue: "¥4.2T",
    per: "12.5",
    pbr: "1.35",
    founded: "1931",
    ceo: "Shuichi Ishibashi",
    outlook: [
      {
        title: "Global Tire Leader:",
        content: "Bridgestone is world's largest tire company—competing with Michelin for #1 across passenger, truck, and specialty tires. Global scale provides purchasing and R&D leverage."
      },
      {
        title: "Premium Brand Strategy:",
        content: "Focus on premium tires improves margins while ceding commodity segments to low-cost competitors. Brand strength commands pricing power."
      },
      {
        title: "Solutions Business:",
        content: "Beyond tires, Bridgestone provides fleet solutions—tire management, data analytics, and mobility services create recurring revenue."
      },
      {
        title: "EV Tire Innovation:",
        content: "EV-specific tires (handling weight, low rolling resistance, noise reduction) represent innovation opportunity. Technology leadership positions Bridgestone for EV transition."
      },
      {
        title: "Key Risks:",
        content: "Tire industry mature with limited growth. Raw material costs volatile. Autonomous vehicles could reduce tire replacement frequency long-term."
      }
    ]
  },
  "5201": {
    code: "5201 JP",
    name: "AGC",
    nameJp: "AGC",
    themes: ["Glass", "Chemicals", "Electronics"],
    price: 4850,
    priceChange: 0.55,
    marketCap: "¥1.1T",
    revenue: "¥2.0T",
    per: "12.5",
    pbr: "0.75",
    founded: "1907",
    ceo: "Yoshinori Hirai",
    outlook: [
      {
        title: "Glass Global Leader:",
        content: "AGC (formerly Asahi Glass) is world's largest glass company—automotive windshields, architectural glass, and display glass serving global customers."
      },
      {
        title: "Display Glass Evolution:",
        content: "Glass substrates for LCDs and OLEDs serve display manufacturers. Technology shifts create opportunities and risks as display technology evolves."
      },
      {
        title: "Chemicals Diversification:",
        content: "Chlor-alkali chemicals and fluorochemicals provide diversification beyond glass. Specialty chemicals carry higher margins."
      },
      {
        title: "CDMO Pharma Business:",
        content: "Contract manufacturing for pharmaceuticals (biologic CDMOs) represents new growth avenue. Life science leverages chemical expertise."
      },
      {
        title: "Key Risks:",
        content: "Architectural glass faces construction cycle volatility. Display glass commoditizing with Chinese competition. Trading at 0.75x book reflects conglomerate discount."
      }
    ]
  },
  "5233": {
    code: "5233 JP",
    name: "Taiheiyo Cement",
    nameJp: "太平洋セメント",
    themes: ["Cement", "Construction", "Materials"],
    price: 3850,
    priceChange: 0.25,
    marketCap: "¥580B",
    revenue: "¥1.0T",
    per: "10.5",
    pbr: "0.85",
    founded: "1881",
    ceo: "Masafumi Fushihara",
    outlook: [
      {
        title: "Japan's Cement Giant:",
        content: "Taiheiyo Cement leads Japanese cement market—infrastructure projects, construction, and ready-mix concrete. Dominant domestic position provides pricing stability."
      },
      {
        title: "US West Coast Presence:",
        content: "Operations in California and other western states serve growing US construction markets. Geographic diversification reduces Japan dependency."
      },
      {
        title: "Resource Recycling:",
        content: "Cement kilns process industrial waste—turning environmental liability into fuel cost savings. This recycling capability creates customer relationships."
      },
      {
        title: "Low-Carbon Cement:",
        content: "Investment in carbon capture and low-carbon cement addresses climate concerns. Cement industry faces pressure to decarbonize."
      },
      {
        title: "Key Risks:",
        content: "Cement demand declining with Japan infrastructure maturity. Carbon-intensive production faces ESG pressure. Construction cycles create demand volatility."
      }
    ]
  },
  "5214": {
    code: "5214 JP",
    name: "Nippon Electric Glass",
    nameJp: "日本電気硝子",
    themes: ["Glass", "Display", "Electronics"],
    price: 2850,
    priceChange: 0.55,
    marketCap: "¥280B",
    revenue: "¥320B",
    per: "12.5",
    pbr: "0.65",
    founded: "1949",
    ceo: "Motoharu Matsumoto",
    outlook: [
      {
        title: "Display Glass Specialist:",
        content: "NEG produces glass substrates for LCD and OLED displays—serving major panel manufacturers in Korea, China, and Taiwan. Technology partnerships with display makers drive specifications."
      },
      {
        title: "Glass Fiber Leadership:",
        content: "Glass fiber for electronics (PCB substrates) and industrial applications provides diversification. 5G and data center growth drives high-frequency material demand."
      },
      {
        title: "Optical and Specialty Glass:",
        content: "Optical glass, glass tubes, and specialty products serve niche applications with better margins than commodity display glass."
      },
      {
        title: "Manufacturing Excellence:",
        content: "Proprietary float glass and fusion draw technology create quality advantages. Manufacturing know-how is key competitive moat."
      },
      {
        title: "Key Risks:",
        content: "Display glass faces oversupply and Chinese competition. LCD demand maturity limits growth. Trading at 0.65x book reflects industry challenges."
      }
    ]
  },
  "5301": {
    code: "5301 JP",
    name: "Tokai Carbon",
    nameJp: "東海カーボン",
    themes: ["Carbon", "Materials", "Industrial"],
    price: 950,
    priceChange: 0.45,
    marketCap: "¥200B",
    revenue: "¥380B",
    per: "10.5",
    pbr: "0.75",
    founded: "1918",
    ceo: "Hajime Nagasaka",
    outlook: [
      {
        title: "Graphite Electrode Producer:",
        content: "Tokai Carbon produces graphite electrodes for electric arc furnace steelmaking—essential consumable for steel production via recycling scrap."
      },
      {
        title: "Carbon Black Global:",
        content: "Carbon black for tires and industrial rubber products serves global tire makers. Acquisitions created top-4 global market position."
      },
      {
        title: "Fine Carbon Products:",
        content: "Specialty carbon materials for semiconductors, solar, and industrial applications command premium pricing."
      },
      {
        title: "Friction Materials:",
        content: "Brake pads and friction materials for automotive applications leverage carbon expertise."
      },
      {
        title: "Key Risks:",
        content: "Graphite electrode prices highly cyclical with steel production. Carbon black commoditizing with Asian competition. Energy costs significantly impact profitability."
      }
    ]
  },
  "5332": {
    code: "5332 JP",
    name: "TOTO",
    nameJp: "TOTO",
    themes: ["Housing", "Sanitary Ware", "Consumer"],
    price: 4250,
    priceChange: 0.35,
    marketCap: "¥780B",
    revenue: "¥740B",
    per: "22.5",
    pbr: "2.15",
    founded: "1917",
    ceo: "Madoka Kitamura",
    outlook: [
      {
        title: "Washlet Global Pioneer:",
        content: "TOTO invented the Washlet bidet toilet seat—now ubiquitous in Japan and growing globally. Premium hygiene positioning differentiates from commodity sanitary ware."
      },
      {
        title: "Japan Renovation Demand:",
        content: "Aging Japanese housing stock requires bathroom renovation—TOTO's premium products capture this replacement demand. Demographics drive renovation cycle."
      },
      {
        title: "China Growth Opportunity:",
        content: "Rising Chinese living standards create demand for premium bathroom products. TOTO's brand recognition among affluent Chinese consumers is strong."
      },
      {
        title: "US Market Expansion:",
        content: "Washlet adoption in US growing from luxury hotels to residential. Cultural shift toward bidets post-COVID accelerated awareness."
      },
      {
        title: "Key Risks:",
        content: "Housing market cycles impact new construction demand. China real estate weakness affects near-term growth. Premium positioning vulnerable to economic downturns."
      }
    ]
  },
  "5333": {
    code: "5333 JP",
    name: "NGK Insulators",
    nameJp: "日本ガイシ",
    themes: ["Ceramics", "Environment", "Electronics"],
    price: 1650,
    priceChange: 0.65,
    marketCap: "¥520B",
    revenue: "¥580B",
    per: "14.5",
    pbr: "1.15",
    founded: "1919",
    ceo: "Shigeru Kobayashi",
    outlook: [
      {
        title: "NAS Battery Innovation:",
        content: "NGK's sodium-sulfur (NAS) batteries provide grid-scale energy storage—essential for renewable energy integration. Unique technology positions NGK for energy transition."
      },
      {
        title: "Automotive Ceramics:",
        content: "Ceramic substrates for catalytic converters and diesel particulate filters serve global automakers. Emissions regulations drive demand."
      },
      {
        title: "Semiconductor Equipment Parts:",
        content: "Ceramic components for semiconductor manufacturing equipment benefit from chip industry growth. High-purity ceramics command premium pricing."
      },
      {
        title: "Insulators Heritage:",
        content: "Power transmission insulators remain core business—essential infrastructure components for electrical grids worldwide."
      },
      {
        title: "Key Risks:",
        content: "NAS battery commercialization slower than hoped—competition from lithium-ion intense. Automotive ceramics face EV transition uncertainty. Capital intensive manufacturing."
      }
    ]
  },
  "5406": {
    code: "5406 JP",
    name: "Kobe Steel",
    nameJp: "神戸製鋼所",
    themes: ["Steel", "Aluminum", "Machinery"],
    price: 1550,
    priceChange: 0.35,
    marketCap: "¥580B",
    revenue: "¥2.5T",
    per: "7.5",
    pbr: "0.55",
    founded: "1905",
    ceo: "Mitsugu Yamaguchi",
    outlook: [
      {
        title: "Diversified Metals Producer:",
        content: "Kobe Steel uniquely combines steel, aluminum, and copper production—diversification unusual among integrated steelmakers. Each metal serves distinct customer bases."
      },
      {
        title: "Aluminum for Automotive:",
        content: "Automotive aluminum body panels and components serve lightweighting demand. EV transition increases aluminum content per vehicle."
      },
      {
        title: "Machinery Business:",
        content: "Compressors, excavators, and industrial machinery provide non-materials diversification. These products serve stable industrial demand."
      },
      {
        title: "Quality Scandal Recovery:",
        content: "2017 data falsification scandal damaged reputation severely. Governance reforms and customer relationship rebuilding continue."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.55x book reflects lingering quality concerns and steel industry challenges. Three-business model creates complexity. Energy costs impact all segments."
      }
    ]
  },
  "3436": {
    code: "3436 JP",
    name: "SUMCO",
    nameJp: "SUMCO",
    themes: ["Semiconductor", "Silicon Wafers", "Technology"],
    price: 1450,
    priceChange: 1.85,
    marketCap: "¥510B",
    revenue: "¥420B",
    per: "12.5",
    pbr: "1.25",
    founded: "1999",
    ceo: "Mayuki Hashimoto",
    outlook: [
      {
        title: "Silicon Wafer Duopoly:",
        content: "SUMCO and Shin-Etsu control 60% of global silicon wafer market—the foundation material for all semiconductors. This duopoly creates pricing discipline."
      },
      {
        title: "300mm Wafer Focus:",
        content: "Advanced 300mm wafers for leading-edge chips are SUMCO's strength. AI chip demand drives 300mm wafer growth structurally."
      },
      {
        title: "Capacity Expansion:",
        content: "SUMCO is expanding capacity with customer prepayments securing demand. Long-term agreements provide revenue visibility."
      },
      {
        title: "Technology Leadership:",
        content: "Wafer flatness and purity requirements intensify with each chip generation. SUMCO's technology capabilities meet cutting-edge specifications."
      },
      {
        title: "Key Risks:",
        content: "Semiconductor cycles create demand volatility. Capacity additions could pressure pricing. Heavy capital requirements limit returns."
      }
    ]
  },
  "5706": {
    code: "5706 JP",
    name: "Mitsui Mining & Smelting",
    nameJp: "三井金属鉱業",
    themes: ["Materials", "Electronics", "Mining"],
    price: 4150,
    priceChange: 0.75,
    marketCap: "¥240B",
    revenue: "¥660B",
    per: "10.5",
    pbr: "0.95",
    founded: "1950",
    ceo: "Keiji Nishida",
    outlook: [
      {
        title: "Copper Foil for Electronics:",
        content: "Mitsui Kinzoku produces copper foil for printed circuit boards and lithium-ion batteries—essential materials for electronics and EVs."
      },
      {
        title: "Semiconductor Packaging Materials:",
        content: "Advanced packaging materials serve semiconductor industry growth. Technology sophistication commands premium pricing."
      },
      {
        title: "Auto Catalysts:",
        content: "Catalytic converter components serve global automakers. Emissions regulations ensure demand despite EV transition."
      },
      {
        title: "Zinc and Mining:",
        content: "Zinc mining and smelting operations provide metals exposure. Resource business creates commodity cycle sensitivity."
      },
      {
        title: "Key Risks:",
        content: "Copper and zinc prices create earnings volatility. Electronics materials face cyclicality with semiconductor industry. Competition in battery materials intensifying."
      }
    ]
  },
  "5707": {
    code: "5707 JP",
    name: "Toho Zinc",
    nameJp: "東邦亜鉛",
    themes: ["Mining", "Zinc", "Lead"],
    price: 3250,
    priceChange: -0.45,
    marketCap: "¥65B",
    revenue: "¥180B",
    per: "8.5",
    pbr: "0.55",
    founded: "1937",
    ceo: "Takashi Nakahara",
    outlook: [
      {
        title: "Zinc Smelting Operations:",
        content: "Toho Zinc smelts zinc and lead concentrates—essential metals for galvanizing steel and batteries. Integrated smelting provides processing margins."
      },
      {
        title: "Recycling Focus:",
        content: "Electric arc furnace dust recycling recovers zinc from steelmaking waste—circular economy business growing with sustainability focus."
      },
      {
        title: "Indium Production:",
        content: "Indium byproduct from zinc production serves display and semiconductor applications. Specialty metals provide margin enhancement."
      },
      {
        title: "Stable Industrial Demand:",
        content: "Galvanized steel for construction and automotive ensures steady zinc demand. Infrastructure maintenance creates replacement demand."
      },
      {
        title: "Key Risks:",
        content: "Zinc and lead prices directly impact profitability. Small scale limits competitive positioning. Environmental liabilities from mining heritage."
      }
    ]
  },
  "5711": {
    code: "5711 JP",
    name: "Mitsubishi Materials",
    nameJp: "三菱マテリアル",
    themes: ["Materials", "Mining", "Cement"],
    price: 2350,
    priceChange: 0.45,
    marketCap: "¥310B",
    revenue: "¥1.8T",
    per: "10.5",
    pbr: "0.55",
    founded: "1950",
    ceo: "Naoki Ono",
    outlook: [
      {
        title: "Copper and Precious Metals:",
        content: "Mitsubishi Materials operates copper smelters and refines precious metals—gold and silver recycling from electronic scrap is growing business."
      },
      {
        title: "Cutting Tools Precision:",
        content: "Carbide cutting tools for machining serve automotive and industrial customers. Technology differentiation enables premium pricing."
      },
      {
        title: "Electronic Materials:",
        content: "Copper and silicon products for electronics leverage materials expertise for technology applications."
      },
      {
        title: "Cement JV:",
        content: "Mitsubishi UBE Cement joint venture provides building materials exposure. Cement operations contribute steady earnings."
      },
      {
        title: "Key Risks:",
        content: "Copper price volatility drives earnings swings. Conglomerate structure creates complexity. Trading at 0.55x book reflects historical underperformance."
      }
    ]
  },
  "5714": {
    code: "5714 JP",
    name: "Dowa Holdings",
    nameJp: "DOWAホールディングス",
    themes: ["Metals", "Recycling", "Environment"],
    price: 4850,
    priceChange: 0.65,
    marketCap: "¥320B",
    revenue: "¥730B",
    per: "10.5",
    pbr: "0.95",
    founded: "1884",
    ceo: "Akira Sekiguchi",
    outlook: [
      {
        title: "E-Scrap Recycling Leader:",
        content: "Dowa leads electronic scrap recycling—recovering gold, silver, copper, and rare metals from circuit boards and electronic waste. Urban mining grows with sustainability focus."
      },
      {
        title: "Precious Metals Recovery:",
        content: "Sophisticated smelting recovers precious metals from complex e-waste streams. Technology expertise creates competitive moat."
      },
      {
        title: "Environmental Services:",
        content: "Hazardous waste treatment and soil remediation address environmental liabilities. Regulatory requirements drive demand."
      },
      {
        title: "Semiconductor Materials:",
        content: "High-purity metals and compounds for semiconductor manufacturing serve growing chip industry."
      },
      {
        title: "Key Risks:",
        content: "Metal prices create earnings volatility. E-waste collection competition intensifying. Environmental services face economic cycle sensitivity."
      }
    ]
  },
  "5801": {
    code: "5801 JP",
    name: "Furukawa Electric",
    nameJp: "古河電気工業",
    themes: ["Cables", "Electronics", "Automotive"],
    price: 2950,
    priceChange: 0.55,
    marketCap: "¥210B",
    revenue: "¥1.1T",
    per: "12.5",
    pbr: "0.75",
    founded: "1884",
    ceo: "Keiichi Kobayashi",
    outlook: [
      {
        title: "Optical Fiber Pioneer:",
        content: "Furukawa pioneered optical fiber in Japan—serving telecommunications and data center connectivity needs. 5G and AI data center buildouts drive demand."
      },
      {
        title: "Automotive Systems:",
        content: "Wire harnesses and automotive electronics serve global OEMs. EV transition increases electrical content per vehicle."
      },
      {
        title: "FITEL Optical Products:",
        content: "Optical amplifiers, wavelength selective switches, and telecom components serve network equipment makers."
      },
      {
        title: "Functional Products:",
        content: "Heat pipes, thermal management, and electronics materials diversify from cables."
      },
      {
        title: "Key Risks:",
        content: "Optical fiber faces capacity oversupply periods. Automotive wire harness commoditizing. Copper price impacts cable profitability."
      }
    ]
  },
  "5803": {
    code: "5803 JP",
    name: "Fujikura",
    nameJp: "フジクラ",
    themes: ["Cables", "Electronics", "Telecommunications"],
    price: 4950,
    priceChange: 1.25,
    marketCap: "¥1.5T",
    revenue: "¥860B",
    per: "18.5",
    pbr: "3.45",
    founded: "1885",
    ceo: "Naofumi Okamoto",
    outlook: [
      {
        title: "Data Center Connectivity Boom:",
        content: "Fujikura's optical cables, connectors, and components serve hyperscale data center buildouts. AI compute expansion drives extraordinary demand growth."
      },
      {
        title: "FPC (Flexible Printed Circuit):",
        content: "Flexible circuits for smartphones, wearables, and automotive serve major technology customers. Miniaturization trends favor Fujikura's capabilities."
      },
      {
        title: "Automotive Wire Harness:",
        content: "Wire harnesses for vehicles serve Japanese and global automakers. EV transition creates new product opportunities."
      },
      {
        title: "Energy and Infrastructure:",
        content: "Power cables and overhead transmission lines serve utility customers. Grid modernization supports steady demand."
      },
      {
        title: "Key Risks:",
        content: "Data center investment cycles create volatility. Smartphone FPC faces customer concentration risk. Premium valuation requires sustained growth."
      }
    ]
  },
  "5901": {
    code: "5901 JP",
    name: "Toyo Seikan",
    nameJp: "東洋製罐グループホールディングス",
    themes: ["Packaging", "Steel Cans", "Consumer"],
    price: 1850,
    priceChange: 0.25,
    marketCap: "¥330B",
    revenue: "¥960B",
    per: "10.5",
    pbr: "0.45",
    founded: "1917",
    ceo: "Takao Shimizu",
    outlook: [
      {
        title: "Japan Packaging Leader:",
        content: "Toyo Seikan dominates Japanese metal can and packaging—beverage cans, food cans, and PET bottles. Integrated packaging solutions serve major food and beverage companies."
      },
      {
        title: "Beverage Can Stability:",
        content: "Aluminum beverage cans provide stable demand—consumption patterns are resilient and customers are concentrated."
      },
      {
        title: "Functional Packaging Innovation:",
        content: "Easy-open ends, resealable cans, and specialty packaging create differentiation beyond commodity cans."
      },
      {
        title: "Sustainability Focus:",
        content: "Lightweighting, recycled content, and circular economy initiatives address customer sustainability goals."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.45x book reflects mature industry challenges. Aluminum and steel costs pressure margins. Plastic packaging faces environmental concerns."
      }
    ]
  },
  "6103": {
    code: "6103 JP",
    name: "Okuma",
    nameJp: "オークマ",
    themes: ["Machine Tools", "Manufacturing", "Industrial"],
    price: 5850,
    priceChange: 0.75,
    marketCap: "¥320B",
    revenue: "¥250B",
    per: "14.5",
    pbr: "1.35",
    founded: "1898",
    ceo: "Yoshimaro Hanaki",
    outlook: [
      {
        title: "Machine Tool Excellence:",
        content: "Okuma produces CNC lathes and machining centers—essential equipment for precision manufacturing. Japanese quality reputation commands premium pricing."
      },
      {
        title: "Aerospace and EV Applications:",
        content: "Complex aerospace components and EV parts require sophisticated machine tools. Industry transitions create equipment upgrade demand."
      },
      {
        title: "Domestic Manufacturing:",
        content: "Unlike competitors offshoring production, Okuma manufactures in Japan—quality control and responsiveness justify cost premium."
      },
      {
        title: "Smart Factory Solutions:",
        content: "IoT-enabled machines and factory automation software create recurring revenue opportunities beyond equipment sales."
      },
      {
        title: "Key Risks:",
        content: "Machine tool demand highly cyclical with industrial investment. China competition intensifying in mid-range segments. Currency impacts international competitiveness."
      }
    ]
  },
  "6113": {
    code: "6113 JP",
    name: "Amada",
    nameJp: "アマダ",
    themes: ["Machine Tools", "Metal Processing", "Industrial"],
    price: 1450,
    priceChange: 0.55,
    marketCap: "¥520B",
    revenue: "¥380B",
    per: "14.5",
    pbr: "0.95",
    founded: "1946",
    ceo: "Tsutomu Isobe",
    outlook: [
      {
        title: "Sheet Metal Machinery Leader:",
        content: "Amada dominates sheet metal fabrication equipment—laser cutters, press brakes, and punch presses. Global #1 position creates scale advantages."
      },
      {
        title: "Fiber Laser Technology:",
        content: "Transition from CO2 to fiber lasers improves speed and energy efficiency. Technology leadership drives replacement demand."
      },
      {
        title: "Automation Integration:",
        content: "Automated material handling and robot integration create turnkey fabrication systems. Solution selling improves customer stickiness."
      },
      {
        title: "Service and Parts Revenue:",
        content: "Large installed base generates recurring service, parts, and consumables revenue. Aftermarket business provides stability through equipment cycles."
      },
      {
        title: "Key Risks:",
        content: "Capital equipment demand cyclical with industrial investment. China competition growing in lower-end segments. Trade tensions could impact global sales."
      }
    ]
  },
  "6301": {
    code: "6301 JP",
    name: "Komatsu",
    nameJp: "コマツ",
    themes: ["Construction", "Mining", "Heavy Equipment"],
    price: 4250,
    priceChange: 0.45,
    marketCap: "¥4.1T",
    revenue: "¥3.9T",
    per: "12.5",
    pbr: "1.45",
    founded: "1921",
    ceo: "Hiroyuki Ogawa",
    outlook: [
      {
        title: "Global #2 Construction Equipment:",
        content: "Komatsu ranks #2 globally behind Caterpillar—excavators, bulldozers, and wheel loaders serve construction and mining worldwide."
      },
      {
        title: "Mining Equipment Strength:",
        content: "Ultra-large mining trucks and equipment serve global mining companies. Commodity supercycles drive mining equipment investment."
      },
      {
        title: "KOMTRAX IoT Leadership:",
        content: "Remote monitoring system tracks 600,000+ machines globally—providing maintenance insights and enabling new service business models."
      },
      {
        title: "Electrification Progress:",
        content: "Electric and hybrid construction equipment in development. Mining electrification partnerships address customer decarbonization needs."
      },
      {
        title: "Key Risks:",
        content: "Construction and mining cycles create demand volatility. Currency translation impacts international results. China market faces local competition and policy risks."
      }
    ]
  },
  "6302": {
    code: "6302 JP",
    name: "Sumitomo Heavy Industries",
    nameJp: "住友重機械工業",
    themes: ["Industrial Machinery", "Plastics", "Defense"],
    price: 3650,
    priceChange: 0.55,
    marketCap: "¥560B",
    revenue: "¥1.0T",
    per: "12.5",
    pbr: "1.05",
    founded: "1888",
    ceo: "Shinji Shimomura",
    outlook: [
      {
        title: "Precision Reduction Gears:",
        content: "Cyclo and Harmonic Drive precision gears serve robot and automation applications. Market leadership in critical motion components."
      },
      {
        title: "Injection Molding Machines:",
        content: "Plastic injection molding machines serve global manufacturing. All-electric machines offer energy efficiency advantages."
      },
      {
        title: "Defense Equipment:",
        content: "Naval vessels and defense systems serve Japan Self-Defense Forces. Defense budget increases drive order growth."
      },
      {
        title: "Ion Accelerators:",
        content: "Particle accelerators for semiconductor ion implantation serve chip manufacturing. Technology intensity commands margins."
      },
      {
        title: "Key Risks:",
        content: "Industrial machinery demand cyclical. Defense business faces political constraints. Conglomerate structure creates complexity."
      }
    ]
  },
  "6305": {
    code: "6305 JP",
    name: "Hitachi Construction Machinery",
    nameJp: "日立建機",
    themes: ["Construction", "Mining", "Heavy Equipment"],
    price: 3450,
    priceChange: 0.65,
    marketCap: "¥740B",
    revenue: "¥1.4T",
    per: "10.5",
    pbr: "1.15",
    founded: "1970",
    ceo: "Kotaro Hirano",
    outlook: [
      {
        title: "Excavator Specialist:",
        content: "Hitachi Construction Machinery focuses on excavators—#3 globally behind Caterpillar and Komatsu. Excavators are highest-volume construction equipment."
      },
      {
        title: "Mining Dump Trucks:",
        content: "Ultra-large dump trucks for mining serve global mining companies. Mining equipment carries higher margins than construction."
      },
      {
        title: "Post-Hitachi Independence:",
        content: "Sale of majority stake by Hitachi provides strategic independence. New ownership (including ITOCHU) brings different capabilities."
      },
      {
        title: "Parts and Service Growth:",
        content: "Lifecycle services for installed base create recurring revenue. Customer support improves loyalty and visibility."
      },
      {
        title: "Key Risks:",
        content: "Construction and mining cycles create volatility. China market highly competitive. Independence transition creates near-term uncertainty."
      }
    ]
  },
  "6326": {
    code: "6326 JP",
    name: "Kubota",
    nameJp: "クボタ",
    themes: ["Agriculture", "Construction", "Machinery"],
    price: 1850,
    priceChange: 0.35,
    marketCap: "¥2.2T",
    revenue: "¥3.0T",
    per: "12.5",
    pbr: "1.35",
    founded: "1890",
    ceo: "Yuichi Kitao",
    outlook: [
      {
        title: "Compact Tractor Leader:",
        content: "Kubota dominates compact tractors—essential for small farms, landscaping, and hobby farmers. North American rural lifestyle market drives demand."
      },
      {
        title: "Rice Farming Equipment:",
        content: "Leading position in Asian rice farming equipment serves structural food security needs. Japanese technology advantages over local competitors."
      },
      {
        title: "Mini-Excavator Growth:",
        content: "Compact construction equipment expanding beyond agricultural roots. Urban construction and tight spaces favor smaller machines."
      },
      {
        title: "Water Infrastructure:",
        content: "Pipes, pumps, and water treatment equipment serve global water infrastructure needs. Aging systems require replacement and upgrade."
      },
      {
        title: "Key Risks:",
        content: "Agricultural equipment demand cyclical with commodity prices and farm income. Currency impacts international competitiveness. North America residential construction exposure."
      }
    ]
  },
  "6361": {
    code: "6361 JP",
    name: "Ebara",
    nameJp: "荏原製作所",
    themes: ["Pumps", "Semiconductor", "Infrastructure"],
    price: 2150,
    priceChange: 0.85,
    marketCap: "¥990B",
    revenue: "¥780B",
    per: "18.5",
    pbr: "2.45",
    founded: "1912",
    ceo: "Toichi Maeda",
    outlook: [
      {
        title: "CMP Equipment for Semiconductors:",
        content: "Ebara's Chemical Mechanical Polishing (CMP) equipment is essential for semiconductor manufacturing—planarizing wafers for advanced chips. AI chip demand drives growth."
      },
      {
        title: "Vacuum Pumps for Fabs:",
        content: "Dry vacuum pumps serve semiconductor fab process equipment. Each new fab requires hundreds of pumps."
      },
      {
        title: "Industrial Pumps:",
        content: "Pumps for water, wastewater, and industrial processes serve infrastructure needs globally. Aging systems drive replacement demand."
      },
      {
        title: "Chillers and Cooling:",
        content: "Industrial chillers serve data centers and manufacturing. AI compute growth drives cooling demand."
      },
      {
        title: "Key Risks:",
        content: "Semiconductor equipment cycles create volatility. Infrastructure business more stable but lower growth. Competition from global pump makers."
      }
    ]
  },
  "2768": {
    code: "2768 JP",
    name: "Sojitz",
    nameJp: "双日",
    themes: ["Trading", "Infrastructure", "Commodities"],
    price: 3250,
    priceChange: 0.55,
    marketCap: "¥730B",
    revenue: "¥2.6T",
    per: "7.5",
    pbr: "0.95",
    founded: "2003",
    ceo: "Masayoshi Fujimoto",
    outlook: [
      {
        title: "Smallest Major Trading House:",
        content: "Sojitz is Japan's smallest of the major sogo shosha—but still a diversified trading and investment company spanning resources, infrastructure, and consumer goods."
      },
      {
        title: "Aerospace Focus:",
        content: "Sojitz is Boeing's exclusive distributor in Japan—aircraft trading and parts supply provide stable revenue stream. Defense agency relationships also strong."
      },
      {
        title: "Coal and Resources:",
        content: "Australian coal investments contribute significantly to earnings. Energy transition creates long-term uncertainty but near-term profitability."
      },
      {
        title: "Infrastructure Investments:",
        content: "Power plants, renewable energy, and infrastructure projects across Asia provide stable returns and growth opportunities."
      },
      {
        title: "Key Risks:",
        content: "Smaller scale limits competitive positioning versus larger trading houses. Coal exposure creates ESG concerns. Resource price volatility impacts earnings."
      }
    ]
  },
  "8002": {
    code: "8002 JP",
    name: "Marubeni",
    nameJp: "丸紅",
    themes: ["Trading", "Agriculture", "Infrastructure"],
    price: 2250,
    priceChange: 0.65,
    marketCap: "¥3.9T",
    revenue: "¥9.2T",
    per: "8.5",
    pbr: "1.25",
    founded: "1858",
    ceo: "Masumi Kakinoki",
    outlook: [
      {
        title: "Grain Trading Powerhouse:",
        content: "Marubeni leads Japanese trading houses in agricultural commodities—grain origination, trading, and distribution. Food security importance elevates this position."
      },
      {
        title: "Power Generation Portfolio:",
        content: "Global power generation investments span thermal, renewable, and emerging technologies. Net generating capacity exceeds 12GW worldwide."
      },
      {
        title: "US Grain Assets:",
        content: "Gavilon acquisition created major US grain infrastructure—elevators, logistics, and trading. North American food supply chain integration."
      },
      {
        title: "Buffett Endorsement:",
        content: "Berkshire Hathaway's investment in Japanese trading houses includes Marubeni—validating the business model for global investors."
      },
      {
        title: "Key Risks:",
        content: "Agricultural commodity volatility impacts trading results. Power generation faces energy transition pressures. Gavilon integration faced challenges initially."
      }
    ]
  },
  "8015": {
    code: "8015 JP",
    name: "Toyota Tsusho",
    nameJp: "豊田通商",
    themes: ["Trading", "Automotive", "Africa"],
    price: 2650,
    priceChange: 0.45,
    marketCap: "¥2.9T",
    revenue: "¥9.8T",
    per: "9.5",
    pbr: "1.35",
    founded: "1948",
    ceo: "Ichiro Kashitani",
    outlook: [
      {
        title: "Toyota Group Integration:",
        content: "As Toyota's trading arm, Toyota Tsusho handles materials, parts, and logistics for the world's largest automaker. This captive relationship provides stable foundation."
      },
      {
        title: "Africa Business Pioneer:",
        content: "Toyota Tsusho leads Japanese trading houses in Africa—automotive distribution, infrastructure, and consumer goods across 54 countries. First-mover advantage in growing continent."
      },
      {
        title: "Mobility Transformation:",
        content: "EV materials (lithium, rare earths), renewable energy, and next-generation mobility services align with Toyota Group's transformation."
      },
      {
        title: "Renewable Energy Trading:",
        content: "Wind, solar, and battery storage investments position Toyota Tsusho for energy transition alongside automotive evolution."
      },
      {
        title: "Key Risks:",
        content: "Toyota dependency creates concentration risk. Africa operations face political and currency volatility. Automotive industry disruption impacts core business."
      }
    ]
  },
  "8053": {
    code: "8053 JP",
    name: "Sumitomo Corporation",
    nameJp: "住友商事",
    themes: ["Trading", "Media", "Infrastructure"],
    price: 3450,
    priceChange: 0.55,
    marketCap: "¥4.3T",
    revenue: "¥6.8T",
    per: "8.5",
    pbr: "1.05",
    founded: "1919",
    ceo: "Shingo Ueno",
    outlook: [
      {
        title: "Media and Digital Focus:",
        content: "Sumitomo Corporation owns J:COM (Japan's largest cable operator) and SCSK (IT services)—unusual media/tech focus among trading houses creates diversification."
      },
      {
        title: "Tubular Products Strength:",
        content: "Oil country tubular goods (OCTG) for drilling serve global energy customers. Technology leadership in specialty steel pipes."
      },
      {
        title: "Real Estate Development:",
        content: "Domestic and international real estate investments provide stable returns. Summit supermarket chain adds retail exposure."
      },
      {
        title: "Balanced Portfolio:",
        content: "Less resource-heavy than Mitsubishi/Mitsui, Sumitomo Corporation offers smoother earnings through commodity cycles."
      },
      {
        title: "Key Risks:",
        content: "OCTG demand tied to oil drilling activity. Media assets face streaming disruption. Smaller resource exposure limits upside in commodity rallies."
      }
    ]
  },
  "1721": {
    code: "1721 JP",
    name: "Comsys Holdings",
    nameJp: "コムシスホールディングス",
    themes: ["Construction", "Telecommunications", "Infrastructure"],
    price: 2850,
    priceChange: 0.35,
    marketCap: "¥310B",
    revenue: "¥620B",
    per: "12.5",
    pbr: "1.15",
    founded: "2003",
    ceo: "Toru Yamamoto",
    outlook: [
      {
        title: "Telecom Infrastructure Specialist:",
        content: "Comsys leads telecom infrastructure construction—NTT's primary contractor for network buildouts. 5G deployment and fiber expansion drive demand."
      },
      {
        title: "NTT Relationship:",
        content: "Deep NTT relationship (NTT is major shareholder) provides stable order flow. Network maintenance creates recurring revenue."
      },
      {
        title: "Data Center Construction:",
        content: "Hyperscale data center buildouts require specialized construction capabilities. AI compute expansion drives facility construction demand."
      },
      {
        title: "Renewable Energy Installation:",
        content: "Solar and wind farm construction leverages infrastructure expertise. Energy transition creates new growth avenue."
      },
      {
        title: "Key Risks:",
        content: "NTT dependency creates concentration risk. 5G deployment pace may slow after initial buildout. Labor shortages impact construction industry broadly."
      }
    ]
  },
  "1801": {
    code: "1801 JP",
    name: "Taisei Corporation",
    nameJp: "大成建設",
    themes: ["Construction", "Infrastructure", "Real Estate"],
    price: 5850,
    priceChange: 0.45,
    marketCap: "¥1.3T",
    revenue: "¥1.8T",
    per: "12.5",
    pbr: "1.05",
    founded: "1873",
    ceo: "Yoshiro Aikawa",
    outlook: [
      {
        title: "Super General Contractor:",
        content: "Taisei is one of Japan's 'Big 5' general contractors—150-year heritage building major infrastructure, commercial, and residential projects."
      },
      {
        title: "Dam and Tunnel Expertise:",
        content: "Taisei leads in dam construction and tunnel boring—critical infrastructure expertise few competitors can match."
      },
      {
        title: "Urban Redevelopment:",
        content: "Tokyo redevelopment projects (Shibuya, Nihonbashi) create long-term construction pipelines. Urban renewal drives demand."
      },
      {
        title: "Real Estate Holdings:",
        content: "Developed properties provide stable rental income. Real estate portfolio creates value beyond construction contracting."
      },
      {
        title: "Key Risks:",
        content: "Construction labor shortages intensifying in Japan. Large project execution risk inherent. Olympics and Expo completion reduces near-term pipeline."
      }
    ]
  },
  "1802": {
    code: "1802 JP",
    name: "Obayashi Corporation",
    nameJp: "大林組",
    themes: ["Construction", "Infrastructure", "Technology"],
    price: 1850,
    priceChange: 0.35,
    marketCap: "¥1.3T",
    revenue: "¥2.1T",
    per: "11.5",
    pbr: "1.15",
    founded: "1892",
    ceo: "Kenji Hasuwa",
    outlook: [
      {
        title: "Technology-Forward Contractor:",
        content: "Obayashi invests heavily in construction technology—robotics, AI, and automated construction. Technology leadership differentiates from traditional contractors."
      },
      {
        title: "North American Presence:",
        content: "Significant US operations through Webcor and other subsidiaries. Geographic diversification reduces Japan dependency."
      },
      {
        title: "Renewable Energy Development:",
        content: "Wind and solar project development creates recurring revenue beyond one-time construction fees."
      },
      {
        title: "Space Elevator Vision:",
        content: "Long-term research on space elevator demonstrates innovation ambition—even if commercialization is decades away."
      },
      {
        title: "Key Risks:",
        content: "Construction margins pressured by labor and material costs. US operations face different competitive dynamics. Large project concentration creates lumpiness."
      }
    ]
  },
  "1803": {
    code: "1803 JP",
    name: "Shimizu Corporation",
    nameJp: "清水建設",
    themes: ["Construction", "Infrastructure", "Smart Cities"],
    price: 1050,
    priceChange: 0.25,
    marketCap: "¥820B",
    revenue: "¥1.9T",
    per: "10.5",
    pbr: "0.85",
    founded: "1804",
    ceo: "Kazuyuki Inoue",
    outlook: [
      {
        title: "220-Year Heritage:",
        content: "Shimizu is Japan's oldest major contractor—founded in 1804 during the Edo period. Heritage creates relationships and reputation advantages."
      },
      {
        title: "Smart Building Technology:",
        content: "Building automation, energy management, and smart city solutions leverage construction expertise for recurring technology services."
      },
      {
        title: "Data Center Construction:",
        content: "Hyperscale data center expertise serves cloud providers expanding in Japan. Specialized construction capabilities command premium pricing."
      },
      {
        title: "Lunar Construction Research:",
        content: "Space construction research for lunar habitats demonstrates long-term innovation thinking—technology development for future opportunities."
      },
      {
        title: "Key Risks:",
        content: "Trading below book value reflects industry challenges. Labor shortages intensifying. Large project delays can significantly impact results."
      }
    ]
  },
  "1808": {
    code: "1808 JP",
    name: "Haseko Corporation",
    nameJp: "長谷工コーポレーション",
    themes: ["Construction", "Housing", "Real Estate"],
    price: 1850,
    priceChange: 0.45,
    marketCap: "¥560B",
    revenue: "¥1.0T",
    per: "9.5",
    pbr: "1.15",
    founded: "1937",
    ceo: "Kazuo Ikeda",
    outlook: [
      {
        title: "Condominium Construction Leader:",
        content: "Haseko dominates Japanese condominium construction—building 1 in 6 condos nationwide. Specialization creates efficiency and expertise advantages."
      },
      {
        title: "Developer Partnerships:",
        content: "Long-term relationships with major developers (Mitsui Fudosan, Sumitomo Realty) provide stable order flow. Partnership model reduces marketing costs."
      },
      {
        title: "Renovation Business Growth:",
        content: "Aging condominium stock requires renovation—Haseko's building management and renovation services create recurring revenue."
      },
      {
        title: "Senior Living Development:",
        content: "Senior housing and assisted living development addresses aging population needs. Demographic trends support long-term demand."
      },
      {
        title: "Key Risks:",
        content: "Condominium market faces affordability constraints. Interest rate increases impact housing demand. Population decline affects long-term housing needs."
      }
    ]
  },
  "1812": {
    code: "1812 JP",
    name: "Kajima Corporation",
    nameJp: "鹿島建設",
    themes: ["Construction", "Infrastructure", "International"],
    price: 2650,
    priceChange: 0.55,
    marketCap: "¥1.4T",
    revenue: "¥2.4T",
    per: "11.5",
    pbr: "1.25",
    founded: "1840",
    ceo: "Yoshikazu Oshimi",
    outlook: [
      {
        title: "International Construction Pioneer:",
        content: "Kajima has the most international experience among Japanese contractors—projects across Asia, US, and Europe spanning decades."
      },
      {
        title: "US Real Estate Development:",
        content: "Kajima Development develops commercial properties in major US cities. Real estate holdings create recurring income beyond contracting."
      },
      {
        title: "Nuclear Decommissioning:",
        content: "Fukushima cleanup and nuclear facility decommissioning create multi-decade project pipeline. Specialized expertise commands premium pricing."
      },
      {
        title: "Dam and Infrastructure:",
        content: "Large-scale infrastructure including dams, bridges, and tunnels leverage Kajima's engineering capabilities."
      },
      {
        title: "Key Risks:",
        content: "International operations face currency and political risks. Nuclear projects carry regulatory complexity. Construction labor shortages affect all markets."
      }
    ]
  },
  "1925": {
    code: "1925 JP",
    name: "Daiwa House Industry",
    nameJp: "大和ハウス工業",
    themes: ["Housing", "Real Estate", "Logistics"],
    price: 4150,
    priceChange: 0.45,
    marketCap: "¥2.7T",
    revenue: "¥5.2T",
    per: "10.5",
    pbr: "1.15",
    founded: "1955",
    ceo: "Keiichi Yoshii",
    outlook: [
      {
        title: "Japan's Largest Homebuilder:",
        content: "Daiwa House is Japan's largest homebuilder by revenue—prefabricated houses, rental apartments, and commercial properties create diversified real estate platform."
      },
      {
        title: "Logistics Facility Development:",
        content: "E-commerce growth drives massive demand for logistics facilities. Daiwa House leads logistics warehouse development—D-Project facilities serve major retailers."
      },
      {
        title: "Commercial Development:",
        content: "Shopping centers, office buildings, and hotels diversify beyond residential. Commercial properties provide stable rental income."
      },
      {
        title: "International Expansion:",
        content: "US, Australia, and ASEAN operations provide geographic diversification. International housing markets offer growth absent in Japan."
      },
      {
        title: "Key Risks:",
        content: "Japan housing market faces demographic headwinds. Interest rate increases impact affordability. Construction quality issues damaged reputation previously."
      }
    ]
  },
  "1928": {
    code: "1928 JP",
    name: "Sekisui House",
    nameJp: "積水ハウス",
    themes: ["Housing", "Real Estate", "International"],
    price: 3450,
    priceChange: 0.35,
    marketCap: "¥2.3T",
    revenue: "¥3.1T",
    per: "11.5",
    pbr: "1.25",
    founded: "1960",
    ceo: "Yoshihiro Nakai",
    outlook: [
      {
        title: "Premium Housing Focus:",
        content: "Sekisui House focuses on premium custom housing—higher price points and margins than mass-market competitors. Quality reputation justifies premium."
      },
      {
        title: "US Housing Expansion:",
        content: "Significant US operations through acquisitions serve growing American housing market. Geographic diversification reduces Japan dependency."
      },
      {
        title: "Rental Housing Development:",
        content: "Sha Maison rental apartments provide stable income for owners and development fees for Sekisui. Asset management creates recurring revenue."
      },
      {
        title: "Net Zero Energy Houses:",
        content: "Environmental leadership with net-zero energy homes addresses sustainability demands. Green building differentiates in premium segment."
      },
      {
        title: "Key Risks:",
        content: "Japan housing starts declining structurally. Premium positioning vulnerable to economic downturns. US housing market cyclicality exposure."
      }
    ]
  },
  "1963": {
    code: "1963 JP",
    name: "JGC Holdings",
    nameJp: "日揮ホールディングス",
    themes: ["Engineering", "Energy", "Infrastructure"],
    price: 1350,
    priceChange: 0.65,
    marketCap: "¥350B",
    revenue: "¥780B",
    per: "12.5",
    pbr: "1.05",
    founded: "1928",
    ceo: "Tadashi Ishizuka",
    outlook: [
      {
        title: "LNG Plant Engineering Leader:",
        content: "JGC is global leader in LNG plant engineering—designing and constructing liquefaction facilities worldwide. Energy infrastructure expertise commands premium pricing."
      },
      {
        title: "Middle East Relationships:",
        content: "Decades-long relationships with Middle East oil companies provide ongoing project flow. Trust and track record create competitive advantage."
      },
      {
        title: "Energy Transition Projects:",
        content: "Hydrogen, ammonia, and carbon capture projects leverage engineering expertise for new energy technologies."
      },
      {
        title: "Life Sciences Expansion:",
        content: "Pharmaceutical plant engineering diversifies from energy. Healthcare facility expertise growing."
      },
      {
        title: "Key Risks:",
        content: "Large project concentration creates lumpiness. Energy transition could reduce fossil fuel project demand. Cost overruns on fixed-price contracts create risk."
      }
    ]
  },
  "5631": {
    code: "5631 JP",
    name: "Japan Steel Works",
    nameJp: "日本製鋼所",
    themes: ["Industrial", "Nuclear", "Plastics"],
    price: 4850,
    priceChange: 0.75,
    marketCap: "¥320B",
    revenue: "¥310B",
    per: "18.5",
    pbr: "1.65",
    founded: "1907",
    ceo: "Kenji Miyazaki",
    outlook: [
      {
        title: "Nuclear Vessel Monopoly:",
        content: "Japan Steel Works holds effective monopoly on large nuclear reactor pressure vessels—one of few companies globally capable of forging these critical components."
      },
      {
        title: "Nuclear Renaissance Beneficiary:",
        content: "Global nuclear power revival drives demand for reactor components. New plant construction and life extensions require JSW's capabilities."
      },
      {
        title: "Plastic Injection Molding Machines:",
        content: "Large injection molding machines serve automotive and industrial customers. Technology leadership in large-format machines."
      },
      {
        title: "Defense Applications:",
        content: "Artillery barrels and defense components serve Japan Self-Defense Forces. Defense spending increases benefit order flow."
      },
      {
        title: "Key Risks:",
        content: "Nuclear project timelines are long and uncertain. Defense business faces political constraints. Industrial machinery cyclical with capital spending."
      }
    ]
  },
  "6471": {
    code: "6471 JP",
    name: "NSK",
    nameJp: "日本精工",
    themes: ["Bearings", "Automotive", "Industrial"],
    price: 720,
    priceChange: 0.35,
    marketCap: "¥390B",
    revenue: "¥880B",
    per: "12.5",
    pbr: "0.75",
    founded: "1916",
    ceo: "Akitoshi Ichii",
    outlook: [
      {
        title: "Bearing Industry Leader:",
        content: "NSK is Japan's largest bearing manufacturer—serving automotive, industrial machinery, and precision equipment. Bearings enable motion in virtually every machine."
      },
      {
        title: "EV and Electrification:",
        content: "Electric vehicle motors require specialized bearings—NSK's technology addresses EV requirements for efficiency and durability."
      },
      {
        title: "Precision Steering Systems:",
        content: "Electric power steering systems serve global automakers. Integration of bearings and steering creates system solutions."
      },
      {
        title: "Industrial Machinery:",
        content: "Machine tool bearings, semiconductor equipment bearings, and industrial applications diversify from automotive."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.75x book reflects automotive industry challenges. Chinese bearing competition intensifying. Automotive production volatility impacts results."
      }
    ]
  },
  "6472": {
    code: "6472 JP",
    name: "NTN",
    nameJp: "NTN",
    themes: ["Bearings", "Automotive", "Wind Energy"],
    price: 280,
    priceChange: 0.25,
    marketCap: "¥150B",
    revenue: "¥780B",
    per: "—",
    pbr: "0.55",
    founded: "1918",
    ceo: "Eiichi Ukai",
    outlook: [
      {
        title: "Global Bearing Manufacturer:",
        content: "NTN competes with NSK and SKF in global bearing markets—automotive, industrial, and aerospace applications worldwide."
      },
      {
        title: "Wind Turbine Bearings:",
        content: "Large bearings for wind turbine main shafts serve renewable energy growth. Wind energy expansion drives specialty bearing demand."
      },
      {
        title: "Hub Unit Bearings:",
        content: "Automotive wheel hub bearings are core product—supplied to global automakers. EV transition creates new bearing requirements."
      },
      {
        title: "Restructuring Progress:",
        content: "Cost reduction and portfolio restructuring ongoing after challenging years. Profitability improvement is management priority."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.55x book reflects severe challenges. Automotive industry headwinds impact core business. Restructuring execution risk remains."
      }
    ]
  },
  "6473": {
    code: "6473 JP",
    name: "JTEKT",
    nameJp: "ジェイテクト",
    themes: ["Automotive", "Bearings", "Steering"],
    price: 1150,
    priceChange: 0.45,
    marketCap: "¥400B",
    revenue: "¥1.7T",
    per: "10.5",
    pbr: "0.55",
    founded: "2006",
    ceo: "Kazuhiro Sato",
    outlook: [
      {
        title: "Toyota Group Supplier:",
        content: "JTEKT is Toyota Group's steering and bearing supplier—combining former Koyo Seiko and Toyoda Machine Works. Toyota relationship provides stable demand."
      },
      {
        title: "Steering Systems Integration:",
        content: "Electric power steering systems integrate bearings and control electronics. System capability differentiates from component-only suppliers."
      },
      {
        title: "Machine Tools:",
        content: "Grinding machines and machining centers serve industrial customers. Machine tool expertise complements automotive business."
      },
      {
        title: "EV Drivetrain Components:",
        content: "Electric vehicle drivetrain bearings and components address growing EV market requirements."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.55x book reflects automotive supplier challenges. Toyota dependency creates concentration. Chinese supplier competition growing."
      }
    ]
  },
  "7004": {
    code: "7004 JP",
    name: "Hitachi Zosen",
    nameJp: "日立造船",
    themes: ["Environment", "Energy", "Industrial"],
    price: 950,
    priceChange: 0.55,
    marketCap: "¥160B",
    revenue: "¥560B",
    per: "12.5",
    pbr: "0.95",
    founded: "1881",
    ceo: "Takashi Tanisho",
    outlook: [
      {
        title: "Waste-to-Energy Leader:",
        content: "Hitachi Zosen leads waste incineration plant construction—converting garbage to electricity worldwide. Environmental regulations drive demand."
      },
      {
        title: "No Longer Shipbuilding:",
        content: "Despite the name, Hitachi Zosen exited shipbuilding decades ago. Environmental and industrial machinery now define the business."
      },
      {
        title: "Water Treatment:",
        content: "Desalination and water treatment plants serve Middle East and global customers. Water scarcity drives infrastructure investment."
      },
      {
        title: "Allstate Solutions:",
        content: "Solid-state battery development for EVs represents future growth opportunity. Technology investments position for electrification."
      },
      {
        title: "Key Risks:",
        content: "Large project concentration creates earnings lumpiness. International projects carry execution risk. Competition in environmental equipment intensifying."
      }
    ]
  },
  "7011": {
    code: "7011 JP",
    name: "Mitsubishi Heavy Industries",
    nameJp: "三菱重工業",
    themes: ["Defense", "Aerospace", "Energy"],
    price: 2350,
    priceChange: 0.75,
    marketCap: "¥7.9T",
    revenue: "¥4.7T",
    per: "28.5",
    pbr: "2.45",
    founded: "1884",
    ceo: "Seiji Izumisawa",
    outlook: [
      {
        title: "Japan's Defense Champion:",
        content: "MHI is Japan's largest defense contractor—fighter jets, submarines, missiles, and space launch vehicles. Defense budget surge directly benefits order flow."
      },
      {
        title: "Gas Turbine Power:",
        content: "GTCC (gas turbine combined cycle) power plants serve global utilities. Natural gas as transition fuel supports demand."
      },
      {
        title: "SpaceJet Lessons Learned:",
        content: "Regional jet program failure was costly but freed resources for defense and energy focus. Portfolio clarity improved."
      },
      {
        title: "Nuclear and Hydrogen:",
        content: "Nuclear power systems and hydrogen technology development position MHI for energy transition."
      },
      {
        title: "Key Risks:",
        content: "Premium valuation (28x) reflects defense optimism that may disappoint. Large project execution risk inherent. Commercial aerospace recovery uncertain."
      }
    ]
  },
  "7012": {
    code: "7012 JP",
    name: "Kawasaki Heavy Industries",
    nameJp: "川崎重工業",
    themes: ["Aerospace", "Motorcycles", "Energy"],
    price: 6850,
    priceChange: 0.85,
    marketCap: "¥1.1T",
    revenue: "¥1.8T",
    per: "18.5",
    pbr: "1.45",
    founded: "1896",
    ceo: "Yasuhiko Hashimoto",
    outlook: [
      {
        title: "Motorcycle Heritage:",
        content: "Kawasaki motorcycles (Ninja, Z series) serve enthusiasts worldwide. Premium sport bikes command brand loyalty and margins."
      },
      {
        title: "Aerospace Components:",
        content: "Boeing and Airbus component supply provides aerospace exposure. Commercial aviation recovery supports demand."
      },
      {
        title: "Hydrogen Pioneer:",
        content: "Kawasaki leads hydrogen supply chain development—liquefaction, transport ships, and handling systems. Hydrogen economy could be transformative."
      },
      {
        title: "Defense Systems:",
        content: "Submarines, helicopters, and defense systems serve JSDF. Defense budget increases drive order growth."
      },
      {
        title: "Key Risks:",
        content: "Hydrogen commercialization timeline uncertain. Motorcycle market faces demographic headwinds. Conglomerate complexity makes analysis difficult."
      }
    ]
  },
  "9201": {
    code: "9201 JP",
    name: "Japan Airlines",
    nameJp: "日本航空",
    themes: ["Airlines", "Transportation", "Travel"],
    price: 2450,
    priceChange: 0.65,
    marketCap: "¥1.1T",
    revenue: "¥1.7T",
    per: "8.5",
    pbr: "1.15",
    founded: "1951",
    ceo: "Mitsuko Tottori",
    outlook: [
      {
        title: "Japan's Flag Carrier Reborn:",
        content: "JAL emerged from bankruptcy (2010) as a leaner, more profitable airline. Restructuring eliminated legacy costs and instilled cost discipline that persists today."
      },
      {
        title: "Premium International Focus:",
        content: "JAL emphasizes premium service and international routes where Japanese carriers have brand advantages. Business class and first class drive profitability."
      },
      {
        title: "Inbound Tourism Boom:",
        content: "Record inbound tourism to Japan benefits JAL directly. Weak yen makes Japan attractive while JAL captures visitors on international and domestic legs."
      },
      {
        title: "Fleet Modernization:",
        content: "A350 and 787 deliveries improve fuel efficiency and passenger experience. Modern fleet reduces operating costs versus legacy aircraft."
      },
      {
        title: "Key Risks:",
        content: "Airline industry inherently cyclical and exposed to fuel prices. Competition from ANA and LCCs on domestic routes. Geopolitical events can devastate travel demand overnight."
      }
    ]
  },
  "9202": {
    code: "9202 JP",
    name: "ANA Holdings",
    nameJp: "ANAホールディングス",
    themes: ["Airlines", "Transportation", "Travel"],
    price: 2850,
    priceChange: 0.55,
    marketCap: "¥1.4T",
    revenue: "¥2.0T",
    per: "9.5",
    pbr: "1.25",
    founded: "1952",
    ceo: "Koji Shibata",
    outlook: [
      {
        title: "Japan's Largest Airline:",
        content: "ANA is Japan's largest airline by revenue and passengers—larger domestic network and more international destinations than JAL. Scale provides scheduling and network advantages."
      },
      {
        title: "Star Alliance Hub:",
        content: "As Star Alliance member, ANA connects to global network including United and Lufthansa. Alliance partnerships extend reach without capital investment."
      },
      {
        title: "LCC Portfolio:",
        content: "Peach Aviation subsidiary serves price-sensitive travelers. Multi-brand strategy captures different market segments without diluting ANA premium positioning."
      },
      {
        title: "Cargo Growth:",
        content: "ANA Cargo benefits from e-commerce and supply chain shifts. Air freight provides diversification from passenger revenue volatility."
      },
      {
        title: "Key Risks:",
        content: "Heavy debt from COVID survival mode requires deleveraging. Fuel price exposure significant. Competition from Middle Eastern carriers on connecting traffic."
      }
    ]
  },
  "4151": {
    code: "4151 JP",
    name: "Kyowa Kirin",
    nameJp: "協和キリン",
    themes: ["Pharmaceuticals", "Healthcare", "Biotechnology"],
    price: 2850,
    priceChange: 0.75,
    marketCap: "¥1.5T",
    revenue: "¥450B",
    per: "22.5",
    pbr: "2.85",
    founded: "1949",
    ceo: "Masashi Miyamoto",
    outlook: [
      {
        title: "Kirin Group Pharma Arm:",
        content: "Kyowa Kirin is Kirin Holdings' pharmaceutical subsidiary—leveraging brewing fermentation expertise for biotechnology drug development."
      },
      {
        title: "Crysvita Global Success:",
        content: "Crysvita (burosumab) for rare bone diseases generates growing global revenue through partnerships. Rare disease focus commands premium pricing and reimbursement."
      },
      {
        title: "Antibody Engineering Platform:",
        content: "POTELLIGENT and other antibody technologies create differentiated biologics. Platform capabilities attract partnership opportunities."
      },
      {
        title: "Oncology Pipeline:",
        content: "Cancer drug pipeline represents growth opportunity beyond rare diseases. Diversification reduces single-product dependency."
      },
      {
        title: "Key Risks:",
        content: "Rare disease markets are small—growth requires continuous new indications. Biotech R&D carries high failure rates. Kirin parent influence on strategy."
      }
    ]
  },
  "4506": {
    code: "4506 JP",
    name: "Sumitomo Pharma",
    nameJp: "住友ファーマ",
    themes: ["Pharmaceuticals", "Healthcare", "CNS"],
    price: 485,
    priceChange: -1.25,
    marketCap: "¥190B",
    revenue: "¥580B",
    per: "—",
    pbr: "0.85",
    founded: "1897",
    ceo: "Hiroshi Nomura",
    outlook: [
      {
        title: "CNS Focus Specialist:",
        content: "Sumitomo Pharma focuses on central nervous system disorders—psychiatry and neurology where unmet medical need remains high."
      },
      {
        title: "Latuda Patent Cliff Survived:",
        content: "Blockbuster Latuda faced US patent expiration—successor products and cost restructuring aim to rebuild profitability."
      },
      {
        title: "Regenerative Medicine Bet:",
        content: "Cell therapy and regenerative medicine investments represent long-term growth options. High-risk but potentially transformative if successful."
      },
      {
        title: "North American Operations:",
        content: "Sunovion subsidiary provides US commercial presence. Direct access to world's largest pharma market is strategic advantage."
      },
      {
        title: "Key Risks:",
        content: "Negative earnings reflect transition challenges. Pipeline must deliver to replace Latuda revenue. Parent Sumitomo Chemical may reassess strategic fit."
      }
    ]
  },
  "4507": {
    code: "4507 JP",
    name: "Shionogi",
    nameJp: "塩野義製薬",
    themes: ["Pharmaceuticals", "Healthcare", "Infectious Disease"],
    price: 2150,
    priceChange: 0.45,
    marketCap: "¥640B",
    revenue: "¥430B",
    per: "12.5",
    pbr: "1.65",
    founded: "1878",
    ceo: "Isao Teshirogi",
    outlook: [
      {
        title: "Infectious Disease Expertise:",
        content: "Shionogi built expertise in HIV and infectious diseases—Tivicay/dolutegravir partnership with ViiV generates substantial royalty income."
      },
      {
        title: "COVID Antiviral Development:",
        content: "Xocova COVID-19 antiviral demonstrates Shionogi's infectious disease capabilities. Pandemic preparedness creates ongoing opportunities."
      },
      {
        title: "Royalty-Rich Model:",
        content: "HIV drug royalties provide high-margin income with minimal ongoing investment. Partnership model maximizes returns on R&D."
      },
      {
        title: "Obesity and Metabolic Pipeline:",
        content: "Pipeline expansion into obesity and metabolic diseases diversifies beyond infectious disease. Growing therapeutic areas with commercial potential."
      },
      {
        title: "Key Risks:",
        content: "HIV treatment evolution could reduce dolutegravir relevance. COVID antiviral demand normalizing. Pipeline execution risk in new therapeutic areas."
      }
    ]
  },
  "4523": {
    code: "4523 JP",
    name: "Eisai",
    nameJp: "エーザイ",
    themes: ["Pharmaceuticals", "Healthcare", "Neurology"],
    price: 4850,
    priceChange: 1.25,
    marketCap: "¥1.4T",
    revenue: "¥750B",
    per: "—",
    pbr: "2.85",
    founded: "1941",
    ceo: "Haruo Naito",
    outlook: [
      {
        title: "Alzheimer's Disease Pioneer:",
        content: "Leqembi (lecanemab) with Biogen represents breakthrough Alzheimer's treatment—first disease-modifying therapy approved. Market potential is enormous if adoption succeeds."
      },
      {
        title: "Neurology Leadership:",
        content: "Decades of neurology focus created expertise and relationships that enabled Alzheimer's breakthrough. Continued CNS pipeline builds on this foundation."
      },
      {
        title: "Oncology Diversification:",
        content: "Lenvima cancer drug partnership with Merck provides current profit engine while Alzheimer's franchise builds."
      },
      {
        title: "Global Alzheimer's Rollout:",
        content: "Leqembi approval in US, Japan, and China creates massive commercial opportunity. Execution on market access and physician education is critical."
      },
      {
        title: "Key Risks:",
        content: "Alzheimer's drug adoption slower than hoped—reimbursement and logistics challenges. Safety monitoring requirements add complexity. High valuation assumes Leqembi success."
      }
    ]
  },
  "4578": {
    code: "4578 JP",
    name: "Otsuka Holdings",
    nameJp: "大塚ホールディングス",
    themes: ["Pharmaceuticals", "Healthcare", "Consumer"],
    price: 7250,
    priceChange: 0.55,
    marketCap: "¥3.9T",
    revenue: "¥2.0T",
    per: "18.5",
    pbr: "1.95",
    founded: "1921",
    ceo: "Tatsuo Higuchi",
    outlook: [
      {
        title: "Pharma Plus Nutraceuticals:",
        content: "Otsuka uniquely combines pharmaceuticals (Abilify, Lonsurf) with consumer products (Pocari Sweat, Calorie Mate). This diversification provides unusual stability."
      },
      {
        title: "Abilify Maintena Success:",
        content: "Long-acting injectable Abilify Maintena extended franchise beyond oral formulation patent expiration. Lifecycle management excellence."
      },
      {
        title: "Pocari Sweat Global Brand:",
        content: "Pocari Sweat sports drink dominates Asian markets—particularly strong in Southeast Asia and China. Consumer business provides steady cash flow."
      },
      {
        title: "CNS Pipeline Depth:",
        content: "Psychiatry pipeline continues Otsuka's CNS leadership. New formulations and indications extend established franchises."
      },
      {
        title: "Key Risks:",
        content: "Pharmaceutical patent expirations require continuous pipeline delivery. Consumer products face competition and commodity input costs. Complex holding structure reduces transparency."
      }
    ]
  },
  "9501": {
    code: "9501 JP",
    name: "Tokyo Electric Power",
    nameJp: "東京電力ホールディングス",
    themes: ["Utilities", "Power", "Nuclear"],
    price: 485,
    priceChange: 0.55,
    marketCap: "¥780B",
    revenue: "¥7.8T",
    per: "—",
    pbr: "0.25",
    founded: "1951",
    ceo: "Tomoaki Kobayakawa",
    outlook: [
      {
        title: "Fukushima Legacy:",
        content: "TEPCO operates under Fukushima Daiichi decommissioning burden—decades of cleanup costs and compensation. This liability dominates the investment case."
      },
      {
        title: "Kashiwazaki-Kariwa Restart:",
        content: "World's largest nuclear plant restart would significantly improve profitability. Regulatory approval and local consent remain hurdles."
      },
      {
        title: "Tokyo Market Monopoly:",
        content: "Despite liberalization, TEPCO retains dominant position serving Tokyo metropolitan area—Japan's largest electricity market."
      },
      {
        title: "Government Support:",
        content: "Effective government backstop ensures TEPCO's survival. The company is too systemically important to fail despite liabilities exceeding assets."
      },
      {
        title: "Key Risks:",
        content: "Trading at 0.25x book reflects massive Fukushima liabilities. Nuclear restart faces public opposition. Regulatory and political uncertainty persists."
      }
    ]
  },
  "9502": {
    code: "9502 JP",
    name: "Chubu Electric Power",
    nameJp: "中部電力",
    themes: ["Utilities", "Power", "Energy"],
    price: 1850,
    priceChange: 0.35,
    marketCap: "¥1.4T",
    revenue: "¥3.8T",
    per: "10.5",
    pbr: "0.65",
    founded: "1951",
    ceo: "Kingo Hayashi",
    outlook: [
      {
        title: "Central Japan Utility:",
        content: "Chubu Electric serves Nagoya and central Japan—Japan's industrial heartland including Toyota and other major manufacturers."
      },
      {
        title: "JERA Joint Venture:",
        content: "JERA partnership with TEPCO operates Japan's largest thermal power fleet. This structure optimizes fuel procurement and generation efficiency."
      },
      {
        title: "Hamaoka Nuclear:",
        content: "Hamaoka nuclear plant restart would improve profitability. The plant has been offline since 2011 pending safety upgrades."
      },
      {
        title: "Renewable Investment:",
        content: "Wind, solar, and other renewable investments position Chubu for energy transition. Offshore wind projects in development."
      },
      {
        title: "Key Risks:",
        content: "Nuclear restart timing uncertain. Fuel cost volatility passes through but creates customer affordability concerns. Industrial demand linked to manufacturing activity."
      }
    ]
  },
  "9503": {
    code: "9503 JP",
    name: "Kansai Electric Power",
    nameJp: "関西電力",
    themes: ["Utilities", "Power", "Nuclear"],
    price: 2250,
    priceChange: 0.45,
    marketCap: "¥2.1T",
    revenue: "¥4.0T",
    per: "8.5",
    pbr: "0.85",
    founded: "1951",
    ceo: "Nozomu Mori",
    outlook: [
      {
        title: "Nuclear Power Leader:",
        content: "KEPCO operates more nuclear reactors than any Japanese utility—7 units currently operating. This nuclear fleet provides cost advantages versus thermal-dependent peers."
      },
      {
        title: "Osaka-Kansai Region:",
        content: "Serving Osaka, Kyoto, and Kobe provides stable demand base. Industrial customers include Panasonic, Sharp, and other major manufacturers."
      },
      {
        title: "Takahama and Ohi Operations:",
        content: "Operating nuclear plants generate low-cost electricity. Each additional restart improves profitability significantly."
      },
      {
        title: "Transmission Investment:",
        content: "Grid modernization and interconnection investments support renewable energy integration. Infrastructure investment provides regulated returns."
      },
      {
        title: "Key Risks:",
        content: "Corporate governance concerns after gift scandal. Nuclear safety remains public concern. Electricity liberalization increases competition."
      }
    ]
  },
  "3289": {
    code: "3289 JP",
    name: "Tokyu Fudosan Holdings",
    nameJp: "東急不動産ホールディングス",
    themes: ["Real Estate", "Development", "Urban"],
    price: 1050,
    priceChange: 0.35,
    marketCap: "¥720B",
    revenue: "¥1.1T",
    per: "12.5",
    pbr: "0.95",
    founded: "2013",
    ceo: "Hironori Nishikawa",
    outlook: [
      {
        title: "Tokyu Group Real Estate:",
        content: "Tokyu Fudosan develops properties along Tokyu railway lines—integrated rail and real estate model creates captive customer base and development opportunities."
      },
      {
        title: "Shibuya Redevelopment:",
        content: "Major Shibuya station area redevelopment creates prime office, retail, and residential properties. Shibuya Stream, Scramble Square, and ongoing projects transform the area."
      },
      {
        title: "Residential Development:",
        content: "BRANZ condominium brand serves Tokyo metropolitan market. Premium locations along Tokyu lines command strong pricing."
      },
      {
        title: "Urban Management:",
        content: "Property management and urban services create recurring revenue beyond development profits. Asset-light management businesses improve ROE."
      },
      {
        title: "Key Risks:",
        content: "Tokyo real estate market faces interest rate sensitivity. Development concentration along Tokyu lines creates geographic risk. Condominium market depends on household formation."
      }
    ]
  },
  "8801": {
    code: "8801 JP",
    name: "Mitsui Fudosan",
    nameJp: "三井不動産",
    themes: ["Real Estate", "Development", "Property"],
    price: 1350,
    priceChange: 0.45,
    marketCap: "¥4.2T",
    revenue: "¥2.4T",
    per: "14.5",
    pbr: "1.15",
    founded: "1941",
    ceo: "Masanobu Komoda",
    outlook: [
      {
        title: "Japan's Largest Developer:",
        content: "Mitsui Fudosan is Japan's largest real estate company—office buildings, shopping malls, residential, and logistics properties across the portfolio."
      },
      {
        title: "LaLaport Shopping Centers:",
        content: "LaLaport suburban shopping centers provide stable retail rental income. Format continues expanding in Japan and Asia."
      },
      {
        title: "Office Leasing Stability:",
        content: "Prime Tokyo office buildings generate stable cash flows. Tenant quality and location create resilience through cycles."
      },
      {
        title: "International Expansion:",
        content: "US, UK, and Asian developments diversify beyond Japan. Manhattan and London properties provide global exposure."
      },
      {
        title: "Key Risks:",
        content: "Office demand faces remote work headwinds. Interest rate increases impact property valuations and financing costs. Retail properties face e-commerce competition."
      }
    ]
  },
  "8802": {
    code: "8802 JP",
    name: "Mitsubishi Estate",
    nameJp: "三菱地所",
    themes: ["Real Estate", "Development", "Property"],
    price: 2150,
    priceChange: 0.55,
    marketCap: "¥2.9T",
    revenue: "¥1.5T",
    per: "15.5",
    pbr: "1.25",
    founded: "1937",
    ceo: "Junichi Yoshida",
    outlook: [
      {
        title: "Marunouchi District Owner:",
        content: "Mitsubishi Estate owns most of Marunouchi—Tokyo's premier business district adjacent to Tokyo Station. This irreplaceable location provides extraordinary asset base."
      },
      {
        title: "Office Building Excellence:",
        content: "Premium office buildings command top rents and attract blue-chip tenants. Marunouchi concentration creates density and network effects."
      },
      {
        title: "Simon Property Partnership:",
        content: "Premium Outlets joint venture with Simon creates outlet mall network. Retail diversification beyond office concentration."
      },
      {
        title: "Residential and Logistics:",
        content: "Condominium development and logistics properties diversify the portfolio. Growth segments complement mature office business."
      },
      {
        title: "Key Risks:",
        content: "Marunouchi concentration creates geographic risk despite quality. Office demand evolution with remote work. Interest rate sensitivity on property valuations."
      }
    ]
  },
  "8804": {
    code: "8804 JP",
    name: "Tokyo Tatemono",
    nameJp: "東京建物",
    themes: ["Real Estate", "Development", "Property"],
    price: 2350,
    priceChange: 0.45,
    marketCap: "¥490B",
    revenue: "¥380B",
    per: "11.5",
    pbr: "1.05",
    founded: "1896",
    ceo: "Hitoshi Nomura",
    outlook: [
      {
        title: "Tokyo-Focused Developer:",
        content: "Tokyo Tatemono focuses exclusively on Tokyo—office buildings, condominiums, and commercial properties in Japan's capital."
      },
      {
        title: "Yaesu Redevelopment:",
        content: "Major Yaesu (Tokyo Station area) redevelopment creates prime mixed-use properties. Location adjacent to station ensures tenant demand."
      },
      {
        title: "Brillia Condominiums:",
        content: "Brillia residential brand serves Tokyo condominium market. Quality positioning attracts upgraders and families."
      },
      {
        title: "Asset Management Growth:",
        content: "REIT sponsorship and property management create fee-based income. Asset-light strategies improve capital efficiency."
      },
      {
        title: "Key Risks:",
        content: "Tokyo concentration means no geographic diversification. Mid-tier positioning faces competition from larger developers. Condominium market cyclicality."
      }
    ]
  },
  "8830": {
    code: "8830 JP",
    name: "Sumitomo Realty & Development",
    nameJp: "住友不動産",
    themes: ["Real Estate", "Development", "Property"],
    price: 4850,
    priceChange: 0.55,
    marketCap: "¥2.3T",
    revenue: "¥1.0T",
    per: "12.5",
    pbr: "1.35",
    founded: "1949",
    ceo: "Kojun Nishikawa",
    outlook: [
      {
        title: "Office Leasing Machine:",
        content: "Sumitomo Realty focuses on office building development and leasing—200+ buildings in Tokyo create massive recurring rental income."
      },
      {
        title: "Build-to-Hold Model:",
        content: "Unlike developers who sell properties, Sumitomo Realty retains buildings for long-term rental income. This strategy builds asset base over time."
      },
      {
        title: "Renovation Expertise:",
        content: "Building renovation and repositioning create value from older properties. Renovation extends building life and improves returns."
      },
      {
        title: "Custom Home Business:",
        content: "J-URBAN custom home brand serves single-family housing market. Design differentiation commands premium pricing."
      },
      {
        title: "Key Risks:",
        content: "Office-heavy portfolio exposed to work-from-home trends. Tokyo concentration creates geographic risk. Older building portfolio requires continuous renovation investment."
      }
    ]
  },
  "9001": {
    code: "9001 JP",
    name: "Tobu Railway",
    nameJp: "東武鉄道",
    themes: ["Transportation", "Rail", "Real Estate"],
    price: 1850,
    priceChange: 0.35,
    marketCap: "¥720B",
    revenue: "¥660B",
    per: "14.5",
    pbr: "1.05",
    founded: "1897",
    ceo: "Yoshizumi Nezu",
    outlook: [
      {
        title: "Northern Tokyo Railway:",
        content: "Tobu Railway connects Tokyo to Nikko and northern suburbs—serving commuters and tourists to UNESCO World Heritage site."
      },
      {
        title: "Tokyo Skytree Owner:",
        content: "Tobu owns and operates Tokyo Skytree—Japan's tallest structure and major tourist attraction. Solamachi commercial complex generates retail revenue."
      },
      {
        title: "Nikko Tourism:",
        content: "Nikko World Heritage destination drives leisure travel. Hotels, buses, and attractions capture tourist spending."
      },
      {
        title: "Real Estate Development:",
        content: "Station-area development creates residential and commercial properties. Rail-real estate integration is Japanese private railway model."
      },
      {
        title: "Key Risks:",
        content: "Commuter traffic faces remote work headwinds. Tourism dependent on economic conditions. Suburban residential areas face population decline."
      }
    ]
  },
  "9005": {
    code: "9005 JP",
    name: "Tokyu",
    nameJp: "東急",
    themes: ["Transportation", "Rail", "Real Estate"],
    price: 1750,
    priceChange: 0.45,
    marketCap: "¥1.1T",
    revenue: "¥1.0T",
    per: "18.5",
    pbr: "1.45",
    founded: "1922",
    ceo: "Kazuo Takahashi",
    outlook: [
      {
        title: "Southwest Tokyo Premium:",
        content: "Tokyu railways serve Tokyo's affluent southwestern suburbs—Shibuya, Futako-Tamagawa, and Yokohama. Premium demographics support real estate values."
      },
      {
        title: "Shibuya Development:",
        content: "Massive Shibuya station redevelopment transforms the area. Tokyu's Shibuya holdings benefit from area-wide improvements."
      },
      {
        title: "Lifestyle Services:",
        content: "Tokyu Department Store, Tokyu Hands, and other retail brands serve captive customer base. Integrated services capture consumer spending."
      },
      {
        title: "Hotel and Resort:",
        content: "Tokyu Hotels and resorts provide hospitality diversification. Recovery from COVID supports travel-related businesses."
      },
      {
        title: "Key Risks:",
        content: "Retail businesses face e-commerce disruption. Commuter traffic recovery incomplete post-COVID. Real estate development requires continued execution."
      }
    ]
  },
  "9007": {
    code: "9007 JP",
    name: "Odakyu Electric Railway",
    nameJp: "小田急電鉄",
    themes: ["Transportation", "Rail", "Tourism"],
    price: 1950,
    priceChange: 0.35,
    marketCap: "¥720B",
    revenue: "¥520B",
    per: "22.5",
    pbr: "1.25",
    founded: "1923",
    ceo: "Koji Hoshino",
    outlook: [
      {
        title: "Shinjuku to Hakone:",
        content: "Odakyu connects Shinjuku to Hakone—Japan's premier hot spring resort. Romance Car limited express serves both commuters and tourists."
      },
      {
        title: "Hakone Tourism:",
        content: "Hakone hotels, ropeways, and attractions capture tourist spending. Integrated tourism business benefits from inbound recovery."
      },
      {
        title: "Shinjuku Station Assets:",
        content: "Prime Shinjuku real estate including department store generates stable revenue. Station-adjacent location is irreplaceable."
      },
      {
        title: "Suburban Development:",
        content: "Residential development along Odakyu lines serves Tokyo commuter demand. New town development creates captive ridership."
      },
      {
        title: "Key Risks:",
        content: "Tourism business vulnerable to external shocks. Suburban population decline long-term headwind. Competition from Shinkansen on longer routes."
      }
    ]
  },
  "9008": {
    code: "9008 JP",
    name: "Keio",
    nameJp: "京王電鉄",
    themes: ["Transportation", "Rail", "Retail"],
    price: 4550,
    priceChange: 0.45,
    marketCap: "¥580B",
    revenue: "¥420B",
    per: "18.5",
    pbr: "1.35",
    founded: "1948",
    ceo: "Masahiko Goto",
    outlook: [
      {
        title: "Western Tokyo Railway:",
        content: "Keio serves western Tokyo suburbs—Shinjuku to Hachioji and Mount Takao. Dense residential areas provide stable commuter base."
      },
      {
        title: "Shinjuku Terminal:",
        content: "Keio Department Store and Shinjuku station complex generate retail and real estate revenue. Prime terminal location is strategic asset."
      },
      {
        title: "Mount Takao Tourism:",
        content: "Mount Takao became popular hiking destination—easily accessible and inbound tourist friendly. Leisure travel supports weekend ridership."
      },
      {
        title: "Bus Operations:",
        content: "Keio Bus serves areas without rail coverage. Integrated transport network captures broader mobility demand."
      },
      {
        title: "Key Risks:",
        content: "Commuter traffic recovery incomplete. Department store format faces structural challenges. Western suburbs compete with more central Tokyo locations."
      }
    ]
  },
  "9009": {
    code: "9009 JP",
    name: "Keisei Electric Railway",
    nameJp: "京成電鉄",
    themes: ["Transportation", "Rail", "Airport"],
    price: 4150,
    priceChange: 0.75,
    marketCap: "¥720B",
    revenue: "¥280B",
    per: "12.5",
    pbr: "1.15",
    founded: "1909",
    ceo: "Terufumi Kobayashi",
    outlook: [
      {
        title: "Narita Airport Access:",
        content: "Skyliner express connects Tokyo to Narita Airport—36 minutes city center to terminal. Airport recovery directly benefits Keisei."
      },
      {
        title: "Oriental Land Stake:",
        content: "Keisei owns 20%+ of Oriental Land (Tokyo Disney)—one of Japan's most valuable stakes. This investment is worth more than Keisei's market cap."
      },
      {
        title: "Inbound Tourism Leverage:",
        content: "International visitor recovery drives Skyliner ridership and Disney attendance. Double exposure to inbound tourism recovery."
      },
      {
        title: "Eastern Tokyo Network:",
        content: "Commuter lines serve eastern Tokyo and Chiba. Stable residential areas provide recurring ridership."
      },
      {
        title: "Key Risks:",
        content: "Oriental Land stake concentrated risk. Airport traffic vulnerable to external shocks. Competition from buses on Narita route."
      }
    ]
  },
  "9101": {
    code: "9101 JP",
    name: "Nippon Yusen",
    nameJp: "日本郵船",
    themes: ["Shipping", "Logistics", "Transportation"],
    price: 4850,
    priceChange: 0.55,
    marketCap: "¥2.5T",
    revenue: "¥2.4T",
    per: "5.5",
    pbr: "0.95",
    founded: "1885",
    ceo: "Takaya Soga",
    outlook: [
      {
        title: "Global Shipping Giant:",
        content: "NYK is Japan's largest shipping company—container ships, bulk carriers, tankers, and car carriers spanning global trade routes."
      },
      {
        title: "ONE Container Alliance:",
        content: "Ocean Network Express (ONE) joint venture with MOL and K Line creates scale in container shipping. Combined fleet competes with global leaders."
      },
      {
        title: "Car Carrier Leadership:",
        content: "NYK operates world's largest car carrier fleet—essential logistics for auto exports. Japanese automaker relationships provide stable demand."
      },
      {
        title: "LNG Shipping Growth:",
        content: "LNG carrier fleet serves growing gas trade. Energy transition increases LNG demand for cleaner power generation."
      },
      {
        title: "Key Risks:",
        content: "Shipping rates highly volatile—COVID boom has normalized. Overcapacity risk in various vessel segments. Decarbonization requires fleet renewal investment."
      }
    ]
  },
  "9104": {
    code: "9104 JP",
    name: "Mitsui O.S.K. Lines",
    nameJp: "商船三井",
    themes: ["Shipping", "Logistics", "LNG"],
    price: 4650,
    priceChange: 0.45,
    marketCap: "¥1.7T",
    revenue: "¥1.6T",
    per: "5.5",
    pbr: "0.85",
    founded: "1884",
    ceo: "Takeshi Hashimoto",
    outlook: [
      {
        title: "LNG Carrier Focus:",
        content: "MOL operates large LNG carrier fleet—long-term charters provide stable earnings unlike volatile spot shipping markets."
      },
      {
        title: "ONE Container Venture:",
        content: "ONE partnership provides container shipping exposure while sharing capital requirements. Alliance structure improves efficiency."
      },
      {
        title: "Offshore Business:",
        content: "Floating storage, offshore support, and subsea services serve oil and gas customers. Energy infrastructure creates diversification."
      },
      {
        title: "Ferry Operations:",
        content: "Domestic ferry services provide stable Japan coastal transportation. Cruise and ferry businesses serve leisure market."
      },
      {
        title: "Key Risks:",
        content: "Shipping market volatility persists despite long-term contracts. LNG carrier newbuilding costs are substantial. Environmental regulations require fleet upgrades."
      }
    ]
  },
  "9107": {
    code: "9107 JP",
    name: "Kawasaki Kisen Kaisha",
    nameJp: "川崎汽船",
    themes: ["Shipping", "Logistics", "Container"],
    price: 2050,
    priceChange: 0.35,
    marketCap: "¥1.2T",
    revenue: "¥980B",
    per: "4.5",
    pbr: "0.75",
    founded: "1919",
    ceo: "Yasunari Sonobe",
    outlook: [
      {
        title: "Container Shipping Focus:",
        content: "K Line is more container-focused than NYK or MOL—ONE venture represents core business. Container rates drive earnings volatility."
      },
      {
        title: "Car Carrier Fleet:",
        content: "Substantial car carrier operations serve auto industry exports. Japanese automaker relationships provide volume stability."
      },
      {
        title: "ONE Partnership Value:",
        content: "ONE joint venture equity earnings contribute significantly. Alliance structure shares both risks and rewards."
      },
      {
        title: "Dry Bulk Exposure:",
        content: "Bulk carriers transport coal, iron ore, and grains. Commodity trade flows drive dry bulk demand."
      },
      {
        title: "Key Risks:",
        content: "Most exposed to container rate volatility among Japan's big three. Trading below book value reflects shipping skepticism. Fleet renewal requires continued investment."
      }
    ]
  },
  "9064": {
    code: "9064 JP",
    name: "Yamato Holdings",
    nameJp: "ヤマトホールディングス",
    themes: ["Logistics", "Delivery", "E-commerce"],
    price: 1650,
    priceChange: 0.35,
    marketCap: "¥610B",
    revenue: "¥1.8T",
    per: "22.5",
    pbr: "1.25",
    founded: "1919",
    ceo: "Yutaka Nagao",
    outlook: [
      {
        title: "Japan's Delivery Leader:",
        content: "Yamato (Kuroneko) is Japan's dominant parcel delivery company—the UPS/FedEx of Japan. Black cat brand recognition is universal."
      },
      {
        title: "E-commerce Growth Driver:",
        content: "Online shopping growth drives parcel volume. Amazon, Rakuten, and direct-to-consumer brands all require Yamato's delivery network."
      },
      {
        title: "Last-Mile Excellence:",
        content: "Dense urban delivery network enables same-day and time-specific delivery—service levels difficult for competitors to match."
      },
      {
        title: "Corporate Logistics:",
        content: "B2B logistics services serve corporate customers. Supply chain solutions expand beyond parcel delivery."
      },
      {
        title: "Key Risks:",
        content: "Labor shortage drives up driver costs. Amazon building competing delivery network. Pricing power limited by competition."
      }
    ]
  },
  "9147": {
    code: "9147 JP",
    name: "Nippon Express Holdings",
    nameJp: "NIPPON EXPRESSホールディングス",
    themes: ["Logistics", "Freight", "Supply Chain"],
    price: 6850,
    priceChange: 0.45,
    marketCap: "¥620B",
    revenue: "¥2.6T",
    per: "10.5",
    pbr: "0.85",
    founded: "1937",
    ceo: "Mitsuru Saito",
    outlook: [
      {
        title: "Japan's Largest Logistics:",
        content: "Nippon Express is Japan's largest logistics company by revenue—comprehensive freight forwarding, warehousing, and supply chain services."
      },
      {
        title: "Global Freight Forwarding:",
        content: "International air and ocean freight forwarding serves global trade. Network spans major trade lanes worldwide."
      },
      {
        title: "Domestic Moving Services:",
        content: "Household and office moving services leverage logistics expertise. Market leader in Japan's moving industry."
      },
      {
        title: "Supply Chain Complexity:",
        content: "Complex logistics including heavy machinery, art transport, and specialized handling create differentiation. Expertise commands premium pricing."
      },
      {
        title: "Key Risks:",
        content: "Freight forwarding margins compressed by competition. Global trade volumes sensitive to economic conditions. Digital freight platforms disrupting traditional forwarding."
      }
    ]
  },
  "7832": {
    code: "7832 JP",
    name: "Bandai Namco Holdings",
    nameJp: "バンダイナムコホールディングス",
    themes: ["Entertainment", "Gaming", "Toys"],
    price: 3150,
    priceChange: 0.85,
    marketCap: "¥2.1T",
    revenue: "¥1.1T",
    per: "24.5",
    pbr: "3.85",
    founded: "2005",
    ceo: "Masaru Kawaguchi",
    outlook: [
      {
        title: "IP Powerhouse:",
        content: "Bandai Namco owns legendary franchises—Gundam, Pac-Man, Dragon Ball (license), One Piece (license). IP monetization spans games, toys, and media."
      },
      {
        title: "Gundam Eternal Franchise:",
        content: "Gundam plastic models (Gunpla) generate billions in revenue—40+ years of continuous sales. Factory tours and events create brand experiences."
      },
      {
        title: "Game Publishing:",
        content: "Elden Ring, Tekken, Tales series, and other game franchises serve global gaming market. Publishing third-party titles expands portfolio."
      },
      {
        title: "Arcade and Amusement:",
        content: "Arcade operations and amusement facilities provide entertainment diversification. Prize games and location-based experiences."
      },
      {
        title: "Key Risks:",
        content: "Gaming hits are unpredictable—Elden Ring success hard to repeat. Toy industry faces demographic headwinds. Licensed IP relationships must be maintained."
      }
    ]
  },
  "7911": {
    code: "7911 JP",
    name: "Toppan Holdings",
    nameJp: "TOPPANホールディングス",
    themes: ["Printing", "Electronics", "Technology"],
    price: 3850,
    priceChange: 0.55,
    marketCap: "¥1.3T",
    revenue: "¥1.6T",
    per: "14.5",
    pbr: "0.95",
    founded: "1900",
    ceo: "Hideharu Maro",
    outlook: [
      {
        title: "Beyond Printing Pioneer:",
        content: "Toppan has transformed from printing company to technology materials provider—semiconductor photomasks, display materials, and packaging."
      },
      {
        title: "Semiconductor Photomasks:",
        content: "Photomasks for semiconductor lithography represent high-tech pivot. Advanced node masks require Toppan's precision manufacturing."
      },
      {
        title: "Display Materials:",
        content: "Color filters and materials for LCD and OLED displays serve panel manufacturers. Technology intensity differentiates from commodity printing."
      },
      {
        title: "Secure Printing:",
        content: "Banknotes, passports, and secure documents leverage anti-counterfeiting expertise. Security printing commands premium margins."
      },
      {
        title: "Key Risks:",
        content: "Traditional printing continues declining. Electronics materials face semiconductor cycle volatility. Transformation requires continued R&D investment."
      }
    ]
  },
  "7912": {
    code: "7912 JP",
    name: "Dai Nippon Printing",
    nameJp: "大日本印刷",
    themes: ["Printing", "Electronics", "Packaging"],
    price: 4650,
    priceChange: 0.45,
    marketCap: "¥1.2T",
    revenue: "¥1.4T",
    per: "12.5",
    pbr: "0.85",
    founded: "1876",
    ceo: "Yoshinari Kitajima",
    outlook: [
      {
        title: "Materials Technology Company:",
        content: "DNP has evolved from printing to electronics materials—optical films, semiconductor materials, and battery components."
      },
      {
        title: "Display Optical Films:",
        content: "Optical films for displays serve TV and smartphone panel manufacturers. Technology leadership in polarizing films and functional materials."
      },
      {
        title: "Beverage Packaging:",
        content: "Aseptic filling systems for beverages create packaging solutions business. Food and beverage packaging provides stability."
      },
      {
        title: "EV Battery Components:",
        content: "Battery pouch materials for EVs represent growth opportunity. Automotive electrification drives demand."
      },
      {
        title: "Key Risks:",
        content: "Traditional printing revenue continues declining. Electronics materials face competition and cyclicality. Trading below book value suggests transformation skepticism."
      }
    ]
  },
  "7951": {
    code: "7951 JP",
    name: "Yamaha Corporation",
    nameJp: "ヤマハ",
    themes: ["Music", "Audio", "Consumer Electronics"],
    price: 2750,
    priceChange: 0.55,
    marketCap: "¥720B",
    revenue: "¥460B",
    per: "18.5",
    pbr: "1.45",
    founded: "1887",
    ceo: "Takuya Nakata",
    outlook: [
      {
        title: "Musical Instrument Leader:",
        content: "Yamaha is world's largest musical instrument maker—pianos, guitars, drums, and brass instruments serve musicians from beginner to professional."
      },
      {
        title: "Professional Audio:",
        content: "Mixing consoles, speakers, and audio equipment serve live events, studios, and installed sound. Pro audio is higher margin than consumer products."
      },
      {
        title: "Music Education Ecosystem:",
        content: "Yamaha Music Schools create future instrument customers. Education builds brand loyalty and drives long-term instrument sales."
      },
      {
        title: "Components Business:",
        content: "Audio components, semiconductors, and automotive audio serve OEM customers. B2B provides stability beyond consumer cycles."
      },
      {
        title: "Key Risks:",
        content: "Musical instruments are discretionary—economic downturns hit sales. Digital alternatives compete with traditional instruments. Consumer electronics face commoditization."
      }
    ]
  }
};

export function getCompany(code: string): Company | undefined {
  return companies[code];
}

export function getAllCompanyCodes(): string[] {
  return Object.keys(companies);
}

export function searchCompanies(query: string): Company[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(companies).filter(
    (company) =>
      company.code.toLowerCase().includes(lowerQuery) ||
      company.name.toLowerCase().includes(lowerQuery) ||
      company.nameJp.toLowerCase().includes(lowerQuery) ||
      company.themes.some((theme) => theme.toLowerCase().includes(lowerQuery))
  );
}

// Helper function to parse market cap string to number for sorting
function parseMarketCap(marketCap: string): number {
  const num = parseFloat(marketCap.replace(/[¥,T]/g, ''));
  return isNaN(num) ? 0 : num;
}

// Get latest updates (last 5 companies added - in order of codes)
export function getLatestUpdates(): Company[] {
  const codes = getAllCompanyCodes();
  return codes.slice(0, 5).map(code => getCompany(code)).filter(Boolean) as Company[];
}

// Get top companies by market cap
export function getTopByMarketCap(): Company[] {
  return Object.values(companies)
    .sort((a, b) => parseMarketCap(b.marketCap) - parseMarketCap(a.marketCap))
    .slice(0, 5);
}

// Get most common themes
export function getTopThemes(): { theme: string; count: number }[] {
  const themeCounts: { [key: string]: number } = {};
  
  Object.values(companies).forEach(company => {
    company.themes.forEach(theme => {
      themeCounts[theme] = (themeCounts[theme] || 0) + 1;
    });
  });
  
  return Object.entries(themeCounts)
    .map(([theme, count]) => ({ theme, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

// Get best performers by price change
export function getBestPerformers(): Company[] {
  return Object.values(companies)
    .sort((a, b) => b.priceChange - a.priceChange)
    .slice(0, 5);
}

// Get worst performers by price change
export function getWorstPerformers(): Company[] {
  return Object.values(companies)
    .sort((a, b) => a.priceChange - b.priceChange)
    .slice(0, 5);
}
