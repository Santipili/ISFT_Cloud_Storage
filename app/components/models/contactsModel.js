class contactsModel
{
    constructor(viewReference)
    {
        this.view = viewReference;
    }

    async getUsersList(){
        let data = { };
        try {      
            let requestMetadata = {
                method: "POST",
                body:JSON.stringify(data),
              };
            let result = await fetch ("http://localhost:3000/user/getList", requestMetadata);    
            let jsonResult = await result.json();
            // alert(jsonResult.message); 
            return jsonResult;           
        } catch (error) {
            console.log("error");         
            alert(error);
        }

    }

    // async getCategories(){
        
    // }

    async saveUser(user){
        let data = {
            idUser : user.id,
            name : user.name, 
            surname: user.surname,
            nid: user.nid,
            email: user.email,
            phone: user.phone,
        }
        try {      
            let requestMetadata = {
                method: "POST",
                // headers: {
                //     'Content-Type': 'application/json', 
                //     'user-id': '18324405-0624-4520-99c4-968adb141d6b'
                // },
                body:JSON.stringify(data),
              };
            let result = await fetch ("http://localhost:3000/user/edit", requestMetadata);    
            let jsonResult = await result.json();
            // alert(jsonResult.message); 
            console.log(jsonResult);           
        } catch (error) {
            console.log("error");         
            alert(error);
        }
        
    }

    async deleteUser(userID){
        let data = {
            userID : userID,
        }
        try {      
            let requestMetadata = {
                method: "POST",
                // headers: {
                //     'Content-Type': 'application/json', 
                //     'user-id': '18324405-0624-4520-99c4-968adb141d6b'
                // },
                body:JSON.stringify(data),
              };
            let result = await fetch ("http://localhost:3000/user/delete", requestMetadata);    
            let jsonResult = await result.json();
            // alert(jsonResult.message); 
            console.log(jsonResult);           
        } catch (error) {
            console.log("error");         
            alert(error);
        }
        
    }
}

export {contactsModel};