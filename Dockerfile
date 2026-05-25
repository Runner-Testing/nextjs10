# FlazHost PaaS - Next.js production image
FROM node:20-alpine

WORKDIR /app

# Install dependencies (lockfile-based, reproducible)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# CapRover routes traffic to container port 80
ENV PORT=80
ENV NODE_ENV=production
EXPOSE 80

CMD ["npm", "start"]
