montageDefine("e98bf51","demo/map-demo",{dependencies:["../map"],factory:function(e,t,n){var r=e("../map"),i=new r;i.set("a",10),i.set("b",20),console.log(i.keys());var i=new r,s={},o={},u={};i.set(s,10),i.set(o,20),i.set(u,30),console.log(i.get(o)),i.log(),i.forEach(function(e,t){console.log(t+": "+e)}),i.delete(s),console.log(i.values()),console.log("\nclone"),console.log(i.clone().items()),console.log((new r).items()),console.log((new r({a:10,b:20})).items()),console.log((new r(["a","b","c"])).items()),console.log((new r(new r({a:10,b:20}))).items()),console.log((new r({a:10,b:20})).concat({c:30,d:40}).toObject());var i=new r;i.set(10,"b"),i.set(0,"a"),console.log(i.toArray())}})