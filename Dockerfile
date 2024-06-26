# syntax=docker/dockerfile:1.5.2
# based on: https://github.com/vercel/turbo/blob/main/examples/with-docker/apps/api/Dockerfile

FROM node:20.2-alpine3.17 as base

# adding apk deps to avoid node-gyp related errors and some other stuff. adds turborepo globally
RUN apk add -f --update --no-cache --virtual .gyp nano bash libc6-compat python3 make g++ \
    && yarn global add turbo \
    && apk del .gyp

#############################################
FROM base AS pruned
WORKDIR /app
ARG APP

COPY . .

# see https://turbo.build/repo/docs/reference/command-line-reference#turbo-prune---scopetarget
RUN turbo prune --scope=$APP --docker

#############################################
FROM base AS installer
WORKDIR /app
ARG APP

COPY --from=pruned /app/out/json/ .
COPY --from=pruned /app/out/yarn.lock /app/yarn.lock

# Forces the layer to recreate if the app's package.json changes
COPY apps/${APP}/package.json /app/apps/${APP}/package.json

# see https://github.com/moby/buildkit/blob/master/frontend/dockerfile/docs/reference.md#run---mounttypecache
RUN \
    --mount=type=cache,target=/usr/local/share/.cache/yarn/v6,sharing=locked \
    yarn --prefer-offline --frozen-lockfile

COPY --from=pruned /app/out/full/ .
COPY turbo.json turbo.json

# For example: `--filter=frontend^...` means all of frontend's dependencies will be built, but not the frontend app itself (which we don't need to do for dev environment)
RUN turbo run build --no-cache --filter=${APP}^...

# re-running yarn ensures that dependencies between workspaces are linked correctly
RUN \
    --mount=type=cache,target=/usr/local/share/.cache/yarn/v6,sharing=locked \
    yarn --prefer-offline --frozen-lockfile

#############################################
FROM base AS runner
WORKDIR /app
ARG APP
ARG START_COMMAND=dev

COPY --from=installer /app .

CMD yarn workspace ${APP} ${START_COMMAND}