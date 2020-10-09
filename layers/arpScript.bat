@echo off
setlocal EnableDelayedExpansion

set t1=t1
set t2=t2
rem set f=temp.txt
arp -a > %t1%

for /f "tokens=1" %%g in ( !t1! ) do (
	ping -a -n 1 %%g >>!t2!
)
del !t1!

cat !t2!  | grep -win -B 4 "(0% loss)" >t3.txt
del !t2!
subl t3.txt
pause