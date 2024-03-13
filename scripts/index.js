class Activity{
    constructor(id, title, description, imgUrl){
        this.id= id;
        this.title= title;
        this.description= description;
        this.imgUrl= imgUrl;

    }
}

class Repository{
    constructor(){
        this.activities = [];
        this.id= 0; 
    }

    getAllActivities(){
        return this.activities;
    }

    createActivity(title, description, imgUrl){
        const id = this.id++;
        const activity = new Activity(id, title, description, imgUrl);
        this.activities.push(activity);        
    }

    deleteActivity(eliminarId){
        const id = eliminarId;
        const filterActivities = this.activities.filter((activities) => activities.id !== this.id);
    }
}