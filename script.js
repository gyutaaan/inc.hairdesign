<script type="text/javascript">
   var imglist = new Array(
      "images/01.png",
      "images/02.png",
      "images/03.png",
      "images/04.png",
      "images/05.png",
      "images/06.png",
      "images/07.png",
      "images/08.png",
      "images/09.png",
      "images/10.png",
      "images/11.png",
      "images/12.png",
      "images/13.png",
      "images/14.png",
      "images/15.png",
      "images/16.png" );
   var selectnum = Math.floor(Math.random() * imglist.length);
   var output = "<img src=" + imglist[selectnum] + ">";
   document.write(output);
</script>