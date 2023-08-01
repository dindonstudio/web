import { useEffect } from "react";

const Usetracker = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      (function(ss, ex){
        window.ldfdr = window.ldfdr || function(){
          (ldfdr._q = ldfdr._q || []).push([].slice.call(arguments));
        };
        (function(d, s){
          var fs = d.getElementsByTagName(s)[0];
          function ce(src){
            var cs = d.createElement(s);
            cs.src = src;
            cs.async = 1;
            fs.parentNode.insertBefore(cs, fs);
          }
          ce('https://sc.lfeeder.com/lftracker_v1_' + ss + (ex ? '_' + ex : '') + '.js');
        })(document, 'script');
      })('3P1w24djmWg8mY5n');
    `;
    
    document.body.appendChild(script);

    const hsScript = document.createElement("script");
    hsScript.type = "text/javascript";
    hsScript.id = "hs-script-loader";
    hsScript.async = true;
    hsScript.defer = true;
    hsScript.src = "//js-eu1.hs-scripts.com/26231736.js";
    
    document.body.appendChild(hsScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(hsScript);
    };
  }, []);

  return null;
};

export default Usetracker;
