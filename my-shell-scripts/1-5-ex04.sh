#!/bin/bash

FPATH="/home/larissa/trybe/1-5-trybe/teste"

if [ -e $FPATH ]; then
    echo "O caminho $FPATH está habilitado!"
elif [ -w  $FPATH ]; then
    echo "Você tem permissão para editar $FPATH"
else
    echo "Você NÃO foi autorizado a editar $FPATH"
fi
