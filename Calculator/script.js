var oldValue=0
function btClick(val){
    if(val=="+"){
        oldValue=document.getElementById("text-box").value
        document.getElementById("text-box").value=''
        float=1
    }
    else if(val=="-"){
        oldValue=document.getElementById("text-box").value
        document.getElementById("text-box").value=''
        float=2
    }
    else if(val=="*"){
        oldValue=document.getElementById("text-box").value
        document.getElementById("text-box").value=''
        float=3
    }
    else if(val=="/"){
        oldValue=document.getElementById("text-box").value
        document.getElementById("text-box").value=''
        float=4
    }else {
        document.getElementById("text-box").value+=val
    }
}

function ClearBtn(){
    document.getElementById("text-box").value=""
}
function equalClick(){
        console.log(float)
        console.log(oldValue)
        
        var newValue=document.getElementById("text-box").value
        if(float==1){
            var text=Number(newValue)+Number(oldValue)
        } if(float==2){
            var text=Number(newValue)-Number(oldValue)
        } if(float==3){
            var text=Number(newValue)*Number(oldValue)
        } if(float==4){
            var text=Number(newValue)/Number(oldValue)
        }
        document.getElementById("text-box").value=text
}