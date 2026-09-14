import{r as o}from"./index-Dgd5JIRa.js";function n(e,t=300){const[r,u]=o.useState(e);return o.useEffect(()=>{const s=setTimeout(()=>{u(e)},t);return()=>{clearTimeout(s)}},[e,t]),r}export{n as u};
