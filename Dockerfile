FROM node:lts-alpine AS build

WORKDIR /app

# Install dependencies for sharp and build tools
RUN apk add --no-cache vips-dev python3 make g++

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx:alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
