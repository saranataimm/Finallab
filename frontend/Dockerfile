FROM node:14.9

# WORKDIR /app 
WORKDIR /app 
COPY package*.json ./

RUN npm install

COPY . .
# EXPOSE 3000
EXPOSE 3000

VOLUME ["/app"]

CMD ["npm", "start"]