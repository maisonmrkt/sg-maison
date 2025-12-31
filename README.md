# Signals Gateway

**Conversion intelligence platform for luxury retail brands on Shopify.**

> One platform to capture every conversion, connect every channel, and see exactly what's working—owned by you, managed by experts.

## Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | Next.js 14 (App Router) + Tailwind CSS |
| Authentication | Clerk (multi-tenant) |
| App Database | Supabase (PostgreSQL) |
| Data Warehouse | Google BigQuery |
| Server-Side Tracking | Stape.io |
| Data Pipelines | Fivetran |
| Hosting | Vercel |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/maison-mrkt/sg-maison.git
   cd sg-maison
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```

4. Fill in your environment variables (see `SETUP-GUIDE.md` for details)

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
sg-maison/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── (auth)/       # Auth pages (sign-in, sign-up)
│   │   ├── (dashboard)/  # Protected dashboard pages
│   │   └── page.tsx      # Landing page
│   ├── components/       # React components
│   │   └── ui/           # Shared UI components
│   ├── lib/              # Utilities and clients
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
└── middleware.ts         # Clerk auth middleware
```

## Dashboard Modules (MVP)

1. **Conversion Tracker** - Real-time event stream, daily totals, EMQ scores
2. **Integration Hub** - OAuth connections, sync status, data freshness
3. **Insights Feed** - Automated analysis cards powered by LLM
4. **Channel Performance** - Unified spend/revenue/ROAS view

## Documentation

- `SETUP-GUIDE.md` - Step-by-step setup for Clerk, Supabase, and Vercel
- Architecture and development playbook in project docs

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Environment Variables

See `.env.example` for all required variables. Key services:

- **Clerk** - Authentication (`NEXT_PUBLIC_CLERK_*`, `CLERK_SECRET_KEY`)
- **Supabase** - Database (`NEXT_PUBLIC_SUPABASE_*`, `SUPABASE_SERVICE_ROLE_KEY`)
- **BigQuery** - Data warehouse (future)

## License

Proprietary - Maison MRKT © 2025
