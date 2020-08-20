#!/bin/bash

declare -i LIFES=10

clear
echo "####### MOLASSIO'S QUIZ #######"
echo `sleep 1`
read -p "Please enter your name: " NAME
echo `sleep 1`
echo -e "Welcome $NAME! \n You have "$LIFES" lifes \n `sleep 1`"
sleep 1
read -p "press [return] to continue"
#Q1
clear
echo "####### MOLASSIO'S QUIZ #######"
echo `sleep 1`
echo "name: $NAME | lifes: "$LIFES
echo `sleep 1`
echo -e "What is the name of the creator of the linux kernel? \n"
echo "(1) Richard Stallman"
echo "(2) Linus Torvalds"
echo -e "(3) Mark Shuttleworth \n"
read -p ">>>" Q1
if [ $Q1 -ne 2 ]; then
    LIFES=`expr $LIFES - 1`
    echo -e "\n The answer is";`sleep 3`;echo "Incorrect! :("
    read -p "press [return] to continue"
else
    echo -e "\n The answer is";`sleep 3`;echo "Correct! :)"
    read -p "press [return] to continue"
fi
#Q2
clear
echo "####### MOLASSIO'S QUIZ #######"
echo `sleep 1`
echo "name: $NAME | lifes: "$LIFES
echo `sleep 1`
echo -e "What is the name of the Linux penguin? \n"
echo "(1) Penguix"
echo "(2) Linguix"
echo -e "(3) Tux \n"
read -p ">>>" Q2

if [ $Q2 -ne 3 ]; then
    LIFES=`expr $LIFES - 1`
    echo -e "\n The answer is";`sleep 3`;echo "Incorrect! :("
    read -p "press [return] to continue"
else
    echo -e "\n The answer is";`sleep 3`;echo "Correct! :)"
    read -p "press [return] to continue"
fi
#Q3
clear
echo "####### MOLASSIO'S QUIZ #######"
echo `sleep 1`
echo "name: $NAME | lifes: "$LIFES
echo `sleep 1`
echo -e "How do I create a 'hello my friend' directory? \n"
echo "(1) mkdir 'directory'"
echo "(2) mkdr hello\ my\ friend"
echo -e "(3) mkdir 'hello my friend' \n"
read -p ">>>" Q3

if [ $Q3 -ne 3 ]; then
    LIFES=`expr $LIFES - 1`
    echo -e "\n The answer is";`sleep 3`;echo "Incorrect! :("
    read -p "press [return] to continue"
else
    echo -e "\n The answer is";`sleep 3`;echo "Correct! :)"
    read -p "press [return] to continue"
fi
#Q4
clear
echo "####### MOLASSIO'S QUIZ #######"
echo `sleep 1`
echo "name: $NAME | lifes: "$LIFES
echo `sleep 1`
echo -e "How do I create an empty .txt file? \n"
echo "(1) touch file.txt"
echo "(2) toch empty.txt"
echo -e "(3) toch blank.txt \n"
read -p ">>>" Q4

if [ $Q4 -ne 1 ]; then
    LIFES=`expr $LIFES - 1`
    echo -e "\n The answer is";`sleep 3`;echo "Incorrect! :("
    read -p "press [return] to continue"
else
    echo -e "\n The answer is";`sleep 3`;echo "Correct! :)"
    read -p "press [return] to continue"
fi
#Q5
clear
echo "####### MOLASSIO'S QUIZ #######"
echo `sleep 1`
echo "name: $NAME | lifes: "$LIFES
echo `sleep 1`
echo -e "which of these linux distribution is brazilian? \n"
echo "(1) Ubuntu"
echo "(2) Slackware"
echo -e "(3) Big Linux \n"
read -p ">>>" Q5

if [ $Q5 -ne 3 ]; then
    LIFES=`expr $LIFES - 1`
    echo -e "\n The answer is";`sleep 3`;echo "Incorrect! :("
    read -p "press [return] to continue"
else
    echo -e "\n The answer is";`sleep 3`;echo "Correct! :)"
    read -p "press [return] to continue"
fi
#Q6
clear
echo "####### MOLASSIO'S QUIZ #######"
echo `sleep 1`
echo "name: $NAME | lifes: "$LIFES
echo `sleep 1`
echo -e "HTML is a...? \n"
echo "(1) Programming language"
echo "(2) Hypertext markup language"
echo -e "(3) Hypertext transfer protocol \n"
read -p ">>>" Q6

if [ $Q6 -ne 2 ]; then
    LIFES=`expr $LIFES - 1`
    echo -e "\n The answer is";`sleep 3`;echo "Incorrect! :("
    read -p "press [return] to continue"
else
    echo -e "\n The answer is";`sleep 3`;echo "Correct! :)"
    read -p "press [return] to continue"
fi
#Q7
clear
echo "####### MOLASSIO'S QUIZ #######"
echo `sleep 1`
echo "name: $NAME | lifes: "$LIFES
echo `sleep 1`
echo -e "Which of these programming languages ​​was created by a Brazilian? \n"
echo "(1) Ruby"
echo "(2) INTERCAL"
echo -e "(3) Lua \n"
read -p ">>>" Q7

if [ $Q7 -ne 3 ]; then
    LIFES=`expr $LIFES - 1`
    echo -e "\n The answer is";`sleep 3`;echo "Incorrect! :("
    read -p "press [return] to continue"
else
    echo -e "\n The answer is";`sleep 3`;echo "Correct! :)"
    read -p "press [return] to continue"
fi
#Q8
clear
echo "####### MOLASSIO'S QUIZ #######"
echo `sleep 1`
echo "name: $NAME | lifes: "$LIFES
echo `sleep 1`
echo -e "What is the bsd mascot name? \n"
echo "(1) Beto"
echo "(2) Angel"
echo -e "(3) Beastie \n"
read -p ">>>" Q8

if [ $Q8 -ne 3 ]; then
    LIFES=`expr $LIFES - 1`
    echo -e "\n The answer is";`sleep 3`;echo "Incorrect! :("
    read -p "press [return] to continue"
else
    echo -e "\n The answer is";`sleep 3`;echo "Correct! :)"
    read -p "press [return] to continue"
fi
#Q9
clear
echo "####### MOLASSIO'S QUIZ #######"
echo `sleep 1`
echo "name: $NAME | lifes: "$LIFES
echo `sleep 1`
echo -e "Who created slackware? \n"
echo "(1) Ian Murdock"
echo "(2) Patrick Volkerding"
echo -e "(3) Marc Andreessen \n"
read -p ">>>" Q9
echo $Q9
if [ $Q9 -ne 2 ]; then
    LIFES=`expr $LIFES - 1`
    echo -e "\n The answer is";`sleep 3`;echo "Incorrect! :("
    read -p "press [return] to continue"
else
    echo -e "\n The answer is";`sleep 3`;echo "Correct! :)"
    read -p "press [return] to continue"
fi
#Q10
clear
echo "####### MOLASSIO'S QUIZ #######"
echo `sleep 1`
echo "name: $NAME | lifes: "$LIFES
echo `sleep 1`
echo -e "Who did this quiz? \n"
echo "(1) Matheus Santana"
echo "(2) Moisés Santana"
echo -e "(3) Luan Santana \n"
read -p ">>>" Q10

if [ $Q10 -ne 2 ]; then
    LIFES=0
    echo -e "\n The answer is";`sleep 3`;echo "Poxa ai já passou dos limites, vou zerar sua vida >:("
    read -p "press [return] to continue"
else
    echo -e "\n The answer is";`sleep 3`;echo "Correct! :)"
    read -p "press [return] to continue"
fi
##### FINALIZANDO ######
clear
echo "####### MOLASSIO'S QUIZ #######"
echo `sleep 1`
echo "name: $NAME | lifes: "$LIFES
if [ $LIFES -eq 0 ]; then
    echo -e "\n YOU LOSE!!!"
elif [ $LIFES -le 5 ]; then
    echo -lt "\n NICE!!!"
elif [ $LIFES -lt 10 ]; then
    echo -e "\n VERY GOOD!!!"
else
    echo -e "\n PERFECT!!!"
fi


