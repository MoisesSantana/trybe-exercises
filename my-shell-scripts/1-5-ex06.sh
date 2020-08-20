#!/bin/bash

#echo 'Digite o caminho até o arquivo desejado na linha abaixo:'
#read FPATH
if [  -d $1 ]; then
    echo 'Diretório'
elif [ -f $1 ]; then
    echo 'Arquivo comum'
else
    echo 'Outro tipo de arquivo'
fi