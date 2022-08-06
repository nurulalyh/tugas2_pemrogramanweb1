function LOGIN(){
    var username = document.getElementById ("username").value;
    var password = document.getElementById ("password").value;

    if(username =="" && password==""){
        swal({
        title: "gagal!",
        text: "Username dan password tidak boleh kosong",
        icon: "error",});
    }
    else if(username==""){
        swal({
            title: "gagal!",
            text: "Username tidak boleh kosong",
            icon: "error",});
    }
    else if(password==""){
        swal({
            title: "gagal!",
            text: "password tidak boleh kosong",
            icon: "error",});
    }

    else{
        swal({
        title: "success",
        text: "Login Sukses!",
        icon: "success",})

    .then((lanjut)=> {
        if(lanjut){
            window.location.href='dashboard.html';
        }
    })
    }
}