function logout () {
    swal({
        title: "Anda Yakin Ingin Keluar?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Berhasil Log Out!", {
            icon: "success",
          });
          window.location.href='login.html';
        } 
      });
}