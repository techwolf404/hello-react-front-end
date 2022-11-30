import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../redux/message/messageSlice';

export const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  return (
    <div>

      <h1>
        {message}
      </h1>
    </div>
  );
};

export default Message;
