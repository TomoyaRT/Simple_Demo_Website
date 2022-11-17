import ReactPlayer from "react-player";

import Tilt from "react-parallax-tilt";

function Card() {
  return (
    <Tilt>
      <div className="w-[300px] h-[400px] rounded bg-gray-100 p-5 rounded-lg text-white dark:bg-gray-900">
        <ReactPlayer
          height="150px"
          width="260px"
          url="https://www.youtube.com/watch?v=E2tBacLHQB8"
        />
        <div className="px-3 py-2">
          <div className="text-gray-800 dark:text-gray-200 font-bold text-xl">
            Title
          </div>
          <p className="text-gray-800 dark:text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus
          </p>
        </div>
        <div className="px-3">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </Tilt>
  );
}

export default Card;
