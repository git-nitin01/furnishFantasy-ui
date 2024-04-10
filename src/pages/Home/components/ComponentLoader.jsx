import React from 'react';
import ImageLoader from '../../Products/components/ImageLoader';
import $ from 'jquery';

const Spinner = () => {
    $(() => {
      const $spinner = $('#load-spinner');
      $spinner.css({
        animation: "spinners 0.8s linear infinite",
        'animation-fill-mode': 'forwards'
      }) 
    });
    return (
      <div className="flex justify-center items-center">
        <span id="load-spinner" className="z-2 inline-block rounded-full h-28 w-28 border-4  border-b-0 border-l-0  border-gray-900">
        </span>
        <ImageLoader />
      </div>
    );
  }

export default Spinner;