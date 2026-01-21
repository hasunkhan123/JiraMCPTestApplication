#!/usr/bin/env bash
set -e

echo "🚀 Starting Codex Jira Companion demo..."

# Ensure .env exists
if [ ! -f .env ]; then
  echo "🔧 Creating .env from .env.example"
  cp .env.example .env
fi

echo "📦 Installing dependencies"
npm install

echo "🗄️ Running database migrations"
npx prisma migrate dev --name init --skip-generate

echo "🌱 Seeding database"
npx prisma db seed

echo "▶️ Starting dev server"
npm run dev