import axios from "axios";

const createArgue = async (Name, Info) => {
    let d = new Date();
      d=(d.getFullYear() + "/" + (d.getMonth() +1) + "/" + d.getDate()+":"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
      const token = localStorage.getItem('token');
      if(Name !== "" && Info !== ""){
        try{
            await axios.post(`${window.location.protocol}//${window.location.hostname}:8000/api/groups/`,{
              name: Name,
              information: Info,
              rules: "1: No publicar contenido +18. 2: No utilizar terminos racistas ni homofobicos",
              create_at:d,
              user: token
              })
        }
        catch(error) {
          console.log(error);
        }
      }else{
        window.alert("No puedes dejar un tema en blanco");
      }
    }
export default createArgue;