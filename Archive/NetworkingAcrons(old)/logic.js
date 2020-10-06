
!function(document,window,$){

  const terms=[{
  acronym:"PKI",
  meaning:"Public Key Infrastructure",
  concept:"Networking:OSI"
  },
  {
  acronym:"APIPA",
  meaning:"Automatic Private Internet Protocol Addressing",
  concept:"Networking:OSI"
  },
  {
  acronym:"DHCP",
  meaning:"Dynamic Host Configuration Protocol",
  concept:"Networking:OSI"
  },
  {
  acronym:"DNS",
  meaning:"Domain Name Service or Domain Name Server",
  concept:"Networking:OSI"
  },
  {
  acronym:"FTP",
  meaning:"File Transfer Protocol",
  concept:"Networking:OSI"
  },
  {
  acronym:"POP3",
  meaning:"Post Office Protocol 3",
  concept:"Networking:OSI"
  },
  {
  acronym:"TCP",
  meaning:"Transmission Control Protocol",
  concept:"Networking:OSI"
  },
  {
  acronym:"TCP/IP",
  meaning:"Transmission Control Protocol/Internet Protocol",
  concept:"Networking:OSI"
  },
  {
  acronym:"HTTP",
  meaning:"Hypertext Transfer Protocol",
  concept:"Networking:OSI"
  },
  {
  acronym:"HTTPS",
  meaning:"Hypertext Transfer Protocol Secure",
  concept:"Networking:OSI"
  },
  {
  acronym:"ICMP",
  meaning:"Internet Control Message Protocol",
  concept:"Networking:OSI"
  },
  {
  acronym:"IPConfig",
  meaning:"Internet Protocol Configuration",
  concept:"Networking:OSI"
  },
  {
  acronym:"DDoS",
  meaning:"Distributed Denial of Service",
  concept:"Networking:security"
  },
  {
  acronym:"VPN",
  meaning:"Virtual Private Network",
  concept:"Networking:Software"
  }
  ]


  function displayTerms(terms){
    for(var i in terms){
      let acro=terms[i].acronym;
      let meaning=terms[i].meaning;
  //     console.log(year)
      let front=$('<div>',{class:"front"}).html(acro);
      let back=$('<div>',{class:"back"}).html(meaning); 
      let card=$('<div>',{class:"card-container"}).append([front,back]);
      
      $(".cards-container").append(card);
    }
  }



  $(document).ready(function(){
    $('.card-container').click(function(){
      $(this).toggleClass('rotate')
   });
  })




  displayTerms(terms)



}(document,window,jQuery)

// window.onload=function(){
// 	displayTerms(terms)
// }

