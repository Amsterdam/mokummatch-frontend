FROM node:16-alpine AS development
# Args
ARG PROJECT_NAME="armen-ineen"
ARG WORKDIR_PATH="/app"
ARG REACT_CONTAINER_PORT=3000

# Env
ENV NODE_ENV development

# Add a work directory
WORKDIR "${WORKDIR_PATH}"

# Cache and Install dependencies
COPY package.json "${WORKDIR_PATH}"
COPY yarn.lock "${WORKDIR_PATH}"
RUN cd /app \
    && yarn install --pure-lockfile
 
# Copy app files
COPY . ./

# add to path
ENV PATH /app/node_modules/.bin:$PATH

# Expose port
EXPOSE "${REACT_CONTAINER_PORT}"

# Start the app
CMD [ "yarn", "start" ]

