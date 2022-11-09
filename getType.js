export default function geType(data){
 return Object.prototype.toString.call(data).slice(8,-1)
}