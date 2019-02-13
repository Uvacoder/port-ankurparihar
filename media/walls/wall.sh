#! /bin/bash
i=0;
for file in $(ls *.jpg);
do
    while [ -f $i.jpg ];
    do
        i=$[ $i + 1 ];
    done
    mv $file $i.jpg;
done
