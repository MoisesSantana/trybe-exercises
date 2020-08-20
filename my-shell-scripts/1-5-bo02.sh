#!/bin/bash
for i in $*; do
    if [ -d $i ]
    then
        echo -e "\n >$i é um diretório"
    elif [ -f $i ]
    then
        echo -e "\n >$i é um arquivo"
    else
        echo -e "\n >$i pode ser um tipo de arquivo incomum"
    fi

    if [ -d $i ] || [ -f $i ]
    then
        echo -e "\n >Listagem de $i \n `ls -l $i`"
    fi
done