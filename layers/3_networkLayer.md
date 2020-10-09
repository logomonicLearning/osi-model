## Network layer

handles Routing of data. after data has arrived, each frame is examined to see if the data has reached its ultimate target. it recieves outgoing and incomming transmissions and ensures that it reaches the right target. for IP addressses this is achieved through ARP. Internet Protocol (IP) address is the adddress of your computer over a network. IPv4 is a represented by 4 bits separated by a dot. another important Protocol is ICMP which proviedes services such as ping and tracert to check interconnections over a network. 

it is involved in 

- Logical Addressing using IP addresses to reach the right computer.
- Path determination: finding the best path to the destination as there are multiple paths to take
- Routing

data is sent to the lower layer as packets.

e.g. 192.168.1.9

127.0.0.1 is known as a loopback address.




Quick excercise:
do the following to see all the current computers on your Local Area Network (LAN):


do the following check your current ip address do the 

> ipconfig
> 

do the following to see the ip address of a website

nslookup 

open the command line:
type ping  nameofwebsite.com

> windows+R and type cmd to access the command line:
> type arp
(is arp datalink layer?)
