let p = document.getElementsByClassName('navbar')[0].children
// console.log(p);


setInterval(function(){
    const mediaQ = window.matchMedia('(max-width: 1150px)');
    
    if (mediaQ.matches){
        console.log("matched");
        document.getElementById('ex-nav').style.top = '-500px' 
        document.querySelector('.blurry').style.display = 'none'
    }
}, 2000)


function enter(event){
        let v = event.target.innerText
        // console.log(v);
        let v2
        if(typeof(v) == 'string'){
            v2 = v.toLowerCase()
        }
        else{
            leave()
        }

        // console.log(v2);

        const boxes = document.querySelectorAll('.ex-container');
        boxes.forEach(box => {
            box.style.display = 'none';
            document.getElementById('ex-nav').style.top = '-400px' 
        });
        
        
        if(v2 == 'mac' || v2 == 'store' || v2 == 'ipad' || v2 == 'iphone' || v2 == 'watch' || v2 == 'airpods' || v2 == 'tv & home' || v2 == 'entertainment' || v2 == 'accessories' || v2 == 'support'){
            document.getElementById('ex-nav').style.top = '0px'
            document.getElementById(v2).style.cssText = 'display:flex;'
            setTimeout(function(){
                document.querySelector('.blurry').style.display = 'block'
            },250)
            // console.log("YES");
        }
        else{
            // console.log("NO");
            document.getElementById('ex-nav').style.top = '-500px' 
            document.querySelector('.blurry').style.display = 'none'
        }

}

function handle(event){
    // console.log('handle');
    const ht = document.getElementById('ex-nav').clientHeight
    // console.log("ht", ht);
    
    let mouseY = event.clientY;
    // console.log(mouseY);
        
    if (mouseY > ht) {
        leave();
    }

}

function leave(){
    // console.log("Left");
    setTimeout(function(){
        document.getElementById('ex-nav').style.top = '-600px'
        document.querySelector('.blurry').style.display = 'none'
    }, 200)
}


function toggler(){
    console.log('clicked');
    let cl = document.querySelector('.toggler').getElementsByTagName('svg')[0].getAttribute('id')
    console.log(cl);
    
    if(cl == 'option'){
        document.querySelector('.toggler').innerHTML = '<svg style="transition: 0.5s ease" id="cancel" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>'
        document.querySelector('.nav-toggle').style.top = '40px'
    }else if(cl == 'cancel'){
        document.querySelector('.toggler').innerHTML = '<svg style="transition: 0.5s ease" id="option" stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>'
        document.querySelector('.nav-toggle').style.top = '-1000px'
    }

}



function showElement(id){
    console.log("Clicked", id);

    let links = document.getElementById(id).parentNode.children;

    let btn = document.getElementById(id).children[1].getElementsByTagName('svg')[0].id

    console.log("btn id:",btn);

    if(btn == 'plus'){
        document.getElementById(id).children[1].innerHTML = '<svg style="transition: 0.5s ease" id="cancel2" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>'

        for(let i=1; i<=links.length-1; i++){
         // console.log(links[i]);
         links[i].style.cssText = 'display:flex; top:0px; line-height:2; transition: .2s ease';
        }
    }
    else if(btn == 'cancel2'){
        document.getElementById(id).children[1].innerHTML = '<svg id="plus" stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pId="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pId="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pId="10299"></path></svg>'

        for(let i=1; i<=links.length-1; i++){
            links[i].style.cssText = 'top:-20px;'
        }
    }

}
