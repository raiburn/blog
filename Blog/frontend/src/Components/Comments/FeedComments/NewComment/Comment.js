import axios from "axios";


const createComment = async (Comment, argue) => {
    let d = new Date();
      d=(d.getFullYear() + "/" + (d.getMonth() +1) + "/" + d.getDate()+":"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
      const token = localStorage.getItem('token');
      if(Comment !== ""){
        try{
            await axios.post(`${window.location.protocol}//${window.location.hostname}:8000/api/comments/`+argue,{
                message: Comment,
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
export default createComment;