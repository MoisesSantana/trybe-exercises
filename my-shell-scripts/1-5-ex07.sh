#!/bin/bash

echo 'Digite o caminho para o diretório na linha abaixo:'
read FPATH

if [ -d $FPATH ]; then
    echo "O $FPATH tem `ls $FPATH | wc -l` arquivos"
else
    echo "O argumento $FPATH não é um diretório!"
fi