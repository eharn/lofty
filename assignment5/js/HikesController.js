import HikeModel from './/Hikemodel.js'; // import our model, has the name and object list
import HikesView from './/HikesView.js'; // import our view which is what we want to put out on the page (UI)

// Just like with the view we should organize the functions we need to our controller. Let's use a class for this one
//exporting Hikescontroller
export default class HikesController {
  // a class needs a constructor to give class it's features
  constructor(parentId) {
    this.parentElement = document.getElementById(parentId); // calls the parent property that gets the parent element's id
    this.hikeModel = new HikeModel(); //gets our names and info about hikes from the model
    this.hikesView = new HikesView(parentId); //get our UI needs for the output
  }
  showHikeList() {
    // the list of hikes will come from the model now...
    const hikeList = this.hikeModel.getAllHikes(); //just translating hikeList from model into variable
    // send the list of hikes and the element we would like those placed into to the view.
    this.hikesView.renderHikeList(this.parentElement, hikeList); //like an append and adds parentElement call and item it matches with in hikeList
    // after the hikes have been rendered...add our listener
    this.addHikeListener();// add listener to individual object.
  }

  showOneHike(hikeName) {
    const hike = this.hikeModel.getHikeByName(hikeName);//grabbing one specific name from filter from hikemodel
    this.hikesView.renderOneHikeFull(    //hike light is default showing, listeners used to replace with full hike from view
      this.parentElement,
      hike
    ).ontouchend = () => {
      this.showHikeList();
    };
  }
  // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
  //because if we built it first then it only shows for a moment instead of adopting the pacement
  //build before it an listen
  addHikeListener() {
    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    const childrenArray = Array.from(this.parentElement.children);//grab each object we built and create and array so we can loop through
    childrenArray.forEach(child => {                                //each single element
      child.addEventListener('touchend', e => {
        // why currentTarget instead of target?
        this.showOneHike(e.currentTarget.dataset.name);  //light is the default but if it gets touched, show the full hike set instead of the current target which is light.
      });
    });
  }
}