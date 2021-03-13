let asia = document.getElementById('AS')
asia.addEventListener('click',Asia)


function Asia(){

 asia.style.color = "#0071c2"
 let urls1 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/685560.jpg?k=f21648aa2f4e412c9950c9d683deb21dd7e69fecdcd1bf6717d4d5fa8520dc7e&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/688058.jpg?k=cfccb18a3a547d883cdce149ec955392ea4e4ad5bef313d70322e788956f7549&o=","https://q-xx.bstatic.com/xdata/images/country/1680x560/85.jpg?k=b6ed58da55452ccf0c979cc0df75ce57c6dd985d58abcc6beb4efa2187b2b235&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/664686.jpg?k=b97d7cae11fb6a494b16c656fe8350be53363382a1ff91d350b9bd047eccf689&o="]
    
 let card_values1 = ["KualaLumpur 4 things to do","Jakarta 13 things to do","Balian 9 things to do","SiemReap 7 things to do",]
 for(let i = 0 ; i < urls1.length ; i++){
    
         let div = document.createElement('div')
         let img = document.createElement('img') 
         img.src = urls1[i]
         img.setAttribute('id','images');
         div.setAttribute('class','img-hover-zoom');
         let details = document.getElementById('pd1');
         
         let header = document.createElement('header');
         header.setAttribute('class','card_header');
         let h3 = document.createElement('h3');
         let p = document.createElement('p');
 
         h3.setAttribute('class', 'card_title')
         
         p.setAttribute('class', 'card_subtitle')

         let input = card_values1[i].split(' ')
         let county = input[0]
         let secondstr = ''
         for(let j = 1 ; j <= 4 ; j++){
             secondstr += input[j]+' '
         }
         h3.innerHTML = county;
         p.innerHTML = secondstr
         header.append(h3,p)
         div.append(img,header)
         details.append(div)
     } 
  

 let urls2 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/620039.jpg?k=2382747eb502e907930246aa3225de83a7ab9d3dc9821c9b27feec09e8cd77fa&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/688194.jpg?k=32095065be0a75b3b1e868b31766d89e748c6070025d215400ca8a2c89609541&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/688876.jpg?k=01ff1efe767df1d042647ab8ec14a6df69c2a87fe7a843f4c3b17010fe9cd02d&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/688673.jpg?k=c1e9cdd5a6bc7ae6475ae8a47cc7ecb1bf3ff08a316cfbc3b6dfec01e5a5166f&o="]  ;

 let card_values2 = ["Bangkok 10 things to do","Yogyakarta 14 things to do","HoiAn 6 things to do","ChiangMai 5 things to do",]
 
 for(let i = 0 ; i < urls2.length ; i++){
     let div = document.createElement('div')
     let img = document.createElement('img') 
     img.src = urls2[i]
     img.setAttribute('id','images')
     div.setAttribute('class','img-hover-zoom')
     let details = document.getElementById('pd2')
     
     let header = document.createElement('header');
     header.setAttribute('class','card_header');
     let h3 = document.createElement('h3');
     let p = document.createElement('p');

     h3.setAttribute('class', 'card_title')
     
     p.setAttribute('class', 'card_subtitle')

     let input = card_values2[i].split(' ')
     let county = input[0]
     let secondstr = ''
     for(let j = 1 ; j <= 4 ; j++){
         secondstr += input[j]+' '
     }
     h3.innerHTML = county;
     p.innerHTML = secondstr
     header.append(h3,p)
     div.append(img,header)
     details.append(div)

     
 }
}