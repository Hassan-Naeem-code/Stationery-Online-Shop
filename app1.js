swal({
    title: "Are you sure you have complete your shopping?",
    text: "Before proceeding to the bill section you need to create an account here..!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("GOOD!Click on the user icon in the NavBar and SIGN UP for your account..!", {
        icon: "success",
      });
    } else {
      swal("Proceed with bill section by LOG IN to your RESPECTIVE account..!");
    }
  });