const boton = document.querySelector("btn-alert")

boton.addEventListener("click", () => {

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })







}

)