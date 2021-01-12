cipherSuites=[
	{
		type:"Key Exchange",
		description:`Enables The Exchange Of The Symetric Key Using PKI`,
		algorithms:[
  "RSA: being phased out",
  "DH:forward secret ciphers",
  "DHE:ephemeral (short lived",
  "ECDHE:Elyptic curve perfect forward secret"
]
	},
	{
		type:"Authentication",
		description:`After The Key Exchange, You Want To Authenticate That The Site You're Visiting Is Authentic Using A Certificate Which Has A Pub
        c Key`,
		algorithms:[
  "RSA ",
  "ECDSA"
]
	},
	{
		type:"Cipher",
		description:`Used For Bulk Encryption After The Symetric Key Has Been Sent.`,
		algorithms:[
  "AES: Advanced encryption standard",
  "GCM:mode of AES",
  "CBC: mode of AES",
  "Camellia: not used much"
]
	},
	{
		type:"MAC",
		description:`Hash Algorithms Which Takes The Content Of The Certificate And Performs A Hash Function Used For Digital Certificate`,
		algorithms:[
  "SHA1",
  "SHA128",
  "SHA256",
  "SHA384",
  "MD5"
	]
}

]