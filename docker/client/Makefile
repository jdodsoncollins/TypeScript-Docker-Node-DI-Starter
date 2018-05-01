include ../docker-makefile

build-prelive: package-prelive build

build-production: package-production build

package-prelive:
	cd ../../ && npm install -q --no-color --no-progress
	cd ../../ && npm run client:prelive
	rm -f app.tgz
	tar -cz --exclude="./.idea" -f app.tgz -C ../../ dist

package-production:
	cd ../../ && npm install -q --no-color --no-progress
	cd ../../ && npm run client:production
	rm -f app.tgz
	tar -cz --exclude="./.idea" -f app.tgz -C ../../ dist
