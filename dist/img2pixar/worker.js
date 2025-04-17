globalThis.toolPath=self.location.href.substring(0,self.location.href.lastIndexOf("/"));importScripts("converter.js");var a=new OffscreenCanvas(1,1);self.addEventListener("message",e=>{globalThis.img2pixar(a,e.data).then(s=>postMessage({imageData:s}))});
//# sourceMappingURL=worker.js.map
