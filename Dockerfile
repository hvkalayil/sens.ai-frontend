# --- Build stage ---
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (leverage Docker layer cache)
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate \
  && pnpm install --frozen-lockfile

# Copy the rest of the source and build
COPY . .
RUN pnpm build

# --- Runtime stage ---
FROM nginx:alpine AS runner

# Copy built assets to Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default Nginx conf and add a minimal one (optional)
# If you need SPA fallback, uncomment below and add the config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


