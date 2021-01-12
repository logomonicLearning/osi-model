questions


[what is the difference between a hash function and encryption
](https://cybernews.com/security/hashing-vs-encryption/)

the main difference is that encryption is reversible, whereas hashing is irreversable. it is used to hash passwords so that if they are hacked, all the hacker sees is gibberish. the same input produces the same hash. This is why it is useful for password storage. 
Hashing algorithms generate hashes of a fixed size, often 160 bits, 256 bits, 512 bits, etc. Whether the input data is longer or shorter than the fixed size, the resulting hash is this same uniform length.

if an attacker discovers the hashing algorithm used and enters the right password, it will produce the same hash as stored in a secure drive. If the attacker can breach that drive and find a hash that matches the hash produced by that password, the criminal has identified a working password.

To guard against this kind of attack, cybersecurity experts recommend <b>salting</b> the hash. Salting is not a separate function from hashing; rather, it is an enhancement of hashing.

---

[what is the difference between symetric encryption and asymetric encryption](https://www.youtube.com/watch?v=qXLD2UHq2vk)
[difference](https://www.youtube.com/watch?v=4nGrOpo0Cuc)

symetric encryption is when you use the same key to encrypt and decrypt a message. the problem is getting key distribution, how do both systems get the same key?. the solution is PKI, using 2 keys, one to encrypt and another to decrypt, has a private and public key. they use the public key to encrypt, then the private key is used to decrypt. this system is used to exchange symetric keys. so asymetric encryption is used before symetric keys. asymetric is slower. 



---

what is a digital certificate. (digital signature)

electronic credentials used to assert the online identities of individuals, computers and other entities on a network. it contains the public key and identity of the owner. it is issued by a certificate authority. you can generate your own certificate, but 



---

what are the main stages in tls

---

what was the main drawback of ssl

---

what is RSA

---

what is SHA1
sha1 is a hashing algorithm

---

what is AES

---

what is the relationship between HTTPS, TLS and TCP
HTTP is hypertext transfer protocol, the S indicates that it is being transported Securely with TLS, however it is also using TCP because web pages need to be complete and require reliable connection. will be using a HTML, CSS and JS mime types mostly, perhaps a bit of PHP.


---

TLS is used with TCP?
it is a cryptographic protocol which sits on top of TCP and can be used for anything (interapplication communication).
requires handshaking.

certain versions of tls support certain ciphers. some of the older ciphers are no longer used. it is interoperable. can be written in different languages and it will still work, all that matters is the message structure.

requires a secret key
cipher
authentication.
the server is authenticated and so requires PKI
robust to attacks like man in the middle, downgrade attacks.

when it goes wrong, usually because of a certificate issue.

TLS handshaking, most of the important things happen in the handshaking which is what makes it so prevalent due to how good the handshaking.

---

## TLS 1.2
c

excercise:
click on the padlock, 
copy the string that begins with TLS..., this is called the cypher suite. a string representation of all the things that will happen in the handshake such as key exchange, public key authentication and encryption.

there are differen cipher suites. the most common is 
TLS_ECDHE_RSA_WITH_AES_128_SHA256:
ECDHE is the key exchange, shared secret used to derive key for encryption.
RSA: public key authentication mechanism
AES: encryption cipher
128 :key size
sha256:building blocks to create hash functions, used to turn a secret into a key. and authentication codes.

TLS is used with TCP?
it is a cryptographic protocol which sits on top of TCP and can be used for anything (interapplication communication).
requires handshaking.

certain versions of tls support certain ciphers. some of the older ciphers are no longer used. it is interoperable. can be written in different languages and it will still work, all that matters is the message structure.

requires a secret key
cipher
authentication.
the server is authenticated and so requires PKI
robust to attacks like man in the middle, downgrade attacks.

when it goes wrong, usually because of a certificate issue.

TLS handshaking, most of the important things happen in the handshaking which is what makes it so prevalent due to how good the handshaking.

---

## TLS 1.2
c

excercise:
click on the padlock, 
copy the string that begins with TLS..., this is called the cypher suite. a string representation of all the things that will happen in the handshake such as key exchange, public key authentication and encryption.

there are differen cipher suites. the most common is 
TLS_ECDHE_RSA_WITH_AES_128_SHA256:
ECDHE is the key exchange, shared secret used to derive key for encryption.
RSA: public key authentication mechanism
AES: encryption cipher
128 :key size
sha256:building blocks to create hash functions, used to turn a secret into a key. and authentication codes.

---

Excercise

click on the padlock
select certificate signature algorithm.

digital signature: a set of messages summarised with the hash function and signed using the Server's private key. it is evidene that the server is who they say they are

## hand shaking

client sends a hello to the server which contains the max TLS version the client can support, a random number, and a list of cipher suites. now the server knows what the client can do and chooses accordingly. 
the server sends a hello and chooses one of the cypher suites and a random. if it cant it will send back an error message.  
the server sends another message with the public key. adn 

---


RSA
[SHA1]()
[hash function](https://www.youtube.com/watch?v=DMtFhACPnTY)
NSA, md5 had problems, and sha1 was made as an improvement.

sha1 hash: takes any length of string and outputs 160 bits long value, appears random, used in message authentication and digital signatures. it is sudo random. you enter some code e.g. ABC, and it converts it into a hash 

SHA1 takes a message of 512 bits block, if it is only 1 block,i t will be run once and output the hash at the end. It starts with an internal internal state, and updates it with the message using a compression function (Merkel Down guard construction) until the message has finished. then it outputs the internal state. it has an internal state of 160 bits. 



SHA1 is irreversable. it is not encryption so doesnt need to be reversed anyway. 

[hash calculator](https://www.pelock.com/products/hash-calculator)


DHECElyptic curve diffe hellman

[AES](https://www.youtube.com/watch?v=O4xNJsjtN6E)
GCM




[crash course](https://www.youtube.com/watch?v=jhXCTbFnK8o)
types of cyphers

Ceaser cypher part of substitution cypher, but letter frequencies are preserved which is a weakness.

permutation cypher
Enigma (substitution cypher) used 3 or more rotors which substituted letters

first software cyphers:Data encryption Standard (DES) 1977  used 56 bit binary keys. 
2001 Advanced Encryption Standard AES uses bigger keys 128, 192 and 256 bits, making brute force harder. it would    take trillions of years to crack a 128 bit key even using all the computers on earth.

Diffe-Helman key exchange: one way function=modular exponentiation, 
B=Base (public)
M=Modulus (public)
x=exponent (secret)
B^x % M
e.g.
3^5 %31=26

base and modulus are public

make private key with B, M and secret X

this is sent to the server, which also select a secret exponent Y and sends it to the client. the client then raises the servers key by x, and the server does the same raising the clients value by Y. they now both have the same values. which is a secret shared key. this is used as a shared key using something Like AES. They are symetric keys.

there is also asymetric 
there are 2 different keys, 1 public and the other private. knowing the public key lets you encrypt but not decrypt. 

e.g. 

you send a box and a lock to someone, they put a message in it and lock it. they send it back and only you can open it with private key

the most popular asymmetric is RSA used for online banking
---


[TLS handshake detailed](https://iponwire.com/ssl-tls-handshake-detailed-for-version-1-2/)

---


RSA

2 prime numbers p&q are multiplied wich is only known by the sender forming n 
along with another prime number k, the two form the public key (n, k). 
this is sent to the receiver who uses it to encrypt the message M with M**k %n=c. 
this is sent back and the original sender now uses e to decrypt the message. 
e is the modular multiplicative inverse of k

ek % phi n =1
phi n=(p-1)(q-1)
c**e %n=M


RSA 1000 times slower than Symetric crypto like AES. 
