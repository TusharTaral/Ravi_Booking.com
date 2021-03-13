

function Getdata(e){
    let search = document.getElementById('search').value

    e.preventDefault()
    if(search == 'london'){
        window.location.href = '/Attractions/london.html'

    }
}

document.getElementById('searchbutton').addEventListener('click',Getdata)


let europe = document.getElementById('E')
let Europesection = document.getElementById("EuropeSection")

europe.addEventListener('click',Europe)
let NA = document.getElementById('NorthAmerica')

function Europe(){
    // NA.innerHTML = ''
    europe.style.color = '#0071c2';
    europe.style.borderBottomColor='#0071c2'

    let urls1 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204269.jpg?k=dda35f09d4db949aa6786bc25686bddd016cdd12a2603193e90df0d44a51a1ac&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/654667.jpg?k=38b7cadbc436ac8f1990d593aeea431bdca024ad7e19136de1a648a741efd1d2&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204347.jpg?k=2028e72e4ea4eb18da986b8a60fd841f65fe0575db5012d723233b4427939b4a&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/972064.jpg?k=39ff2ed8a135b1a557a19306fbc4cc4bd99943077a33ea6e7882717e1e755e32&o="]
    
    let card_values1 = ["London 43 things to do","Istanbul 40 things to do","Paris 40 things to do","Hamburg 11 things to do",]
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
     

    let urls2 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/71365537.jpg?k=aab55a712d088602738a94f84e75bcf9954b5b6208343eef1e9f2f2a2a75b75e&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/619974.jpg?k=b6559eee3541cbeacc14fff159a46ca264a30730fb15513890df598efb61081c&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203988.jpg?k=28ea5ce3cfe20aa8732059ec8cadede64c0964848fc0f436594ba04c4939d0d9&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971378.jpg?k=7507de5787351052371d9e50901685a0092dc34bab445d780b5a2a550cc5f3e0&o="]  ;

    let card_values2 = ["Amsterdam 56 things to do","Lisbon 51 things to do","Rome 122 things to do","Athens 22 things to do",]
    
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
    let urls3 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204120.jpg?k=111c39b79aac9a364b9a993a86890d94abdb83916c15422c95151fa8b2391273&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203920.jpg?k=3ac5c879aed7f63f8cdd5cff59e76ff9c4335c86b783aa6a32e2d3ecdc6a7fe9&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/626995.jpg?k=087d41cf908392f99bd914423fa81ee1ff0e3e88e18ff17a34521c805c82870b&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/645589.jpg?k=966c120cc17cdf382b41d151722a0e59d1714702388eb581601dd9593fe5d342&o="]
    let card_values3 = ["Berlin 31 things to do","Barcelona 89 things to do","Venice 12 things to do","Malaga 14 things to do",]

    for(let i = 0 ; i < urls3.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls3[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd3')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values3[i].split(' ')
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
    let urls4 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203757.jpg?k=9bf4f4950e983ccc08599179cfd5b00ca5f0f0926c31791b6fdcaf5c98b157da&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971987.jpg?k=c736a27ad6f01169148fe12d17f05cebf5a243860f9ab9380c246128a2c4e363&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/685809.jpg?k=1118febd1a6bed4b02742c8b4d8530a83d4ed8decd8dcde4cb035e2a3e017a93&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971357.jpg?k=561ae098e12302581c5aac611ecba9def5cd9bcc78bfc9107b8ce2b531be815c&o="]
    let card_values4 = ["Vienna 21 things to do","Porto 21 things to do","Stockholm 15 things to do","Madrid 49 things to do",]

    for(let i = 0 ; i < urls4.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls4[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd4')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values4[i].split(' ')
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
    let urls5 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/685101.jpg?k=eb80793d434f68f0c0452ccb5f209f07a0c85c08f4eb34c4cd902bd778cbe032&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/645977.jpg?k=1ac5843d13fef9ab4cf21023e44bfde605ae2f0b300ef224b8e6450add37facf&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/652936.jpg?k=0b538b33c5e820da97199de6190c3f4d2aa56dcb7c0861777a563ab8efdb14e7&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/641107.jpg?k=3dd2586188d5ec6709d3b7c13ef93a08a5c79b966ab450b0355360b585199d8c&o="]
    let card_values5 = ["Armacaodepera 34 things to do","Seville 47 things to do","Krackow 33 things to do","Naples 46 things to do",]

    for(let i = 0 ; i < urls5.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls5[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd5')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values5[i].split(' ')
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

    let urls6 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/971917.jpg?k=406c9c3f74d5e31fba2576697aa4362d8306f101174886f0454cd782a1a5cd7a&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/619669.jpg?k=58e8d85cfb4d8b9523d826ab432d58aeaeacda1164105f1255035f89c4be3f75&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971588.jpg?k=8c5839d5d0b39677f328b4d15a6608d3492f6afaf0b18685901b9f1af03bf03b&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/968424.jpg?k=a7359f656b6b3f0de06a521e30f0ae86dbde6fe2d4f4245c35e299e9c6dcf3b0&o="]
    let card_values6 = ["Cordoba 15 things to do","Milan 38 things to do","Faro 27 things to do","Liverpool 10 things to do",]

    for(let i = 0 ; i < urls6.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls6[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd6')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values6[i].split(' ')
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
    let urls7 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/643467.jpg?k=e1c10285c4e9876a0abec394a7eab1b8ceb992e7a0924a7e3a256a77770d61d7&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/683184.jpg?k=eafb7fbf8bba67da18b90b7489bc50ad1f567fa583a15814646c6102870381cb&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/619997.jpg?k=e0aea3348bc3fd665f299b4e16bb8c9fb8ea891108eb6085657cfdea1348f0e8&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/619610.jpg?k=2bf9c735c9043dec9b46a9bc3a1c935ad586f2cb3b98a8c9daea14c913b65208&o="]
    let card_values7 = ["Turin 12 things to do","Munich 6 things to do","Moscow 32 things to do","Florence 30 things to do",]

    for(let i = 0 ; i < urls7.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls7[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd7')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values7[i].split(' ')
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
    
    let urls8 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/972659.jpg?k=f3bd66938512eed5aabf5d1a9be70ab2d98abead8819cbc59824005b13f89797&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/685827.jpg?k=498ad7d3e5e66ea6bf2e06943aab31766bc4a1f062b24663c56d4b0239c54ea7&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/620021.jpg?k=776dbebc2062c79634a50b92e7193ee4912f954814f41636e1ab611e3e95d0d9&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/619907.jpg?k=7b2b5a78dab7091bcab790a48cd277f8b315da70298c25225052bf799701beda&o="]
    let card_values8 = ["Bologna 22 things to do","Gothenburg 9 things to do","SaintPetersburg 18 things to do","Budapest 12 things to do",]

    for(let i = 0 ; i < urls8.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls8[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd8')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values8[i].split(' ')
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

    let urls9 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/645293.jpg?k=b090f6e102074071fb4aa34b1f50c6a7880be4d88d4107bef386affd18ce4ff9&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/681782.jpg?k=84a032e77cbf78c7f4696187dacfef96ba685a75f22689bbbf4948f1fc1225fb&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204076.jpg?k=b0eb04ff512e2e41e6cc1718c0478f009cff711e071b95dbd0486c77a380b672&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/973065.jpg?k=ab386c026860ec2fe48136a2e02fd41dbf066baf03a3209b5a7286bac67760ca&o="]
    let card_values9 = ["Granada 4 things to do","Marseille 10 things to do","Prague 25 things to do","Verona 7 things to do",]

    for(let i = 0 ; i < urls9.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls9[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd9')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values9[i].split(' ')
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
    let urls10 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/638122.jpg?k=41ed740d0b386667d49dd8708c05a710a7c3508cfd4eb805efb730e560b1bd02&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/684041.jpg?k=d8aa0e4b832729340fa4c3bb5ca47e19f13e27a50d9959d2f49d43a6142c433d&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/644322.jpg?k=6ad9d7fa32c440f2a89db9bc4eed2dd77fa6386c4a0d3237a400b6408d2b66c5&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/646075.jpg?k=522f19a6584920b8ae463823a0770f4f48d2a19938480e29e1df8734d79573d0&o="]
    let card_values10 = ["Ljubljana 57 things to do","Innsbruck 8 things to do","Tromso 4 things to do","Valencia 8 things to do",]

    for(let i = 0 ; i < urls10.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls10[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd10')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values10[i].split(' ')
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
    let urls11 =["https://q-xx.bstatic.com/xdata/images/city/720x405/969980.jpg?k=b294e7fc8e917a500cbdbb196783675213e0983e4900b873f43895c54373ff67&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/641623.jpg?k=3e33dad8ccb7d533e6484612cc445310b9e6da3946d7d152bd76de11af18eb22&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/641314.jpg?k=22caea1896c301b1616b160f4ce20989a09a582d2684cd307c1aaf7cae10ae05&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/642086.jpg?k=935f5fd0b5f441cf137bfd222af9bcc80c6ab13463ddf227072679a10a35c5fb&o=" ]
    let card_values11 = ["TheHague 17 things to do","Pompei 47 things to do","Pisa 9 things to do","Sorrento 46 things to do",]

    for(let i = 0 ; i < urls11.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls11[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd11')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values11[i].split(' ')
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
    let urls12 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/688281.jpg?k=2b0e3bfff81f04899bce25e7e7d3d5aa3900c81c756b8b64e326ee833f9d6cfd&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/641188.jpg?k=0000ce4e3e7723b03a4823b9823917e05ab87d0074bd4ad44cf2d79cfaab6877&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/644320.jpg?k=b1413a2d6100603b6feaa0739be29e86af6225530b18525699209107f12945c1&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/972771.jpg?k=ed0e30e9a93b392f165c056ed75a9dcec1820167575aa4fe3825a380c446b775&o="]
    let card_values12 = ["Copenhagen 27 things to do","Palemo 14 things to do","Oslo 11 things to do","Zadar 6 things to do",]

    for(let i = 0 ; i < urls12.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls12[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd12')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values12[i].split(' ')
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
    let urls13 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/656162.jpg?k=e554d074a94156a14220f7a89cf7c27d9f9f0e66aad27d720d066a70eec01e46&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/639300.jpg?k=7161c509c7a38237190cc1155494476a0a59bb65a637b275551a96ca311fe9fd&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/638627.jpg?k=3c805126c47e56e2f2e29edf163f0269e210c7c4b5d8962953c860bf533b94b2&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/687763.jpg?k=2f35ffdb74ef75412a42ea2e3847e5870d78b23d62a2d2e2f6ccfb535ce4381c&o="]
    let card_values13 = ["Bratislava 9 things to do","Zagreb 12 things to do","Split 7 things to do","Tallin 11 things to do",]

    for(let i = 0 ; i < urls13.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls13[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd13')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values13[i].split(' ')
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
    let urls14 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/640997.jpg?k=abb891ea80e29e4cec19d75909c6e5b95ad419875f24e98ffe0efef56df67010&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/671737.jpg?k=55162c051613087e79819420e554c16f057de72d68ad002b154702c23a10979a&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/681839.jpg?k=171bef15800abb68fa42ce891c752e19a8836b5448476e68743bcc1c2a8f20f1&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/674848.jpg?k=43bedc332acfb71ce9bef581e66074a3ffdec42fe4ba25c27b97aa9ff13a32ff&o="]
    let card_values14 = ["Modena 22 things to do","Stavanger 6 things to do","Nice 32 things to do","Helsinki 22 things to do",]

    for(let i = 0 ; i < urls14.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls14[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd14')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values14[i].split(' ')
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

    let urls15 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203844.jpg?k=ac13b56ed122f9105ca861ba3045f55ed0f61c1d2732b382dcacf631f15e3166&o=","https://q-xx.bstatic.com/xdata/images/country/1680x560/85.jpg?k=b6ed58da55452ccf0c979cc0df75ce57c6dd985d58abcc6beb4efa2187b2b235&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/740873.jpg?k=d02ad03fe6e35d5443b218bdac26b7501f7c698a158a976a454368dacd67f4fd&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/350631.jpg?k=31b2463ac5df0ec4181d68cabbd35f1a1765c2b7f2bed44f51bde3b80b1722e9&o="]
    let card_values15 = ["Edinburgh 10 things to do","Girona 4 things to do","Koper 28 things to do","SanSebastian 14 things to do",]

    for(let i = 0 ; i < urls15.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls15[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd15')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values15[i].split(' ')
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

    let urls16 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204269.jpg?k=dda35f09d4db949aa6786bc25686bddd016cdd12a2603193e90df0d44a51a1ac&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/654667.jpg?k=38b7cadbc436ac8f1990d593aeea431bdca024ad7e19136de1a648a741efd1d2&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204347.jpg?k=2028e72e4ea4eb18da986b8a60fd841f65fe0575db5012d723233b4427939b4a&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/972064.jpg?k=39ff2ed8a135b1a557a19306fbc4cc4bd99943077a33ea6e7882717e1e755e32&o="]
    
    let card_values16 = ["London 43 things to do","Istanbul 40 things to do","Paris 40 things to do","Hamburg 11 things to do",]
    for(let i = 0 ; i < urls16.length ; i++){
       
            let div = document.createElement('div')
            let img = document.createElement('img') 
            img.src = urls16[i]
            img.setAttribute('id','images');
            div.setAttribute('class','img-hover-zoom');
            let details = document.getElementById('pd16');
            
            let header = document.createElement('header');
            header.setAttribute('class','card_header');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
    
            h3.setAttribute('class', 'card_title')
            
            p.setAttribute('class', 'card_subtitle')

            let input = card_values16[i].split(' ')
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
     

    let urls17 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/71365537.jpg?k=aab55a712d088602738a94f84e75bcf9954b5b6208343eef1e9f2f2a2a75b75e&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/619974.jpg?k=b6559eee3541cbeacc14fff159a46ca264a30730fb15513890df598efb61081c&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203988.jpg?k=28ea5ce3cfe20aa8732059ec8cadede64c0964848fc0f436594ba04c4939d0d9&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971378.jpg?k=7507de5787351052371d9e50901685a0092dc34bab445d780b5a2a550cc5f3e0&o="]  ;

    let card_values17 = ["Amsterdam 56 things to do","Lisbon 51 things to do","Rome 122 things to do","Athens 22 things to do",]
    
    for(let i = 0 ; i < urls17.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls17[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd17')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values17[i].split(' ')
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
    let urls18 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72204120.jpg?k=111c39b79aac9a364b9a993a86890d94abdb83916c15422c95151fa8b2391273&o=","https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203920.jpg?k=3ac5c879aed7f63f8cdd5cff59e76ff9c4335c86b783aa6a32e2d3ecdc6a7fe9&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/626995.jpg?k=087d41cf908392f99bd914423fa81ee1ff0e3e88e18ff17a34521c805c82870b&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/645589.jpg?k=966c120cc17cdf382b41d151722a0e59d1714702388eb581601dd9593fe5d342&o="]
    let card_values18 = ["Berlin 31 things to do","Barcelona 89 things to do","Venice 12 things to do","Malaga 14 things to do",]

    for(let i = 0 ; i < urls18.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls18[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd18')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values18[i].split(' ')
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
    let urls19 = ["https://q-xx.bstatic.com/xdata/images/xphoto/720x405/72203757.jpg?k=9bf4f4950e983ccc08599179cfd5b00ca5f0f0926c31791b6fdcaf5c98b157da&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971987.jpg?k=c736a27ad6f01169148fe12d17f05cebf5a243860f9ab9380c246128a2c4e363&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/685809.jpg?k=1118febd1a6bed4b02742c8b4d8530a83d4ed8decd8dcde4cb035e2a3e017a93&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/971357.jpg?k=561ae098e12302581c5aac611ecba9def5cd9bcc78bfc9107b8ce2b531be815c&o="]
    let card_values19 = ["Vienna 21 things to do","Porto 21 things to do","Stockholm 15 things to do","Madrid 49 things to do",]

    for(let i = 0 ; i < urls19.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls19[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd19')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values19[i].split(' ')
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
    let urls20 = ["https://q-xx.bstatic.com/xdata/images/city/720x405/685101.jpg?k=eb80793d434f68f0c0452ccb5f209f07a0c85c08f4eb34c4cd902bd778cbe032&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/645977.jpg?k=1ac5843d13fef9ab4cf21023e44bfde605ae2f0b300ef224b8e6450add37facf&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/652936.jpg?k=0b538b33c5e820da97199de6190c3f4d2aa56dcb7c0861777a563ab8efdb14e7&o=","https://q-xx.bstatic.com/xdata/images/city/720x405/641107.jpg?k=3dd2586188d5ec6709d3b7c13ef93a08a5c79b966ab450b0355360b585199d8c&o="]
    let card_values20 = ["Armacaodepera 34 things to do","Seville 47 things to do","Krackow 33 things to do","Naples 46 things to do",]

    for(let i = 0 ; i < urls20.length ; i++){
        let div = document.createElement('div')
        let img = document.createElement('img') 
        img.src = urls20[i]
        img.setAttribute('id','images')
        div.setAttribute('class','img-hover-zoom')
        let details = document.getElementById('pd20')
        
        let header = document.createElement('header');
        header.setAttribute('class','card_header');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        h3.setAttribute('class', 'card_title')
        
        p.setAttribute('class', 'card_subtitle')

        let input = card_values20[i].split(' ')
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






