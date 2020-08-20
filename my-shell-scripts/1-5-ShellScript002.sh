#!/bin/bash

#padrão de nome de variável em uppercase

#primeira variável
VAR1=`whoami` # comandos dentro de ``

echo $VAR1 # Chamava variável com $

#segunda variável
VAR2=whoami
echo $VAR2

#tercerira variável
VAR3="Eu estou logado como `whoami`" # comando dentro de `` pode ser inserido dentro de uma string COM ASPAS DUPLAS
echo $VAR3

#quarta variável
VAR4='Eu estou logado como whoami' #strings podem ser criadas com aspas simples, desde que NÁO tenha comando dentro da mesma.
echo $VAR4