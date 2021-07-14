FROM node:lts as dependencies
WORKDIR /app
COPY ./beer-buddy-nx/package.json ./package.json
RUN npm install --save-dev

FROM node:lts as builder
WORKDIR /app
COPY ./beer-buddy-nx ./
COPY --from=dependencies /app/node_modules/ ./node_modules
COPY --from=dependencies /app/package.json/ ./package.json
RUN npm run build

FROM node:lts as runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/dist/apps/beer-buddy/next.config.js ./next.config.js
COPY --from=builder /app/dist/apps/beer-buddy/public ./public
COPY --from=builder /app/dist/apps/beer-buddy/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 4200
CMD ["npm", "run", "start"]
