#!/bin/bash
read -p "Digite o caminho a qual queira datar suas imagens PNG para o dia de hoje: " DPATH

if [ -d $DPATH ]; then
    cd $DPATH
    for i in `ls *.png`; do
        mv $i `date +%F$i`
    done
else
    echo "$DPATH não é um diretório"
fi