include ../docker-makefile

build-prelive: package-prelive build

build-production: package-production build

package-prelive:
	cd ../../ && npm install -q --no-color --no-progress
	cd ../../ && npm run server:prelive
	cd ../../ && npm prune --production
	rm -f app.tgz
	tar -cz --exclude="./.idea" -f app.tgz -C ../../ dist config node_modules package.json
	cd ../../ && npm install -q --no-color --no-progress

package-production:
	cd ../../ && npm install -q --no-color --no-progress
	cd ../../ && npm run server:production
	cd ../../ && npm prune --production
	rm -f app.tgz
	tar -cz --exclude="./.idea" -f app.tgz -C ../../ dist config node_modules package.json
	cd ../../ && npm install -q --no-color --no-progress
