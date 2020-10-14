#!/bin/bash

DATE=`date +%Y-%m-%d`   # Date e.g 2018-09-21

test_ssh() {
  ssh -o "CheckHostIP=no" root@tell-me-a-story.onthewifi.com hostname
}

test_folder() {
  if ssh -o "CheckHostIP=no" root@tell-me-a-story.onthewifi.com stat /data/${DATE}_dump_mongo.tar.gz \> /dev/null 2\>\&1
  then echo ok
  else echo ko
  fi
}

collect_dump() {
  scp -o "CheckHostIP=no" root@tell-me-a-story.onthewifi.com:/data/${DATE}_dump_mongo.tar.gz /home/jtrijean/dump_story/${DATE}_dump_mongo.tar.gz
  find /home/jtrijean/dump_story/* -ctime +7 -delete
}

if [ $(test_ssh) = tell-me-a-story.onthewifi.com ];
then echo "ssh connection ok";
else echo "Error in ssh test command"; exit 1
fi

if [ $(test_folder) = ok ];
then collect_dump
else echo "Error : DAILY dump not found"; exit 2
fi
