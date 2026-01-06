# Kabuten 株典 - Next.js Project

## What's Included

This is your complete Kabuten.com project with:
- ✅ Clean homepage with "Kabuten 株典" 
- ✅ Search dropdown functionality
- ✅ 5 company pages (Rakuten, Sony, Toyota, SoftBank, Mitsubishi UFJ)
- ✅ New compressed company page design
- ✅ Outfit font throughout
- ✅ All CSS files properly configured

## Setup Instructions

### Step 1: Delete Old Folder
1. Close VS Code completely
2. Go to your Desktop
3. **DELETE the entire `kabuten-nextjs` folder**

### Step 2: Extract New Folder
1. Unzip `kabuten-nextjs-fixed.zip`
2. You should see a folder called `kabuten-nextjs-fixed`
3. **Rename it** to `kabuten-nextjs`
4. Place it on your Desktop

### Step 3: Open in VS Code
1. Open VS Code
2. File → Open Folder
3. Select `kabuten-nextjs` from Desktop

### Step 4: Install Dependencies
1. Open Terminal in VS Code (Terminal → New Terminal)
2. Run: `npm install`
3. Wait for it to finish (should take 1-2 minutes)

### Step 5: Start Development Server
1. In Terminal, run: `npm run dev`
2. Open browser to: `localhost:3000`

### You Should See:
- ✅ Homepage with "Kabuten 株典" at the top
- ✅ "EN | JP" in top right corner
- ✅ Clean search bar with dropdown
- ✅ 7 grid boxes below
- ✅ Featured Companies section showing all 5 companies

### Test the Search:
1. Type "Rakuten" in search box
2. Dropdown should appear with company info
3. Click on it → should go to Rakuten company page
4. Company page should show compressed design

## Available Companies

1. **4755** - Rakuten (楽天)
2. **6758** - Sony (ソニー)
3. **7203** - Toyota (トヨタ)
4. **9984** - SoftBank Group (ソフトバンクグループ)
5. **8306** - Mitsubishi UFJ Financial (三菱UFJフィナンシャル・グループ)

## File Structure

```
kabuten-nextjs/
├── app/
│   ├── page.tsx              # Homepage
│   ├── home.css              # Homepage styles
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── company/
│       └── [code]/
│           ├── page.tsx      # Company page component
│           └── company.css   # Company page styles
├── lib/
│   └── companies.ts          # Company data (5 companies)
├── package.json
├── next.config.js
└── tsconfig.json
```

## If You Get Errors

### "Module not found" errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Page not loading:
1. Stop the server (Ctrl+C in Terminal)
2. Run `npm run dev` again
3. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Port already in use:
1. Kill the process using port 3000
2. Or use: `npm run dev -- -p 3001`
3. Then go to `localhost:3001`

## What's Next

Tomorrow we can:
1. Add more companies
2. Improve search functionality
3. Deploy to Vercel
4. Add your custom domain

## Need Help?

If something doesn't work, send me a screenshot and I'll help fix it!

Enjoy your new Kabuten site! 🚀
# Kabuten
