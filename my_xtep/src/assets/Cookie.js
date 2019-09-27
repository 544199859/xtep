/*用export把方法暴露出来*/
/*设置cookie*/
export function setCookie(c_name,value,expire) {
    var date=new Date()
    date.setSeconds(date.getSeconds()+expire)
    document.cookie=c_name+ "="+escape(value)+"; expires="+date.toGMTString()
    console.log(document.cookie)
}

/*获取cookie*/
export function getCookie(c_name){
    if (document.cookie.length>0){
        let c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1){ 
            c_start=c_start + c_name.length+1 
            let c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
                return unescape(document.cookie.substring(c_start,c_end))
            } 
        }
    return ""
}

/*删除cookie*/
export function delCookie(c_name){
    setCookie(c_name, "", -1)
}

/*
//设置cookie经过iDay天后过期
function setCookie(key,value,iDay){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+iDay);//用来设置过去时间
	document.cookie = key+'='+value+";expires="+oDate.toString();
}
//获取指定的key的cookie值
function getCookie(key){
	var arr = document.cookie.split(";");//获取当前域名的所有的cookie,以;分割成数组;
	for(var i=0;i<arr.length;i++){
		var arr2 = arr[i].split('=');
		if(arr2[0].trim()==key){
			return arr2[1];
		}
	}
	return '';//没有找到返回值
}
//删除指定key的cookie
function removeCookie(key){
	setCookie(key,1,-1);//-1就是告诉系统已经过期,系统就会立刻去删除他;
}
*/ 