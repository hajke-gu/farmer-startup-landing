import React from 'react';

const Form = ({}) => (
  <div className="container mx-auto flex text-left">  
        <form className="mx-auto bg-white rounded-lg px-5 py-2 mt-5">
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
        </form> 
      </div>
);

export default Form;