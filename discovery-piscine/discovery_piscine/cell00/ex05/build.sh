#!/bin/bash
if [ "$#" -gt 0 ]; then
	for name in $*
	do
		mkdir "ex"$name
		chmod 755 ex$name/
	done
else
	echo "No arguments supplied"
fi
