<script>
// Функция очистки тегов от скопированного откуда-либо текста:
         function remove_tags_from_word(html)
			 {
			    cleanText1 = html.replace(/style="[^"]*"/g, "");
                cleanText2 = cleanText1.replace(/class="[^"]*"/g, "");
                cleanText3 = cleanText2.replace(/<(?!p\s*\/?)(?!\/p\s*\/?)[^>]+>/g, "");
                cleanText4 = cleanText3.split("&nbsp;").join(' '); 
                cleanText5 = cleanText4.trim(); 
                return cleanText5; 
			 }
</script>
