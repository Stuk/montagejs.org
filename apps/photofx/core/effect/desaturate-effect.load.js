montageDefine("a005228","core/effect/desaturate-effect",{dependencies:["montage","core/effect/effect"],factory:function(e,t,n){var r=e("montage").Montage,i=e("core/effect/effect").Effect;t.DesaturateEffect=r.create(i,{applyEffect:{value:function(e,t){var n=0,r;for(n=0;n<t;n+=4)r=(e[n]+e[n+1]+e[n+2])/3,e[n]=r,e[n+1]=r,e[n+2]=r}}})}})