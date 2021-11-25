DOCKER ?= docker
API ?= todo

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
	$(DOCKER)-compose run --rm node npx create-react-app front

.PHONY: yarn-add
yarn-add:
	$(DOCKER)-compose run --rm node sh -c "cd front && yarn add axios"