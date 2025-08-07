FROM node:lts as dependencies
WORKDIR /dynamic-env
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /dynamic-env
COPY . .
COPY --from=dependencies /dynamic-env/node_modules ./node_modules
COPY .docker/.env .env
RUN yarn build

FROM node:lts as runner
WORKDIR /dynamic-env
ENV NODE_ENV production

COPY --from=builder /dynamic-env/public ./public
COPY --from=builder /dynamic-env/package.json ./package.json
COPY --from=builder /dynamic-env/.next ./.next
COPY --from=builder /dynamic-env/node_modules ./node_modules
COPY .docker/docker-entrypoint.sh /usr/local/bin/

# Set the entrypoint to the newly added script.
ENTRYPOINT ["sh", "/usr/local/bin/docker-entrypoint.sh"]

EXPOSE 6600
CMD ["yarn", "start"]