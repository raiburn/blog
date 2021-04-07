import axios from "axios";

const createArgue = async (Argue) => {
    let d = new Date();
      d=(d.getFullYear() + "/" + (d.getMonth() +1) + "/" + d.getDate());
      const token = localStorage.getItem('token');
      if(Argue !== ""){
        try{
            await axios.post(`${window.location.protocol}//${window.location.hostname}:8000/api/argues/`,{
                message: Argue,
                created_at: d,
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