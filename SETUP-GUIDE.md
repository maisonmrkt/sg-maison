# Signals Gateway Setup Guide

**Step-by-step instructions for setting up all external services.**

This guide is written for non-technical execution. Follow each step in order.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Create GitHub Repository](#2-create-github-repository)
3. [Set Up Clerk Authentication](#3-set-up-clerk-authentication)
4. [Set Up Supabase Database](#4-set-up-supabase-database)
5. [Deploy to Vercel](#5-deploy-to-vercel)
6. [Configure Environment Variables](#6-configure-environment-variables)
7. [Verify Everything Works](#7-verify-everything-works)

---

## 1. Prerequisites

Before you begin, make sure you have:

- [ ] A GitHub account with access to the Maison MRKT organization
- [ ] A computer with Node.js installed (version 18.17 or later)
- [ ] The project files downloaded and unzipped

### Check if Node.js is installed

Open Terminal (Mac) or Command Prompt (Windows) and type:

```bash
node --version
```

If you see a version number like `v18.17.0` or higher, you're good. If not:

**Install Node.js:**
1. Go to https://nodejs.org
2. Download the "LTS" version (the big green button)
3. Run the installer and follow the prompts
4. Restart your terminal and run `node --version` again

---

## 2. Create GitHub Repository

### Step 2.1: Create the repository

1. Go to https://github.com/orgs/maison-mrkt/repositories (or your org URL)
2. Click the green **"New repository"** button
3. Fill in:
   - **Repository name:** `sg-maison`
   - **Description:** `Signals Gateway - Conversion intelligence platform`
   - **Visibility:** Private
   - **DO NOT** check "Add a README file" (we already have one)
4. Click **"Create repository"**

### Step 2.2: Push the code

After creating the repository, GitHub will show you instructions. Open Terminal, navigate to the project folder, and run:

```bash
cd path/to/sg-maison

git init
git add .
git commit -m "Initial scaffold: Next.js + Tailwind + Clerk"
git branch -M main
git remote add origin https://github.com/maison-mrkt/sg-maison.git
git push -u origin main
```

Replace `path/to/sg-maison` with the actual path to your project folder.

**Success indicator:** You should see the files appear in GitHub when you refresh the repository page.

---

## 3. Set Up Clerk Authentication

Clerk handles user sign-up, sign-in, and organization management.

### Step 3.1: Create a Clerk account

1. Go to https://clerk.com
2. Click **"Start building for free"**
3. Sign up with your email or GitHub account

### Step 3.2: Create an application

1. After signing up, you'll see "Create your first application"
2. Fill in:
   - **Application name:** `Signals Gateway`
3. Under "How will your users sign in?", select:
   - ✅ Email
   - ✅ Google (optional but recommended)
4. Click **"Create application"**

### Step 3.3: Get your API keys

1. In the Clerk dashboard, look at the left sidebar
2. Click **"API Keys"**
3. You'll see two keys:
   - **Publishable key** - starts with `pk_test_` or `pk_live_`
   - **Secret key** - starts with `sk_test_` or `sk_live_`
4. **Copy both keys** somewhere safe (you'll need them for Vercel)

### Step 3.4: Configure redirect URLs

1. In the Clerk dashboard sidebar, click **"Paths"**
2. Set these values:
   - **Sign-in URL:** `/sign-in`
   - **Sign-up URL:** `/sign-up`
   - **After sign-in URL:** `/dashboard`
   - **After sign-up URL:** `/dashboard`
3. Click **"Save changes"**

### Step 3.5: Enable Organizations (for multi-tenant support)

1. In the sidebar, go to **"Organizations"**
2. Toggle **"Enable Organizations"** to ON
3. This allows each client to have their own organization

**Success indicator:** Your Clerk dashboard shows "Signals Gateway" application with 0 users.

---

## 4. Set Up Supabase Database

Supabase provides the PostgreSQL database for storing user, organization, and integration metadata.

### Step 4.1: Create a Supabase account

1. Go to https://supabase.com
2. Click **"Start your project"**
3. Sign up with GitHub (recommended) or email

### Step 4.2: Create a new project

1. Click **"New project"**
2. Fill in:
   - **Organization:** Create new or select existing
   - **Project name:** `signals-gateway`
   - **Database password:** Use a strong password and **save it somewhere safe**
   - **Region:** Choose closest to your users (e.g., "East US" for US customers)
3. Click **"Create new project"**
4. Wait 1-2 minutes for the project to provision

### Step 4.3: Get your API keys

1. Once the project is ready, go to **Settings** (gear icon in sidebar)
2. Click **"API"** in the left menu
3. You'll see:
   - **Project URL** - starts with `https://xxxxx.supabase.co`
   - **anon public key** - starts with `eyJ...` (long string)
   - **service_role key** - also starts with `eyJ...` (different long string)
4. **Copy all three values** somewhere safe

### Step 4.4: Note the project reference

1. Your project URL contains your project reference
2. For example: `https://abcd1234.supabase.co` → project ref is `abcd1234`
3. You'll need this later for generating TypeScript types

**Success indicator:** Your Supabase dashboard shows the project with "Healthy" status.

---

## 5. Deploy to Vercel

Vercel hosts the Next.js application and handles automatic deployments.

### Step 5.1: Create a Vercel account

1. Go to https://vercel.com
2. Click **"Start Deploying"**
3. Sign up with GitHub (this makes connecting repos easier)

### Step 5.2: Import the GitHub repository

1. In the Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find `maison-mrkt/sg-maison` in the list
   - If you don't see it, click **"Adjust GitHub App Permissions"** and grant access
3. Click **"Import"** next to `sg-maison`

### Step 5.3: Configure the project (before deploying)

1. On the "Configure Project" screen:
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** Leave as `.` (default)
   - **Build Command:** Leave as default
   - **Output Directory:** Leave as default

2. **IMPORTANT:** Expand **"Environment Variables"** section
3. Add these variables one by one (click "Add" after each):

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Your Clerk publishable key (`pk_test_...`) |
| `CLERK_SECRET_KEY` | Your Clerk secret key (`sk_test_...`) |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | `/sign-in` |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | `/sign-up` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | `/dashboard` |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | `/dashboard` |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL (`https://xxx.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key (`eyJ...`) |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key (`eyJ...`) |
| `NEXT_PUBLIC_APP_URL` | Leave empty for now (Vercel will provide URL) |

4. Click **"Deploy"**

### Step 5.4: Wait for deployment

1. Vercel will build and deploy your project
2. This takes 1-3 minutes
3. When complete, you'll see a green checkmark and a URL

### Step 5.5: Update Clerk with production URL

1. Copy your Vercel URL (e.g., `https://sg-maison.vercel.app`)
2. Go back to Clerk dashboard → **"Paths"**
3. Under "Production", update:
   - Add your Vercel domain to allowed origins
4. Go to Clerk dashboard → **"Domains"**
5. Click **"Add domain"**
6. Enter your Vercel URL (without `https://`)

**Success indicator:** Your Vercel dashboard shows a successful deployment with a live URL.

---

## 6. Configure Environment Variables

### For local development

1. In your project folder, copy the example file:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` in a text editor

3. Fill in all the values you collected:
   - Clerk keys from Step 3.3
   - Supabase values from Step 4.3

4. Save the file

### Important notes

- **Never commit `.env.local` to GitHub** - it's in `.gitignore` for this reason
- **Each environment (local, staging, production) needs its own keys**
- For production, use Clerk and Supabase "live" or "production" keys

---

## 7. Verify Everything Works

### Test locally

1. Open Terminal in your project folder
2. Run:
   ```bash
   npm install
   npm run dev
   ```
3. Open http://localhost:3000
4. You should see the landing page
5. Click "Sign In" - you should see the Clerk sign-in form
6. Create an account
7. After signing in, you should land on `/dashboard`

### Test production

1. Visit your Vercel URL (e.g., `https://sg-maison.vercel.app`)
2. Repeat the same test: landing page → sign in → dashboard

### Troubleshooting

**"Clerk: Invalid API key" error**
- Double-check your Clerk keys in Vercel environment variables
- Make sure there are no extra spaces or line breaks
- Redeploy after fixing

**Sign-in not redirecting to dashboard**
- Check Clerk dashboard → Paths → After sign-in URL is `/dashboard`

**Supabase connection errors**
- Check your Supabase project is healthy (not paused)
- Verify the URL and keys are correct

**Build fails on Vercel**
- Click on the deployment to see error logs
- Common issue: missing environment variables

---

## Environment Variables Checklist

| Variable | Where to Get It | Used For |
|----------|-----------------|----------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk dashboard → API Keys | Client-side auth |
| `CLERK_SECRET_KEY` | Clerk dashboard → API Keys | Server-side auth |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Set to `/sign-in` | Auth routing |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Set to `/sign-up` | Auth routing |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | Set to `/dashboard` | Post-auth redirect |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | Set to `/dashboard` | Post-auth redirect |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase dashboard → Settings → API | Database connection |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase dashboard → Settings → API | Client-side queries |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase dashboard → Settings → API | Server-side admin |

---

## What's Next?

After completing this setup:

1. ✅ GitHub repo is live
2. ✅ Clerk authentication works
3. ✅ Supabase is connected
4. ✅ Vercel deployment is running

**Next development sessions will cover:**
- Setting up Stape server-side tracking
- Configuring BigQuery data warehouse
- Building dashboard modules (Conversion Tracker, Integration Hub, etc.)
- Setting up Fivetran data pipelines

---

*Last updated: December 2024*
