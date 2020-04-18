import { UPDATE_RESUME_DATA } from './types';

export const updateResumeData = (data) => {
    console.log('data is',data)
    return {
      type: UPDATE_RESUME_DATA,
      payload: data
    };
  };