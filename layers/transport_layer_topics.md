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
