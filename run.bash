#!/bin/bash

# decode the drawing into simple.xml
node decode.js simple.drawio > simple.xml

cat readstdin.js getAttribute.js listCommand.js getCommand.js toJS.js drawiotab.js >temp.js
cat readstdin.js cat.js >temp.cat.js
cat readstdin.js uncompress.js >temp.uncompress.js
node temp.js list <simple.xml | node temp.cat.js
node temp.js getByTab 101 <simple.xml > 101.encoded
node temp.uncompress.js <101.encoded

exit

# cat factbase.js prologfb.js facts.js graphmodel.js main.js >temp.js
# node temp.js | sort > temp.pl
# gprolog --consult-file main.pl 2>temp-new.pl >temp-messages.txt
# cat diagram.pl temp-new.pl | sort > temp-new-diagram.pl
# cat temp-new-diagram.pl

# notes
# 1. get ohm.js and put it into this directory https://github.com/harc/ohm
# 2. gprolog outputs startup messages to stdout and I haven't found a way to turn this off
#    hence, the 2> in the call to ./p.bash above

