function a(){var b=window.location.href,c=b.split("?");switch(c.length){case 1:return b+"?m=1";case 2:return 0<=c[1].search("(^|&)m=")?null:b+"&m=1";default:return null}}var d=navigator.userAgent;if(-1!=d.indexOf("Mobile")&&-1!=d.indexOf("WebKit")&&-1==d.indexOf("iPad")||-1!=d.indexOf("Opera Mini")||-1!=d.indexOf("IEMobile")){var e=a();e&&window.location.replace(e)};

