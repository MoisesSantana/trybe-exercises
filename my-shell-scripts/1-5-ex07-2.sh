#!/bin/bash

if [ -d $1 ]; then

#ls -d .../*/ (display only directories) - https://www.cyberciti.biz/faq/linux-list-just-directories-or-directory-names/

#ls -p | grep -v / (display only files) - https://askubuntu.com/questions/811210/how-can-i-make-ls-only-display-files (thomasrutter)

    echo -e "O caminho $1 tem: \n >>>`ls -p $1 | grep -v / | wc -l` arquivos \n >>>`ls -ld $1*/ | wc -l` diretórios \n dando um total de >>> `ls $1 | wc -l` items"
else
    echo "O parâmetro $1 não é um diretóro!"
fi