import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiService } from '../../services/api'

const useUserRegister = () => {
  const [data, setData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const registerUser = async (user) => {
    setIsSubmitting(true)
    const response = await apiService.post('/users', user)
    setError(response.error)
    setData(response.data)
    setIsSubmitting(false)
    if (response.error) {
      alert(response.error)
      return
    } navigate('/login')
  }

  return {
    user: data,
    isSubmitting,
    error,
    registerUser
  }
}

export default useUserRegister
