<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <link href="css/main.css" rel="stylesheet"/>
  <title>用户CTF terminal</title>
</head>
<body>
<div id="main">
    Last login: <?php 
    date_default_timezone_set('PRC');
    echo date('Y-m-d h:i:s a',time());?>
  <br/>
  <div class="logo3">[终端使用方法]</div> &nbsp;&nbsp;输入help  
  <br/>
  <div class="logo3">[相关命令介绍]</div> &nbsp;&nbsp;info 团队介绍  
  <br/>
   &nbsp;&nbsp;help 显示可用命令
  <br/>
  <a style="color: #2ecc71">Dear new ctfers, welcome to 用户ctf final. If you have a strong interest in the field of<br/>
  cyber security, or want to become a CTF contestant on a TV show, take the first step
  <br/>
  here.<br/>The moment when autumn leaves fall, is also when we meet, we look forward to your<br/>
  joining!<br/>
  <br/>
  亲爱的new ctfers，欢迎参加用户ctf final。如果你对网络安全领域有着浓厚的兴趣，亦或
  <br/>
  是想成为电视剧中的CTF选手，那么就从这里迈出第一步。
  <br/>
  秋叶飘落的那一刻，亦是我们相遇的时候，我们期待你的加入！
  <br/></a>
  <br/>
 Input command:<font size="30">↓</font>
  <br/>
</div>
<span class="prefix">[<span id='usr'>CTF</span>@<span class="host">用户</span> <span id="pos">~</span>]% </span>
<input type="text" class="input-text" autofocus="autofocus">
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>