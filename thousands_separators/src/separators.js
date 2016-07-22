'use strict';
function thousands_separators(num) {
	var r1=/^[0]*$/; 	
	let array,str='';	
	//var r2=/000/g;
	num=num.toString();
	var index=num.indexOf('.');
	if(index==-1)
		str=dou(num);
	else
		{
			array=num.split('.');
		 	str+=dou(array[0]);	
			if(!r1.test(array[1]))
			 str=str+'.'+array[1];
		}
	return str;						
	function dou(number)
	{
		var str1='',estr='';
				while(number.length>3)
				{
					if(number.substr(number.length-3,3)==='000')
						{
							str1=str1+','+'000';
							number=number.substr(0,number.length-3);
						}
				}
				return number+str1;            			
	}
}

 module.exports = thousands_separators;
