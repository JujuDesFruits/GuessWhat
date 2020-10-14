#!/bin/bash

DATE=`date +%Y-%m-%d`   # Date e.g 2018-09-21
DUMPDIR= /data/dump

mkdir -p $DUMPDIR
mongodump -u {{username}} -p {{password}} -o $DUMPDIR/ -d story --authenticationDatabase story
tar -czvf /data/${DATE}_dump_mongo.tar.gz $DUMPDIR/
rm -rf $DUMPDIR/
find /data/* -ctime +1 -delete
