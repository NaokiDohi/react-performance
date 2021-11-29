DOCKER ?= docker
API ?= task

.PHONY: build
build:
	$(DOCKER)-compose build

.PHONY: build-up
build-up:
	$(DOCKER)-compose up -d --build

.PHONY: up
up:
	$(DOCKER)-compose up -d

.PHONY: down
down:
	$(DOCKER)-compose down

.PHONY: exec-api
exec-api:
	$(DOCKER)-compose exec api /bin/bash

.PHONY: exec-front
exec-front:
	docker-compose exec node /bin/bash
	
.PHONY: run-api
run-api:
	$(DOCKER)-compose run --rm api sh -c "mkdir api && \
	django-admin startproject config api && cd api && django-admin startapp $(API)"

.PHONY: pip
pip:
	$(DOCKER)-compose run --rm api pip freeze

.PHONY: run-front
run-front:
	$(DOCKER)-compose run --rm node npx create-react-app front --template redux-typescript

.PHONY: yarn-add
yarn-add:
	$(DOCKER)-compose run --rm node sh -c "cd front && \
	yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 && \
	yarn add axios@0.21.1 &&\
	yarn add @craco/craco &&\
	yarn add react-query@^3.33.7 &&\
	yarn add react-query-devtools &&\
	yarn add react-router-dom &&\
	yarn add @types/react-router-dom &&\
	yarn add axios@0.21.1 &&\
	yarn add @heroicons/react"

.PHONY: front-setup
front-setup:
	$(DOCKER)-compose run --rm node sh -c "cd front && \
	touch craco.config.js && npx tailwindcss init -p &&\
	touch .prettierrc"