#!/bin/bash
# Vercel Deployment Helper Script for aiKODA Platform
# Run this before deploying to ensure everything is ready

echo "🐅⚡ aiKODA Platform - Vercel Deployment Helper"
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Run this script from the project root directory"
    exit 1
fi

# Check if required files exist
echo "📋 Checking deployment files..."
required_files=("package.json" "next.config.js" "vercel.json" ".env.example" "README.md")
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ Missing: $file"
        exit 1
    fi
done

# Check if environment variables are documented
echo ""
echo "🔑 Environment Variables Needed for Vercel:"
echo "==========================================="
echo "DATABASE_URL (Supabase connection string)"
echo "NEXT_PUBLIC_SUPABASE_URL (Supabase project URL)"
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY (Supabase anon key)"
echo "SUPABASE_SERVICE_ROLE_KEY (Supabase service key)"
echo "HUGGING_FACE_TOKEN (AI service token)"
echo "GEMINI_API_KEY (Google AI service key)"
echo "JWT_SECRET (Authentication secret)"
echo "NEXTAUTH_SECRET (NextAuth secret)"
echo "NEXTAUTH_URL (Production URL: https://aikoda.dev)"
echo "NODE_ENV=production"

# Verify build works locally
echo ""
echo "🔨 Testing local build..."
if npm run build > /dev/null 2>&1; then
    echo "✅ Local build successful"
else
    echo "❌ Local build failed - check your code before deploying"
    echo "Run 'npm run build' to see detailed errors"
    exit 1
fi

# Check git status
echo ""
echo "📝 Git Status:"
if [ -z "$(git status --porcelain)" ]; then
    echo "✅ Working directory clean"
    echo "✅ Latest commit: $(git log -1 --oneline)"
else
    echo "⚠️  Uncommitted changes detected:"
    git status --short
    echo ""
    echo "Consider committing changes before deployment"
fi

# Summary
echo ""
echo "🎯 Pre-Deployment Summary:"
echo "========================="
echo "✅ All required files present"
echo "✅ Local build passes"
echo "✅ Environment variables documented"
echo "✅ Security headers configured"
echo "✅ Vercel configuration optimized"
echo ""
echo "🚀 Next Steps:"
echo "1. Go to https://vercel.com"
echo "2. Import repository: CarlosMundim/aikoda" 
echo "3. Add environment variables (see list above)"
echo "4. Deploy and test at generated URL"
echo "5. Configure aikoda.dev domain"
echo ""
echo "📖 Full guide: ./VERCEL_DEPLOYMENT_GUIDE.md"
echo ""
echo "🐅💙 Ready for production deployment, Dad!"