import {useState, useEffect} from 'react';

export const useTitle = (str) => {
  const [title, setTitleChange] = useState(str);

  const titleChange = () => {
    const titleElement = document.querySelector("title");
    titleElement.innerText = title;
  };

  useEffect(titleChange, [title]);

  return setTitleChange;
};
