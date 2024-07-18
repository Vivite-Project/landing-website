# Vivite Landing
Landing page of the Vivite Website

## Dependencies
-Yarn\
-Docker compose (Production)

## Installation
Remove .example files and use:
```
yarn install
```

## Usage
```
#Development
docker compose up --build

#Production
docker compose -f "compose.prod.yml" up --build
```