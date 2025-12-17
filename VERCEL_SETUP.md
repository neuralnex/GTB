# Vercel Setup Guide

## Vercel KV Configuration

This application uses Vercel KV (Redis) for data storage instead of file system, which is required for Vercel's serverless functions.

### Setup Steps:

1. **Install Vercel KV in your Vercel project:**
   - Go to your Vercel project dashboard
   - Navigate to **Storage** tab
   - Click **Create Database**
   - Select **KV** (Redis)
   - Create the database

2. **Environment Variables:**
   Vercel will automatically add these environment variables:
   - `KV_URL` - Redis connection URL
   - `KV_REST_API_URL` - REST API URL
   - `KV_REST_API_TOKEN` - REST API token
   - `KV_REST_API_READ_ONLY_TOKEN` - Read-only token

3. **Deploy:**
   - Push your code to GitHub
   - Vercel will automatically deploy
   - The form submission will now work!

### Local Development:

For local development, you can either:
- Use Vercel CLI: `vercel dev` (automatically uses your Vercel environment)
- Or create a `.env.local` file with your KV credentials from Vercel dashboard

### Migration from File System:

If you had data in the Excel file, you can migrate it by:
1. Exporting the Excel data to JSON
2. Using the admin page to manually add entries, or
3. Creating a migration script to import the data

### Notes:

- Data is now stored in Vercel KV (Redis) instead of Excel files
- All CRUD operations (Create, Read, Delete) work the same way
- Data persists across deployments
- No file system access needed

