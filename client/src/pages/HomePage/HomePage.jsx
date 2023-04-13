import { Spinner } from 'phosphor-react'
import CourseFilter from '../../components/CourseFilter'
import CourseList from '../../components/CourseList'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import useCourseList from '../../hooks/useCourseList'
import emptyState from '../../assets/empty.svg'
import './HomePage.css'
import { useUserIsAdmin } from '../../hooks/useUserInfo'

function HomePage () {
  const { courses, error, isLoading, fetchData } = useCourseList()
  const userIsAdin = useUserIsAdmin()

  return (
    <div className="homePageContainer">
      <div className="listHeader">
        <CourseFilter onFilter={fetchData} />
        {userIsAdin && (
          <Button variant={BUTTON_VARIANT.SECONDARY}>Cadastrar Curso</Button>
        )}
      </div>

      {isLoading && <Spinner width={100} />}

      {!isLoading && !!error && <p>{error}</p>}

      {!isLoading && !error && !!courses.length && (
        <CourseList list={courses} />
      )}

      {!isLoading && !error && !courses.length && (
        <img
          height={500}
          src={emptyState}
          alt="Imagem de nenhum item encontrado"
        />
      )}
    </div>
  )
}

export default HomePage
