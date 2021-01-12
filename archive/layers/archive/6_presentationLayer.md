<script src="formatter_old.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">
<!--  -->

<!-- for the app -->
<link rel="stylesheet" href="apps/binDexAscii/style.css">

<link href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css" rel="stylesheet" type="text/css" />
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<!--  -->
# 6 PRESENTATION LAYER

## KEY TERMS

- <b>Encryption</b>: The process of converting information or data into a code, especially to prevent unauthorized access.
- <b>Compression</b>:  The process of modifying, encoding or converting the bits structure of data in such a way that it consumes less space on disk.
- <b>Character Encoding</b>: Used to represent a repertoire of characters by some kind of encoding system, the most common being ASCII
- <b>Data/Mime Type</b>: Mime/Data type or simply type is an attribute of data which tells the compiler or interpreter how the programmer intends to use the data. e.g. MP3 for audio, html for webpages etc. Protocols in the application layer are basically mime types.

---

## introduction to L6 Presentation layer

The presentation layer is responsible for formatting and delivering data to the application layer for further processing or display. In many widely used applications and protocols, no distinction is made between the presentation and application layers. For example, HyperText Transfer Protocol (HTTP), generally regarded as an application-layer protocol, has presentation-layer aspects such as the ability to identify character encoding for proper conversion, which is then done in the application layer.

<!-- https://www.youtube.com/watch?v=AtITX-U2mL4 -->
<!-- <embed src="https://www.youtube.com/embed/RGVrn4Z02qY"> -->
<embed src="https://www.youtube.com/embed/AtITX-U2mL4">

The table below summarises the purpose of this layer
<div id="l6-functions" class="interactive-functions grid"></div>
<table style="display:none">
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

<div id="l6-protocols" class="interactive-protocols flex flex--column"></div>

<table style="display:none">
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
			<td>ASCII sands for American Standard Code for Information Interchange. It uses 7 bits to represent a character incluing numbers, letters and symbols such as &?#..., and control characters such as return, tab, esc, etc. The first bit is a parity bit, used for error detection. With 7 bits there is a total of 2^7=128 distinct combinations of 1s and 0s to form a char <br><br>ASCII extended is the adition of an 8th bit which double the amount of possible combinations, which is 256. This allows the addition of extra characters such as "é". it is still limited, hence the introduction of UTF-8</td>
		</tr>
		<tr>
			<td>UTF-8</td>
			<td></td>
			<td>utf-8 extends ascii and allowes the use of non latin characters such as Chinese and Russian to be used. whereas ascii is just 7bits, utf-8 is can be up to 6bytes. the first few numbers denotes how many bytes the character consists of followd by a 0 which marks the end of the header. it is then followed by the code for the character, the second byte always begins with 10, followed by the rest of the charcode. <br><br>The first four nums in the first one indicate how many bytes are to follow the first nums of each subsequent octet begins with 10=continuation byte chinese uses 3Bytes utf-8 encoding 2Bytes in utf-16</td>
		</tr>
		<tr>
			<td>HTML</td>
			<td>Hypertext Markup Language</td>
			<td>It is the default markup language for structuring and displaying web pages in a web browser. HTML is usually accompanied by other web languages such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</td>
		</tr>
		<tr>
			<td>JPEG</td>
			<td>Joint Photographic Experts Group</td>
			<td>Is a commonly used method of lossy compression for digital images, particularly for those images produced by digital photography. </td>
		</tr>
		<tr>
			<td>MP3</td>
			<td>MPEG Audio Layer-3</td>
			<td>It is a coding format for digital audio that uses lossy audio-data compression </td>
		</tr>
		<tr>
			<td>XML</td>
			<td>Extensible Markup Language (XML) </td>
			<td>It is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. It has a similar syntax to HTML. Although the design of XML focuses on documents, the language is widely used for the representation of arbitrary data structures[7] such as those used in web services.</td>
		</tr>
		
		
	</tbody>
</table>


<h2>ASCII</h2>

<table>
    <caption><b>ASCII and their numerical equivalents:</b></caption>
<thead> 
    <tr><th>Character</th><th>Range</th></tr>
</thead>
<tbody><tr><td>0-9</td><td>48-57</td></tr>
<tr><td>A-Z</td><td>65-90</td></tr>
<tr><td>a-z</td><td>97-122</td></tr>
</tbody>
</table>

you may also wish to use the app below to converter ASCII to their binary, decimal and hexadecimal equivalents and vice versa.

<div class="container">
    <caption class="heading"><b>BIN DEC HEX ASCII COLOR Converter</b></caption>
    <div class="numbers-wrapper">
    <div  class="item item--concept">
      <div class="item__name">ASCII:</div>
      <div class="item__input-wrapper"><input id="ascii" placeholder="Single character" type="text"></div>
    </div>
      <div  class="item item--concept">
        <div class="item__name">Dec:</div>
        <div class="item__input-wrapper"><input id="dec" placeholder="255" type="text">   </div>
      </div>
     
      <div  class="item item--concept">
        <div class="item__name">Bin:</div>
        <div class="item__input-wrapper"><input id="bin" placeholder="1001" type="text"></div>
      </div>
     
      <div  class="item item--concept">
        <div class="item__name">Oct:</div>
        <div class="item__input-wrapper"><input id="oct" placeholder="1234567" type="text"></div>
      </div>
     
      <div  class="item item--concept">
        <div class="item__name">Hex: </div>
        <div class="item__input-wrapper" ><input  id="hex" placeholder="123DEF" type="text"></div>
      </div>
      
      
     
      <div  class="item item--concept">
        <div class="item__name">Col:</div>
        <div id="col" class="col"></div>
      </div>
    
    </div>
  </div>
  <script src='apps/binDexAscii/logic3.js'></script>

<!-- <embed src="../binDecHexAscii/index.html"> </embed> -->

---

## Excercise:

- Do the following to gain a better understanding of encryption:
    - Open your browser Devtools (Ctrl+Shift+J) and select the console
    - type the following in the console:
```js
    message="hello"
    encryptedMsg=btoa(message)
    decrypted=atob(encryptedMsg)
```


<!-- <button id="previous">previous</button><button id="next">next</button> -->
