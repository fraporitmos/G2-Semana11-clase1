function getDataPromise() {
    fetch("https://6732a96d2a1b1a4ae1108f3f.mockapi.io/singer")
      .then((resp) => {
        if (resp.status === 200) {
          return resp.json();
        } else {
          console.log("No se encontro datos en la url");
        }
      })
      .then((data) => {
        console.log(data);
      });
  }

getDataPromise()