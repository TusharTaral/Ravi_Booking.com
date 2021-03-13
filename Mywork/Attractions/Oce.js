let oceania = document.getElementById('OC')
oceania.addEventListener('click',Oceania)

function Oceania(){

    oceania.style.color = "#0071c2"
 let urls1 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/971406.jpg?k=b2f2045c0da2dbe4f94fcb0619a3ce00f002ad4e8eea927adfa404a3b1b04b7a&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/682193.jpg?k=98c95f614e901f685c378016a7cec05b198f23452928ddc27dd03354ea8d2706&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/682568.jpg?k=9a30be5fc1531b4e26b451c4a03d782455f4583fc12ba0b925517007620f3082&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/967882.jpg?k=1973e7c47ac58d7adf6f43add201283189fe3509fdd527bd2406e628e017c0db&o="]
    
 let card_values1 = ["GoldCoast 16 things to do","Cairms 6 things to do","Sydney 6 things to do","Melbourne  things to do",]
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
  

 let urls2 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/682186.jpg?k=c44d0765b9982235a22c5ad4795aae57ac0055f8ac4e41e062b5f2b93cf5429c&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/682260.jpg?k=fb4a02025eb11ec3bdd8617b35258434926cec9dee9a9439ea5cb661f458dd72&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/682138.jpg?k=6c1332617fa37b5cf30710f56f98929f8cb0f522b80517fb9cdc6d914d41f804&o="]  ;

 let card_values2 = ["Adelaide 13 things to do","Perth 4 things to do","Auckland 8 things to do","ChiangMai 5 things to do",]
 
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