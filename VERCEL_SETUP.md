# Redis Setup Guide

This application uses Redis for data storage instead of file system, which is required for Vercel's serverless functions.

## Setup Steps:

### 1. Environment Variable Configuration

Add your Redis URL as an environment variable:

**For Vercel:**
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name:** `REDIS_URL`
   - **Value:** Your Redis connection string
   - **Environment:** Production, Preview, Development (select all)
4. Click **Save**

**For Local Development:**
1. Create a `.env.local` file in the project root
2. Add your Redis URL:
   ```
   REDIS_URL="redis://default:zfTVPsWfq7rK1EgEjujMz3yrgqSVkNkO@redis-18335.c278.us-east-1-4.ec2.cloud.redislabs.com:18335"
   ```

### 2. Redis Provider Options:

You can use any Redis provider:
- **Redis Labs** (Cloud Redis) - Already configured
- **Upstash** - Free tier available
- **Vercel KV** - Integrated with Vercel
- **Self-hosted Redis** - Your own Redis instance

### 3. Deploy:

1. Push your code to GitHub
2. Make sure `REDIS_URL` is set in Vercel environment variables
3. Vercel will automatically deploy
4. The form submission will now work!

### 4. Local Development:

1. Copy `.env.example` to `.env.local`
2. Update `REDIS_URL` with your Redis connection string
3. Run `pnpm dev`
4. The app will connect to your Redis instance

### Notes:

- Data is stored in Redis instead of Excel files
- All CRUD operations (Create, Read, Delete) work the same way
- Data persists across deployments
- No file system access needed
- The Redis URL is already configured in the code as a fallback

