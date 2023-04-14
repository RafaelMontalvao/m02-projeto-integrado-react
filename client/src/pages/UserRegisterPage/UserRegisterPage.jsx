import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Card from '../../components/Card'
import InputGroup from '../../components/InputGroup'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import useUserRegister from '../../hooks/useUserRegister'
import './UserRegisterPage.css'

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório')
})

function UserRegisterPage () {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const { isSubmitting, registerUser } = useUserRegister()

  const onSubmit = (data) => {
    registerUser(data)
  }

  return (
    <div className="register-page-container">
      <section className="register-page-section">
        <Card>
          <div className="register-page-section-card">
            <h1 className="register-page-section-title">Cadastrar Usuario</h1>

            <form
              className="register-page-section-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="register-page-section-form-row">
                <div className="register-page-section-form-column">
                  <InputGroup
                    labelText="Nome"
                    placeholder="Nome"
                    helperText={errors?.name?.message}
                    {...register('name')}
                  />
                  <InputGroup
                    labelText="E-mail"
                    placeholder="E-Mails"
                    helperText={errors?.duration?.message}
                    {...register('email')}
                  />
                  <InputGroup
                    labelText="Senha"
                    placeholder="Senha"
                    helperText={errors?.description?.message}
                    {...register('password')}
                  />
                </div>
                </div>
                <div className="register-page-section-form-footer">
                <div>
                  <Button type="submit" disabled={isSubmitting}>
                    Cadastrar
                  </Button>
                </div>
                <div>
                  <Button
                    type="button"
                    variant={BUTTON_VARIANT.PRIMARY_LINK}
                    onClick={() => navigate('/')}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </div>
  )
}

export default UserRegisterPage
