// 简单的css加载器 实现按需加载css

define(function(){
   var cssLoader = {}; 
   var loadedMap={} //读取过的map 记录是否load过资源
   var loadingMap = {} //正在读取的map 是否正在读
   var link;
   var linkMap={};//加载完毕的css dom map
   var headDom;

   function getCss(href,key){
        link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = href;
        headDom.appendChild(link)
        link.onload = function(){
            loadedMap[key]=href;
            linkMap[key] = link;
        }
   }
   function removeCss(key){
         linkMap[key].parentNode.removeChild(linkMap[key]);
         delete linkMap[key];
         delete loadedMap[key];
   }
   //加载css
   cssLoader.load=function(map) {
        headDom=document.getElementsByTagName('head')[0]
        loadingMap=map
        for(var key in loadingMap){
           if(loadedMap[key]){
             delete loadingMap[key]
           }else{
             getCss(loadingMap[key],key)
           }
        }
   }; 
    //卸载css
   cssLoader.unload=function(map){
    headDom=document.getElementsByTagName('head')[0]
        loadingMap=map
        for(var key in loadingMap){
           if(linkMap[key]){
             removeCss(key)
           }
        }
   }


   return cssLoader
}) 