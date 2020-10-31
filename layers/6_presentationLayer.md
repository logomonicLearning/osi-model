<script src="formatter.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">

# 6 PRESENTATION LAYER

<div id="TOC">
TABLE OF CONTENT:
</div>

## KEY TERMS

encryption
compression
translation
Character Encoding
Data formatting:
Compression:
---

## introduction to L6 Presentation layer

The presentation layer is responsible for formatting and delivering data to the application layer for further processing or display. in other words, layer 6 makes the data presentable for applications to consume. In many widely used applications and protocols, no distinction is made between the presentation and application layers. For example, HyperText Transfer Protocol (HTTP), generally regarded as an application-layer protocol, has presentation-layer aspects such as the ability to identify character encoding for proper conversion, which is then done in the application layer.

<!-- https://www.youtube.com/watch?v=AtITX-U2mL4 -->
<!-- <embed src="https://www.youtube.com/embed/RGVrn4Z02qY"> -->
<embed src="https://www.youtube.com/embed/AtITX-U2mL4">

The table below summarises the purpose of this layer

<table>
	<tr>
		<th>Purpose</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Convertion</td>
		<td>It converts data recieved as bits (0s and 1s)  from the lower layers and converts it into its associated file format. For example, textual data may be converted to ASCII, images to png and audio to mp3.  It also converting media into binary so that it can be converted into electrical signals over the physical layer (Layer 1).
		</td>
	</tr>
	<tr>
		<td>Translation</td>
		<td>Different machines may use different encoding schemes, so the applicaiton layer may need to translate data into a format that the Application Layer can consume. 
		<ul>
			<li>UTF8 -> ASCII </li>
			<li>ASCII -> EBCDIC).</li>
		</ul>
		</td>
	</tr>
	<tr>
		<td>Encryption/Decrypt</td>
		<td>
		Layer 6 is able to encrypt messages to be sent, and decode encrypted messages it recieves for data privacy.This is usually through L4 Transport (SSL/TLS protocol)
		</td>
	</tr>
	<tr>
		<td>Compression/Decompression</td>
		<td>This layer uses <a hre="">compression algorithms</a> to reduce the size of data recieved from L7 Application Layer to be sent over the network. This is especially important when sending large files such as video and large applications as it reduces the overheads needed to transfer data. It also decompresses data recieved from the sender. 

		compression may be further subdivided as:

<ul>
	<li>
		<a href="">lossy (data integrity isn't guaranteed)</a>
	</li>
	<li>
		<a href="">lossless lossless (data integrity is guaranteed).</a>
	</li>
</ul>		

</td>
	</tr>
</table>

---

<br>
<br>

## Presentation Layer Protocols

<table>
	<thead>
		<tr>
			<th>Protocol</th>
			<th>Meaning</th>
			<th>Purpose</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>ASCII</td>
			<td>American Standard Code for Information Interchange</td>
			<td></td>
		</tr>
		<tr>
			<td>HTML</td>
			<td>Hypertext Markup Language</td>
			<td>Default standard for language structuring web pages</td>
		</tr>
		<tr>
			<td>MPEG</td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>PNG</td>
			<td>American Standard Code for Information Interchange</td>
			<td></td>
		</tr>
		
		
	</tbody>
</table>

XML
Objects

ASCII 
<td>0-9</td><td>48-57</td>
<td>A-7</td><td>65</td>
<td></td><td>97</td>

---

## Excercise:

To better understand encryption do the following:
open the console in your browser and type the following in the console:

```js
msg="hello"

encrypted=btoa(msg)

decrypted=atob(encrypted)

```



ASCII excercise

to find the ASCII of each character in your browser console t

```
String.fromCharCode(65)
"a".charCodeAt()
```

