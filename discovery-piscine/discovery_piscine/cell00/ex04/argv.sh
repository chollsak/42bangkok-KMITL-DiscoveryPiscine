#!/bin/bash
if [ "$#" -gt 0 ]; then
	y=0
	for x in $*
	do
		if [ "$y" -eq 3 ]; then
			break;
		fi
		y=$((y+1))
		echo $x
	done
else
	echo "No arguments supplied"
fi
