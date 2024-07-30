#!/bin/bash

echo "Setting up local environment..."

# Use the node version specified in .nvmrc
# shellcheck disable=SC1090
source ~/.nvm/nvm.sh  # Adjust the path if your nvm installation is in a different location
nvm use

# Copy the example environment file if it doesn't exist
if [ ! -e ".env" ] ; then
    echo "Copying env..."
    cp .env.example .env
fi

echo "Local environment setup complete."

npm run update-version
