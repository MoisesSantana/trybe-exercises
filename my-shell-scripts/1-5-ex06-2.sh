#!/bin/bash

if [ -d $1 ]
then
    echo -e "\n >$1 é um diretório"
elif [ -f $1 ]
then
    echo -e "\n >$1 é um arquivo"
else
    echo -e "\n >$1 pode ser um tipo de arquivo incomum"
fi

if [ -d $1 ] || [ -f $1 ]
then
    echo -e "\n >Listagem de $1 \n `ls -l $1`"
fi