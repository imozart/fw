// ==UserScript==
// @name         Thanks Upload FW
// @description  UserScript para agradecer uploads na FW
// @include     /^http(s)?:\/\/(www\.)?filewarez\.tv/.*$/
// @copyright   2019, qwertydotcom
// @author       quertydotcom
// @version      0.1
// @license     MIT License
// @grant       unsafeWindow
// @grant       window.close
// @grant       GM_xmlhttpRequest
// @iconURL     data:image/png;base64,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
// @homepage    https://filewarez.tv/member.php?u=64422
// @contactURL  https://filewarez.tv/private.php?do=newpm&u=64422
// @supportURL  https://filewarez.tv/private.php?do=newpm&u=64422
// @connect     *
// @run-at      document-complet
// @noframes
// ==/UserScript==

(function() {
   'use strict';
  
   const uploadId = document.getElementById('qr_threadid').value;

   if (document.getElementById('thanks_button_container') !== null) {
      postador_thank_upload(uploadId);
	  bypasswindowclose();    
   } else {
      console.log('Esse upload já foi agradecido!');
   }   
  
   function bypasswindowclose() {
      function closeWindow() {
         setTimeout(function() {
            window.opener = null;
            window.open('', '_self', '');
            window.close();
            console.log('%c CLOSE', uploadId);
         }, 3000);
      }
      window.onload = closeWindow();
   }
})();
