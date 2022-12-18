<html>
<meta charset='UTF-8'/><meta content='width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5' name='viewport'/><meta content='IE=edge' http-equiv='X-UA-Compatible'/><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"><script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.all.min.js"></script><link href="https://foryou.likeadream.repl.co/style.css" rel="stylesheet" type="text/css" /><script src="https://foryou.likeadream.repl.co/script.js"></script>
<head>
<!-- 
This code was made by Rayya R!
Blog: https://sinkronin.com
Instagram: @rayyarrr
TikTok: @rayyarr_
Telegram: @rayyarr
WhatsApp: 6282130626142
-->
</head>
<body>
<!-- Ganti Wallpaper --><style>
body{background-image: url("https://i.postimg.cc/W1ZVKCFy/IMG-20211108-214640-213.jpg");background-repeat: no-repeat;background-size: 100% 100% 100%;}
</style>

<div id="konten">

<input class='chatMenu hidden' id='offchatMenu' type='checkbox' />
<div class='chatBox'>
  <div id='data' class='chatContent'>
    
    <div class='chatText'>
      <span id='text1'>Aku di sini</span>
      <span id='text2'>Kan selalu menunggumu</span>
      <span id='text3'>Sampai kapanpun</span>
      <span id='text4'>Ku kan menunggumu</span>
      <span id ='typingsk' class='typing'>Sukaa &#9829; &#9829; &#9829;</span>
      <span id ='typingg' class='typing'>Engga suka :(</span>
    </div>
  </div>
  
  <a id="blscht" class='balasChat' onclick='bukaWa()'>
    <span>Balas pesan...</span>        
  </a>
</div>

<div id="bodyblur">
<div id="foto"><img src="https://cahyacc.github.io/media/IMG_20220829_144928_956.webp" width="100px" height="100px"/></div>
<div id="teksblur"><span>Ku sangat menyayanginya</span></div>
</div>

<script type="text/javascript">
//Opsi WhatsApp
 function bukaWa(){window.location = 
"https://api.whatsapp.com/send?phone=6281238996370&text=Hei, Aku udah liat semuanya ><" + "%0A%0A" + window.suka + "%0A%0A" + "*" + "Dikirim:" + "*" + "%20" + dateTime;} 
            
function play() {
  //Link Audio Bisa Diganti
  var audio = new Audio('https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/6985212108493359899.mp3');
  audio.play();
}
            var today = new Date();var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+'.';var dateTime = date;
            const swals = Swal.mixin({
                allowOutsideClick: false,
            });
            async function mulai(){              
                    await swals.fire('Hai kamu :)');
                    await swals.fire('Lihat ini sampai akhir ya :)');                   
                    setTimeout(teks0,1200);setTimeout(check,9000);setTimeout(teks1,9000);play()
                }
            async function pertanyaan(){
                var { isConfirmed: suka } = await swals.fire({
                        title: `Kamu suka engga nih :(`,
                        confirmButtonText: 'Sukaaa',
                        cancelButtonText: 'G',
                        allowOutsideClick: false,
                        showCancelButton: true,
                });
                if(suka){
                    window.suka = "Aku terharu ><"
                    document.getElementById('typingsk').style.display = "inline-block";document.getElementById('typingsk').style.opacity = "1";
                    scroll()
                } else {
                    window.suka = "Aku engga suka :("
                    document.getElementById('typingg').style.display = "inline-block";document.getElementById('typingg').style.opacity = "1";
                    scroll()
                }
                await swals.fire('Okee. Nanti klik balas pesan ya :)');
                document.getElementById('blscht').style.display = "flex";
            }
//Mulai
mulai()
</script>
</body>
</html>