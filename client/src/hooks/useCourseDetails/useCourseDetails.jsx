import { useState, useEffect } from 'react';

import { apiService } from '../../services/api';
import CourseCard from '../../components/CourseCard/CourseCard';

const useCourseDetails = (id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if(!id){
      return;
    }
    setIsLoading(true);
    const response = await apiService.get(`/courses?id=${id}`);
    setError(response.error);
    setData(response.data?.[0]);
    setIsLoading(false);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    course: data,
    isLoading,
    error,
   };
};

export default useCourseDetails;