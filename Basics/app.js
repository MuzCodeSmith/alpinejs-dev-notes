document.addEventListener('alpine:init',()=>{
    Alpine.data('dropdown',()=>({
        dshow:true,
        toggle(){
            this.dshow=!this.dshow;
        }
    }))
})