
// 将把两个字符串用一个字符串合起,中间用空格隔开
function classes(...names:(string|undefined)[]){
    return names.filter(Boolean).join(' ')
}
export default  classes