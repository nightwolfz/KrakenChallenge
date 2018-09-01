FROM node:9
RUN mkdir -p /opt/app

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT 3000 3001 27017

WORKDIR /opt
COPY package.json ./
RUN npm install
RUN npm install --only=dev
ENV PATH /opt/node_modules/.bin:$PATH

# copy in our source code last, as it changes the most
WORKDIR /opt/app
COPY . /opt/app


CMD [ "node", "./bin/www" ]

#ENV PATH /www/node_modules/.bin:$PATH

# Copy app source code
#COPY . .
#Expose port and start application
#EXPOSE 3000
#EXPOSE 3001
#COPY . /www/
#WORKDIR /www/
#CMD ["node", "."]
