function generate(e){var t=CHARS,n=FORMAT,r;return n[0]=t[(r=Math.random()*4294967296)&15],n[1]=t[(r>>>=4)&15],n[2]=t[(r>>>=4)&15],n[3]=t[(r>>>=4)&15],n[4]=t[(r>>>=4)&15],n[5]=t[(r>>>=4)&15],n[6]=t[(r>>>=4)&15],n[7]=t[(r>>>=4)&15],n[9]=t[(r=Math.random()*4294967296)&15],n[10]=t[(r>>>=4)&15],n[11]=t[(r>>>=4)&15],n[12]=t[(r>>>=4)&15],n[15]=t[(r>>>=4)&15],n[16]=t[(r>>>=4)&15],n[17]=t[(r>>>=4)&15],n[19]=t[(r=Math.random()*4294967296)&3|8],n[20]=t[(r>>>=4)&15],n[21]=t[(r>>>=4)&15],n[22]=t[(r>>>=4)&15],n[24]=t[(r>>>=4)&15],n[25]=t[(r>>>=4)&15],n[26]=t[(r>>>=4)&15],n[27]=t[(r>>>=4)&15],n[28]=t[(r=Math.random()*4294967296)&15],n[29]=t[(r>>>=4)&15],n[30]=t[(r>>>=4)&15],n[31]=t[(r>>>=4)&15],n[32]=t[(r>>>=4)&15],n[33]=t[(r>>>=4)&15],n[34]=t[(r>>>=4)&15],n[35]=t[(r>>>=4)&15],n.join("")}var CHARS="0123456789ABCDEF".split(""),FORMAT="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split(""),Uuid=exports.Uuid=Object.create(Object.prototype,{generate:{enumerable:!1,value:generate}});exports.generate=generate