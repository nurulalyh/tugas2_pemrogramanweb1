var nameError = document.getElementById('name-error');
var nimError = document.getElementById('nim-error');
var depanError = document.getElementById('depan-error');
var belakangError = document.getElementById('belakang-error');
var nikError = document.getElementById('nik-error');
var tempatError = document.getElementById('tempat-error');
var ayahError = document.getElementById('ayah-error');
var teleponError = document.getElementById('telepon-error');
var alamatError = document.getElementById('alamat-error');
var sekolahError = document.getElementById('sekolah-error');

function validateName () {
    var name = document.getElementById('name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    nameError.innerHTML = '';
}

function validateNIM () {
    var nim = document.getElementById('nim').value;

    if (nim.length == 0) {
        nimError.innerHTML = 'NIM is required';
        return false;
    }
    if (nim.length !== 9) {
        nimError.innerHTML = 'Phone number should be 9 character';
        return false;
    }
    nimError.innerHTML = '';
}

function validateDepan () {
    var depan = document.getElementById('depan').value;

    if (depan.length == 0) {
        depanError.innerHTML = 'First Name is required';
        return false;
    }
    depanError.innerHTML = '';
}

function validateBelakang () {
    var belakang = document.getElementById('belakang').value;

    if (belakang.length == 0) {
        belakangError.innerHTML = 'Last Name is required';
        return false;
    }
    belakangError.innerHTML = '';
}

function validateNIK () {
    var nik = document.getElementById('nik').value;

    if (nik.length == 0) {
        nikError.innerHTML = 'NIK is required';
        return false;
    }
    if (nik.length !== 16) {
        nikError.innerHTML = 'NIK should be 16 digits';
        return false;
    }
    nikError.innerHTML = '';
}

function validateTempat () {
    var tempat = document.getElementById('tempat').value;

    if (tempat.length == 0) {
        tempatError.innerHTML = 'Tempat Lahir is required';
        return false;
    }
    tempatError.innerHTML = '';
}

function validateAyah () {
    var ayah = document.getElementById('ayah').value;

    if (ayah.length == 0) {
        ayahError.innerHTML = 'Nama Ayah is required';
        return false;
    }
    ayahError.innerHTML = '';
}

function validateTelepon () {
    var telepon = document.getElementById('telepon').value;

    if (telepon.length == 0) {
        teleponError.innerHTML = 'Phone number is required';
        return false;
    }
    if (telepon.length !== 12) {
        teleponError.innerHTML = 'Phone number should be 12 digits';
        return false;
    }
    teleponError.innerHTML = '';
}

function validateAlamat () {
    var alamat = document.getElementById('alamat').value;

    if (alamat.length == 0) {
        alamatError.innerHTML = 'Alamat is required';
        return false;
    }
    alamatError.innerHTML = '';
}

function validateSekolah () {
    var sekolah = document.getElementById('sekolah').value;

    if (sekolah.length == 0) {
        sekolahError.innerHTML = 'Asal Sekolah is required';
        return false;
    }
    sekolahError.innerHTML = '';
}

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

  let submit = document.getElementById ("submit").addEventListener('click', function() {
    swal({
        title: "simpan?",
         text: "Apakah Data Anda Sudah Benar?",
        icon: "info",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
        if (willDelete) {
              swal("data anda sudah tersimpan", {
                icon: "success",
              }).then(function(){
                window.location.href = 'data_tabel.html'
              })
            } else {
              swal("silahkan ubah data anda");
            }
          });
    })

    let reset = document.getElementById ("reset").addEventListener('click', function() {
        swal({
            title: "Apakah Anda Yakin?",
            text: "Semua data yang anda masukkan akan terhapus",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                  swal("Berhasil di Hapus", {
                    icon: "success",
                  })
                }
            });
        })