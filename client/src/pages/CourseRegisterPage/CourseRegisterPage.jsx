import Card from '../../components/Card'
import './CourseRegisterPage.css'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import InputGroup from '../../components/InputGroup'

function CourseRegister () {
  return (
    <div className="register-page-container">
      <section className="register-page-section">
        <Card>
          <div className="register-page-section-card">
            <h1 className="register-page-section-title"> Cadastrar Curso</h1>
            <form className="register-page-section-form">
              <div className='register-page-section-form-row'>
              <div className="register-page-section-form-column">
                <InputGroup labelText="Nome*" placeholder="Nome do Curso" />
                <InputGroup labelText="Duração" placeholder="Duração do Curso" />
                <InputGroup labelText="Descrição" placeholder="Descrição do Curso"/>
              </div>
              <div className="register-page-section-form-column">
              <InputGroup labelText="Url ícone" placeholder="Url Contendo Icone" />
                <InputGroup labelText="Categoria" placeholder="Categoria do Curso" />
                <InputGroup labelText="Publico alvo" placeholder="Publico Alvo do Curso"/>
              </div></div>
              <div className='register-page-section-form-group'>
                <InputGroup labelText="Conteudo" placeholder="Coteudo do Curso"/>
                <div>
                <Button variant={BUTTON_VARIANT.SECONDARY_OUTLINED}>Adicionar</Button>
                </div>
                </div>
                <div className='register-page-section-form-footer'>
                  <div>
                  <Button>Cadastrar</Button>
                  </div>
                  <Button variant={BUTTON_VARIANT.PRIMARY_LINK} >Cancelar</Button>

                </div>
            </form>
          </div>
        </Card>
      </section>
    </div>
  )
}
export default CourseRegister
