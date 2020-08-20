#!/bin/bash

echo 'Digite o caminho até o arquivo desejado na linha abaixo:'
read FPATH
if [  -d $FPATH ]; then
    echo 'Diretório'
elif [ -f $FPATH ]; then
    echo 'Arquivo comum'
else
    echo 'Outro tipo de arquivo'
fi