export default class SpeechRecognitionService {
  constructor() {
    
    if(this.isChrome()){
      this.recognition = new window.webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'pt-BR';
      this.recognition.maxAlternatives = 1;
    }
  }

  onResult = (callback) => {
    this.recognition.onresult = (event) => {
      if (!event.results) {
        return;
      }
      const lastResult = event.results[event.results.length - 1];
      if (!lastResult.isFinal) {
        callback('...', false);
        return;
      }
      callback(lastResult[0].transcript, true);
    };
  }

  onEnd = (callback) => {
    this.recognition.onend = () => callback();
  }

  start = () => {
    this.recognition.start();
  }

  stop = () => {
    this.recognition.stop();
  }


  isChrome() {
    // Opera 8.0+
    // var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // // Firefox 1.0+
    // var isFirefox = typeof InstallTrigger !== 'undefined';

    // // Safari 3.0+ "[object HTMLElementConstructor]" 
    // var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // // Internet Explorer 6-11
    // var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // // Edge 20+
    // var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    // var isChrome = !!window.chrome && !!window.chrome.webstore;

    // // Blink engine detection
    // var isBlink = (isChrome || isOpera) && !!window.CSS;

    return !!window.chrome && !!window.chrome.webstore;
  }

}