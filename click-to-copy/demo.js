window.onload = function(){
  //content to be copied
  var target = document.getElementById('target');
  var button = document.getElementsByTagName('button')[0];

  button.onclick = function(){
    copy(target);
  };

  function copy(target){
			var r = document.createRange();
			r.selectNodeContents(target);

			var sel = getSelection();
			sel.removeAllRanges();
			sel.addRange(r);

			document.execCommand('copy');

      //in case content of target is showed selected
			sel.removeAllRanges();
			r.detach();
			r = null;
			sel = null;
  }
};
