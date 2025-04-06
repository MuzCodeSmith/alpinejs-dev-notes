document.addEventListener('alpine:init',()=>{
    Alpine.data('dropdown',()=>({
        dshow:true,
        toggle(){
            this.dshow=!this.dshow;
        }
    }));

    Alpine.store('creds',{
        secret:'jhon82',
        key:'jhon@test.com',
    })
})