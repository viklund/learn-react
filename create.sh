#!/bin/bash

if [ "$#" -eq 0 ]; then
    echo -e "Usage:\n $0 name-of-app"
    exit 1
fi

docker run -p 3000:3000 -v `pwd`:/code --rm -ti react-tutorial create-react-app $1
