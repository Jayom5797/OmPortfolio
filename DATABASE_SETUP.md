# PostgreSQL Database Setup

This guide will help you set up PostgreSQL on Railway for your portfolio.

## 🚂 Railway Setup

### 1. Create Railway Account
1. Go to [railway.app](https://railway.app/)
2. Sign up with GitHub
3. Create a new project

### 2. Add PostgreSQL Database
1. Click "New" → "Database" → "Add PostgreSQL"
2. Wait for provisioning (takes ~30 seconds)
3. Database is ready!

### 3. Get Connection String
1. Click on your PostgreSQL service
2. Go to "Connect" tab
3. Copy the "Postgres Connection URL"
4. It looks like: `postgresql://postgres:password@containers-us-west-123.railway.app:5432/railway`

### 4. Add to Environment Variables
Add to your `.env.local`:
```env
DATABASE_URL=postgresql://postgres:password@containers-us-west-123.railway.app:5432/railway
ADMIN_SECRET_KEY=your_secure_random_string_here
```

## 🗄️ Initialize Database Tables

### Method 1: Using API Endpoint (Recommended)
Once your app is running:

```bash
curl -X POST http://localhost:8888/api/db/init \
  -H "Content-Type: application/json" \
  -d '{"adminKey":"your_admin_secret_key"}'
```

### Method 2: Using Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Link to your project
railway link

# Run SQL directly
railway run psql $DATABASE_URL -f scripts/init-db.sql
```

### Method 3: Using Railway Dashboard
1. Go to your PostgreSQL service in Railway
2. Click "Data" tab
3. Click "Query"
4. Copy and paste contents of `scripts/init-db.sql`
5. Click "Run"

## 📊 Database Schema

### Tables Created

**likes**
- `id` - Auto-incrementing primary key
- `name` - User's name (UNIQUE)
- `liked_at` - Timestamp

**comments**
- `id` - Auto-incrementing primary key
- `author` - Commenter's name
- `comment` - Comment text
- `avatar` - Avatar number (1-10)
- `created_at` - Timestamp
- `is_approved` - Boolean (default: false)

**contacts**
- `id` - Auto-incrementing primary key
- `name` - Sender's name
- `email` - Sender's email
- `message` - Message content
- `created_at` - Timestamp

## 🔌 API Endpoints

### Likes
- `GET /api/likes` - Get all likes
- `POST /api/likes` - Add a like (body: `{ name: string }`)

### Comments
- `GET /api/comments` - Get approved comments
- `POST /api/comments` - Add comment (body: `{ name, comment, avatar }`)
- `GET /api/comments/approve?adminKey=KEY` - Get all comments (admin)
- `POST /api/comments/approve` - Approve comment (body: `{ commentId, adminKey }`)

### Contact
- `POST /api/contact` - Submit contact form (body: `{ name, email, message }`)

### Database
- `POST /api/db/init` - Initialize tables (body: `{ adminKey }`)

## 🧪 Testing

### Test Database Connection
```bash
# Using psql
psql $DATABASE_URL

# Check tables
\dt

# View likes
SELECT * FROM likes;

# View comments
SELECT * FROM comments;
```

### Test API Endpoints
```bash
# Add a like
curl -X POST http://localhost:8888/api/likes \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe"}'

# Get likes
curl http://localhost:8888/api/likes

# Add a comment
curl -X POST http://localhost:8888/api/comments \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane","comment":"Great work!","avatar":3}'
```

## 🚀 Deployment

### Vercel
1. Add `DATABASE_URL` to Vercel environment variables
2. Add `ADMIN_SECRET_KEY` to Vercel environment variables
3. Deploy!

### Railway (Full Stack)
1. Connect your GitHub repo
2. Railway will auto-detect Next.js
3. Add environment variables in Railway dashboard
4. Deploy!

## 🔒 Security

### Production Checklist
- ✅ Use strong `ADMIN_SECRET_KEY`
- ✅ Enable SSL for database connection
- ✅ Use environment variables (never commit credentials)
- ✅ Set up database backups in Railway
- ✅ Monitor database usage

### Railway Security Features
- Automatic SSL/TLS encryption
- Private networking
- Automatic backups
- DDoS protection

## 📈 Monitoring

### Railway Dashboard
- View database metrics
- Monitor connection count
- Check storage usage
- View query performance

### Logs
```bash
# View API logs
railway logs

# View database logs
railway logs --service postgres
```

## 🛠️ Maintenance

### Backup Database
```bash
# Export data
pg_dump $DATABASE_URL > backup.sql

# Restore data
psql $DATABASE_URL < backup.sql
```

### Clear Data
```sql
-- Clear all likes
TRUNCATE TABLE likes RESTART IDENTITY CASCADE;

-- Clear all comments
TRUNCATE TABLE comments RESTART IDENTITY CASCADE;

-- Clear all contacts
TRUNCATE TABLE contacts RESTART IDENTITY CASCADE;
```

### View Statistics
```sql
-- Count likes
SELECT COUNT(*) FROM likes;

-- Count approved comments
SELECT COUNT(*) FROM comments WHERE is_approved = true;

-- Recent contacts
SELECT * FROM contacts ORDER BY created_at DESC LIMIT 10;
```

## ❓ Troubleshooting

### Connection Issues
- Check `DATABASE_URL` is correct
- Verify Railway database is running
- Check firewall/network settings

### Table Not Found
- Run database initialization
- Check table names are lowercase
- Verify SQL script ran successfully

### Duplicate Key Errors
- This is expected for duplicate likes (same name)
- API handles this gracefully

## 📚 Resources

- [Railway Docs](https://docs.railway.app/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [node-postgres (pg) Docs](https://node-postgres.com/)

---

Last Updated: December 25, 2024
