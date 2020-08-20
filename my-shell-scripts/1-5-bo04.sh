#!/bin/bash


if [ -d $1 ]; then
    cd $1
    for i in `ls *.png`; do
        echo -e "Esses são seus arquivos .png antes da alteração: \n `ls *png` \n"
        read -p "pressione [enter] para continuar"
        mv $i `date +%F$i`
        clear
        echo -e "Alteração realizada com sucesso: \n `ls *png` \n"
        read -p "pressione [enter] para sair desta tela."
    done
else
    echo "$1 não é um diretório"
fi