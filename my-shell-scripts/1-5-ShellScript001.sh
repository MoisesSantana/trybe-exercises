#!/bin/bash

echo 'Olá Tryber, estamos criando um arquivo .txt'

echo -e '\nAguarde um instante ...'; sleep 1; echo '\'; sleep 1; echo '|'; sleep 1; echo '-'; sleep 1; echo '/'; sleep 1; echo '-';

echo -e 'Digite o que deseja, para quebra de linha [return] para salvar [ctrl d]: \n'

cat > NovoDocumento.txt # > sobrescreve valor do arquivo, caso esteja em branco (que é o caso) criar um arquivo novo, com as orientações do echo logo em cima

echo 'Aguarde enquanto copiamos o arquivo para uma pasta backup'

mkdir backup_tryber # Cria uma nova pasta
cp NovoDocumento.txt ./backup_tryber/NovoDocumento-backup.txt # Copia o 'NovoDocumento.txt para a pasta (backup_tryber) com o nome 'NovoDocumento-backup.txt

echo 'Backup realizado com sucesso!'