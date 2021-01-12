#!/bin/bash
cat factbase.js prologfb.js facts.js graphmodel.js main.js >temp.js
node temp.js | sort > temp.pl
gprolog --consult-file main.pl 2>temp-new.pl >temp-messages.txt
cat diagram.pl temp-new.pl | sort > temp-new-diagram.pl
cat temp-new-diagram.pl

# notes
# 1. get ohm.js and put it into this directory https://github.com/harc/ohm
# 2. gprolog outputs startup messages to stdout and I haven't found a way to turn this off
#    hence, the 2> in the call to ./p.bash above

