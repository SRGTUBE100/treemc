#!/bin/bash

set -e

if [[ $EUID -ne 0 ]]; then
echo "Run as root."
exit 1
fi

clear

echo "#############################################################"
echo "#"
echo "#                 TreeMC Theme Installer - by SRGTUBE"
echo "#"
echo "#############################################################"
echo

echo "[1] Install TreeMC Theme"
echo "[2] Exit"
echo

read -p "Choose an option: " OPTION

case "$OPTION" in
1)
echo
echo "Installing TreeMC Theme..."
echo

bash <(curl -s https://raw.githubusercontent.com/SRGTUBE100/treemc/main/themes/version1.x/TreeMC/build.sh)
;;

2)

echo "Cancelled."
exit 0
;;

*)
echo "Invalid option."
exit 1
;;
esac
