export class BetterDocService{
  async getDoc(doc) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/conditions?user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      console.log(response);
      return jsonifiedResponse;
    } catch(error) {
      console.error("The doctor is NOT in.....: " + error.message);


    }
  }
}


// location=or-portland&skip=2&limit=10&
// https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&user_key=7d7db9d4cd59810a030c0672822fc084
// 7d7db9d4cd59810a030c0672822fc084
