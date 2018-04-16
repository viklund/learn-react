#!/bin/bash

if [ "$#" -eq 0 ] || [ ! -d "$1" ]; then
    echo -e "Usage:\n $0 name-of-app"
    exit 1
fi

docker run -p 3000:3000 -v "$(pwd)/$1":/code --rm -ti react-tutorial yarn start
