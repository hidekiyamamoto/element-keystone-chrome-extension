window.KS={current:false,vdragging:false,
	startKS:function(elm){var p=elm.parentNode;var s='position:absolute;';elm.className=(elm.className||'')+' currentKST';
		KS.vdragging=[-26,-26,elm.offsetWidth,-26,elm.offsetWidth,elm.offsetHeight,-26,elm.offsetHeight];
		s=s+'top:'+elm.offsetTop+'px;';s=s+'left:'+elm.offsetLeft+'px;';
		s=s+'width:'+elm.offsetWidth+'px;';s=s+'height:'+elm.offsetHeight+'px;';
		var x=it3.ins(p,'div',['class','currentKSP','style',s],false,elm);
		elm=p.removeChild(elm);x.appendChild(elm);setTimeout(KS._startKS,50);},
	_startKS:function(){var x=document.querySelector('.currentKSP');var vdata=KS.vdragging;
		it3.ins(x,'div',['class','KSvertex','name','1','draggable','true','onmousedown','KS.vdrag(event)','style','left:'+vdata[0]+'px;top:'+vdata[1]+'px;position:absolute;width:20px;height:20px;z-index:5;background-color:transparent;border:3px solid #000;opacity:0.7;cursor:move;']);
		it3.ins(x,'div',['class','KSvertex','name','2','draggable','true','onmousedown','KS.vdrag(event)','style','left:'+vdata[2]+'px;top:'+vdata[3]+'px;position:absolute;width:20px;height:20px;z-index:5;background-color:transparent;border:3px solid #000;opacity:0.7;cursor:move;']);
		it3.ins(x,'div',['class','KSvertex','name','3','draggable','true','onmousedown','KS.vdrag(event)','style','left:'+vdata[4]+'px;top:'+vdata[5]+'px;position:absolute;width:20px;height:20px;z-index:5;background-color:transparent;border:3px solid #000;opacity:0.7;cursor:move;']);
		it3.ins(x,'div',['class','KSvertex','name','4','draggable','true','onmousedown','KS.vdrag(event)','style','left:'+vdata[6]+'px;top:'+vdata[7]+'px;position:absolute;width:20px;height:20px;z-index:5;background-color:transparent;border:3px solid #000;opacity:0.7;cursor:move;']);
		var x=document.querySelector('.currentKST');x.style.top='0px';x.style.left='0px';x.style.width=vdata[2]+'px';x.style.height=vdata[5]+'px';x.style.marginTop='0px';x.style.marginLeft='0px';KS.vdragging=false;},
	endKS:function(){var ee=document.querySelectorAll('.KSvertex');for(var z=0;z<ee.length;z++){ee[z].parentNode.removeChild(ee[z]);}KS.vdragging=false;},
	vdrag:function(event){var s=event.srcElement;var p=s.parentNode;var i=p.querySelector('.currentKST');KS.vdragging={e:s,pp:p,oTop:parseInt(s.style.top.replace('px','')),oLeft:parseInt(s.style.left.replace('px','')),sTop:event.screenY,sLeft:event.screenX,
		topdiff:i.offsetHeight-i.parentNode.offsetHeight};window.addEventListener('mousemove',KS.v_and_);window.addEventListener('mouseup',KS.vdrop);},
	v_and_:function(event){event.preventDefault();KS.vdragging.e.style.top=(KS.vdragging.oTop+(event.screenY-KS.vdragging.sTop))+'px';KS.vdragging.e.style.left=(KS.vdragging.oLeft+(event.screenX-KS.vdragging.sLeft))+'px';KS._vupdate();},
	vdrop:function(event){window.removeEventListener('mousemove',KS.v_and_);window.removeEventListener('mouseup',KS.vdrop);KS._vupdate();KS.vdragging=false;},
	_vupdate:function(){var vvv=[];var vv=document.querySelectorAll('.KSvertex');var $image=$('.currentKST');	
		vvv[0]=vv[0].style.left;vvv[1]=vv[0].style.top;vvv[2]=vv[1].style.left;vvv[3]=vv[1].style.top;vvv[4]=vv[2].style.left;vvv[5]=vv[2].style.top;vvv[6]=vv[3].style.left;vvv[7]=vv[3].style.top;
		$image.get(0).setAttribute('vert-data',vvv.join('#'));
		var distort=new Distort({$el:$image});
		vvv[0]=parseInt(vvv[0].replace('px',''))+26;vvv[1]=parseInt(vvv[1].replace('px',''))+26;
		vvv[2]=parseInt(vvv[2].replace('px',''))-KS.vdragging.pp.offsetWidth;vvv[3]=parseInt(vvv[3].replace('px',''))+26;	
		vvv[4]=parseInt(vvv[4].replace('px',''))-KS.vdragging.pp.offsetWidth;vvv[5]=parseInt(vvv[5].replace('px',''))-KS.vdragging.pp.offsetHeight-KS.vdragging.topdiff;	
		vvv[6]=parseInt(vvv[6].replace('px',''))+26;vvv[7]=parseInt(vvv[7].replace('px',''))-KS.vdragging.pp.offsetHeight-KS.vdragging.topdiff;
		distort.topLeft.x+=vvv[0];distort.topLeft.y+=vvv[1];
		distort.topRight.x+=vvv[2];distort.topRight.y+=vvv[3];
		distort.bottomRight.x+=vvv[4];distort.bottomRight.y+=vvv[5];
		distort.bottomLeft.x+=vvv[6];distort.bottomLeft.y+=vvv[7];
		$image.css({'transform':distort.toString()});}
};
window.impjs=function(u){
	var s=document.createElement('script');s.setAttribute('src',u);s.setAttribute('type','text/javascript');
	document.getElementsByTagName('head')[0].appendChild(s);
};
if (typeof jQuery == 'undefined') {impjs('https://code.jquery.com/jquery-1.11.1.min.js');}
impjs('https://cdn.rawgit.com/metaschema/it3/26fdaf47/it3.js');
impjs('https://cdn.rawgit.com/hidekiyamamoto/element-keystone-chrome-extension/distort.min.js');
