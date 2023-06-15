function firstChar(text) {
  // your code here
	var s = "";
	for(var i = 0;i<text.length;i++) {
		if(text.charAt(i)!=' ') {
			s += text.charAt(i);
			break;
		}
	}
	return s;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
