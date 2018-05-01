default: build

reload-nginx:
	docker-compose kill -s HUP nginx

prelive:
	npm run set-config:prelive

dev:
	npm run set-config:dev

production:
	npm run set-config:production

build-production:
	cd docker/client && make build-production push
	cd docker/server && make build-production push

build-prelive:
	cd docker/client && make build-prelive push
	cd docker/server && make build-prelive push

clean: stop
	docker-compose rm

down:
	docker-compose down

pull:
	docker-compose pull

push:
	docker-compose push

rebuild: down pull build start-force-recreate

restart: stop start

start: build
	docker-compose up -d
	docker-compose ps

start-force-recreate: build
	docker-compose up -d --force-recreate
	docker-compose ps

stats:
	docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.MemPerc}}\t{{.NetIO}}\t{{.BlockIO}}" --no-stream

stats-stream:
	docker stats --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.MemPerc}}\t{{.NetIO}}\t{{.BlockIO}}"

status:
	docker-compose ps

stop:
	docker-compose stop

tail:
	docker-compose logs -f

top:
	docker-compose top


.PHONY: build clean down pull push rebuild restart start stats stats-stream stop tail top
