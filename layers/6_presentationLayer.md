## 6 Presentation
The presentation layer is responsible for formatting and delivering data to the application layer for further processing or display. It relieves the application layer of concern regarding syntactical differences in data representation within the end-user systems. 

<span style="display:none">The presentation Layer recieves data from session layer and converts bits into human readable format known as <a href="">ASCII</a>. It is also involved in <a href="" >encrypting</a> data to be sent to the presentation layer and decrypting data from the presentation layer to be passed to the Application layer for security of messages. , 
also involved in compression of data.</span>

The table below summarises the purpose of this layer

<table>
	<tr>
		<th>Purpose</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Convertion</td>
		<td>It converts data it recieves as bits from the lower layers and converts it into the associated format. for example, text files will be converted to ASCII while images may be converted into colors such as PNG or JPEG and passes this on to the Application layer to be further processed.  It also converting media i.e. text, html, jpg, mp4, mp3 into binary so that it can be converted into electrical signals over the physical layer (Layer 1).</td>
	</tr>
	<tr>
		<td>Translation</td>
		<td>An example of a presentation service would be the conversion of an EBCDIC-coded text computer file to an ASCII-coded file.</td>
	</tr>
	<tr>
		<td>Encryption/Decrypt</td>
		<td>It encrypts data to be passed onto the presentation layer below and decrypts data from the presentation layer to be passed to the Application. encryption ensures that messages remain private and are not easedropped when sent over a network</td>
	</tr>
	<tr>
		<td>Compression/Decompression</td>
		<td>This layer is involved in  Compression &amp; of large files it recieves from the application layer such as images and videos to reduce the overheads needed to send data over a network. it also decompresses  files it recieves from  the layer below</td>
	</tr>
</table>

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
			<td>Web browser</td>
		</tr>
		<tr>
			<td>HTML</td>
			<td>Hypertext Markup Language</td>
			<td>Default standard for language structuring web pages</td>
			<td>Web browser</td>
		</tr>
		<tr>
			<td>H</td>
			<td>American Standard Code for Information Interchange</td>
			<td></td>
			<td>Web browser</td>
		</tr>
		<tr>
			<td>PNG</td>
			<td>American Standard Code for Information Interchange</td>
			<td></td>
			<td>Web browser</td>
		</tr>
		
		
	</tbody>
</table>

XML
Objects

ASCII 
<td>0-9</td><td> 48-57 </td>
<td>A-7</td><td> 65 </td>
<td></td><td>97</td>


Excercise:

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

