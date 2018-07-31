#!/bin/bash

export DBUS_SESSION_BUS_ADDRESS=unix:path=/run/dbus/system_bus_socket

if pgrep -x "zynaddsubfx"
 then
 echo Zynaddsubfx is already singing
 exit 0
 else
 zynaddsubfx -U -A=0 -o 512 -r 96000 -b 512 -I alsa -O alsa -P 7777 -L "/usr/local/share/zynaddsubfx/banks/Choir and Voice/0034-Slow Morph_Choir.xiz" &
 sleep 4

   if pgrep zynaddsubfx
   then
   echo Zyn is singing
   else
   echo Zyn blorked. Epic Fail.
   fi

fi

keyrig=$(aconnect -i | grep "KeyRig 49")

if [[ $keyrig ]]
 then
 aconnect 'KeyRig 49':0 'ZynAddSubFX':0
 echo Connected to KeyRig 49
 else
 echo No known midi devices available. Try aconnect -l
 fi

exit 0
