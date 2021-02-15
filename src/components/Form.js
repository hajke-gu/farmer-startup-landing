import React, { createElement } from 'react';
import emailjs from 'emailjs-com';

export default function Form(){
  
  function sendEmail(e){
    e.preventDefault();
    console.log(process.env.GATSBY_USER_ID);

    /*emailjs.sendForm(process.env.GATSBY_SERVICE_ID, 'interest_form', e.target, process.env.GATSBY_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    */
     var confirmation = document.getElementById("confirmation"); 
     confirmation.style.display = "block";
  }

  return(
    <div>
      <div id="interest-form" className="container mx-auto flex text-left">  
        <form className="mx-auto bg-white rounded-lg px-5 py-2 mt-5" onSubmit={sendEmail}>
          {/*<div className="mx-auto">
            <legend className="mx-auto font-medium text-gray-900">Features</legend>
          </div>
          */}
          <div>
            <input id="guides" name="guides" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            <label htmlFor="guides" className="px-4 font-medium text-gray-700">Guides</label>
          </div>
          <div>
            <input id="plot-sharing" name="plot-sharing" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            <label htmlFor="plot-sharing" className="px-4 font-medium text-gray-700">Cultivation plot sharing</label>
          </div>
          <div>
            <input id="buy-sell" name="buy-sell" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            <label htmlFor="buy-sell" className="px-4 font-medium text-gray-700">Buy and sell plants</label>
          </div>
          <p className="mt-8">
            <button type="submit" className="bg-primary hover:bg-primary-darker rounded text-white py-5 px-16 text-lg">Register your interest</button>
          </p>
        </form> 
        <p id="confirmation" className="hidden">Interest registered!</p>
      </div>
    </div>
  );
}