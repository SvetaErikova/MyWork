<?php
$name = $_POST['name'];
$tel = $_POST['phone'];
if(mail('svetaerikova310@gmail.com','Testovoe pismo', "$name","$tel")){
	print "сообщение успешно отправлено";
	//<script> document.querySelector('.form__send').style.display = 'block'</script>
	}
	else{
	  print "при отправке сообщения возникли ошибки";
	}
?>