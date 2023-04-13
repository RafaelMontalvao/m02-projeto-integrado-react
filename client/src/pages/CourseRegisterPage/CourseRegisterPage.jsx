import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Card from '../../components/Card'
import './CourseRegisterPage.css'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import InputGroup from '../../components/InputGroup'

const schema = yup.object().shape({
  name: yup.string().required('Campo Obrigatorio'),
  imageUrl: yup.string().url('Deve ser uma URL').required('Campo Obrigatorio'),
  category: yup.string().required('Campo Obrigatorio'),
  description: yup.string().required('Campo Obrigatorio'),
  duration: yup.number('Deve ser um Numero').required('Campo Obrigatorio'),
  targetMarket: yup.string().required('Campo Obrigatorio')
})

function CourseRegisterPage () {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      imageUrl: '',
      category: '',
      description: '',
      duration: 60,
      targetMarket: ''
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="register-page-container">
      <section className="register-page-section">
        <Card>
          <div className="register-page-section-card">
            <h1 className="register-page-section-title"> Cadastrar Curso</h1>
            <form className="register-page-section-form" onSubmit={handleSubmit(onSubmit)}>
              <div className='register-page-section-form-row'>
              <div className="register-page-section-form-column">
                <InputGroup labelText="Nome*" placeholder="Nome do Curso" helperText={errors?.name?.message} {...register('name')}/>
                <InputGroup labelText="Duração*" placeholder="Duração do Curso" helperText={errors?.duration?.message} {...register('duration')}/>
                <InputGroup labelText="Descrição" placeholder="Descrição do Curso" helperText={errors?.description?.message}{...register('description')}/>
              </div>
              <div className="register-page-section-form-column">
                <InputGroup labelText="Url ícone" placeholder="Url Contendo Icone" helperText={errors?.imageUrl?.message}{...register('imageUrl')}/>
                <InputGroup labelText="Categoria" placeholder="Categoria do Curso" helperText={errors?.category?.message}{...register('category')} />
                <InputGroup labelText="Publico alvo" placeholder="Publico Alvo do Curso" helperText={errors?.targetMarket?.message}{...register('targetMarket')}/>
              </div></div>
              <div className='register-page-section-form-group'>
                <InputGroup labelText="Conteudo" placeholder="Coteudo do Curso" />
                <div>
                <Button variant={BUTTON_VARIANT.SECONDARY_OUTLINED}>Adicionar</Button>
                </div>
                </div>
                <div className='register-page-section-form-footer'>
                  <div>
                  <Button type= "submit" >Cadastrar</Button>
                  </div>
                  <Button type="button" variant={BUTTON_VARIANT.PRIMARY_LINK} >Cancelar</Button>

                </div>
            </form>
          </div>
        </Card>
      </section>
    </div>
  )
}
export default CourseRegisterPage
