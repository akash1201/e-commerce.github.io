let link=new Array();
let i=0;

link[0]="./images/banners/banner.jpg";
link[1]="./images/banners/banner.jpg";
link[2]="./images/banners/banner.jpg";
link[3]="./images/banners/banner.jpg";

let ssid=setInterval(fun1,5000);

function fun1(){
   
    if(i<3){
        
        document.getElementById('banner-img').src=link[i];
        
        ++i;

    }
    else{
        document.getElementById('banner-img').src=link[i];
       
        i=0;
    }
 


}

function chngImg(v){
  
   
 
    if(v>0){
             
        if(i<3){
            ++i;
            document.getElementById('banner-img').src=link[i];
           
        }
        else{
            i=0;
            document.getElementById('banner-img').src=link[i];
           
        }

    }

    else{
          
        if(i==0){

           i=3;
           document.getElementById('banner-img').src=link[i];
           

        }

     else{
         --i;
         document.getElementById('banner-img').src=link[i];
         
     }
    }
   
 

}

function hPreload(){


 setTimeout(fun1,1500);

}
function fun1(){
    document.getElementById("pre-load").style.display="none"; 
}


function closenav(){
  
    document.getElementById("res-nav-bar").style.display="none";



}

function opennav(){

    document.getElementById("res-nav-bar").style.display="unset";

}



function LoadImage(link){

    document.getElementById('main-display-image').src=link;

}