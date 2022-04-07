FROM node:16-alpine as build

# install dependencies
WORKDIR /app
COPY package.json yarn.lock .
RUN yarn install

# Copy all local files into the image.
COPY . .

RUN yarn build

# final image
FROM node:16-alpine

WORKDIR /app
COPY --from=build /app/build .
COPY package.json .

CMD ["node", "."]
